// Pricing calculator based on AI analysis results

interface FormData {
  postcode: string;
  woningType: string;
  vierkanteMeter: string;
  verdieping: string;
  liftAanwezig: boolean;
  vloerVerwijderen: boolean;
  vloerM2: string;
  vloerType?: string; // 'normaal' of 'vastgelijmd'
  behangVerwijderen: boolean;
  behangM2: string;
  gaatjesToppen: boolean;
  gaatjesM2: string;
  schilderwerk: boolean;
  schilderwerkM2: string;
  gordijnenVerwijderen: boolean;
}

interface AIAnalysis {
  room_type: string;
  furniture: Array<{
    item: string;
    quantity: number;
    size: "small" | "medium" | "large";
  }>;
  boxes_estimate: number;
  volume_level: "empty" | "sparse" | "half" | "full" | "very_full";
  floor_visible_percentage: number;
  special_items: string[];
  access_notes: string;
  estimated_hours: number;
}

// GEOPTIMALISEERDE TARIEVEN - LAAG SEGMENT MARKT
// Target: €350-700 voor appartementen (laag segment)
// AI multiplier beschermt tegen underpricing bij volle woningen
const BASE_RATES = {
  // BASE: €5,50 per m² (van €10 → 45% goedkoper!)
  // Dit positioneert je in het lage marktsegment
  pricePerM2: 5.5,

  // Verdieping surcharge - VERLAAGD
  floor: {
    "begane-grond": 0,
    "1e-verdieping": 40, // van 75 → 40 (bijna 50% korting)
    "2e-verdieping": 80, // van 150 → 80
    "3e-verdieping": 140, // van 250 → 140
  },

  // Volume multiplier - VERSTERKT VANGNET
  // AI analyseert foto's en bepaalt inrichtingsniveau
  // Dit is je BESCHERMING tegen underpricing!
  volumeMultiplier: {
    empty: 0.6, // Leeg: 40% korting (bijna niks te doen)
    sparse: 0.75, // Licht gevuld: 25% korting
    half: 1.0, // Normaal bewoond: Standaard prijs
    full: 1.4, // Vol: 40% duurder (veel meer trips/tijd)
    very_full: 1.8, // Overvol: 80% duurder (beschermt je écht!)
  },

  // Extra diensten - BLIJVEN WINSTGEVEND (hier zit je marge!)
  extraServices: {
    vloerVerwijderenNormaal: 3, // €3 per m² (zwaar werk)
    vloerVerwijderenVastgelijmd: 5, // €5 per m² (héél zwaar werk)
    behangVerwijderen: 4, // €4 per m²
    gaatjesToppen: 1.5, // €1,50 per m²
    schilderwerk: 15, // €15 per m² (veel werk)
    gordijnenVerwijderen: 40, // €40 flat rate
  },

  baseTransport: 100, // van 150 → 100 (realistischer)
  specialItemSurcharge: 75, // Piano, kluis etc (was 50)
  liftDiscount: 0.5, // 50% korting trap bij lift
  minPrice: 250, // Minimum opdracht (was 250)
};

export function calculatePriceFromAI(
  formData: FormData,
  analysisResults: Array<{ analysis: AIAnalysis }>,
): {
  total: number;
  breakdown: {
    items: number;
    labor: number;
    transport: number;
    extras: number;
  };
} {
  // Parse vierkante meters
  const m2Value = parseInt(formData.vierkanteMeter || "60") || 60;

  // 1. BASE PRIJS: €5,50 per m² (COMPETITIEF LAAG)
  const basePrice = m2Value * BASE_RATES.pricePerM2;

  // 2. INRICHTINGSNIVEAU MULTIPLIER: AI bepaalt of woning leeg/half/vol is
  // DIT IS JE VANGNET TEGEN UNDERPRICING!
  let highestVolumeMultiplier = 1.0;
  let specialItemsSurcharge = 0;

  analysisResults.forEach(({ analysis }) => {
    // Bepaal hoogste volume multiplier van alle foto's
    const volumeMultiplier =
      BASE_RATES.volumeMultiplier[analysis.volume_level] || 1.0;
    if (volumeMultiplier > highestVolumeMultiplier) {
      highestVolumeMultiplier = volumeMultiplier;
    }

    // Speciale items surcharge (zwaar/fragiel materiaal)
    if (analysis.special_items && analysis.special_items.length > 0) {
      specialItemsSurcharge +=
        analysis.special_items.length * BASE_RATES.specialItemSurcharge;
    }
  });

  // Pas inrichtingsniveau multiplier toe op base price
  // Leeg (0.6x) = 40% korting, Overvol (1.8x) = 80% duurder
  let itemsCost = basePrice * highestVolumeMultiplier + specialItemsSurcharge;

  // 3. VERDIEPING SURCHARGE (met lift korting)
  let floorSurcharge =
    BASE_RATES.floor[formData.verdieping as keyof typeof BASE_RATES.floor] || 0;

  // Als lift aanwezig: 50% korting op verdieping surcharge
  if (formData.liftAanwezig && floorSurcharge > 0) {
    floorSurcharge = Math.round(floorSurcharge * BASE_RATES.liftDiscount);
  }

  // 4. EXTRA DIENSTEN (exacte m² opgegeven door klant)
  // HIER ZIT JE MARGE - klanten betalen goed voor zwaar werk
  let extrasCost = 0;

  // Vloer verwijderen - 2 types (normaal vs vastgelijmd)
  if (formData.vloerVerwijderen && formData.vloerM2) {
    const vloerM2 = parseInt(formData.vloerM2);
    const isVastgelijmd = formData.vloerType === "vastgelijmd";
    const vloerPrijs = isVastgelijmd
      ? BASE_RATES.extraServices.vloerVerwijderenVastgelijmd
      : BASE_RATES.extraServices.vloerVerwijderenNormaal;
    extrasCost += vloerPrijs * vloerM2;
  }

  // Behang verwijderen
  if (formData.behangVerwijderen && formData.behangM2) {
    const behangM2 = parseInt(formData.behangM2);
    extrasCost += BASE_RATES.extraServices.behangVerwijderen * behangM2;
  }

  if (formData.gaatjesToppen && formData.gaatjesM2) {
    const gaatjesM2 = parseInt(formData.gaatjesM2);
    extrasCost += BASE_RATES.extraServices.gaatjesToppen * gaatjesM2;
  }

  if (formData.schilderwerk && formData.schilderwerkM2) {
    const schilderwerkM2 = parseInt(formData.schilderwerkM2);
    extrasCost += BASE_RATES.extraServices.schilderwerk * schilderwerkM2;
  }

  if (formData.gordijnenVerwijderen) {
    extrasCost += BASE_RATES.extraServices.gordijnenVerwijderen;
  }

  // 5. TRANSPORT (altijd)
  const transportCost = BASE_RATES.baseTransport;

  // TOTAAL BEREKENEN
  const subtotal = itemsCost + floorSurcharge + extrasCost + transportCost;
  const total = Math.max(subtotal, BASE_RATES.minPrice);

  return {
    total: Math.round(total),
    breakdown: {
      items: Math.round(itemsCost + floorSurcharge + specialItemsSurcharge),
      labor: 0, // Nu opgenomen in €5,50/m² base
      transport: transportCost,
      extras: Math.round(extrasCost),
    },
  };
}
