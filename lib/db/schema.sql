-- QuoteRequest table
CREATE TABLE IF NOT EXISTS quote_requests (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Klant gegevens
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  telefoon TEXT NOT NULL,
  postcode TEXT NOT NULL,
  
  -- Woning gegevens
  woning_type TEXT NOT NULL,
  vierkante_meter INTEGER NOT NULL,
  verdieping TEXT NOT NULL,
  lift_aanwezig BOOLEAN DEFAULT FALSE,
  
  -- AI Analyse
  ai_analysis JSONB,
  volume_level TEXT,
  total_boxes INTEGER,
  
  -- Extra diensten
  extra_services TEXT[],
  
  -- Prijzen
  items_cost DECIMAL(10,2) NOT NULL,
  extras_cost DECIMAL(10,2) NOT NULL,
  btw DECIMAL(10,2) NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  
  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'converted', 'lost')),
  
  -- Notities
  notes TEXT,
  last_contacted_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_quote_requests_email ON quote_requests(email);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON quote_requests(created_at DESC);

