import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { sql } from '@/lib/db/client'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { quoteId, template } = body

    // Get quote from database
    const quotes = await sql`
      SELECT * FROM quote_requests WHERE id = ${quoteId}
    `

    if (quotes.length === 0) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 })
    }

    const quote = quotes[0] as any

    let subject = ''
    let html = ''

    if (template === 'day3') {
      subject = `Nog vragen over uw offerte van €${quote.total_price.toFixed(2)}?`
      html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px;">
    
    <h1 style="color: #f97316; margin-bottom: 20px;">Budget Ontruiming</h1>
    
    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Beste ${quote.naam},
    </p>

    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Een paar dagen geleden ontving u van ons een offerte van <strong>€${quote.total_price.toFixed(2)}</strong> 
      voor de ontruiming van uw ${quote.woning_type} in ${quote.postcode}.
    </p>

    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Heeft u nog vragen over de offerte? Of wilt u een adviesgesprek inplannen?
    </p>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://calendly.com/tbvanreijn/30min" 
         style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600;">
        Plan Adviesgesprek
      </a>
    </div>

    <div style="background-color: #dcfce7; padding: 16px; border-radius: 6px; margin: 20px 0;">
      <p style="color: #166534; font-size: 14px; margin: 0;">
        <strong>💰 Laagste Prijs Garantie</strong><br/>
        Goedkoper gezien elders? Stuur ons de offerte en wij gaan eronder!
      </p>
    </div>

    <p style="font-size: 14px; color: #6b7280;">
      Met vriendelijke groet,<br/>
      <strong>Budget Ontruiming</strong><br/>
      085 060 8180
    </p>

  </div>
</body>
</html>
      `
    } else if (template === 'day7') {
      subject = `Laatste herinnering: €${quote.total_price.toFixed(2)} voor uw ontruiming`
      html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px;">
    
    <h1 style="color: #f97316; margin-bottom: 20px;">Budget Ontruiming</h1>
    
    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Beste ${quote.naam},
    </p>

    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Dit is onze laatste herinnering voor uw offerte van <strong>€${quote.total_price.toFixed(2)}</strong>.
    </p>

    <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <p style="color: #92400e; font-size: 16px; font-weight: 600; margin: 0 0 10px 0;">
        ⏰ Wacht niet te lang
      </p>
      <p style="color: #92400e; font-size: 14px; margin: 0;">
        Prijzen kunnen wijzigen en onze agenda vult snel. Plan nu uw adviesgesprek in.
      </p>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <a href="https://calendly.com/tbvanreijn/30min" 
         style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
        Plan Nu Gesprek
      </a>
    </div>

    <p style="font-size: 14px; color: #6b7280; text-align: center;">
      Of bel direct: <a href="tel:0850608180" style="color: #f97316; text-decoration: none; font-weight: 600;">085 060 8180</a>
    </p>

  </div>
</body>
</html>
      `
    } else if (template === 'price_match') {
      subject = `Goedkoper gezien? Wij gaan eronder! 💰`
      html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 8px;">
    
    <h1 style="color: #f97316; margin-bottom: 20px;">Budget Ontruiming</h1>
    
    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Beste ${quote.naam},
    </p>

    <p style="font-size: 16px; color: #4b5563; line-height: 1.6;">
      Bent u aan het vergelijken? Slim!
    </p>

    <div style="background-color: #dcfce7; padding: 24px; border-radius: 8px; border: 2px solid #22c55e; margin: 25px 0;">
      <p style="color: #166534; font-size: 20px; font-weight: bold; margin: 0 0 12px 0; text-align: center;">
        💰 Laagste Prijs Garantie
      </p>
      <p style="color: #166534; font-size: 16px; margin: 0 0 12px 0;">
        Heeft u een lagere offerte gekregen?<br/>
        <strong>Stuur deze naar ons en wij gaan er direct onder!</strong>
      </p>
      <p style="color: #166534; font-size: 14px; margin: 0;">
        Uw prijs was: €${quote.total_price.toFixed(2)}<br/>
        Goedkoper gevonden? → Wij maken het nóg goedkoper
      </p>
    </div>

    <div style="text-align: center; margin: 25px 0;">
      <a href="https://budgetontruiming.nl/laagste-prijs" 
         style="display: inline-block; background-color: #22c55e; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
        Dien Offerte In
      </a>
    </div>

    <p style="font-size: 14px; color: #6b7280; text-align: center;">
      Of reply op deze email met de concurrent offerte
    </p>

    <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
      Met vriendelijke groet,<br/>
      <strong>Budget Ontruiming</strong><br/>
      085 060 8180
    </p>

  </div>
</body>
</html>
      `
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Budget Ontruiming <offerte@budgetontruiming.nl>',
      to: [quote.email],
      subject,
      html,
    })

    if (error) {
      console.error('❌ Follow-up email error:', error)
      return NextResponse.json(
        { error: 'Kon email niet verzenden', details: error },
        { status: 500 }
      )
    }

    console.log('✅ Follow-up email verzonden:', data)

    // Update last_contacted_at
    await sql`
      UPDATE quote_requests
      SET last_contacted_at = NOW(), status = 'contacted'
      WHERE id = ${quoteId}
    `

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error('❌ Follow-up error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden', details: error.message },
      { status: 500 }
    )
  }
}

