"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Check } from "lucide-react"

export default function LaagstePrijsPage() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    uwPrijs: "",
    competitorPrijs: "",
    opmerkingen: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/price-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Kon aanvraag niet versturen')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      alert('Er ging iets mis. Probeer opnieuw of bel ons direct: 085 060 8180')
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-green-500">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Aanvraag Ontvangen! 🎉
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bedankt! We bellen je binnen 24 uur terug met een lagere prijs dan de concurrent.
              </p>
              <p className="text-gray-600">
                Dat is onze garantie. Geen praatjes, gewoon doen.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            💰 Laagste Prijs Garantie
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Heeft u elders een lagere offerte? Wij gaan er direct onder!
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stuur ons de concurrent offerte en wij bellen binnen 24 uur terug 
            met een lagere prijs. Dat is geen marketingpraatje maar een concrete garantie.
          </p>
        </div>

        {/* USP's */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold mb-2">Altijd Goedkoper</h3>
              <p className="text-sm text-gray-600">We gaan onder elke serieuze concurrent</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Binnen 24u Reactie</h3>
              <p className="text-sm text-gray-600">Snel antwoord, geen gedoe</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold mb-2">Eerlijke Prijzen</h3>
              <p className="text-sm text-gray-600">Transparant en betrouwbaar</p>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="border-2 border-orange-500">
          <CardHeader className="bg-orange-500 text-white">
            <CardTitle className="text-2xl">Concurrent Offerte Indienen</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Uw Gegevens</h3>
                
                <div>
                  <Label htmlFor="naam">Naam *</Label>
                  <Input
                    id="naam"
                    value={formData.naam}
                    onChange={(e) => setFormData({...formData, naam: e.target.value})}
                    placeholder="Voor- en achternaam"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="uw@email.nl"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="telefoon">Telefoon *</Label>
                  <Input
                    id="telefoon"
                    type="tel"
                    value={formData.telefoon}
                    onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                    placeholder="06 12345678"
                    required
                  />
                </div>
              </div>

              {/* Pricing Info */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Prijs Vergelijking</h3>
                
                <div>
                  <Label htmlFor="uwPrijs">Uw prijs van Budget Ontruiming *</Label>
                  <Input
                    id="uwPrijs"
                    value={formData.uwPrijs}
                    onChange={(e) => setFormData({...formData, uwPrijs: e.target.value})}
                    placeholder="Bijv. €1.234"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    De prijs die u van ons ontving per email
                  </p>
                </div>

                <div>
                  <Label htmlFor="competitorPrijs">Prijs van concurrent *</Label>
                  <Input
                    id="competitorPrijs"
                    value={formData.competitorPrijs}
                    onChange={(e) => setFormData({...formData, competitorPrijs: e.target.value})}
                    placeholder="Bijv. €1.150"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    De lagere prijs die u elders ontving
                  </p>
                </div>
              </div>

              {/* Upload Instructions */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg border-b pb-2">Concurrent Offerte</h3>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <div className="flex gap-3">
                    <Upload className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-blue-900 mb-2">Hoe stuurt u de offerte?</p>
                      <p className="text-sm text-blue-800 mb-2">
                        Na het versturen van dit formulier ontvangt u een bevestiging email. 
                        <strong> Reply op die email</strong> met de concurrent offerte als attachment (PDF of foto).
                      </p>
                      <p className="text-sm text-blue-800">
                        Of WhatsApp de offerte naar: <strong className="text-blue-900">085 060 8180</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="opmerkingen">Extra opmerkingen (optioneel)</Label>
                  <Textarea
                    id="opmerkingen"
                    value={formData.opmerkingen}
                    onChange={(e) => setFormData({...formData, opmerkingen: e.target.value})}
                    placeholder="Bijv. naam concurrent, bijzonderheden, etc."
                    rows={4}
                  />
                </div>
              </div>

              {/* Submit */}
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 text-lg font-bold"
              >
                Verstuur Aanvraag
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Wij bellen u binnen 24 uur terug met een lagere prijs
              </p>

            </form>
          </CardContent>
        </Card>

        {/* Voorwaarden */}
        <Card className="mt-8 bg-gray-50">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-3">⚠️ Voorwaarden Laagste Prijs Garantie</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• Offerte moet van een erkend bedrijf zijn (geen particulieren)</li>
              <li>• Zelfde werkzaamheden moeten worden vergeleken</li>
              <li>• Schriftelijke offerte vereist (geen mondelinge toezeggingen)</li>
              <li>• Wij gaan €50-€100 onder de concurrent (afhankelijk van bedrag)</li>
              <li>• Maximaal 10% korting op onze oorspronkelijke prijs</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

