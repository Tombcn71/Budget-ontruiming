"use client"

import { useState } from "react"
import { AlertCircle, Download } from "lucide-react"

// Lege prijsmatrix - Provider vult deze in
const LEGE_PRIJSMATRIX = {
  // Woningtype base prijzen (min/max range + gemiddelde m²)
  "seniorenkamer-min": 0,
  "seniorenkamer-max": 0,
  "seniorenkamer-avg-m2": 25,
  "appartement-min": 0,
  "appartement-max": 0,
  "appartement-avg-m2": 60,
  "eengezinswoning-min": 0,
  "eengezinswoning-max": 0,
  "eengezinswoning-avg-m2": 120,
  "bedrijfspand-min": 0,
  "bedrijfspand-max": 0,
  "bedrijfspand-avg-m2": 100,
  
  // Verdieping surcharges
  "verdieping-begane-grond": 0,
  "verdieping-1e": 0,
  "verdieping-2e": 0,
  "verdieping-3e": 0,
  
  // Volume multipliers (AI bepaalt inrichtingsniveau)
  "volume-empty": 0.7,
  "volume-sparse": 0.85,
  "volume-half": 1.0,
  "volume-full": 1.2,
  "volume-very-full": 1.4,
  
  // Extra services
  "service-vloer-per-m2": 0,
  "service-behang-per-m2": 0,
  "service-gaatjes-per-m2": 0,
  "service-schilderwerk-per-m2": 0,
  "service-gordijnen-flat": 0,
  "service-inpakken-flat": 0,
  
  // Transport & overig
  "transport-basis": 0,
  "special-item-surcharge": 0,
  "lift-korting-percentage": 50, // 50% = helft van verdieping surcharge korting
  "minimum-order": 0,
}

export default function OntruimingPricingTraining() {
  const [prijzen, setPrijzen] = useState(LEGE_PRIJSMATRIX)
  const [testBerekening, setTestBerekening] = useState({
    woningType: "",
    m2: 0,
    verdieping: "",
    liftAanwezig: false,
    volumeLevel: "",
    aantalSpecialItems: 0,
    vloerM2: 0,
    behangM2: 0,
    gaatjesM2: 0,
    schilderwerkM2: 0,
    gordijnen: false,
    inpakservice: false,
  })

  // BEREKEN TOTAALPRIJS
  const berekenTotaal = () => {
    // 1. Base prijs op basis van woningtype
    const typeKey = testBerekening.woningType as keyof typeof prijzen
    const minKey = `${testBerekening.woningType}-min` as keyof typeof prijzen
    const maxKey = `${testBerekening.woningType}-max` as keyof typeof prijzen
    const avgM2Key = `${testBerekening.woningType}-avg-m2` as keyof typeof prijzen
    
    const minPrijs = prijzen[minKey] as number || 0
    const maxPrijs = prijzen[maxKey] as number || 0
    const gemiddeldeM2 = prijzen[avgM2Key] as number || 60
    
    // Interpoleer binnen min-max op basis van m²
    const m2Ratio = Math.min(Math.max(testBerekening.m2 / gemiddeldeM2, 0.5), 2.0)
    const basePrice = minPrijs + ((maxPrijs - minPrijs) * (m2Ratio - 0.5) / 1.5)
    
    // 2. Volume multiplier toepassen
    const volumeKey = `volume-${testBerekening.volumeLevel}` as keyof typeof prijzen
    const volumeMultiplier = prijzen[volumeKey] as number || 1.0
    
    // 3. Special items surcharge
    const specialItemCost = testBerekening.aantalSpecialItems * (prijzen["special-item-surcharge"] as number)
    
    const itemsCost = basePrice * volumeMultiplier + specialItemCost
    
    // 4. Verdieping surcharge
    const verdieKey = `verdieping-${testBerekening.verdieping}` as keyof typeof prijzen
    let floorSurcharge = prijzen[verdieKey] as number || 0
    
    // Lift korting
    if (testBerekening.liftAanwezig && floorSurcharge > 0) {
      const kortingPercentage = prijzen["lift-korting-percentage"] as number
      floorSurcharge = Math.round(floorSurcharge * (1 - kortingPercentage / 100))
    }
    
    // 5. Extra services
    let extrasCost = 0
    if (testBerekening.vloerM2 > 0) {
      extrasCost += testBerekening.vloerM2 * (prijzen["service-vloer-per-m2"] as number)
    }
    if (testBerekening.behangM2 > 0) {
      extrasCost += testBerekening.behangM2 * (prijzen["service-behang-per-m2"] as number)
    }
    if (testBerekening.gaatjesM2 > 0) {
      extrasCost += testBerekening.gaatjesM2 * (prijzen["service-gaatjes-per-m2"] as number)
    }
    if (testBerekening.schilderwerkM2 > 0) {
      extrasCost += testBerekening.schilderwerkM2 * (prijzen["service-schilderwerk-per-m2"] as number)
    }
    if (testBerekening.gordijnen) {
      extrasCost += prijzen["service-gordijnen-flat"] as number
    }
    if (testBerekening.inpakservice) {
      extrasCost += prijzen["service-inpakken-flat"] as number
    }
    
    // 6. Transport
    const transportCost = prijzen["transport-basis"] as number
    
    // Totaal
    const subtotaal = itemsCost + floorSurcharge + extrasCost + transportCost
    const totaal = Math.max(subtotaal, prijzen["minimum-order"] as number)
    
    return {
      basePrice: Math.round(basePrice),
      volumeMultiplier,
      itemsCost: Math.round(itemsCost),
      floorSurcharge: Math.round(floorSurcharge),
      specialItemCost: Math.round(specialItemCost),
      extrasCost: Math.round(extrasCost),
      transportCost: Math.round(transportCost),
      subtotaal: Math.round(subtotaal),
      totaal: Math.round(totaal),
      m2Ratio,
      minPrijs,
      maxPrijs,
    }
  }

  const result = berekenTotaal()

  const downloadPrijzen = () => {
    const data = {
      prijsmatrix: prijzen,
      datum: new Date().toISOString(),
      notitie: "Complete prijsmatrix voor ontruimingen - gebruik deze data in de calculator"
    }
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ontruiming-prijsmatrix-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p className="font-semibold">INTERN - Prijsmatrix voor Ontruimingen</p>
          </div>
        </div>
      </div>

      <div className="bg-orange-600 text-white py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-bold text-lg mb-2">Hey Provider! 👋</h2>
          <p className="text-sm">
            Vul hieronder je prijzen in voor alle woningtypes, verdiepingen en extra services. 
            Deze data gebruiken wij om de <strong>online AI calculator</strong> correct te laten werken voor klanten. 
            Test met de calculator rechts of het klopt, en download het bestand als alles goed is!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Ontruiming Prijsmatrix Trainer</h1>
            <p className="text-gray-600">Vul de basis prijzen in, calculator doet de rest</p>
          </div>
          <button
            onClick={downloadPrijzen}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2 font-semibold"
          >
            <Download className="w-5 h-5" />
            Download Matrix
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LINKS: Input velden */}
          <div className="xl:col-span-2 space-y-6">
            {/* 1. Woningtype Base Prijzen */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-orange-600">1. Woningtype Base Prijzen (min - max)</h2>
              <p className="text-sm text-gray-600 mb-4">
                De calculator interpoleert binnen deze range op basis van m². Ook geef je het gemiddelde m² aan.
              </p>
              
              <div className="space-y-4">
                {/* Seniorenkamer */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">Seniorenkamer</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Min. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["seniorenkamer-min"]}
                          onChange={(e) => setPrijzen({...prijzen, "seniorenkamer-min": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Max. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["seniorenkamer-max"]}
                          onChange={(e) => setPrijzen({...prijzen, "seniorenkamer-max": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Gem. m²</label>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={prijzen["seniorenkamer-avg-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "seniorenkamer-avg-m2": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">m²</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Appartement */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">Appartement</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Min. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["appartement-min"]}
                          onChange={(e) => setPrijzen({...prijzen, "appartement-min": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Max. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["appartement-max"]}
                          onChange={(e) => setPrijzen({...prijzen, "appartement-max": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Gem. m²</label>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={prijzen["appartement-avg-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "appartement-avg-m2": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">m²</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eengezinswoning */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">Eengezinswoning</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Min. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["eengezinswoning-min"]}
                          onChange={(e) => setPrijzen({...prijzen, "eengezinswoning-min": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Max. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["eengezinswoning-max"]}
                          onChange={(e) => setPrijzen({...prijzen, "eengezinswoning-max": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Gem. m²</label>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={prijzen["eengezinswoning-avg-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "eengezinswoning-avg-m2": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">m²</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bedrijfspand */}
                <div className="border rounded-lg p-4 bg-gray-50">
                  <h3 className="font-semibold mb-3">Bedrijfspand</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium mb-1">Min. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["bedrijfspand-min"]}
                          onChange={(e) => setPrijzen({...prijzen, "bedrijfspand-min": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Max. prijs</label>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">€</span>
                        <input
                          type="number"
                          value={prijzen["bedrijfspand-max"]}
                          onChange={(e) => setPrijzen({...prijzen, "bedrijfspand-max": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Gem. m²</label>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={prijzen["bedrijfspand-avg-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "bedrijfspand-avg-m2": parseInt(e.target.value) || 0})}
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 2. Verdieping Surcharges */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-purple-600">2. Verdieping Toeslagen</h2>
                <p className="text-sm text-gray-600 mb-4">Extra kosten per verdieping</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Begane grond</span>
                    <div className="flex items-center gap-1">
                      <span>€</span>
                      <input
                        type="number"
                        value={prijzen["verdieping-begane-grond"]}
                        onChange={(e) => setPrijzen({...prijzen, "verdieping-begane-grond": parseInt(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">1e verdieping</span>
                    <div className="flex items-center gap-1">
                      <span>€</span>
                      <input
                        type="number"
                        value={prijzen["verdieping-1e"]}
                        onChange={(e) => setPrijzen({...prijzen, "verdieping-1e": parseInt(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">2e verdieping</span>
                    <div className="flex items-center gap-1">
                      <span>€</span>
                      <input
                        type="number"
                        value={prijzen["verdieping-2e"]}
                        onChange={(e) => setPrijzen({...prijzen, "verdieping-2e": parseInt(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">3e verdieping</span>
                    <div className="flex items-center gap-1">
                      <span>€</span>
                      <input
                        type="number"
                        value={prijzen["verdieping-3e"]}
                        onChange={(e) => setPrijzen({...prijzen, "verdieping-3e": parseInt(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                    </div>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Lift korting %</span>
                      <div className="flex items-center gap-1">
                        <input
                          type="number"
                          value={prijzen["lift-korting-percentage"]}
                          onChange={(e) => setPrijzen({...prijzen, "lift-korting-percentage": parseInt(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                        <span>%</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Als lift aanwezig is, hoeveel % korting op verdieping toeslag</p>
                  </div>
                </div>
              </div>

              {/* 3. Volume Multipliers */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-blue-600">3. Volume Multipliers (AI)</h2>
                <p className="text-sm text-gray-600 mb-4">AI bepaalt hoe vol de woning is</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium block">Empty (leeg)</span>
                      <span className="text-xs text-gray-500">0-10% vol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={prijzen["volume-empty"]}
                        onChange={(e) => setPrijzen({...prijzen, "volume-empty": parseFloat(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                      <span>×</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium block">Sparse (minimaal)</span>
                      <span className="text-xs text-gray-500">10-30% vol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={prijzen["volume-sparse"]}
                        onChange={(e) => setPrijzen({...prijzen, "volume-sparse": parseFloat(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                      <span>×</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium block">Half (normaal)</span>
                      <span className="text-xs text-gray-500">30-60% vol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={prijzen["volume-half"]}
                        onChange={(e) => setPrijzen({...prijzen, "volume-half": parseFloat(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                      <span>×</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium block">Full (vol)</span>
                      <span className="text-xs text-gray-500">60-85% vol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={prijzen["volume-full"]}
                        onChange={(e) => setPrijzen({...prijzen, "volume-full": parseFloat(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                      <span>×</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-medium block">Very Full (overvol)</span>
                      <span className="text-xs text-gray-500">85%+ vol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        step="0.01"
                        value={prijzen["volume-very-full"]}
                        onChange={(e) => setPrijzen({...prijzen, "volume-very-full": parseFloat(e.target.value) || 0})}
                        className="w-20 px-2 py-1 border rounded text-sm"
                      />
                      <span>×</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Extra Services */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-green-600">4. Extra Werkzaamheden</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-3 text-sm">Per m² prijzen</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Vloer verwijderen</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          step="0.5"
                          value={prijzen["service-vloer-per-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-vloer-per-m2": parseFloat(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">/m²</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Behang verwijderen</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          step="0.5"
                          value={prijzen["service-behang-per-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-behang-per-m2": parseFloat(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">/m²</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Gaatjes stoppen</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          step="0.5"
                          value={prijzen["service-gaatjes-per-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-gaatjes-per-m2": parseFloat(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">/m²</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Schilderwerk</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          step="0.5"
                          value={prijzen["service-schilderwerk-per-m2"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-schilderwerk-per-m2": parseFloat(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                        <span className="text-xs">/m²</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-sm">Flat rate prijzen</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Gordijnen verwijderen</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          value={prijzen["service-gordijnen-flat"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-gordijnen-flat": parseInt(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Inpakservice</span>
                      <div className="flex items-center gap-1">
                        <span>€</span>
                        <input
                          type="number"
                          value={prijzen["service-inpakken-flat"]}
                          onChange={(e) => setPrijzen({...prijzen, "service-inpakken-flat": parseInt(e.target.value) || 0})}
                          className="w-20 px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Transport & Overig */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-amber-600">5. Transport & Overig</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Basis transport kosten</span>
                  <div className="flex items-center gap-1">
                    <span>€</span>
                    <input
                      type="number"
                      value={prijzen["transport-basis"]}
                      onChange={(e) => setPrijzen({...prijzen, "transport-basis": parseInt(e.target.value) || 0})}
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium block">Special item surcharge</span>
                    <span className="text-xs text-gray-500">Per zwaar/fragiel item (piano, kluis, etc)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>€</span>
                    <input
                      type="number"
                      value={prijzen["special-item-surcharge"]}
                      onChange={(e) => setPrijzen({...prijzen, "special-item-surcharge": parseInt(e.target.value) || 0})}
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-3 mt-3">
                  <span className="text-sm font-medium">Minimum order waarde</span>
                  <div className="flex items-center gap-1">
                    <span>€</span>
                    <input
                      type="number"
                      value={prijzen["minimum-order"]}
                      onChange={(e) => setPrijzen({...prijzen, "minimum-order": parseInt(e.target.value) || 0})}
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RECHTS: Live Test Calculator */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-4">Test Berekening</h2>
              
              <div className="space-y-3 mb-6">
                <div>
                  <label className="block text-xs font-semibold mb-1">Woningtype</label>
                  <select
                    value={testBerekening.woningType}
                    onChange={(e) => setTestBerekening({...testBerekening, woningType: e.target.value})}
                    className="w-full px-3 py-2 border rounded text-sm"
                  >
                    <option value="">Kies type</option>
                    <option value="seniorenkamer">Seniorenkamer</option>
                    <option value="appartement">Appartement</option>
                    <option value="eengezinswoning">Eengezinswoning</option>
                    <option value="bedrijfspand">Bedrijfspand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Vierkante meters</label>
                  <input
                    type="number"
                    value={testBerekening.m2 || ""}
                    onChange={(e) => setTestBerekening({...testBerekening, m2: parseInt(e.target.value) || 0})}
                    placeholder="bijv. 75"
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Verdieping</label>
                  <select
                    value={testBerekening.verdieping}
                    onChange={(e) => setTestBerekening({...testBerekening, verdieping: e.target.value})}
                    className="w-full px-3 py-2 border rounded text-sm"
                  >
                    <option value="">Kies verdieping</option>
                    <option value="begane-grond">Begane grond</option>
                    <option value="1e">1e verdieping</option>
                    <option value="2e">2e verdieping</option>
                    <option value="3e">3e verdieping</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={testBerekening.liftAanwezig}
                      onChange={(e) => setTestBerekening({...testBerekening, liftAanwezig: e.target.checked})}
                    />
                    <span>Lift aanwezig</span>
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Volume level (AI bepaalt)</label>
                  <select
                    value={testBerekening.volumeLevel}
                    onChange={(e) => setTestBerekening({...testBerekening, volumeLevel: e.target.value})}
                    className="w-full px-3 py-2 border rounded text-sm"
                  >
                    <option value="">Kies niveau</option>
                    <option value="empty">Empty (leeg)</option>
                    <option value="sparse">Sparse (minimaal)</option>
                    <option value="half">Half (normaal)</option>
                    <option value="full">Full (vol)</option>
                    <option value="very-full">Very Full (overvol)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">Aantal special items</label>
                  <input
                    type="number"
                    value={testBerekening.aantalSpecialItems || ""}
                    onChange={(e) => setTestBerekening({...testBerekening, aantalSpecialItems: parseInt(e.target.value) || 0})}
                    placeholder="0"
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>

                <div className="border-t pt-3 mt-3">
                  <p className="text-xs font-semibold mb-2">Extra werkzaamheden (optioneel)</p>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs mb-1">Vloer m²</label>
                        <input
                          type="number"
                          value={testBerekening.vloerM2 || ""}
                          onChange={(e) => setTestBerekening({...testBerekening, vloerM2: parseInt(e.target.value) || 0})}
                          placeholder="0"
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1">Behang m²</label>
                        <input
                          type="number"
                          value={testBerekening.behangM2 || ""}
                          onChange={(e) => setTestBerekening({...testBerekening, behangM2: parseInt(e.target.value) || 0})}
                          placeholder="0"
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs mb-1">Gaatjes m²</label>
                        <input
                          type="number"
                          value={testBerekening.gaatjesM2 || ""}
                          onChange={(e) => setTestBerekening({...testBerekening, gaatjesM2: parseInt(e.target.value) || 0})}
                          placeholder="0"
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs mb-1">Schilder m²</label>
                        <input
                          type="number"
                          value={testBerekening.schilderwerkM2 || ""}
                          onChange={(e) => setTestBerekening({...testBerekening, schilderwerkM2: parseInt(e.target.value) || 0})}
                          placeholder="0"
                          className="w-full px-2 py-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="flex items-center gap-2 text-xs">
                        <input
                          type="checkbox"
                          checked={testBerekening.gordijnen}
                          onChange={(e) => setTestBerekening({...testBerekening, gordijnen: e.target.checked})}
                        />
                        <span>Gordijnen verwijderen</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs">
                        <input
                          type="checkbox"
                          checked={testBerekening.inpakservice}
                          onChange={(e) => setTestBerekening({...testBerekening, inpakservice: e.target.checked})}
                        />
                        <span>Inpakservice</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg p-4 text-white">
                <h3 className="font-bold mb-3">Berekening Breakdown</h3>
                <div className="space-y-2 text-xs">
                  <div className="bg-white/10 rounded p-2">
                    <p className="font-semibold mb-1">1. Base Prijs (woningtype + m²)</p>
                    <div className="pl-2 space-y-0.5 font-mono">
                      <div className="flex justify-between">
                        <span>Range €{result.minPrijs} - €{result.maxPrijs}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>m² ratio: {result.m2Ratio.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-yellow-300">
                        <span>Base prijs:</span>
                        <span className="font-bold">€{result.basePrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded p-2">
                    <p className="font-semibold mb-1">2. Volume Multiplier (AI)</p>
                    <div className="pl-2 space-y-0.5 font-mono">
                      <div className="flex justify-between text-yellow-300">
                        <span>€{result.basePrice} × {result.volumeMultiplier}:</span>
                        <span className="font-bold">€{result.itemsCost - result.specialItemCost}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 font-mono">
                    <div className="flex justify-between">
                      <span>3. Special items ({testBerekening.aantalSpecialItems}×):</span>
                      <span>€{result.specialItemCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4. Verdieping{testBerekening.liftAanwezig ? ' (met lift)' : ''}:</span>
                      <span>€{result.floorSurcharge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>5. Extra services:</span>
                      <span>€{result.extrasCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>6. Transport:</span>
                      <span>€{result.transportCost}</span>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-2 mt-2 space-y-1 font-mono">
                    <div className="flex justify-between text-sm">
                      <span>Subtotaal:</span>
                      <span>€{result.subtotaal}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Minimum order:</span>
                      <span>€{prijzen["minimum-order"]}</span>
                    </div>
                  </div>

                  <div className="flex justify-between border-t-2 border-white/40 pt-2 mt-2 text-lg font-bold">
                    <span>KLANT BETAALT:</span>
                    <span className="text-yellow-300">€{result.totaal}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
              <p className="font-bold text-yellow-900 mb-2">✅ Klaar?</p>
              <p className="text-sm text-yellow-800">Klik op groene "Download Matrix" knop bovenaan en stuur het bestand naar het team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

