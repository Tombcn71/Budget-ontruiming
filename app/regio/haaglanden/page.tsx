import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RegioHero } from "@/components/regio-hero"
import { HowItWorks } from "@/components/how-it-works"
import { GemeenteLinks } from "@/components/gemeente-links"
import { RegioFaq } from "@/components/regio-faq"
import { getGemeentesByRegio } from "@/lib/gemeente-data"
import { WebPageSchema, BreadcrumbSchema, FAQSchema } from "@/components/structured-data"

export const metadata: Metadata = {
  title: "Woningontruiming Haaglanden - Laagste Prijs Garantie",
  description:
    "Professionele woningontruiming in heel Haaglanden. Den Haag, Delft, Rijswijk, Wassenaar en meer. Vindt u goedkoper? Wij betalen het verschil.",
  keywords: [
    "woningontruiming Haaglanden",
    "ontruiming Den Haag",
    "ontruiming Delft",
    "bezemschoon opleveren Haaglanden",
  ],
  openGraph: {
    title: "Woningontruiming Haaglanden - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in heel Haaglanden. Den Haag, Delft, Rijswijk, Wassenaar en meer.",
    url: "https://budgetontruiming.nl/regio/haaglanden",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woningontruiming Haaglanden - Laagste Prijs Garantie",
    description: "Professionele woningontruiming in heel Haaglanden.",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/regio/haaglanden",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HaaglandenPage() {
  const gemeentes = getGemeentesByRegio("Haaglanden")

  const faqs = [
    {
      question: "In welke gemeentes van Haaglanden zijn jullie actief?",
      answer: "Wij zijn actief in alle gemeentes van Haaglanden: Den Haag, Delft, Zoetermeer, Wassenaar, Westland, Rijswijk, Pijnacker-Nootdorp, Leidschendam-Voorburg en Midden-Delfland."
    },
    {
      question: "Hoe snel kunnen jullie een woningontruiming in Haaglanden uitvoeren?",
      answer: "Meestal kunnen we binnen 1-3 werkdagen starten met de ontruiming. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Haaglanden, gegarandeerd."
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer: "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar."
    },
    {
      question: "Werken jullie ook in villawijken zoals Wassenaar?",
      answer: "Ja, wij hebben ruime ervaring met grotere woningen en villa's in wijken zoals Wassenaar. Onze teams zijn uitgerust voor woningen van elk formaat."
    },
    {
      question: "Hoe wordt de prijs bepaald?",
      answer: "De prijs hangt af van de grootte van de woning, de hoeveelheid inboedel, de verdieping en eventuele extra diensten zoals schilderwerk. Upload foto's via onze AI tool voor een directe indicatie."
    },
  ]

  return (
    <>
      {/* SEO Structured Data */}
      <WebPageSchema 
        title="Woningontruiming Haaglanden - Laagste Prijs Garantie"
        description="Professionele woningontruiming in heel Haaglanden. Den Haag, Delft, Rijswijk, Wassenaar en meer."
        url="https://budgetontruiming.nl/regio/haaglanden"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://budgetontruiming.nl" },
        { name: "Haaglanden", url: "https://budgetontruiming.nl/regio/haaglanden" }
      ]} />
      <FAQSchema faqs={faqs} />
      
      <Header />
      <main>
        <RegioHero 
          regio="Haaglanden"
          subtitle="Professionele woningontruiming in Den Haag, Delft, Zoetermeer en 6 andere gemeentes. Vindt u het elders goedkoper? Wij duiken onder die prijs!"
          badgeText="🏆 Laagste Prijs Garantie in Den Haag, Delft, Zoetermeer en omstreken"
        />
        <HowItWorks />
        <GemeenteLinks gemeentes={gemeentes} regio="Haaglanden" />
        
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Professionele Woningontruiming in Haaglanden
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  De regio Haaglanden omvat diverse gemeentes met elk hun eigen karakter. Van de grootstedelijke
                  dynamiek van Den Haag tot de studentenstad Delft, van het landelijke Midden-Delfland tot het
                  moderne Zoetermeer. Bij Budget Ontruiming kennen we de regio als geen ander.
                </p>
                <p className="mb-4">
                  Of u nu een appartement in het centrum van Den Haag heeft, een villa in Wassenaar, een
                  studentenwoning in Delft of een gezinswoning in Pijnacker-Nootdorp – wij bieden professionele
                  woningontruiming met onze unieke laagste prijs garantie.
                </p>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Onze diensten in Haaglanden</h3>
                <ul className="space-y-2 mb-6">
                  <li>✓ Complete woningontruiming van klein tot groot</li>
                  <li>✓ Bezemschoon opleveren voor verhuurders</li>
                  <li>✓ Ontruiming na overlijden met respect en zorg</li>
                  <li>✓ Seniorenverhuizingen en begeleiding</li>
                  <li>✓ Spoedontruimingen binnen 24 uur mogelijk</li>
                  <li>✓ Inboedel taxatie en verkoop</li>
                  <li>✓ Milieuvriendelijke afvalverwerking</li>
                </ul>
                <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Laagste Prijs Garantie</h3>
                <p className="mb-4">
                  Wij garanderen u de laagste prijs voor uw woningontruiming in Haaglanden. Vindt u het elders goedkoper? Wij duiken onder die prijs!
                  Zo simpel is het.
                </p>
                <p>
                  Klik hierboven op uw gemeente voor specifieke informatie, lokale prijzen en veelgestelde vragen
                  over woningontruiming in uw gebied.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RegioFaq regio="Haaglanden" />
      </main>
      <Footer />
    </>
  )
}



