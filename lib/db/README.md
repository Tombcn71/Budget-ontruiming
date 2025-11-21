# Database Setup

## Neon Database Initialiseren

1. **Ga naar je Neon dashboard**: https://console.neon.tech
2. **Selecteer je project** (Budget Ontruiming)
3. **Open SQL Editor**
4. **Copy-paste de inhoud van `schema.sql`** en run het

Of via command line:

```bash
psql "postgresql://neondb_owner:npg_yNPzs4KuvEw7@ep-wandering-waterfall-ago9km09-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require" < lib/db/schema.sql
```

## Tabel Structuur

### `quote_requests`

Alle offerte aanvragen worden hier opgeslagen zodat je:
- Overzicht hebt van alle leads
- Status kunt bijhouden (pending, contacted, converted, lost)
- Follow-ups kunt doen
- Notities kunt toevoegen

## Usage

```typescript
import { sql } from '@/lib/db/client'

// Alle pending quotes
const quotes = await sql`
  SELECT * FROM quote_requests 
  WHERE status = 'pending'
  ORDER BY created_at DESC
`

// Update status
await sql`
  UPDATE quote_requests 
  SET status = 'contacted', last_contacted_at = NOW()
  WHERE id = ${quoteId}
`
```

