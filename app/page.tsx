import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { HeroAI } from "@/components/hero-ai"
import { HowItWorks } from "@/components/how-it-works"
import { HomepageSeoContent } from "@/components/homepage-seo-content"
import { HomepageFaq } from "@/components/homepage-faq"
import { Footer } from "@/components/footer"
import { OrganizationSchema, WebPageSchema, FAQSchema } from "@/components/structured-data"

export default function Home() {
  const faqs = [
    {
      question: "In welke regio's zijn jullie actief?",
      answer: "Wij zijn actief in heel Zuid-Holland, met name in de regio's Haaglanden (Den Haag, Delft, Zoetermeer e.o.) en Rijnmond (Rotterdam, Schiedam, Vlaardingen e.o.). In totaal bedienen wij meer dan 22 gemeentes."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! Dit is geen marketingpraatje maar een concrete garantie."
    },
    {
      question: "Hoe snel kunnen jullie starten met de ontruiming?",
      answer: "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen."
    },
    {
      question: "Wat kost een woningontruiming?",
      answer: "De prijs hangt af van verschillende factoren: type woning, grootte, hoeveelheid inboedel, verdieping en eventuele extra diensten. Upload foto's via onze AI tool voor een directe prijsindicatie."
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer: "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar."
    },
    {
      question: "Hoe werkt de AI prijscalculator?",
      answer: "Upload minimaal 1 foto van uw woning. Onze AI analyseert de foto's en bepaalt de hoeveelheid inboedel. Op basis daarvan krijgt u binnen 2 minuten een prijsindicatie per email."
    },
    {
      question: "Werken jullie ook op hogere verdiepingen?",
      answer: "Ja, wij hebben ruime ervaring met hoogbouw. Is er een lift aanwezig? Dan krijgt u 50% korting op de trapkosten."
    },
    {
      question: "Wat gebeurt er met mijn spullen?",
      answer: "Alle materialen worden milieuvriendelijk verwerkt. Bruikbare spullen gaan naar kringloopwinkels, de rest wordt gescheiden en gerecycled."
    },
  ]

  return (
    <>
      {/* SEO Structured Data */}
      <OrganizationSchema />
      <WebPageSchema 
        title="Budget Ontruiming - Woningontruiming voor de Laagste Prijs"
        description="Vindt u het elders goedkoper? Wij duiken onder die prijs! Professionele woningontruiming in Zuid-Holland."
        url="https://budgetontruiming.nl"
      />
      <FAQSchema faqs={faqs} />
      
      <main className="min-h-screen">
        <TopBanner />
        <Header />
        <HeroAI />
        <HowItWorks />
        <HomepageSeoContent />
        <HomepageFaq />
        <Footer />
      </main>
    </>
  )
}
