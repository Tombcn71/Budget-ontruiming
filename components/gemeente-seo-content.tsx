import { GemeenteData } from "@/lib/gemeente-data"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface GemeenteSeoContentProps {
  data: GemeenteData
}

export function GemeenteSeoContent({ data }: GemeenteSeoContentProps) {
  return (
    <div className="bg-background">
      {/* Intro Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id={data.naam === "Den Haag" ? "den-haag-info" : data.naam === "Rotterdam" ? "rotterdam-info" : undefined} className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Woningontruiming in {data.naam}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{data.introText}</p>

            {/* Wijken */}
            <div id={data.naam === "Rotterdam" ? "rotterdam-wijken" : data.naam === "Delft" ? "delft-wijken" : data.naam === "Zoetermeer" ? "zoetermeer-wijken" : data.naam === "Wassenaar" ? "wassenaar-wijken" : data.naam === "Westland" ? "westland-kernen" : data.naam === "Rijswijk" ? "rijswijk-wijken" : data.naam === "Pijnacker-Nootdorp" ? "pijnacker-nootdorp-wijken" : data.naam === "Leidschendam-Voorburg" ? "wijken-leidschendam-voorburg" : data.naam === "Midden-Delfland" ? "midden-delfland-kernen" : data.naam === "Schiedam" ? "schiedam-wijken" : data.naam === "Vlaardingen" ? "vlaardingen-wijken" : data.naam === "Capelle aan den IJssel" ? "capelle-wijken" : data.naam === "Barendrecht" ? "barendrecht-wijken" : data.naam === "Ridderkerk" ? "ridderkerk-kernen" : data.naam === "Nissewaard" ? "nissewaard-kernen" : data.naam === "Lansingerland" ? "lansingerland-kernen" : data.naam === "Voorne aan Zee" ? "voorne-kernen" : undefined} className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-4">Actief in alle wijken van {data.naam}:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {data.wijken.map((wijk, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{wijk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Kiezen */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Waarom kiezen voor Budget Ontruiming in {data.naam}?
            </h2>
            <div id={data.naam === "Wassenaar" ? "discretie-garantie" : undefined} className="grid md:grid-cols-2 gap-6">
              {data.waaromKiezen.map((reden, index) => (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{reden}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situaties */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Wanneer heeft u een woningontruiming nodig?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.situaties.map((situatie, index) => (
                <Card key={index} id={data.naam === "Rotterdam" && situatie.title.includes("Hoogbouw") ? "hoogbouw-specialist" : data.naam === "Zoetermeer" && (situatie.title.includes("Portiekflat") || situatie.title.includes("portiekflat")) ? "portiekflat-specialist" : data.naam === "Westland" && (situatie.title.includes("kas") || situatie.title.includes("Kas") || situatie.title.includes("bedrijfsruimte") || situatie.title.includes("Bedrijfsruimte")) ? "kas-specialist" : data.naam === "Rijswijk" && (situatie.title.includes("Hoogbouw") || situatie.title.includes("hoogbouw")) ? "hoogbouw-specialist" : data.naam === "Pijnacker-Nootdorp" && (situatie.title.includes("Gezinswoning") || situatie.title.includes("gezinswoning")) ? "gezinswoning-specialist" : data.naam === "Leidschendam-Voorburg" && (situatie.title.includes("Huurwoning") || situatie.title.includes("huurwoning") || situatie.description.includes("pluggen") || situatie.description.includes("spijkergaten")) ? "oplever-specialist" : data.naam === "Midden-Delfland" && (situatie.title.includes("Boerderij") || situatie.title.includes("boerderij") || situatie.title.includes("grote woning") || situatie.description.includes("bijgebouwen") || situatie.description.includes("schuren")) ? "boerderij-specialist" : data.naam === "Schiedam" && (situatie.title.includes("historisch") || situatie.title.includes("Historisch") || situatie.title.includes("centrum") || situatie.title.includes("Centrum") || situatie.description.includes("monumentaal") || situatie.description.includes("oude panden")) ? "historisch-centrum-expert" : data.naam === "Capelle aan den IJssel" && (situatie.title.includes("Hoogbouw") || situatie.title.includes("hoogbouw") || situatie.title.includes("toren") || situatie.title.includes("Toren") || situatie.description.includes("galerijflat") || situatie.description.includes("Galerijflat")) ? "hoogbouw-expert-capelle" : data.naam === "Barendrecht" && (situatie.title.includes("Carnisselande") || situatie.title.includes("carnisselande") || situatie.title.includes("Gezinswoning") || situatie.title.includes("gezinswoning") || situatie.description.includes("moderne") || situatie.description.includes("nieuwbouw")) ? "carnisselande-specialist" : data.naam === "Ridderkerk" && (situatie.title.includes("bedrijf") || situatie.title.includes("Bedrijf") || situatie.title.includes("kantoor") || situatie.title.includes("Kantoor") || situatie.description.includes("bedrijfspand") || situatie.description.includes("Bedrijfspand")) ? "bedrijfsontruiming-expert" : data.naam === "Nissewaard" && (situatie.title.includes("Hoogbouw") || situatie.title.includes("hoogbouw") || situatie.title.includes("Spijkenisse") || situatie.title.includes("spijkenisse") || situatie.description.includes("hoogbouw") || situatie.description.includes("Spijkenisse")) ? "hoogbouw-specialist-spijkenisse" : data.naam === "Lansingerland" && (situatie.title.includes("bedrijf") || situatie.title.includes("Bedrijf") || situatie.title.includes("zakelijk") || situatie.title.includes("Zakelijk") || situatie.description.includes("bedrijfspand") || situatie.description.includes("Bedrijfspand") || situatie.description.includes("kantoor") || situatie.description.includes("Kantoor")) ? "zakelijk-ontruimen-lansingerland" : data.naam === "Voorne aan Zee" && (situatie.title.includes("Vakantiehuis") || situatie.title.includes("vakantiehuis") || situatie.title.includes("Vakantie") || situatie.title.includes("vakantie") || situatie.description.includes("vakantie") || situatie.description.includes("Vakantie") || situatie.description.includes("kust") || situatie.description.includes("Kust")) ? "kustspecialist-ontruiming" : undefined} className="p-6 bg-white border-0 shadow-sm">
                  <h3 className="font-bold text-lg text-foreground mb-3">{situatie.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{situatie.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 id={data.naam === "Den Haag" ? "haagse-faq" : data.naam === "Rotterdam" ? "rotterdam-faq" : data.naam === "Delft" ? "delft-faq" : data.naam === "Zoetermeer" ? "zoetermeer-faq" : data.naam === "Wassenaar" ? "wassenaar-faq" : data.naam === "Westland" ? "westland-faq" : data.naam === "Rijswijk" ? "rijswijk-faq" : data.naam === "Pijnacker-Nootdorp" ? "pijnacker-faq" : data.naam === "Leidschendam-Voorburg" ? "lv-faq" : data.naam === "Midden-Delfland" ? "midden-delfland-faq" : data.naam === "Schiedam" ? "schiedam-faq" : data.naam === "Vlaardingen" ? "vlaardingen-faq" : data.naam === "Capelle aan den IJssel" ? "capelle-faq" : data.naam === "Barendrecht" ? "barendrecht-faq" : data.naam === "Ridderkerk" ? "ridderkerk-faq" : data.naam === "Nissewaard" ? "nissewaard-faq" : data.naam === "Lansingerland" ? "lansingerland-faq" : data.naam === "Voorne aan Zee" ? "voorne-aan-zee-faq" : undefined} className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Veelgestelde vragen over woningontruiming in {data.naam}
            </h2>
            <div className="space-y-6">
              {data.faq.map((item, index) => (
                <Card key={index} className="p-6 bg-white border-0 shadow-sm">
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Direct een prijsindicatie voor uw woningontruiming in {data.naam}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Gebruik onze slimme AI tool hierboven om binnen enkele minuten een prijsindicatie te ontvangen. Geheel
              vrijblijvend en zonder verplichtingen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Bereken nu uw prijs
              </a>
              <a
                href="https://calendly.com/budgetgroep/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                📞 Gratis adviesgesprek
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



