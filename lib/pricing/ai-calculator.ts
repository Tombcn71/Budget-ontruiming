// Pricing calculator based on AI analysis results

interface FormData {
  postcode: string
  woningType: string
  vierkanteMeter: string
  verdieping: string
  vloerVerwijderen: boolean
  vloerM2: string
  behangVerwijderen: boolean
  behangM2: string
  gaatjesToppen: boolean
  gaatjesM2: string
  schilderwerk: boolean
  schilderwerkM2: string
  gordijnenVerwijderen: boolean
}

interface AIAnalysis {
  room_type: string
  furniture: Array<{
    item: string
    quantity: number
    size: 'small' | 'medium' | 'large'
  }>
  boxes_estimate: number
  volume_level: 'empty' | 'sparse' | 'half' | 'full' | 'very_full'
  floor_visible_percentage: number
  special_items: string[]
  access_notes: string
  estimated_hours: number
}

// Basis tarieven - gebaseerd op BTI Ontruimingen tariefstructuur
const BASE_RATES = {
  // Base prijzen per woningtype (gebruikt als startpunt)
  woningType: {
    'seniorenkamer': { min: 250, max: 450, avgM2: 25 },
    'appartement': { min: 450, max: 850, avgM2: 60 },
    'eengezinswoning': { min: 750, max: 1500, avgM2: 120 },
    'bedrijfspand': { min: 400, max: 1500, avgM2: 100 },
  },
  
  // Verdieping surcharge
  floor: {
    'begane-grond': 0,
    '1e-verdieping': 75,
    '2e-verdieping': 150,
    '3e-verdieping': 250,
  },
  
  // Meubel kosten (voor AI detection fine-tuning)
  furnitureSize: {
    small: 10,    // Klein meubelstuk
    medium: 25,   // Gemiddeld meubelstuk
    large: 50,    // Groot meubelstuk
  },
  
  // Volume impact multiplier (voor AI analyse)
  volumeMultiplier: {
    empty: 0.7,      // Bijna leeg
    sparse: 0.85,    // Weinig spullen
    half: 1.0,       // Normaal gevuld
    full: 1.2,       // Vol
    very_full: 1.4,  // Zeer vol
  },
  
  // Extra diensten (per m2 waar van toepassing)
  extraServices: {
    vloerVerwijderen: 3,      // €3 per m2
    behangVerwijderen: 5,     // €5 per m2
    gaatjesToppen: 1,         // €1 per m2
    schilderwerk: 8,          // €8 per m2
    gordijnenVerwijderen: 50, // Flat rate (niet per m2)
  },
  
  baseTransport: 150,
  specialItemSurcharge: 50,
  boxCost: 5,
  minPrice: 250, // Minimum voor seniorenkamer
}

export function calculatePriceFromAI(
  formData: FormData,
  analysisResults: Array<{ analysis: AIAnalysis }>
): { total: number; breakdown: { items: number; labor: number; transport: number; extras: number } } {
  
  // Parse vierkante meters
  const m2String = formData.vierkanteMeter || '50-75'
  const m2Value = parseInt(m2String.split('-')[0]) || 60
  
  // 1. START: Base prijs op basis van woningtype
  const woningTypeKey = formData.woningType as keyof typeof BASE_RATES.woningType
  const woningTypeData = BASE_RATES.woningType[woningTypeKey] || BASE_RATES.woningType.appartement
  
  // Interpoleer prijs binnen min-max range op basis van m2
  // Hoe groter de woning t.o.v. gemiddelde, hoe hoger binnen de range
  const m2Ratio = Math.min(Math.max(m2Value / woningTypeData.avgM2, 0.5), 2.0)
  const basePrice = woningTypeData.min + ((woningTypeData.max - woningTypeData.min) * (m2Ratio - 0.5) / 1.5)
  
  let itemsCost = basePrice
  
  // 2. FINE-TUNING: AI-detected items (meubels, dozen, volume)
  let totalBoxes = 0
  let specialItemsSurcharge = 0
  const allFurniture: Record<string, { quantity: number; size: string }> = {}
  let highestVolumeMultiplier = 1.0

  analysisResults.forEach(({ analysis }) => {
    // Hoogste volume multiplier
    const volumeMultiplier = BASE_RATES.volumeMultiplier[analysis.volume_level] || 1.0
    if (volumeMultiplier > highestVolumeMultiplier) {
      highestVolumeMultiplier = volumeMultiplier
    }

    // Tel dozen op
    totalBoxes += analysis.boxes_estimate

    // Combineer meubels (neem hoogste aantal per uniek item)
    analysis.furniture.forEach((furniture) => {
      const key = `${furniture.item.toLowerCase()}-${furniture.size}`
      if (!allFurniture[key] || allFurniture[key].quantity < furniture.quantity) {
        allFurniture[key] = {
          quantity: furniture.quantity,
          size: furniture.size,
        }
      }
    })

    // Speciale items surcharge
    if (analysis.special_items && analysis.special_items.length > 0) {
      specialItemsSurcharge += analysis.special_items.length * BASE_RATES.specialItemSurcharge
    }
  })

  // Bereken meubelkosten (fine-tuning bovenop base)
  let furnitureCost = 0
  Object.values(allFurniture).forEach((furniture) => {
    const cost = BASE_RATES.furnitureSize[furniture.size as keyof typeof BASE_RATES.furnitureSize] || 25
    furnitureCost += cost * furniture.quantity
  })

  // Dozen kosten
  const boxesCost = totalBoxes * BASE_RATES.boxCost

  // Pas volume multiplier toe op AI-detected items (niet op base price)
  const aiItemsCost = (furnitureCost + boxesCost) * highestVolumeMultiplier
  
  itemsCost += aiItemsCost + specialItemsSurcharge

  // 3. VERDIEPING SURCHARGE
  const floorSurcharge = BASE_RATES.floor[formData.verdieping as keyof typeof BASE_RATES.floor] || 0

  // 4. EXTRA DIENSTEN (exacte m² opgegeven door klant)
  let extrasCost = 0
  if (formData.vloerVerwijderen && formData.vloerM2) {
    const vloerM2 = parseInt(formData.vloerM2)
    extrasCost += BASE_RATES.extraServices.vloerVerwijderen * vloerM2
  }
  if (formData.behangVerwijderen && formData.behangM2) {
    const behangM2 = parseInt(formData.behangM2)
    extrasCost += BASE_RATES.extraServices.behangVerwijderen * behangM2
  }
  if (formData.gaatjesToppen && formData.gaatjesM2) {
    const gaatjesM2 = parseInt(formData.gaatjesM2)
    extrasCost += BASE_RATES.extraServices.gaatjesToppen * gaatjesM2
  }
  if (formData.schilderwerk && formData.schilderwerkM2) {
    const schilderwerkM2 = parseInt(formData.schilderwerkM2)
    extrasCost += BASE_RATES.extraServices.schilderwerk * schilderwerkM2
  }
  if (formData.gordijnenVerwijderen) {
    extrasCost += BASE_RATES.extraServices.gordijnenVerwijderen // Flat rate
  }

  // 5. TRANSPORT (altijd)
  const transportCost = BASE_RATES.baseTransport

  // TOTAAL BEREKENEN
  const subtotal = itemsCost + floorSurcharge + extrasCost + transportCost
  const total = Math.max(subtotal, BASE_RATES.minPrice)

  return {
    total: Math.round(total),
    breakdown: {
      items: Math.round(itemsCost + floorSurcharge + specialItemsSurcharge),
      labor: 0, // Nu opgenomen in base price per woningtype
      transport: transportCost,
      extras: Math.round(extrasCost),
    },
  }
}

