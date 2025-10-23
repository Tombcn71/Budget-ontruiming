import { AIQuoteForm } from "@/components/ai-quote-form"

interface GemeenteHeroProps {
  gemeenteNaam: string
  subtitle: string
}

export function GemeenteHero({ gemeenteNaam, subtitle }: GemeenteHeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-movers-carrying-boxes-in-modern-home.jpg"
          alt={`Professionele woningontruiming ${gemeenteNaam}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Woningontruiming {gemeenteNaam} met laagste prijs garantie.
            </h1>

            <p className="text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 text-md text-white">
              <span>Bezemschoon opleveren</span>
              <span>|</span>
              <span>Na overlijden</span>
              <span>|</span>
              <span>Spoedontruiming</span>
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
