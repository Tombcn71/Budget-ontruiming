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
    let highestVolumeLevel = 'sparse'
    const volumeLevels = ['sparse', 'half', 'full', 'very_full']

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
      'sparse': 'Minimaal bewoond',
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
                <p style="margin: 0; color: #92400e; font-weight: 600; font-size: 14px;">Bedankt voor uw aanvraag! Hieronder vindt u uw offerte op basis van onze AI-analyse.</p>
              </div>

              <!-- Klantgegevens -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                Klantgegevens
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
                Woninggegevens
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

              <!-- PHOTOS_SECTION_PLACEHOLDER -->

              ${furnitureList.length > 0 ? `
              <!-- AI Analyse Resultaten -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                AI Analyse Resultaten
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
                    <td style="color: #6b7280; font-size: 14px;">Dozen/tassen (geschat):</td>
                    <td style="color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;">${totalBoxes}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #6b7280; font-size: 14px;">Status inrichting:</td>
                    <td style="color: #1f2937; font-weight: 600; font-size: 14px; text-align: right;">${volumeLevelText}</td>
                  </tr>
                </table>
              </div>
              ` : ''}

              ${extraServices.length > 0 ? `
              <!-- Extra Werkzaamheden -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                Extra Werkzaamheden
              </h2>
              <ul style="margin: 0 0 24px 0; padding-left: 20px;">
                ${extraServices.map(service => `
                <li style="color: #4b5563; font-size: 14px; margin-bottom: 8px;">${service}</li>
                `).join('')}
              </ul>
              ` : ''}

              <!-- Prijsoverzicht -->
              <h2 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; padding-bottom: 8px; border-bottom: 2px solid #f97316;">
                Prijsoverzicht
              </h2>
              <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <table width="100%" cellpadding="8" cellspacing="0">
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">Ontruiming:</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${itemsCost.toFixed(2)}</td>
                  </tr>
                  ${extrasCost > 0 ? `
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">Extra werkzaamheden:</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${extrasCost.toFixed(2)}</td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="color: #92400e; font-size: 14px;">BTW (21%):</td>
                    <td style="color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${btw.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border-top: 2px solid #f59e0b; padding-top: 12px;"></td>
                  </tr>
                  <tr>
                    <td style="color: #78350f; font-size: 18px; font-weight: bold;">Totaalprijs:</td>
                    <td style="color: #78350f; font-size: 18px; font-weight: bold; text-align: right;">EUR ${totalPrice.toFixed(2)}</td>
                  </tr>
                </table>
              </div>

              <!-- Disclaimer -->
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; color: #1e40af; font-size: 13px; line-height: 1.5;">
                  <strong>Let op:</strong> Dit is een automatisch gegenereerde prijsindicatie op basis van AI-analyse. 
                  Voor een definitieve offerte plannen we graag een adviesgesprek in.
                </p>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 32px 0;">
                <a href="https://calendly.com/tbvanreijn/30min" 
                   style="display: inline-block; background-color: #f97316; color: white; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Plan Adviesgesprek
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

    // Create plain text version for better deliverability
    const textEmail = `
BUDGET ONTRUIMING - UW PERSOONLIJKE OFFERTE

Bedankt voor uw aanvraag! Hieronder vindt u uw offerte op basis van onze AI-analyse.

KLANTGEGEVENS
-------------
Naam: ${formData.naam}
Email: ${formData.email}
Telefoon: ${formData.telefoon}

WONINGGEGEVENS
--------------
Postcode: ${formData.postcode}
Woningtype: ${formData.woningType}
Vierkante Meter: ${formData.vierkanteMeter}m²
Verdieping: ${formData.verdieping}${formData.liftAanwezig ? ' (Lift aanwezig)' : ''}

${furnitureList.length > 0 ? `
AI ANALYSE RESULTATEN
---------------------
Gedetecteerde meubels:
${furnitureList.map(f => `- ${f.quantity}x ${f.item} (${f.size})`).join('\n')}

${totalBoxes > 0 ? `Dozen/tassen (geschat): ${totalBoxes}\n` : ''}Status inrichting: ${volumeLevelText}
` : ''}

${extraServices.length > 0 ? `
EXTRA WERKZAAMHEDEN
-------------------
${extraServices.map(service => `- ${service}`).join('\n')}
` : ''}

PRIJSOVERZICHT
--------------
Ontruiming: EUR ${itemsCost.toFixed(2)}
${extrasCost > 0 ? `Extra werkzaamheden: EUR ${extrasCost.toFixed(2)}\n` : ''}BTW (21%): EUR ${btw.toFixed(2)}
------------------------
Totaalprijs: EUR ${totalPrice.toFixed(2)}

LET OP: Dit is een automatisch gegenereerde prijsindicatie op basis van AI-analyse. 
Voor een definitieve offerte plannen we graag een gratis adviesgesprek in.

💰 LAAGSTE PRIJS GARANTIE
--------------------------
Heeft u elders een lagere offerte ontvangen? 
Stuur deze naar ons en wij gaan er direct onder!

Reply op deze email met de concurrent offerte (PDF of foto).
Wij bellen u binnen 24 uur terug met een lagere prijs. Gegarandeerd.

Plan uw gratis adviesgesprek: https://calendly.com/tbvanreijn/30min

Vragen? Bel ons op ${formData.telefoon} of reply op deze email.

---
Budget Ontruiming
Woningontruiming met laagste prijs garantie
    `.trim()

    // Create simple customer email (without photos, minimal styling)
    const simpleCustomerEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Uw Offerte - Budget Ontruiming</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
    
    <!-- Header -->
    <div style="border-bottom: 3px solid #f97316; padding-bottom: 20px; margin-bottom: 25px;">
      <h1 style="color: #f97316; font-size: 26px; margin: 0 0 8px 0;">Budget Ontruiming</h1>
      <p style="color: #6b7280; font-size: 15px; margin: 0;">Bedankt voor uw offerte aanvraag</p>
    </div>
    
    <!-- Uw Gegevens -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Uw Gegevens</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 40%;">Naam</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Email</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Telefoon</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.telefoon}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Postcode</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.postcode}</td>
        </tr>
      </table>
    </div>
    
    <!-- Woning Details -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Woning Details</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px; width: 40%;">Type</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.woningType}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Vierkante meter</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.vierkanteMeter}m²</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #6b7280; font-size: 14px;">Verdieping</td>
          <td style="padding: 6px 0; color: #1f2937; font-size: 14px;">${formData.verdieping}</td>
        </tr>
      </table>
    </div>
    
    ${furnitureList.length > 0 ? `
    <!-- Inventaris -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Gedetecteerde Inventaris</h2>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 12px;">
        <p style="color: #4b5563; font-size: 14px; line-height: 1.8; margin: 0;">
          ${furnitureList.map(f => `<span style="display: inline-block; margin-right: 8px; margin-bottom: 4px;">${f.quantity}x ${f.item}</span>`).join(' • ')}
        </p>
      </div>
      <p style="color: #6b7280; font-size: 13px; font-style: italic; margin: 0;">
        Op basis van deze inventaris hebben we bepaald dat uw woning <strong>${volumeLevelText.toLowerCase()}</strong> is. 
        Dit bepaalt de benodigde tijd en materialen voor de ontruiming.
      </p>
    </div>
    ` : ''}
    
    ${extraServices.length > 0 ? `
    <!-- Extra Werkzaamheden -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Extra Werkzaamheden</h2>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px;">
        <p style="color: #4b5563; font-size: 14px; line-height: 1.6; margin: 0;">
          ${extraServices.map(service => `• ${service}`).join('<br>')}
        </p>
      </div>
    </div>
    ` : ''}
    
    <!-- Prijs Indicatie -->
    <div style="margin-bottom: 25px;">
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Prijs Indicatie</h2>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border: 1px solid #fde68a;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">Ontruiming</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${itemsCost.toFixed(2)}</td>
          </tr>
          ${extrasCost > 0 ? `
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">Extra werkzaamheden</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${extrasCost.toFixed(2)}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">BTW (21%)</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${btw.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px 0; border-top: 2px solid #f59e0b;"></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #78350f; font-size: 17px; font-weight: bold;">Totaalprijs</td>
            <td style="padding: 6px 0; color: #78350f; font-size: 17px; text-align: right; font-weight: bold;">EUR ${totalPrice.toFixed(2)}</td>
          </tr>
        </table>
      </div>
    </div>
    
    <!-- Hoe werkt het -->
    <div style="background-color: #f0fdf4; padding: 16px; border-radius: 6px; border-left: 4px solid #22c55e; margin-bottom: 25px;">
      <p style="color: #166534; font-size: 13px; line-height: 1.6; margin: 0 0 8px 0;">
        <strong>Binnen 1 minuut uw prijs - hoe werkt dat?</strong>
      </p>
      <p style="color: #166534; font-size: 13px; line-height: 1.6; margin: 0;">
        Onze AI heeft uw foto's geanalyseerd en bepaald of de woning minimaal, normaal, vol of overvol is. 
        Op basis van het aantal meubels en de staat van de woning hebben we direct deze prijsindicatie berekend. 
        Geen wachttijd, geen afspraak nodig - wel de scherpe prijs van Budget Ontruiming.
      </p>
    </div>
    
    <!-- Disclaimer -->
    <div style="background-color: #eff6ff; padding: 16px; border-radius: 6px; border-left: 4px solid #3b82f6; margin-bottom: 25px;">
      <p style="color: #1e40af; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong>Let op:</strong> Dit is een automatische prijsindicatie. 
        Voor een definitieve offerte plannen we graag een adviesgesprek in.
      </p>
    </div>

    <!-- Laagste Prijs Garantie -->
    <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; border: 2px solid #22c55e; margin-bottom: 25px;">
      <div style="text-align: center; margin-bottom: 12px;">
        <p style="color: #166534; font-size: 18px; font-weight: bold; margin: 0;">
          💰 Laagste Prijs Garantie
        </p>
      </div>
      <p style="color: #166534; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0; text-align: center;">
        Heeft u elders een lagere offerte ontvangen? Stuur deze naar ons en wij gaan er direct onder!
      </p>
      <div style="text-align: center; margin-bottom: 12px;">
        <a href="https://budgetontruiming.nl/laagste-prijs" style="display: inline-block; background-color: #22c55e; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">
          Dien Offerte In
        </a>
      </div>
      <p style="color: #15803d; font-size: 13px; line-height: 1.6; margin: 0; text-align: center;">
        Of <strong>reply op deze email</strong> met de concurrent offerte (PDF of foto). 
        Wij bellen u binnen 24 uur terug met een lagere prijs. Gegarandeerd.
      </p>
    </div>
    
    <!-- Call to Action -->
    <div style="background-color: #fef3c7; padding: 24px; border-radius: 8px; text-align: center; margin-bottom: 20px; border: 2px solid #fde68a;">
      <p style="color: #92400e; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">Volgende stap: Plan uw gratis adviesgesprek</p>
      <div style="margin-bottom: 16px;">
        <a href="https://calendly.com/tbvanreijn/30min" style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
          Plan Adviesgesprek
        </a>
      </div>
      <p style="color: #78350f; font-size: 13px; margin: 0;">
        Kies een tijdstip dat u uitkomt voor een persoonlijk gesprek
      </p>
    </div>
    
    <!-- Contact info klein -->
    <div style="text-align: center; margin-bottom: 20px;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Liever contact via email of telefoon? Stuur een reply of bel 085 060 8180
      </p>
    </div>
    
    <!-- Footer -->
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center;">
      <p style="color: #6b7280; font-size: 13px; margin: 0 0 4px 0; font-weight: 600;">Budget Ontruiming</p>
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">Woningontruiming Zuid-Holland</p>
    </div>
    
  </div>
</body>
</html>
    `.trim()

    // Create business email (internal notification)
    const businessEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nieuwe Aanvraag - Budget Ontruiming</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f9fafb;">
  <div style="max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
    
    <!-- Alert Header -->
    <div style="background-color: #f97316; padding: 20px; text-align: center;">
      <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 8px 0;">🔔 NIEUWE OFFERTE AANVRAAG</h1>
      <p style="color: #ffffff; font-size: 18px; margin: 0; font-weight: 600;">${formData.naam} • EUR ${totalPrice.toFixed(2)}</p>
    </div>
    
    <div style="padding: 30px;">
      
      <!-- Status -->
      <div style="background-color: #fef3c7; padding: 16px; border-radius: 6px; margin-bottom: 25px; border-left: 4px solid #f59e0b;">
        <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 600;">
          ⏳ Wacht op Calendly boeking van ${formData.naam}
        </p>
      </div>
      
      <!-- Klantgegevens -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Klantgegevens</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Naam</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px; font-weight: 600;">${formData.naam}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #f97316; text-decoration: none; font-weight: 600;">${formData.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Telefoon</td>
          <td style="padding: 8px 0;"><a href="tel:${formData.telefoon}" style="color: #f97316; text-decoration: none; font-weight: 600;">${formData.telefoon}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Postcode</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.postcode}</td>
        </tr>
      </table>
      
      <!-- Woning Details -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Woning Details</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 40%;">Type</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.woningType}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Vierkante meter</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.vierkanteMeter}m²</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Verdieping</td>
          <td style="padding: 8px 0; color: #1f2937; font-size: 14px;">${formData.verdieping}${formData.liftAanwezig ? ' (Lift ✅)' : ''}</td>
        </tr>
      </table>
      
      <!-- AI Analyse -->
      ${furnitureList.length > 0 ? `
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">AI Analyse</h2>
      <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin-bottom: 12px;">
        <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0; font-weight: 600;">Gedetecteerde meubels:</p>
        <p style="color: #4b5563; font-size: 14px; margin: 0;">
          ${furnitureList.map(f => `${f.quantity}x ${f.item}`).join(' • ')}
        </p>
      </div>
      <p style="color: #1f2937; font-size: 14px; margin: 0 0 25px 0;">
        <strong>Status:</strong> ${volumeLevelText} 
        ${totalBoxes > 0 ? `| <strong>Dozen:</strong> ~${totalBoxes}` : ''}
      </p>
      ` : ''}
      
      <!-- Extra's -->
      ${extraServices.length > 0 ? `
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Extra Werkzaamheden</h2>
      <ul style="margin: 0 0 25px 0; padding-left: 20px;">
        ${extraServices.map(service => `<li style="color: #4b5563; font-size: 14px; margin-bottom: 6px;">${service}</li>`).join('')}
      </ul>
      ` : ''}
      
      <!-- Foto's -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Foto's (${analysisResults.length})</h2>
      <div style="margin-bottom: 25px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            ${analysisResults.map((result: any, index: number) => `
              ${index % 2 === 0 && index > 0 ? '</tr><tr>' : ''}
              <td style="padding: 4px; width: 50%; vertical-align: top;">
                <a href="${result.url}" target="_blank" style="display: block; text-decoration: none;">
                  <img 
                    src="${result.url}" 
                    alt="Foto ${index + 1}"
                    style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; border: 2px solid #e5e7eb; display: block;"
                  />
                  <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px; text-align: center;">Foto ${index + 1}</p>
                </a>
              </td>
            `).join('')}
          </tr>
        </table>
      </div>
      
      <!-- Prijs -->
      <h2 style="color: #1f2937; font-size: 18px; margin: 0 0 12px 0; border-left: 4px solid #f97316; padding-left: 12px;">Prijsindicatie (naar klant gestuurd)</h2>
      <div style="background-color: #fef3c7; padding: 20px; border-radius: 6px; border: 1px solid #fde68a;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">Ontruiming</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${itemsCost.toFixed(2)}</td>
          </tr>
          ${extrasCost > 0 ? `
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">Extra werkzaamheden</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${extrasCost.toFixed(2)}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px;">BTW (21%)</td>
            <td style="padding: 6px 0; color: #92400e; font-size: 14px; text-align: right; font-weight: 600;">EUR ${btw.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 8px 0; border-top: 2px solid #f59e0b;"></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #78350f; font-size: 18px; font-weight: bold;">Totaalprijs</td>
            <td style="padding: 6px 0; color: #78350f; font-size: 18px; text-align: right; font-weight: bold;">EUR ${totalPrice.toFixed(2)}</td>
          </tr>
        </table>
      </div>
      
    </div>
    
    <!-- Footer -->
    <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
      <p style="color: #6b7280; font-size: 13px; margin: 0;">
        Budget Ontruiming - Interne notificatie
      </p>
    </div>
    
  </div>
</body>
</html>
    `.trim()

    // Send to customer (simple version to avoid spam)
    console.log('📧 Verzenden naar klant:', formData.email)
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Budget Ontruiming <offerte@budgetontruiming.nl>',
      to: [formData.email],
      replyTo: 'tbvanreijn@gmail.com',
      subject: `Uw offerte - Budget Ontruiming`,
      html: simpleCustomerEmail,
      text: textEmail,
    })

    if (customerError) {
      console.error('❌ Klant email error:', customerError)
    } else {
      console.log('✅ Klant email verzonden!', customerData)
    }

    // Send to business (with photos for review)
    console.log('📧 Verzenden naar bedrijf: tbvanreijn@gmail.com')
    const { data: businessData, error: businessError } = await resend.emails.send({
          from: 'Budget Ontruiming <offerte@budgetontruiming.nl>',
      to: ['tbvanreijn@gmail.com'],
      replyTo: formData.email,
      subject: `Nieuwe Offerte Aanvraag - ${formData.naam} - EUR ${totalPrice.toFixed(2)}`,
      html: businessEmail,
      text: textEmail,
    })

    if (businessError) {
      console.error('❌ Bedrijf email error:', businessError)
    } else {
      console.log('✅ Bedrijf email verzonden!', businessData)
    }

    // Fail if customer email didn't send
    if (customerError) {
      return NextResponse.json(
        { error: 'Klant email kon niet worden verzonden', details: customerError },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
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

