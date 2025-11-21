import { neon } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set')
}

export const sql = neon(process.env.DATABASE_URL)

// Types
export interface QuoteRequest {
  id: string
  created_at: Date
  updated_at: Date
  naam: string
  email: string
  telefoon: string
  postcode: string
  woning_type: string
  vierkante_meter: number
  verdieping: string
  lift_aanwezig: boolean
  ai_analysis?: any
  volume_level?: string
  total_boxes?: number
  extra_services: string[]
  items_cost: number
  extras_cost: number
  btw: number
  total_price: number
  status: 'pending' | 'contacted' | 'converted' | 'lost'
  notes?: string
  last_contacted_at?: Date
}

export type QuoteStatus = 'pending' | 'contacted' | 'converted' | 'lost'

