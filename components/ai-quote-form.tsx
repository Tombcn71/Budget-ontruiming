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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const [formData, setFormData] = useState({
    postcode: "",
    woningType: "",
    vierkanteMeter: "",
    verdieping: "",
    liftAanwezig: false,
    inpakservice: false,
    vloerVerwijderen: false,
    vloerM2: "",
    behangVerwijderen: false,
    behangM2: "",
    gaatjesToppen: false,
    gaatjesM2: "",
    schilderwerk: false,
    schilderwerkM2: "",
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

  const handleSubmit = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    
    console.log('🔘 Button clicked!')
    console.log('📋 FormData:', formData)
    
    // Trim whitespace
    const naam = formData.naam?.trim() || ''
    const email = formData.email?.trim() || ''
    const telefoon = formData.telefoon?.trim() || ''

    if (!naam || !email || !telefoon) {
      console.error('❌ Validatie gefaald:', { naam, email, telefoon })
      alert('Vul alle velden in')
      return
    }

    console.log('✅ Validatie geslaagd:', { naam, email, telefoon })
    setIsSubmitting(true)

    try {
      console.log('📧 Offerte verzenden...')

      // Calculate price breakdown for email
      const extrasCost = priceResult?.breakdown?.extras || 0
      const itemsCost = (priceResult?.breakdown?.items || 0) + 
                       (priceResult?.breakdown?.labor || 0) + 
                       (priceResult?.breakdown?.transport || 0)
      const subtotal = itemsCost + extrasCost
      const btw = subtotal * 0.21
      const totalPrice = subtotal + btw

      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData,
          analysisResults,
          totalPrice,
          itemsCost,
          extrasCost,
          btw,
        }),
      })

      if (!response.ok) {
        throw new Error('Email kon niet worden verzonden')
      }

      console.log('✅ Offerte succesvol verzonden!')
      setSubmitSuccess(true)
      
      // Email bevat Calendly link, popup niet meer nodig

    } catch (error) {
      console.error('❌ Submit error:', error)
      alert('Er ging iets mis. Probeer opnieuw of bel ons direct.')
    } finally {
      setIsSubmitting(false)
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
                      <SelectItem value="seniorenkamer">Seniorenkamer / Zorgkamer</SelectItem>
                      <SelectItem value="appartement">Appartement (2-3 kamers)</SelectItem>
                      <SelectItem value="eengezinswoning">Eengezinswoning</SelectItem>
                      <SelectItem value="bedrijfspand">Bedrijfspand</SelectItem>
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
                
                {/* Lift aanwezig checkbox - alleen tonen bij verdieping > begane grond */}
                {formData.verdieping && formData.verdieping !== 'begane-grond' && (
                  <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-md">
                    <Checkbox
                      id="lift"
                      checked={formData.liftAanwezig}
                      onCheckedChange={(checked) => setFormData({ ...formData, liftAanwezig: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="lift" className="text-sm text-foreground cursor-pointer flex-1">
                      🛗 Lift aanwezig (bespaart tijd en kosten)
                    </label>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-foreground text-sm block">Extra Werkzaamheden (optioneel)</Label>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="vloer"
                        checked={formData.vloerVerwijderen}
                        onCheckedChange={(checked) => setFormData({ ...formData, vloerVerwijderen: checked as boolean, vloerM2: checked ? formData.vloerM2 : "" })}
                        className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label htmlFor="vloer" className="text-sm text-foreground cursor-pointer">
                        Vloer verwijderen (€3/m²)
                      </label>
                    </div>
                    {formData.vloerVerwijderen && (
                      <div className="ml-6 space-y-1">
                        <Input
                          type="number"
                          placeholder="Hoeveel m² vloer?"
                          value={formData.vloerM2}
                          onChange={(e) => setFormData({ ...formData, vloerM2: e.target.value })}
                          className="bg-background border-border h-10"
                          min="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Vul exacte oppervlakte in</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="behang"
                        checked={formData.behangVerwijderen}
                        onCheckedChange={(checked) => setFormData({ ...formData, behangVerwijderen: checked as boolean, behangM2: checked ? formData.behangM2 : "" })}
                        className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label htmlFor="behang" className="text-sm text-foreground cursor-pointer">
                        Behang verwijderen (€5/m²)
                      </label>
                    </div>
                    {formData.behangVerwijderen && (
                      <div className="ml-6 space-y-1">
                        <Input
                          type="number"
                          placeholder="Hoeveel m² wandoppervlak?"
                          value={formData.behangM2}
                          onChange={(e) => setFormData({ ...formData, behangM2: e.target.value })}
                          className="bg-background border-border h-10"
                          min="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Tip: wandoppervlak ≈ 2-3× woonoppervlak</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="gaatjes"
                        checked={formData.gaatjesToppen}
                        onCheckedChange={(checked) => setFormData({ ...formData, gaatjesToppen: checked as boolean, gaatjesM2: checked ? formData.gaatjesM2 : "" })}
                        className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label htmlFor="gaatjes" className="text-sm text-foreground cursor-pointer">
                        Gaatjes stoppen (€1/m²)
                      </label>
                    </div>
                    {formData.gaatjesToppen && (
                      <div className="ml-6 space-y-1">
                        <Input
                          type="number"
                          placeholder="Hoeveel m² wandoppervlak?"
                          value={formData.gaatjesM2}
                          onChange={(e) => setFormData({ ...formData, gaatjesM2: e.target.value })}
                          className="bg-background border-border h-10"
                          min="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Meestal zelfde als wandoppervlak</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="schilderwerk"
                        checked={formData.schilderwerk}
                        onCheckedChange={(checked) => setFormData({ ...formData, schilderwerk: checked as boolean, schilderwerkM2: checked ? formData.schilderwerkM2 : "" })}
                        className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                      />
                      <label htmlFor="schilderwerk" className="text-sm text-foreground cursor-pointer">
                        Schilderwerk (€17,50/m²)
                      </label>
                    </div>
                    {formData.schilderwerk && (
                      <div className="ml-6 space-y-1">
                        <Input
                          type="number"
                          placeholder="Hoeveel m² wandoppervlak?"
                          value={formData.schilderwerkM2}
                          onChange={(e) => setFormData({ ...formData, schilderwerkM2: e.target.value })}
                          className="bg-background border-border h-10"
                          min="1"
                          required
                        />
                        <p className="text-xs text-muted-foreground">Tip: wandoppervlak ≈ 2-3× woonoppervlak</p>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="gordijnen"
                      checked={formData.gordijnenVerwijderen}
                      onCheckedChange={(checked) => setFormData({ ...formData, gordijnenVerwijderen: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="gordijnen" className="text-sm text-foreground cursor-pointer">
                      Gordijnen verwijderen (€50)
                    </label>
                  </div>
                </div>

                {/* Inpakservice */}
                <div className="space-y-2 bg-amber-50 p-3 rounded-md border border-amber-200">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="inpakservice"
                      checked={formData.inpakservice}
                      onCheckedChange={(checked) => setFormData({ ...formData, inpakservice: checked as boolean })}
                      className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    />
                    <label htmlFor="inpakservice" className="text-sm text-foreground cursor-pointer font-medium">
                      📦 Inpakservice - Spullen uit kasten/keukenkasten halen (+€150)
                    </label>
                  </div>
                  <p className="text-xs text-muted-foreground ml-6">
                    Wij pakken alle spullen uit kasten, keukenkasten, laden, etc. en zorgen voor transport
                  </p>
                </div>

                <div className="pt-2">
                  <Label className="text-foreground text-sm mb-2 block">Foto's uploaden *</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    💡 Upload foto's van de verschillende kamers. Onze AI analyseert deze om te bepalen of de woning <strong>leegstaand, normaal of (over)vol</strong> is. Dit helpt ons een accurate prijsindicatie te geven.
                  </p>
                  <PhotoUpload 
                    onPhotosChange={setPhotos}
                    maxPhotos={10}
                    minPhotos={1}
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
              (currentStep === 2 && (
                photos.length < 1 ||
                    (formData.vloerVerwijderen && !formData.vloerM2) ||
                    (formData.behangVerwijderen && !formData.behangM2) ||
                    (formData.gaatjesToppen && !formData.gaatjesM2) ||
                    (formData.schilderwerk && !formData.schilderwerkM2)
                  )) ||
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

          <div className="space-y-1 mb-4">
            <h3 className="font-bold text-2xl text-foreground">Uw Offerte:</h3>
            <p className="text-sm text-muted-foreground">
              Voor {formData.woningType === 'seniorenkamer' ? 'seniorenkamer' : formData.woningType === 'appartement' ? 'appartement' : formData.woningType === 'eengezinswoning' ? 'eengezinswoning' : formData.woningType === 'bedrijfspand' ? 'bedrijfspand' : 'uw woning'} • {formData.vierkanteMeter} m² • {formData.verdieping === 'begane-grond' ? 'Begane grond' : formData.verdieping === '1e-verdieping' ? '1e verdieping' : formData.verdieping === '2e-verdieping' ? '2e verdieping' : '3e+ verdieping'}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
            <p className="text-4xl font-bold text-primary mb-2">
              €{priceResult?.total || '850'}
            </p>
            <p className="text-sm text-muted-foreground">
              Totale indicatieprijs voor ontruiming
            </p>
          </div>

          <div className="bg-background rounded-lg p-4 space-y-3 text-left">
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">Basisprijs ontruiming:</p>
              <div className="flex justify-between text-sm items-baseline">
                <div className="flex-1">
                  <span className="text-foreground font-medium">
                    {formData.woningType === 'seniorenkamer' && 'Seniorenkamer / Zorgkamer'}
                    {formData.woningType === 'appartement' && 'Appartement (2-3 kamers)'}
                    {formData.woningType === 'eengezinswoning' && 'Eengezinswoning'}
                    {formData.woningType === 'bedrijfspand' && 'Bedrijfspand'}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Richtprijs: {formData.woningType === 'seniorenkamer' && '€250 - €450'}
                    {formData.woningType === 'appartement' && '€450 - €850'}
                    {formData.woningType === 'eengezinswoning' && '€750 - €1.500'}
                    {formData.woningType === 'bedrijfspand' && '€400 - €1.500'}
                  </p>
                </div>
                <span className="font-bold text-base text-primary ml-4">€{priceResult?.breakdown.items || 450}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 italic">
                * Prijs o.b.v. {formData.vierkanteMeter} m² en vulniveau
              </p>
            </div>
            
            <div className="border-t border-border pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transport & verwerking</span>
                <span className="font-medium">€{priceResult?.breakdown.transport || 150}</span>
              </div>
            </div>
          </div>

          {/* Extra werkzaamheden gespecificeerd */}
          {(formData.inpakservice || formData.vloerVerwijderen || formData.behangVerwijderen || formData.gaatjesToppen || formData.schilderwerk || formData.gordijnenVerwijderen) && (
            <div className="bg-background rounded-lg p-4 space-y-2 text-left border-2 border-primary/20">
              <h4 className="font-semibold text-sm text-foreground mb-2">🔧 Extra Werkzaamheden:</h4>
              {formData.inpakservice && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Inpakservice (kasten/keuken)</span>
                  <span className="font-medium">€150</span>
                </div>
              )}
              {formData.vloerVerwijderen && formData.vloerM2 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Vloer verwijderen ({formData.vloerM2}m² × €3)</span>
                  <span className="font-medium">€{(parseInt(formData.vloerM2) * 3).toLocaleString('nl-NL')}</span>
                </div>
              )}
              {formData.behangVerwijderen && formData.behangM2 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Behang verwijderen ({formData.behangM2}m² × €5)</span>
                  <span className="font-medium">€{(parseInt(formData.behangM2) * 5).toLocaleString('nl-NL')}</span>
                </div>
              )}
              {formData.gaatjesToppen && formData.gaatjesM2 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Gaatjes stoppen ({formData.gaatjesM2}m² × €1)</span>
                  <span className="font-medium">€{(parseInt(formData.gaatjesM2) * 1).toLocaleString('nl-NL')}</span>
                </div>
              )}
              {formData.schilderwerk && formData.schilderwerkM2 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">• Schilderwerk ({formData.schilderwerkM2}m² × €17,50)</span>
                  <span className="font-medium">€{(parseInt(formData.schilderwerkM2) * 17.5).toLocaleString('nl-NL')}</span>
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

          {/* AI Analyse met Items */}
          {analysisResults.length > 0 && (() => {
            // Bepaal hoogste vulniveau en combineer alle items
            let maxVolumeLevel = 'half'
            let totalBoxes = 0
            let maxHours = 0
            const specialItems = new Set<string>()
            const allFurniture: Record<string, { quantity: number; size: string; item: string }> = {}
            
            const volumeLevels = { empty: 0, sparse: 1, half: 2, full: 3, very_full: 4 }
            
            analysisResults.forEach(({ analysis }) => {
              // Hoogste vulniveau bepalen
              const currentLevel = analysis.volume_level || 'half'
              if (volumeLevels[currentLevel as keyof typeof volumeLevels] > volumeLevels[maxVolumeLevel as keyof typeof volumeLevels]) {
                maxVolumeLevel = currentLevel
              }
              
              // Meubels combineren (hoogste aantal per item)
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
              
              totalBoxes += analysis.boxes_estimate
              if (analysis.estimated_hours > maxHours) maxHours = analysis.estimated_hours
              if (analysis.special_items) {
                analysis.special_items.forEach((item: string) => specialItems.add(item))
              }
            })
            
            const furnitureList = Object.values(allFurniture)
            
            // Vulniveau teksten
            const volumeText = {
              empty: 'leegstaand',
              sparse: 'schaars ingericht',
              half: 'normaal bewoond',
              full: 'vol ingericht',
              very_full: 'overvol',
            }
            
            return (
              <div className="bg-muted/30 rounded-lg p-4 text-left">
                <h4 className="font-bold text-base text-foreground mb-3">🤖 AI Analyse Resultaten:</h4>
                
                {/* Gedetecteerde items - ALTIJD TONEN */}
                <div className="bg-background rounded-md p-3 mb-3">
                  <p className="font-semibold text-sm text-foreground mb-2">🪑 Gedetecteerde items:</p>
                  {furnitureList.length > 0 ? (
                    <div className="text-sm text-muted-foreground space-y-1">
                      {furnitureList.map((f, idx) => (
                        <div key={idx} className="flex justify-between">
                          <span>• {f.quantity}x {f.item}</span>
                          <span className="text-xs text-muted-foreground/70">({f.size})</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      Geen grote meubels gedetecteerd (mogelijk lege/gestripte ruimte)
                    </p>
                  )}
                </div>
                
                {/* Conclusie */}
                <div className="bg-primary/10 rounded-md p-3 mb-3 border-l-4 border-primary">
                  <p className="text-sm text-foreground font-semibold">
                    📊 Op basis van de foto's schatten wij de woning als <span className="text-primary">{volumeText[maxVolumeLevel as keyof typeof volumeText]}</span>.
                  </p>
                </div>
                
                {/* Details */}
                <div className="bg-background rounded-md p-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">📦 Geschatte dozen/tassen:</span>
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
              Vindt u elders een lagere prijs? Dan duiken wij onder die prijs!!
            </p>
          </div>

          <div className="space-y-3 text-left pt-4">
            <div className="space-y-1">
              <Label className="text-foreground text-base font-semibold">Ontvang deze offerte per email:</Label>
              <p className="text-xs text-muted-foreground">
                Vul uw gegevens in en ontvang de volledige offerte direct in uw inbox. <strong>U zit nergens aan vast.</strong>
              </p>
            </div>
            <Input
              placeholder="Naam *"
              value={formData.naam}
              onChange={(e) => setFormData({ ...formData, naam: e.target.value })}
              className="bg-background border-2 border-border h-11 focus:border-primary"
              required
            />
            <Input
              type="email"
              placeholder="E-mail *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-background border-2 border-border h-11 focus:border-primary"
              required
            />
            <Input
              type="tel"
              placeholder="Telefoon *"
              value={formData.telefoon}
              onChange={(e) => setFormData({ ...formData, telefoon: e.target.value })}
              className="bg-background border-2 border-border h-11 focus:border-primary"
              required
            />
            <p className="text-xs text-muted-foreground italic">* Alle velden zijn verplicht</p>
          </div>

          {submitSuccess ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-6 text-center space-y-3">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-2">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-xl text-green-800">Offerte Verzonden! 🎉</h4>
              <p className="text-sm text-green-700">
                Check uw inbox! We hebben de volledige offerte naar <strong>{formData.email}</strong> gestuurd. Neem de tijd om rustig te bekijken - u zit nergens aan vast.
              </p>
              <p className="text-xs text-green-600 italic">
                Wilt u een afspraak maken? Gebruik de link in de email of bel ons direct!
              </p>
            </div>
          ) : (
            <>
              <Button 
                type="button"
                onClick={handleSubmit}
                disabled={!(formData.naam?.trim()) || !(formData.email?.trim()) || !(formData.telefoon?.trim()) || isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verzenden...
                  </>
                ) : (
                  '📧 Stuur offerte naar mijn email'
                )}
              </Button>
              {(!(formData.naam?.trim()) || !(formData.email?.trim()) || !(formData.telefoon?.trim())) && (
                <p className="text-xs text-center text-muted-foreground">
                  ⬆️ Vul eerst alle velden hierboven in
                </p>
              )}
            </>
          )}

          {!submitSuccess && (
            <Button
              variant="ghost"
              onClick={() => {
                setCurrentStep(1)
                setPhotos([])
                setAnalysisResults([])
                setPriceResult(null)
                setSubmitSuccess(false)
                setFormData({
                  postcode: "",
                  woningType: "",
                  vierkanteMeter: "",
                  verdieping: "",
                  vloerVerwijderen: false,
                  vloerM2: "",
                  behangVerwijderen: false,
                  behangM2: "",
                  gaatjesToppen: false,
                  gaatjesM2: "",
                  schilderwerk: false,
                  schilderwerkM2: "",
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
          )}
        </div>
      )}
    </Card>
  )
}


