import Image from "next/image"
import { AIQuoteForm } from "@/components/ai-quote-form"

export function HeroAI() {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional-movers-carrying-boxes-in-modern-home.jpg"
          alt="Professionele verhuizers"
          fill
          priority={true}
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
              Woningontruimingen zonder gedoe voor Haaglanden en Rijnmond
            </h1>
            <h2 id="prijs-berekenen" className="sr-only">Prijs berekenen met AI</h2>

            <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
              Vindt u het elders goedkoper? Wij duiken onder die prijs!
            </p>

            <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u ervan verzekerd dat u de laagste prijs betaald.
            </p>

            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
              <p className="text-md sm:text-lg font-semibold text-white">
                🏆 Laagste Prijs Garantie in Haaglanden en Rijnmond
              </p>
            </div>

            <div className="hidden sm:flex flex-wrap gap-4 text-md text-white">
              <span>Woningen</span>
              <span>|</span>
              <span>Bedrijfsruimtes</span>
              <span>|</span>
              <span>Seniorenkamers</span>
            </div>
          </div>

          <div>
            <AIQuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}

