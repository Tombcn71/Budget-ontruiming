import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { naam, email, telefoon, uwPrijs, competitorPrijs, opmerkingen } = body

    console.log('💰 Price match aanvraag ontvangen:', { naam, email })

    // Email naar bedrijf
    const { data: businessData, error: businessError } = await resend.emails.send({
      from: 'Budget Ontruiming <offerte@budgetontruiming.nl>',
      to: ['tbvanreijn@gmail.com'],
      replyTo: email,
      subject: `🔥 PRICE MATCH AANVRAAG - ${naam}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 2px solid #dc2626;">
    
    <div style="background-color: #dc2626; padding: 20px; margin: -30px -30px 20px -30px; border-radius: 8px 8px 0 0; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">🔥 PRICE MATCH AANVRAAG</h1>
    </div>

    <div style="background-color: #fef3c7; padding: 16px; border-radius: 6px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
      <p style="margin: 0; color: #92400e; font-weight: 600;">
        🚨 HOT LEAD - Klant wil prijs match! Bel binnen 24 uur met lagere prijs.
      </p>
    </div>

    <h2 style="color: #1f2937; border-left: 4px solid #dc2626; padding-left: 12px; margin-bottom: 12px;">Klant Gegevens</h2>
    <table style="width: 100%; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 0; color: #6b7280; width: 40%;">Naam</td>
        <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${naam}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280;">Email</td>
        <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 8px 0; color: #6b7280;">Telefoon</td>
        <td style="padding: 8px 0;"><a href="tel:${telefoon}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${telefoon}</a></td>
      </tr>
    </table>

    <h2 style="color: #1f2937; border-left: 4px solid #dc2626; padding-left: 12px; margin-bottom: 12px;">Prijs Vergelijking</h2>
    <div style="background-color: #fee2e2; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
      <table style="width: 100%;">
        <tr>
          <td style="padding: 8px 0; color: #991b1b;">Onze prijs</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #991b1b; font-size: 18px;">${uwPrijs}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #991b1b;">Concurrent prijs</td>
          <td style="padding: 8px 0; text-align: right; font-weight: 600; color: #991b1b; font-size: 18px;">${competitorPrijs}</td>
        </tr>
      </table>
    </div>

    ${opmerkingen ? `
    <h2 style="color: #1f2937; border-left: 4px solid #dc2626; padding-left: 12px; margin-bottom: 12px;">Opmerkingen</h2>
    <p style="background-color: #f9fafb; padding: 12px; border-radius: 6px; color: #4b5563;">
      ${opmerkingen}
    </p>
    ` : ''}

    <div style="background-color: #dcfce7; padding: 16px; border-radius: 6px; border-left: 4px solid #22c55e; margin-top: 20px;">
      <p style="margin: 0; color: #166534; font-weight: 600;">
        ✅ ACTIE: Klant verwacht dat wij de competitor offerte per email of WhatsApp ontvangen. 
        Bel terug met lagere prijs zodra offerte binnen is.
      </p>
    </div>

  </div>
</body>
</html>
      `,
    })

    if (businessError) {
      console.error('❌ Business email error:', businessError)
    }

    // Bevestiging naar klant
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: 'Budget Ontruiming <offerte@budgetontruiming.nl>',
      to: [email],
      replyTo: 'tbvanreijn@gmail.com',
      subject: 'Laagste Prijs Garantie Aanvraag Ontvangen',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e5e7eb;">
    
    <div style="border-bottom: 3px solid #22c55e; padding-bottom: 20px; margin-bottom: 25px;">
      <h1 style="color: #22c55e; font-size: 26px; margin: 0 0 8px 0;">✅ Aanvraag Ontvangen!</h1>
      <p style="color: #6b7280; font-size: 15px; margin: 0;">Laagste Prijs Garantie</p>
    </div>

    <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
      Beste ${naam},
    </p>

    <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
      Bedankt voor uw aanvraag! We hebben uw gegevens ontvangen en gaan aan de slag.
    </p>

    <div style="background-color: #dcfce7; padding: 20px; border-radius: 8px; border: 2px solid #22c55e; margin: 25px 0; text-align: center;">
      <p style="color: #166534; font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">
        📤 Volgende stap: Stuur ons de concurrent offerte
      </p>
      <p style="color: #166534; font-size: 14px; margin: 0;">
        <strong>Reply</strong> op deze email met de offerte als PDF of foto<br/>
        <strong>Of WhatsApp</strong> naar: 085 060 8180
      </p>
    </div>

    <div style="background-color: #fef3c7; padding: 16px; border-radius: 6px; margin-bottom: 20px;">
      <p style="color: #92400e; font-size: 14px; margin: 0;">
        <strong>🔔 We bellen binnen 24 uur</strong><br/>
        Zodra we de competitor offerte hebben ontvangen, nemen we contact op met een lagere prijs. Gegarandeerd.
      </p>
    </div>

    <h3 style="color: #1f2937; font-size: 16px; margin: 25px 0 12px 0;">Uw gegevens:</h3>
    <table style="width: 100%; background-color: #f9fafb; padding: 12px; border-radius: 6px;">
      <tr>
        <td style="padding: 6px 0; color: #6b7280;">Onze prijs</td>
        <td style="padding: 6px 0; color: #1f2937; font-weight: 600; text-align: right;">${uwPrijs}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; color: #6b7280;">Concurrent prijs</td>
        <td style="padding: 6px 0; color: #1f2937; font-weight: 600; text-align: right;">${competitorPrijs}</td>
      </tr>
    </table>

    <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-top: 25px;">
      Met vriendelijke groet,<br/>
      <strong style="color: #1f2937;">Budget Ontruiming</strong><br/>
      085 060 8180
    </p>

    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 25px; text-align: center;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Budget Ontruiming - Woningontruiming met laagste prijs garantie
      </p>
    </div>

  </div>
</body>
</html>
      `,
    })

    if (customerError) {
      console.error('❌ Customer email error:', customerError)
      return NextResponse.json(
        { error: 'Kon bevestiging niet verzenden' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('❌ Price match error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden' },
      { status: 500 }
    )
  }
}

