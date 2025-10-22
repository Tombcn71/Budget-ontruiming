import { TopBanner } from "@/components/top-banner"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PriceGuarantee } from "@/components/price-guarantee"
import { HowItWorks } from "@/components/how-it-works"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { QuoteFormMobile } from "@/components/quote-form-mobile"

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBanner />
      <Header />
      <Hero />
      
      <HowItWorks />
      <Footer />
    </main>
  )
}
