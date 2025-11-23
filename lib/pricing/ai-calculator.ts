// Pricing calculator based on AI analysis results

interface FormData {
  postcode: string
  woningType: string
  vierkanteMeter: string
  verdieping: string
  liftAanwezig: boolean
  inpakservice: boolean
  vloerVerwijderen: boolean
  vloerM2: string
  vloerType?: string  // 'normaal' of 'vastgelijmd'
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

// Basis tarieven - NIEUWE STRUCTUUR: €10/m² base
const BASE_RATES = {
  // BASE: €10 per vierkante meter (simpel en transparant)
  pricePerM2: 10,
  
  // Verdieping surcharge
  floor: {
    'begane-grond': 0,
    '1e-verdieping': 75,
    '2e-verdieping': 150,
    '3e-verdieping': 250,
  },
  
  // Volume impact multiplier - HOOFDFACTOR voor prijsbepaling
  // AI analyseert foto's en bepaalt inrichtingsniveau van de woning
  volumeMultiplier: {
    empty: 0.7,      // Leeg/Minimaal: 30% korting (weinig werk)
    sparse: 0.85,    // Licht gevuld: 15% korting
    half: 1.0,       // Half vol: Standaard prijs
    full: 1.2,       // Vol: 20% duurder (meer werk)
    very_full: 1.4,  // Zeer vol: 40% duurder (veel werk)
  },
  
  // Extra diensten (NIEUWE PRIJZEN - concurrerend voor sociale huur)
  extraServices: {
    vloerVerwijderenNormaal: 2,      // €2 per m2 (normale vloer)
    vloerVerwijderenVastgelijmd: 3.5, // €3,50 per m2 (vastgelijmde vloer - meer werk)
    behangVerwijderen: 3.5,           // €3,50 per m2 (was €5)
    gaatjesToppen: 1,                 // €1 per m2
    schilderwerk: 17.5,               // €17,50 per m2
    gordijnenVerwijderen: 50,         // Flat rate (niet per m2)
    inpakservice: 150,                // Flat rate - spullen uit kasten halen
  },
  
  baseTransport: 150,
  specialItemSurcharge: 50, // Per zwaar/fragiel item (piano, kluis, etc)
  liftDiscount: 0.5,        // 50% korting op verdieping surcharge als lift aanwezig
  minPrice: 250, // Minimum voor kleine opdrachten
}

export function calculatePriceFromAI(
  formData: FormData,
  analysisResults: Array<{ analysis: AIAnalysis }>
): { total: number; breakdown: { items: number; labor: number; transport: number; extras: number } } {
  
  // Parse vierkante meters
  const m2String = formData.vierkanteMeter || '50-75'
  const m2Value = parseInt(m2String.split('-')[0]) || 60
  
  // 1. BASE PRIJS: Simpel €10 per m² (concurrerend en transparant)
  const basePrice = m2Value * BASE_RATES.pricePerM2
  
  // 2. INRICHTINGSNIVEAU MULTIPLIER: AI bepaalt of woning leeg/half/vol is
  let highestVolumeMultiplier = 1.0
  let specialItemsSurcharge = 0

  analysisResults.forEach(({ analysis }) => {
    // Bepaal hoogste volume multiplier van alle foto's
    const volumeMultiplier = BASE_RATES.volumeMultiplier[analysis.volume_level] || 1.0
    if (volumeMultiplier > highestVolumeMultiplier) {
      highestVolumeMultiplier = volumeMultiplier
    }

    // Speciale items surcharge (zwaar/fragiel materiaal)
    if (analysis.special_items && analysis.special_items.length > 0) {
      specialItemsSurcharge += analysis.special_items.length * BASE_RATES.specialItemSurcharge
    }
  })

  // Pas inrichtingsniveau multiplier toe op base price
  // Minimaal (0.85x) = 15% korting, Zeer Vol (1.4x) = 40% duurder
  let itemsCost = basePrice * highestVolumeMultiplier + specialItemsSurcharge

  // 3. VERDIEPING SURCHARGE (met lift korting)
  let floorSurcharge = BASE_RATES.floor[formData.verdieping as keyof typeof BASE_RATES.floor] || 0
  
  // Als lift aanwezig: 50% korting op verdieping surcharge
  if (formData.liftAanwezig && floorSurcharge > 0) {
    floorSurcharge = Math.round(floorSurcharge * BASE_RATES.liftDiscount)
  }

  // 4. EXTRA DIENSTEN (exacte m² opgegeven door klant)
  let extrasCost = 0
  
  // Inpakservice
  if (formData.inpakservice) {
    extrasCost += BASE_RATES.extraServices.inpakservice
  }
  
  // Vloer verwijderen - NIEUW: 2 types (normaal vs vastgelijmd)
  if (formData.vloerVerwijderen && formData.vloerM2) {
    const vloerM2 = parseInt(formData.vloerM2)
    const isVastgelijmd = formData.vloerType === 'vastgelijmd'
    const vloerPrijs = isVastgelijmd 
      ? BASE_RATES.extraServices.vloerVerwijderenVastgelijmd 
      : BASE_RATES.extraServices.vloerVerwijderenNormaal
    extrasCost += vloerPrijs * vloerM2
  }
  
  // Behang verwijderen - NIEUWE PRIJS: €3,50/m² (was €5)
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
    extrasCost += BASE_RATES.extraServices.gordijnenVerwijderen
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
      labor: 0, // Nu opgenomen in €10/m² base
      transport: transportCost,
      extras: Math.round(extrasCost),
    },
  }
}

