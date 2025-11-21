import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      formData,
      analysisResults,
      totalPrice,
      itemsCost,
      extrasCost,
      btw,
    } = body

    console.log('📧 Email verzenden gestart...')

    // Build furniture list from AI analysis
    const allFurniture: Record<string, { quantity: number; size: string; item: string }> = {}
    let totalBoxes = 0
    let highestVolumeLevel = 'empty'
    const volumeLevels = ['empty', 'sparse', 'half', 'full', 'very_full']

    analysisResults.forEach(({ analysis }: any) => {
      if (analysis.furniture) {
        analysis.furniture.forEach((f: any) => {
          const key = `${f.item}-${f.size}`
          if (!allFurniture[key]) {
            allFurniture[key] = { ...f }
          } else {
            allFurniture[key].quantity += f.quantity
          }
        })
      }
      if (analysis.estimatedBoxes) {
        totalBoxes += analysis.estimatedBoxes
      }
      if (analysis.volume_level) {
        const currentIndex = volumeLevels.indexOf(analysis.volume_level)
        const highestIndex = volumeLevels.indexOf(highestVolumeLevel)
        if (currentIndex > highestIndex) {
          highestVolumeLevel = analysis.volume_level
        }
      }
    })

    const furnitureList = Object.values(allFurniture)

    // Map volume level to Dutch
    const volumeLevelText = {
      'empty': 'Leegstaand',
      'sparse': 'Schaars ingericht',
      'half': 'Normaal bewoond',
      'full': 'Vol ingericht',
      'very_full': 'Overvol',
    }[highestVolumeLevel] || 'Normaal bewoond'

    // Build extra services list
    const extraServices = []
    if (formData.vloerVerwijderen && formData.vloerM2) {
      extraServices.push(`Vloer verwijderen: ${formData.vloerM2}m²`)
    }
    if (formData.behangVerwijderen && formData.behangM2) {
      extraServices.push(`Behang verwijderen: ${formData.behangM2}m²`)
    }
    if (formData.gaatjesToppen && formData.gaatjesM2) {
      extraServices.push(`Gaatjes stoppen: ${formData.gaatjesM2}m²`)
    }
    if (formData.schilderwerk && formData.schilderwerkM2) {
      extraServices.push(`Schilderwerk: ${formData.schilderwerkM2}m²`)
    }
    if (formData.gordijnenVerwijderen) {
      extraServices.push('Gordijnen verwijderen')
    }
    if (formData.inpakservice) {
      extraServices.push('Inpakservice - Spullen uit kasten/keuken halen')
    }

    // Create HTML email
    const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe Offerte Aanvraag</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Budget Ontruiming</h1>
              </div>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Uw Persoonlijke Offerte</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              
              <!-- Welcome Message -->
              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #92400e; font-weight: 600; font-size: 14px;">✅ Bedankt voor uw aanvraag! Hieronder vindt u uw offerte op basis van onze AI-analyse.</p>
              </div>

              <!-- Klantgegevens -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                👤 Klantgegevens
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 140px;">Naam:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Email:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${formData.email}" style="color: #f97316; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Telefoon:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">
                    <a href="tel:${formData.telefoon}" style="color: #f97316; text-decoration: none;">${formData.telefoon}</a>
                  </td>
                </tr>
              </table>

              <!-- Woninggegevens -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                🏠 Woninggegevens
              </h2>
              <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="color: #6b7280; font-size: 14px; width: 140px;">Postcode:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${formData.postcode}</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Woningtype:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${
                    formData.woningType === 'seniorenkamer' ? 'Seniorenkamer' :
                    formData.woningType === 'appartement' ? 'Appartement' :
                    formData.woningType === 'eengezinswoning' ? 'Eengezinswoning' :
                    formData.woningType === 'bedrijfspand' ? 'Bedrijfspand' : formData.woningType
                  }</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Vierkante Meter:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${formData.vierkanteMeter}m²</td>
                </tr>
                <tr>
                  <td style="color: #6b7280; font-size: 14px;">Verdieping:</td>
                  <td style="color: #1f2937; font-size: 14px; font-weight: 600;">${
                    formData.verdieping === 'begane-grond' ? 'Begane grond' :
                    formData.verdieping === '1e-verdieping' ? '1e verdieping' :
                    formData.verdieping === '2e-verdieping' ? '2e verdieping' :
                    formData.verdieping === '3e-of-hoger' ? '3e of hoger' : formData.verdieping
                  }${formData.liftAanwezig ? ' (Lift aanwezig)' : ''}</td>
                </tr>
              </table>

              <!-- Geüploade Foto's -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                📸 Geüploade Foto's (${analysisResults.length})
              </h2>
              <div style="margin-bottom: 24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    ${analysisResults.map((result: any, index: number) => `
                      ${index % 2 === 0 && index > 0 ? '</tr><tr>' : ''}
                      <td style="padding: 4px; width: 50%; vertical-align: top;">
                        <a href="${result.url}" target="_blank" style="display: block; text-decoration: none;">
                          <img 
                            src="${result.url}" 
                            alt="Foto ${index + 1}"
                            style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; border: 2px solid #e5e7eb; display: block;"
                          />
                          <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px; text-align: center;">Foto ${index + 1}</p>
                        </a>
                      </td>
                    `).join('')}
                  </tr>
                </table>
                <p style="color: #6b7280; font-size: 12px; font-style: italic; margin: 12px 0 0 0;">
                  💡 Klik op een foto om deze in volledig formaat te bekijken
                </p>
              </div>

              ${furnitureList.length > 0 ? `
              <!-- AI Analyse Resultaten -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                🤖 AI Analyse Resultaten
              </h2>
              <div style="background-color: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td colspan="2" style="color: #1f2937; font-weight: 600; font-size: 14px; padding-bottom: 8px;">Gedetecteerde Meubels:</td>
                  </tr>
                  ${furnitureList.map(f => `
                  <tr>
                    <td style="color: #4b5563; font-size: 14px;">• ${f.quantity}x ${f.item}</td>
                    <td style="color: #9ca3af; font-size: 12px; text-align: right;">(${f.size})</td>
                  </tr>
                  `).join('')}
                  <tr>
                    <td colspan="2" style="height: 16px;"></td>
                  </tr>
                  ${totalBoxes > 0 ? `
                  <tr>
                    <td style="color: #6b7280; font-size: 14px;">📦 Dozen/tassen (geschat):</td>
                    <td style="color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;">${totalBoxes}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #6b7280; font-size: 14px;">📊 Status inrichting:</td>
                    <td style="color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;">${volumeLevelText}</td>
                  </tr>
                </table>
              </div>
              ` : ''}

              ${extraServices.length > 0 ? `
              <!-- Extra Werkzaamheden -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                🛠️ Extra Werkzaamheden
              </h2>
              <ul style="margin: 0 0 24px 0; padding-left: 20px;">
                ${extraServices.map(service => `
                <li style="color: #4b5563; font-size: 14px; margin-bottom: 8px;">${service}</li>
                `).join('')}
              </ul>
              ` : ''}

              <!-- Prijsoverzicht -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                💰 Prijsoverzicht
              </h2>
              <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">Ontruiming:</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">€${itemsCost.toFixed(2)}</td>
                  </tr>
                  ${extrasCost > 0 ? `
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">Extra werkzaamheden:</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">€${extrasCost.toFixed(2)}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">BTW (21%):</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">€${btw.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border-top: 2px solid #f59e0b; padding-top: 12px;"></td>
                  </tr>
                  <tr>
                    <td style="color: #78350f; font-size: 18px; font-weight: bold;">Totaalprijs:</td>
                    <td style="color: #78350f; font-size: 18px; font-weight: bold; text-align: right;">€${totalPrice.toFixed(2)}</td>
                  </tr>
                </table>
              </div>

              <!-- Disclaimer -->
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; color: #1e40af; font-size: 13px; line-height: 1.5;">
                  ℹ️ <strong>Let op:</strong> Dit is een automatisch gegenereerde prijsindicatie op basis van AI-analyse. 
                  Voor een definitieve offerte plannen we graag een gratis adviesgesprek in.
                </p>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://calendly.com/tbvanreijn/30min" 
                   style="display: inline-block; background-color: #f97316; color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  📅 Plan Gratis Adviesgesprek
                </a>
              </div>

              <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 24px;">
                Vragen? Bel ons op <a href="tel:${formData.telefoon}" style="color: #f97316; text-decoration: none;">${formData.telefoon}</a> 
                of reply op deze email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
                <strong style="color: #1f2937;">Budget Ontruiming</strong>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Woningontruiming met laagste prijs garantie
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    // Send email to customer
    console.log('📧 Verzenden naar klant:', formData.email)
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Budget Ontruiming <onboarding@resend.dev>', // Tijdelijk Resend test domein
      to: [formData.email],
      replyTo: 'tbvanreijn@gmail.com',
      subject: `🏠 Uw Offerte van Budget Ontruiming - €${totalPrice.toFixed(2)}`,
      html: htmlEmail,
    })

    if (customerError) {
      console.error('❌ Klant email error:', customerError)
      // Don't return yet, try to send to business anyway
    } else {
      console.log('✅ Klant email verzonden!', customerData)
    }

    // Also send a copy to business owner
    console.log('📧 Verzenden naar bedrijf: tbvanreijn@gmail.com')
    const { data: businessData, error: businessError } = await resend.emails.send({
      from: 'Budget Ontruiming <onboarding@resend.dev>', // Tijdelijk Resend test domein
      to: ['tbvanreijn@gmail.com'],
      replyTo: formData.email, // You can reply directly to customer
      subject: `🔔 Nieuwe Offerte Aanvraag - ${formData.naam} - €${totalPrice.toFixed(2)}`,
      html: htmlEmail,
    })

    if (businessError) {
      console.error('❌ Bedrijf email error:', businessError)
    } else {
      console.log('✅ Bedrijf email verzonden!', businessData)
    }

    // Customer email is most important - fail if it didn't send
    if (customerError) {
      console.error('⚠️ KRITIEK: Klant email niet verzonden!')
      return NextResponse.json(
        { 
          error: 'Klant email kon niet worden verzonden', 
          details: { customerError, businessError },
          customerEmailSent: false,
          businessEmailSent: !businessError,
        },
        { status: 500 }
      )
    }

    // Success if at least customer email was sent
    return NextResponse.json({
      success: true,
      customerEmailSent: true,
      businessEmailSent: !businessError,
      customerMessageId: customerData?.id,
      businessMessageId: businessData?.id,
    })

  } catch (error: any) {
    console.error('❌ Send quote error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden', details: error.message },
      { status: 500 }
    )
  }
}

