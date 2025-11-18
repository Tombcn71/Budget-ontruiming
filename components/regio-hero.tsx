interface RegioHeroProps {
  regio: string
  subtitle: string
}

export function RegioHero({ regio, subtitle }: RegioHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            Woningontruiming {regio}
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8">
            {subtitle}
          </p>
          <div className="inline-block bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-lg font-semibold">
              🏆 Laagste Prijs Garantie in heel {regio}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

