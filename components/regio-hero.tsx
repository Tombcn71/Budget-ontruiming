import { AIQuoteForm } from "@/components/ai-quote-form"

interface RegioHeroProps {
  regio: string
  subtitle: string
  badgeText: string
}

export function RegioHero({ regio, subtitle, badgeText }: RegioHeroProps) {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-movers-carrying-boxes-in-modern-home.jpg"
          alt="Professionele verhuizers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-3 lg:mb-6 leading-tight text-balance">
              Woningontruiming {regio}
            </h1>

            <p className="text-base sm:hidden text-white mb-4 leading-relaxed">
              {subtitle}
            </p>

            <p className="hidden sm:block text-lg sm:text-xl text-white mb-6 leading-relaxed text-pretty">
              {subtitle}
            </p>

            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-md sm:text-lg font-semibold text-white">
                {badgeText}
              </p>
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

