"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Loader2, Check, Sparkles } from "lucide-react"
import { PhotoUpload } from "@/components/photo-upload"
import { calculatePriceFromAI } from "@/lib/pricing/ai-calculator"

interface AIQuoteFormProps {
  className?: string
}

export function AIQuoteForm({ className = "" }: AIQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [photos, setPhotos] = useState<File[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any[]>([])
  const [priceResult, setPriceResult] = useState<any>(null)

  const [formData, setFormData] = useState({
    postcode: "",
    woningType: "",
    vierkanteMeter: "",
    verdieping: "",
    vloerVerwijderen: false,
    behangVerwijderen: false,
    gaatjesToppen: false,
    schilderwerk: false,
    gordijnenVerwijderen: false,
    naam: "",
    email: "",
    telefoon: "",
  })

  const handleNext = async () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      await analyzePhotos()
      setCurrentStep(3)
    }
  }

  const analyzePhotos = async () => {
    if (photos.length === 0) return

    setIsAnalyzing(true)
    const results = []

    try {
      for (const photo of photos) {
        const formData = new FormData()
        formData.append('file', photo)
        
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
        const { url } = await uploadRes.json()

        try {
          const analyzeRes = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ imageUrl: url }),
          })
          
          if (!analyzeRes.ok) {
            const errorData = await analyzeRes.json()
            console.warn('AI analyse mislukt:', errorData)
            console.warn('⚠️ Gebruik fallback schatting - voeg OpenAI credits toe voor echte AI analyse')
            
            // Slimmere fallback op basis van vierkante meters
            const sqm = parseInt(formData.vierkanteMeter?.split('-')[0] || '75')
            const estimatedItems = Math.max(3, Math.floor(sqm / 15))
            const estimatedBoxes = Math.max(5, Math.floor(sqm / 10))
            const estimatedHours = Math.max(2, Math.floor(sqm / 25))
            
            const analysis = {
              room_type: 'algemeen',
              furniture: [
                { item: 'diversen', quantity: estimatedItems, size: 'medium' as const }
              ],
              boxes_estimate: estimatedBoxes,
              volume_level: 'half' as const,
              floor_visible_percentage: 50,
              special_items: [],
              access_notes: 'Geschatte analyse (geen AI)',
              estimated_hours: estimatedHours,
            }
            results.push({ url, analysis })
          } else {
            const responseData = await analyzeRes.json()
            console.log('✅ AI Analyse succesvol:', responseData)
            results.push({ url, analysis: responseData.analysis })
          }
        } catch (error) {
          console.error('❌ AI analyse error:', error)
          console.warn('⚠️ Gebruik fallback schatting')
          
          // Slimmere fallback op basis van vierkante meters
          const sqm = parseInt(formData.vierkanteMeter?.split('-')[0] || '75')
          const estimatedItems = Math.max(3, Math.floor(sqm / 15))
          const estimatedBoxes = Math.max(5, Math.floor(sqm / 10))
          const estimatedHours = Math.max(2, Math.floor(sqm / 25))
          
          const analysis = {
            room_type: 'algemeen',
            furniture: [
              { item: 'diversen', quantity: estimatedItems, size: 'medium' as const }
            ],
            boxes_estimate: estimatedBoxes,
            volume_level: 'half' as const,
            floor_visible_percentage: 50,
            special_items: [],
            access_notes: 'Geschatte analyse (fout opgetreden)',
            estimated_hours: estimatedHours,
          }
          results.push({ url, analysis })
        }
      }

      setAnalysisResults(results)
      
      console.log('📊 Alle AI analyses:', results)
      console.log('📋 Form data voor berekening:', formData)

      // Bereken echte prijs op basis van AI analyse
      const priceCalculation = calculatePriceFromAI(formData, results)
      
      console.log('💰 Berekende prijs:', priceCalculation)
      console.log('💰 Totaal:', priceCalculation.total)
      console.log('💰 Breakdown:', priceCalculation.breakdown)
      
      setPriceResult({
        total: priceCalculation.total,
        breakdown: {
          items: priceCalculation.breakdown.items,
          labor: priceCalculation.breakdown.labor,
          transport: priceCalculation.breakdown.transport,
          extras: priceCalculation.breakdown.extras,
        }
      })
      
      console.log('✅ Prijs state updated')
    } catch (error) {
      console.error('Analysis error:', error)
      alert('Er ging iets mis bij de analyse. Probeer opnieuw.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progressPercentage = (currentStep / 3) * 100

  return (
    <Card className={`p-6 lg:p-8 bg-white shadow-2xl border-0 ${className}`}>
      {currentStep < 3 ? (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-10 h-10 lg:w-7 lg:h-7 text-primary" />
            <h3 className="font-bold text-xl text-foreground">
              Direct een prijsindicatie met onze slimme AI tool.
            </h3>
          </div>
          <p className="text-sm italic text-muted-foreground mb-4">
            {currentStep === 1 && "Even een paar vragen beantwoorden en wat foto's uploaden dat is alles"}
            {currentStep === 2 && "Selecteer extra werkzaamheden en upload minimaal 3 foto's"}
          </p>

          <div className="mb-6">
            <div className="flex justify-between text-xs text-foreground mb-2">
              <span className={currentStep >= 1 ? "font-bold" : ""}>Gegevens</span>
              <span className={currentStep >= 2 ? "font-bold" : ""}>Foto's</span>
              <span className={currentStep >= 3 ? "font-bold" : ""}>Resultaat</span>
            </div>
            <Progress value={progressPercentage} className="h-2 bg-muted" />
          </div>

          <form className="space-y-4">
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label className="text-foreground text-sm mb-2 block">Postcode *</Label>
                  <Input
                    placeholder="Bijv. 3000 AB"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="bg-background border-0 h-11"
                    required
                  />
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Woning Type *</Label>
                  <Select
                    value={formData.woningType}
                    onValueChange={(value) => setFormData({ ...formData, woningType: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Selecteer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appartement">Appartement</SelectItem>
                      <SelectItem value="tussenwoning">Tussenwoning</SelectItem>
                      <SelectItem value="hoekwoning">Hoekwoning</SelectItem>
                      <SelectItem value="vrijstaand">Vrijstaande woning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Vierkante Meter *</Label>
                  <Select
                    value={formData.vierkanteMeter}
                    onValueChange={(value) => setFormData({ ...formData, vierkanteMeter: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Selecteer oppervlakte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50 m²</SelectItem>
                      <SelectItem value="50-75">50-75 m²</SelectItem>
                      <SelectItem value="75-100">75-100 m²</SelectItem>
                      <SelectItem value="100-150">100-150 m²</SelectItem>
                      <SelectItem value="150-200">150-200 m²</SelectItem>
                      <SelectItem value="200+">200+ m²</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-foreground text-sm mb-2 block">Verdieping *</Label>
                  <Select
                    value={formData.verdieping}
                    onValueChange={(value) => setFormData({ ...formData, verdieping: value })}
                  >
                    <SelectTrigger className="bg-background border-0 h-11">
                      <SelectValue placeholder="Selecteer verdieping" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="begane-grond">Begane grond</SelectItem>
                      <SelectItem value="1e-verdieping">1e verdieping</SelectItem>
                      <SelectItem value="2e-verdieping">2e verdieping</SelectItem>
                      <SelectItem value="3e-verdieping">3e verdieping of hoger</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-foreground text-sm block">Extra Werkzaamheden (optioneel)</Label>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="vloer"
                      checked={formData.vloerVerwijderen}
                      onCheckedChange={(checked) => setFormData({ ...formData, vloerVerwijderen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="vloer" className="text-sm text-foreground cursor-pointer">
                      Vloer verwijderen
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="behang"
                      checked={formData.behangVerwijderen}
                      onCheckedChange={(checked) => setFormData({ ...formData, behangVerwijderen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="behang" className="text-sm text-foreground cursor-pointer">
                      Behang verwijderen
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gaatjes"
                      checked={formData.gaatjesToppen}
                      onCheckedChange={(checked) => setFormData({ ...formData, gaatjesToppen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="gaatjes" className="text-sm text-foreground cursor-pointer">
                      Gaatjes stoppen
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="schilderwerk"
                      checked={formData.schilderwerk}
                      onCheckedChange={(checked) => setFormData({ ...formData, schilderwerk: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="schilderwerk" className="text-sm text-foreground cursor-pointer">
                      Schilderwerk
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gordijnen"
                      checked={formData.gordijnenVerwijderen}
                      onCheckedChange={(checked) => setFormData({ ...formData, gordijnenVerwijderen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="gordijnen" className="text-sm text-foreground cursor-pointer">
                      Gordijnen verwijderen
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <Label className="text-foreground text-sm mb-2 block">Foto's uploaden *</Label>
                  <PhotoUpload 
                    onPhotosChange={setPhotos}
                    maxPhotos={10}
                    minPhotos={3}
                  />
                </div>
                
                {isAnalyzing && (
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-primary animate-spin" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          AI analyseert uw foto's...
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Dit kan 30-60 seconden duren
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              {currentStep > 1 && !isAnalyzing && (
                <Button
                  type="button"
                  onClick={handlePrevious}
                  variant="outline"
                  className="flex-1 bg-muted hover:bg-muted/90 text-foreground border-0 h-12"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Vorige
                </Button>
              )}
              <Button
                type="button"
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && (!formData.postcode || !formData.woningType || !formData.vierkanteMeter || !formData.verdieping)) ||
                  (currentStep === 2 && photos.length < 3) ||
                  isAnalyzing
                }
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyseren...
                  </>
                ) : (
                  <>
                    {currentStep === 2 ? "Bereken Prijs" : "Volgende"}
                    {currentStep < 2 && <ChevronRight className="w-4 h-4 ml-1" />}
                  </>
                )}
              </Button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-2">
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Analyse Compleet</span>
          </div>

          <h3 className="font-bold text-2xl text-foreground">Uw Instant Offerte:</h3>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
            <p className="text-4xl font-bold text-primary mb-2">
              €{priceResult?.total || '850'}
            </p>
            <p className="text-sm text-muted-foreground">
              Totale offerte voor uw woningontruiming
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 space-y-2 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Items & meubels</span>
              <span className="font-medium">€{priceResult?.breakdown.items || 450}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Arbeid (2 personen)</span>
              <span className="font-medium">€{priceResult?.breakdown.labor || 250}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Transport</span>
              <span className="font-medium">€{priceResult?.breakdown.transport || 150}</span>
            </div>
          </div>

          {/* Extra werkzaamheden gespecificeerd */}
          {(formData.vloerVerwijderen || formData.behangVerwijderen || formData.gaatjesToppen || formData.schilderwerk || formData.gordijnenVerwijderen) && (
            <div className="bg-background rounded-lg p-4 space-y-2 text-left border-2 border-primary/20">
              <h4 className="font-semibold text-sm text-foreground mb-2">🔧 Extra Werkzaamheden:</h4>
              {formData.vloerVerwijderen && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Vloer verwijderen</span>
                  <span className="font-medium">€150</span>
                </div>
              )}
              {formData.behangVerwijderen && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Behang verwijderen</span>
                  <span className="font-medium">€200</span>
                </div>
              )}
              {formData.gaatjesToppen && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Gaatjes stoppen</span>
                  <span className="font-medium">€100</span>
                </div>
              )}
              {formData.schilderwerk && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Schilderwerk</span>
                  <span className="font-medium">€250</span>
                </div>
              )}
              {formData.gordijnenVerwijderen && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Gordijnen verwijderen</span>
                  <span className="font-medium">€50</span>
                </div>
              )}
              <div className="flex justify-between text-sm border-t border-border pt-2 font-semibold">
                <span className="text-foreground">Subtotaal extra werkzaamheden</span>
                <span className="text-primary">€{priceResult?.breakdown.extras || 0}</span>
              </div>
            </div>
          )}

          {/* Gedetecteerde Items Overzicht */}
          {analysisResults.length > 0 && (() => {
            // Combineer alle meubels (zelfde logica als calculator)
            const allFurniture: Record<string, { quantity: number; size: string; item: string }> = {}
            let totalBoxes = 0
            let maxHours = 0
            const specialItems = new Set<string>()
            
            analysisResults.forEach(({ analysis }) => {
              totalBoxes += analysis.boxes_estimate
              if (analysis.estimated_hours > maxHours) maxHours = analysis.estimated_hours
              
              analysis.furniture.forEach((furniture: any) => {
                const key = `${furniture.item.toLowerCase()}-${furniture.size}`
                if (!allFurniture[key] || allFurniture[key].quantity < furniture.quantity) {
                  allFurniture[key] = {
                    quantity: furniture.quantity,
                    size: furniture.size,
                    item: furniture.item,
                  }
                }
              })
              
              if (analysis.special_items) {
                analysis.special_items.forEach((item: string) => specialItems.add(item))
              }
            })
            
            const furnitureList = Object.values(allFurniture)
            
            return (
              <div className="bg-muted/30 rounded-lg p-4 text-left">
                <h4 className="font-bold text-base text-foreground mb-3">🪑 Gedetecteerde Items:</h4>
                
                {furnitureList.length > 0 && (
                  <div className="bg-background rounded-md p-3 mb-3">
                    <p className="font-semibold text-sm text-foreground mb-2">Meubels & grote items:</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      {furnitureList.map((f, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>• {f.quantity}x {f.item}</span>
                          <span className="text-xs text-muted-foreground/70">({f.size})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="bg-background rounded-md p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">📦 Dozen/tassen (geschat):</span>
                    <span className="font-medium text-foreground">{totalBoxes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">⏱️ Geschatte tijd:</span>
                    <span className="font-medium text-foreground">{maxHours}u (2 personen)</span>
                  </div>
                  {specialItems.size > 0 && (
                    <div className="border-t border-border pt-2">
                      <p className="text-muted-foreground text-xs mb-1">⚠️ Bijzondere items:</p>
                      <p className="text-foreground text-xs">{Array.from(specialItems).join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })()}

          <div className="bg-primary/10 rounded-lg p-4">
            <p className="text-foreground font-bold text-lg mb-2">💰 Laagste Prijs Garantie</p>
            <p className="text-foreground text-sm">
              Vindt u elders een lagere prijs? Dan betalen wij het verschil terug!
            </p>
          </div>

          <div className="space-y-3 text-left pt-4">
            <Label className="text-foreground text-sm">Uw gegevens voor bevestiging:</Label>
            <Input
              placeholder="Naam"
              value={formData.naam}
              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
              className="bg-background border-0 h-11"
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-0 h-11"
            />
            <Input
              type="tel"
              placeholder="Telefoon"
              value={formData.telefoon}
              onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
              className="bg-background border-0 h-11"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base">
            Bevestig Offerte & Boek Nu
          </Button>

          <Button
            variant="ghost"
            onClick={() => {
              setCurrentStep(1)
              setPhotos([])
              setAnalysisResults([])
              setPriceResult(null)
              setFormData({
                postcode: "",
                woningType: "",
                vierkanteMeter: "",
                verdieping: "",
                vloerVerwijderen: false,
                behangVerwijderen: false,
                gaatjesToppen: false,
                schilderwerk: false,
                gordijnenVerwijderen: false,
                naam: "",
                email: "",
                telefoon: "",
              })
            }}
            className="text-foreground hover:text-foreground/80 hover:bg-transparent"
          >
            Nieuwe berekening starten
          </Button>
        </div>
      )}
    </Card>
  )
}


