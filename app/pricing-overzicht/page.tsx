import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingOverzicht() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pricing Overzicht</h1>
          <p className="text-gray-600">Interne documentatie - Alle tarieven en berekeningen</p>
        </div>

        {/* Basis Ontruiming */}
        <Card>
          <CardHeader className="bg-orange-500 text-white">
            <CardTitle>Basis Ontruiming Tarieven - NIEUWE STRUCTUUR</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-lg mb-2">Basis Prijs per m²</h3>
                  <div className="bg-orange-50 p-4 rounded-lg mb-3">
                    <p className="text-3xl font-bold text-orange-600">€10 / m²</p>
                    <p className="text-xs text-gray-600 mt-1">Simpel en transparant - geen verborgen kosten</p>
                  </div>
                  <div className="text-sm space-y-2">
                    <p><strong>Voorbeelden:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>• Seniorenkamer 25m² = €250</li>
                      <li>• Appartement 60m² = €600</li>
                      <li>• Eengezinswoning 120m² = €1.200</li>
                    </ul>
                  </div>
                  <p className="text-xs text-green-600 mt-3 font-semibold">
                    ✅ Veel goedkoper voor sociale huur!
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-bold text-lg mb-2">Verdieping Surcharge</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Begane grond:</strong> €0</li>
                    <li>• <strong>1e verdieping:</strong> €75</li>
                    <li>• <strong>2e verdieping:</strong> €150</li>
                    <li>• <strong>3e of hoger:</strong> €250</li>
                    <li className="text-green-600">• <strong>Lift aanwezig:</strong> -50% korting</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    + Transport: €150 vast
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 mt-4">
                <h3 className="font-bold text-lg mb-2">AI Volume Level Multipliers</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Sparse (minimaal):</strong> 0.85x multiplier (-15% korting)</li>
                  <li>• <strong>Half (normaal):</strong> 1.0x multiplier (standaard)</li>
                  <li>• <strong>Full (vol):</strong> 1.2x multiplier (+20% duurder)</li>
                  <li>• <strong>Very Full (overvol):</strong> 1.4x multiplier (+40% duurder)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-2">
                  * AI analyseert foto's en bepaalt inrichtingsniveau<br/>
                  * Dit is de HOOFDFACTOR voor prijsverschil (kan tot 65% verschil maken!)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Extra Werkzaamheden */}
        <Card>
          <CardHeader className="bg-blue-500 text-white">
            <CardTitle>Extra Werkzaamheden</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-bold mb-1">Vloer verwijderen (normaal)</h4>
                  <p className="text-2xl font-bold text-green-600">€2 / m²</p>
                  <p className="text-xs text-gray-500">Laminaat, vinyl, tapijt (niet vastgelijmd)</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">✅ Nieuw: €1 goedkoper!</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-1">Vloer verwijderen (vastgelijmd)</h4>
                  <p className="text-2xl font-bold text-blue-600">€3,50 / m²</p>
                  <p className="text-xs text-gray-500">Vastgelijmde vloer (meer werk)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-bold mb-1">Behang verwijderen</h4>
                  <p className="text-2xl font-bold text-green-600">€3,50 / m²</p>
                  <p className="text-xs text-gray-500">Inclusief afvoer</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">✅ Nieuw: €1,50 goedkoper!</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-1">Gaatjes stoppen</h4>
                  <p className="text-2xl font-bold text-blue-600">€1 / m²</p>
                  <p className="text-xs text-gray-500">Pleisterwerk kleine gaten</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-bold mb-1">Schilderwerk</h4>
                  <p className="text-2xl font-bold text-green-600">€12,50 / m²</p>
                  <p className="text-xs text-gray-500">Witte muren opleveren</p>
                  <p className="text-xs text-green-600 font-semibold mt-1">✅ Nieuw: €5 goedkoper!</p>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-bold mb-1">Gordijnen verwijderen</h4>
                  <p className="text-2xl font-bold text-blue-600">€50 vast</p>
                  <p className="text-xs text-gray-500">Inclusief rails en gordijnen</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rekenvoorbeeld */}
        <Card>
          <CardHeader className="bg-green-600 text-white">
            <CardTitle>Rekenvoorbeeld</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-green-50 p-6 rounded-lg space-y-3">
              <h3 className="font-bold text-lg">Scenario: Appartement 60m², 2e verdieping, geen lift</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span>Basis: 60m² × €10/m²</span>
                  <span className="font-mono">€600.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>AI Volume: Normaal bewoond (1.0x)</span>
                  <span className="font-mono">€600.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>2e verdieping surcharge</span>
                  <span className="font-mono">€150.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Transport</span>
                  <span className="font-mono">€150.00</span>
                </div>
                <div className="flex justify-between text-green-700 font-bold text-base pt-2">
                  <span>Basis ontruiming (excl. BTW)</span>
                  <span className="font-mono">€900.00</span>
                </div>
              </div>

              <div className="border-t-2 border-green-300 pt-4 mt-4">
                <h4 className="font-bold mb-2">Extra werkzaamheden:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Vloer verwijderen normaal (60m² × €2)</span>
                    <span className="font-mono">€120.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Behang verwijderen (120m² × €3,50)</span>
                    <span className="font-mono">€420.00</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Gordijnen verwijderen</span>
                    <span className="font-mono">€50.00</span>
                  </div>
                  <div className="flex justify-between text-blue-700 font-bold">
                    <span>Totaal extra's (excl. BTW)</span>
                    <span className="font-mono">€590.00</span>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-green-600 pt-4 mt-4">
                <div className="space-y-2 text-base">
                  <div className="flex justify-between">
                    <span>Totaal excl. BTW</span>
                    <span className="font-mono">€1.490,00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>BTW (21%)</span>
                    <span className="font-mono">€312,90</span>
                  </div>
                  <div className="flex justify-between text-green-800 font-bold text-xl pt-2 border-t-2">
                    <span>TOTAALPRIJS</span>
                    <span className="font-mono">€1.802,90</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 p-4 rounded mt-4 border-l-4 border-green-600">
                <p className="text-sm font-semibold text-green-800">
                  💰 Met nieuwe prijzen: €683,65 goedkoper dan oud systeem!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Calculator Logic */}
        <Card>
          <CardHeader className="bg-purple-500 text-white">
            <CardTitle>AI Calculator Logica</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded">
                <h4 className="font-bold mb-2">Berekening Formula (NIEUW):</h4>
                <code className="text-sm bg-white p-3 block rounded border">
                  // 1. Basis prijs: SIMPEL €10/m²<br/>
                  basisPrijs = vierkanteMeter * 10;<br/>
                  <br/>
                  // 2. Pas AI volume multiplier toe<br/>
                  volumeMultiplier = AI analyseert foto's (0.85x - 1.4x);<br/>
                  itemsCost = basisPrijs * volumeMultiplier;<br/>
                  <br/>
                  // 3. Voeg vaste kosten toe<br/>
                  verdiepingSurcharge = floor cost (met lift discount);<br/>
                  transportCost = €150;<br/>
                  <br/>
                  // 4. Extra werkzaamheden<br/>
                  vloerCost = m² × (€2 normaal OF €3,50 vastgelijmd);<br/>
                  behangCost = m² × €3,50;<br/>
                  schilderwerkCost = m² × €12,50;<br/>
                  extrasCost = som van alle extras;<br/>
                  <br/>
                  // 5. Bereken totaal<br/>
                  subtotal = itemsCost + verdiepingSurcharge + transportCost + extrasCost;<br/>
                  btw = subtotal * 0.21;<br/>
                  <strong>totaal = subtotal + btw;</strong>
                </code>
              </div>

              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2">⚠️ Belangrijke notities:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Basis: €10/m²</strong> - Transparant en concurrerend voor sociale huur</li>
                  <li>• <strong>AI volume level</strong> heeft GROTE impact (0.85x - 1.4x = 65% verschil mogelijk!)</li>
                  <li>• <strong>Lift aanwezig</strong> = 50% korting op verdieping surcharge</li>
                  <li>• <strong>Transport</strong> = altijd €150 (vast tarief)</li>
                  <li>• <strong>Vloer</strong> = €2/m² normaal OF €3,50/m² vastgelijmd</li>
                  <li>• <strong>Behang</strong> = €3,50/m² (was €5 - nu goedkoper!)</li>
                  <li>• <strong>Schilderwerk</strong> = €12,50/m² (sociale huur tarief)</li>
                  <li>• <strong>BTW</strong> wordt altijd als laatste berekend (21% over subtotaal)</li>
                  <li>• <strong>Minimum prijs</strong> = €250 (kleine opdrachten)</li>
                  <li>• Prijs is indicatie - definitief na adviesgesprek</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Locaties */}
        <Card>
          <CardHeader className="bg-gray-700 text-white">
            <CardTitle>Code Locaties</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-3 text-sm font-mono bg-gray-50 p-4 rounded">
              <div>
                <strong className="text-orange-600">Pricing calculator:</strong>
                <p className="ml-4">/lib/pricing/ai-calculator.ts</p>
              </div>
              <div>
                <strong className="text-orange-600">AI analyse:</strong>
                <p className="ml-4">/app/api/analyze/route.ts</p>
              </div>
              <div>
                <strong className="text-orange-600">Quote form:</strong>
                <p className="ml-4">/components/ai-quote-form.tsx</p>
              </div>
              <div>
                <strong className="text-orange-600">Email template:</strong>
                <p className="ml-4">/app/api/send-quote/route.ts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-4">
          <p>Budget Ontruiming - Interne Documentatie</p>
          <p className="text-xs">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
        </div>

      </div>
    </div>
  )
}

