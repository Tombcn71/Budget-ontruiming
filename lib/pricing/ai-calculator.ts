// Pricing calculator based on AI analysis results

interface FormData {
  postcode: string
  woningType: string
  vierkanteMeter: string
  verdieping: string
  vloerVerwijderen: boolean
  behangVerwijderen: boolean
  gaatjesToppen: boolean
  schilderwerk: boolean
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

// Basis tarieven
const BASE_RATES = {
  squareMeter: {
    '0-50': 8,
    '50-75': 7,
    '75-100': 6.5,
    '100-150': 6,
    '150-200': 5.5,
    '200+': 5,
  },
  floor: {
    'begane-grond': 0,
    '1e-verdieping': 75,
    '2e-verdieping': 150,
    '3e-verdieping': 250,
  },
  furnitureSize: {
    small: 15,
    medium: 40,
    large: 80,
  },
  volumeMultiplier: {
    empty: 0.5,
    sparse: 0.7,
    half: 1.0,
    full: 1.3,
    very_full: 1.6,
  },
  extraServices: {
    vloerVerwijderen: 150,
    behangVerwijderen: 200,
    gaatjesToppen: 100,
    schilderwerk: 250,
    gordijnenVerwijderen: 50,
  },
  baseTransport: 150,
  laborHourlyRate: 45, // per persoon per uur
  minPrice: 450,
}

export function calculatePriceFromAI(
  formData: FormData,
  analysisResults: Array<{ analysis: AIAnalysis }>
): { total: number; breakdown: { items: number; labor: number; transport: number; extras: number } } {
  let itemsCost = 0
  let totalEstimatedHours = 0
  let specialItemsSurcharge = 0

  // 1. Analyse alle kamers
  analysisResults.forEach(({ analysis }) => {
    // Bereken kosten voor meubels
    analysis.furniture.forEach((furniture) => {
      const furnitureCost = BASE_RATES.furnitureSize[furniture.size] || 40
      itemsCost += furnitureCost * furniture.quantity
    })

    // Dozen kosten (€5 per doos)
    itemsCost += analysis.boxes_estimate * 5

    // Volume multiplier toepassen
    const volumeMultiplier = BASE_RATES.volumeMultiplier[analysis.volume_level] || 1.0
    itemsCost *= volumeMultiplier

    // Geschatte uren optellen
    totalEstimatedHours += analysis.estimated_hours || 3

    // Speciale items surcharge
    if (analysis.special_items && analysis.special_items.length > 0) {
      specialItemsSurcharge += analysis.special_items.length * 50
    }
  })

  // 2. Vierkante meters basis
  const sqmRate = BASE_RATES.squareMeter[formData.vierkanteMeter as keyof typeof BASE_RATES.squareMeter] || 6
  const sqmValue = parseInt(formData.vierkanteMeter.split('-')[0]) || 75
  const sqmCost = sqmValue * sqmRate

  itemsCost += sqmCost

  // 3. Verdieping surcharge
  const floorSurcharge = BASE_RATES.floor[formData.verdieping as keyof typeof BASE_RATES.floor] || 0

  // 4. Extra werkzaamheden
  let extrasCost = 0
  if (formData.vloerVerwijderen) extrasCost += BASE_RATES.extraServices.vloerVerwijderen
  if (formData.behangVerwijderen) extrasCost += BASE_RATES.extraServices.behangVerwijderen
  if (formData.gaatjesToppen) extrasCost += BASE_RATES.extraServices.gaatjesToppen
  if (formData.schilderwerk) extrasCost += BASE_RATES.extraServices.schilderwerk
  if (formData.gordijnenVerwijderen) extrasCost += BASE_RATES.extraServices.gordijnenVerwijderen

  // 5. Arbeid (2 personen)
  const laborCost = Math.ceil(totalEstimatedHours) * BASE_RATES.laborHourlyRate * 2

  // 6. Transport
  const transportCost = BASE_RATES.baseTransport

  // Totaal berekenen
  const subtotal = itemsCost + floorSurcharge + specialItemsSurcharge + extrasCost + laborCost + transportCost
  const total = Math.max(subtotal, BASE_RATES.minPrice)

  return {
    total: Math.round(total),
    breakdown: {
      items: Math.round(itemsCost + floorSurcharge + specialItemsSurcharge),
      labor: Math.round(laborCost),
      transport: transportCost,
      extras: Math.round(extrasCost),
    },
  }
}

