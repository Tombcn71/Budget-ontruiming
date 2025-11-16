import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET() {
  try {
    console.log('🔍 Testing Resend...')
    console.log('🔑 API Key aanwezig:', !!process.env.RESEND_API_KEY)
    console.log('🔑 API Key preview:', process.env.RESEND_API_KEY?.substring(0, 10) + '...')

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        error: 'RESEND_API_KEY niet gevonden in environment variables' 
      }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: 'Budget Ontruiming <onboarding@resend.dev>',
      to: ['tvanreijn@icloud.com'],
      subject: '🧪 Test Email - Budget Ontruiming',
      html: `
        <h1>Test Email ✅</h1>
        <p>Als je deze email ontvangt, werkt Resend perfect!</p>
        <p><strong>Tijd:</strong> ${new Date().toLocaleString('nl-NL')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Budget Ontruiming - Email System Test</p>
      `,
    })

    if (error) {
      console.error('❌ Resend error:', error)
      return NextResponse.json({ 
        success: false,
        error: error.message,
        details: error 
      }, { status: 500 })
    }

    console.log('✅ Test email verzonden!', data)

    return NextResponse.json({
      success: true,
      message: 'Test email verzonden naar tvanreijn@icloud.com',
      messageId: data?.id,
    })

  } catch (error: any) {
    console.error('❌ Test email error:', error)
    return NextResponse.json({ 
      success: false,
      error: error.message,
      stack: error.stack 
    }, { status: 500 })
  }
}

