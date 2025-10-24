export function HowItWorks() {
  return (
    <section id="werkwijze" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Hoe Het Werkt
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            In 3 eenvoudige stappen naar een ontruimde woning zonder gedoe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">01</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Prijs berekenen</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
Ons slimme AI formulier berekent direct jouw prijs. Een woningbezoek is niet nodig Goedkoper gevonden? Wij betalen het
              verschil.          </p>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">02</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Datum kiezen</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Kies de datum wanneer jij de woning ontruimt wil hebben.
            </p>
          </div>

          <div className="text-center">
            <div className="text-6xl lg:text-7xl font-bold text-primary mb-4">03</div>
            <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">Ontruiming</h3>
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
              Ons professionele team voert de ontruiming snel en zorgvuldig uit op het afgesproken moment.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  )
}
