import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { HeroAI } from "@/components/hero-ai"
import { Services } from "@/components/services"
import { PriceGuarantee } from "@/components/price-guarantee"
import { HowItWorks } from "@/components/how-it-works"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { QuoteFormMobile } from "@/components/quote-form-mobile"
import { OrganizationSchema, WebPageSchema } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      {/* SEO Structured Data */}
      <OrganizationSchema />
      <WebPageSchema 
        title="Budget Ontruiming - Woningontruiming voor de Laagste Prijs"
        description="Vindt u het elders goedkoper? Wij duiken onder die prijs! Professionele woningontruiming in Zuid-Holland."
        url="https://budgetontruiming.nl"
      />
      
      <main className="min-h-screen">
        <TopBanner />
        <Header />
        <HeroAI />
        
        <HowItWorks />
        <Footer />
      </main>
    </>
  )
}
