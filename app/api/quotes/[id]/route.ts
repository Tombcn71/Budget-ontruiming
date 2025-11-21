import { NextResponse } from 'next/server'
import { sql } from '@/lib/db/client'

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status, notes } = body
    const { id } = params

    if (notes !== undefined) {
      await sql`
        UPDATE quote_requests
        SET notes = ${notes}, updated_at = NOW()
        WHERE id = ${id}
      `
    }

    if (status) {
      await sql`
        UPDATE quote_requests
        SET status = ${status}, 
            last_contacted_at = ${status === 'contacted' || status === 'converted' ? new Date().toISOString() : null},
            updated_at = NOW()
        WHERE id = ${id}
      `
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('❌ Update quote error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden', details: error.message },
      { status: 500 }
    )
  }
}

