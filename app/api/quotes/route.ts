import { NextResponse } from 'next/server'
import { sql } from '@/lib/db/client'

export async function GET(request: Request) {
  try {
    const quotes = await sql`
      SELECT * FROM quote_requests
      ORDER BY created_at DESC
    `

    return NextResponse.json({ quotes })
  } catch (error: any) {
    console.error('❌ Fetch quotes error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden', details: error.message },
      { status: 500 }
    )
  }
}

