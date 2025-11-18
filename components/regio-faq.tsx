import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface RegioFaqProps {
  regio: string
}

export function RegioFaq({ regio }: RegioFaqProps) {
  const faqs = regio === "Haaglanden" ? [
    {
      question: "In welke gemeentes van Haaglanden zijn jullie actief?",
      answer: "Wij zijn actief in alle gemeentes van Haaglanden: Den Haag, Delft, Zoetermeer, Wassenaar, Westland, Rijswijk, Pijnacker-Nootdorp, Leidschendam-Voorburg en Midden-Delfland."
    },
    {
      question: "Hoe snel kunnen jullie een woningontruiming in Haaglanden uitvoeren?",
      answer: "Meestal kunnen we binnen 1-3 werkdagen starten met de ontruiming. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen. Neem contact met ons op voor de mogelijkheden."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Haaglanden, gegarandeerd."
    },
    {
      question: "Doen jullie ook studentenwoningen in Delft?",
      answer: "Ja, wij hebben ruime ervaring met het ontruimen van studentenwoningen en kamers in Delft. We zorgen voor een snelle en betaalbare ontruiming."
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer: "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar."
    },
    {
      question: "Hoe wordt de prijs bepaald?",
      answer: "De prijs hangt af van de grootte van de woning, de hoeveelheid inboedel, de verdieping en eventuele extra diensten zoals schilderwerk. Upload foto's via onze AI tool voor een directe indicatie."
    }
  ] : [
    {
      question: "In welke gemeentes van Rijnmond zijn jullie actief?",
      answer: "Wij zijn actief in alle gemeentes van Rijnmond: Rotterdam, Schiedam, Vlaardingen, Maassluis, Ridderkerk, Capelle aan den IJssel, Krimpen aan den IJssel, Barendrecht, Albrandswaard, Lansingerland, Nissewaard, Voorne aan Zee en Goeree-Overflakkee."
    },
    {
      question: "Hebben jullie ervaring met hoogbouw in Rotterdam?",
      answer: "Ja, wij hebben uitgebreide ervaring met hoogbouw appartementen in Rotterdam en andere Rijnmond gemeentes. We hebben de juiste apparatuur en expertise voor alle verdiepingen."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! U krijgt altijd de laagste prijs voor woningontruiming in Rijnmond, gegarandeerd."
    },
    {
      question: "Werken jullie ook op de eilanden?",
      answer: "Ja, wij werken ook op Goeree-Overflakkee en Voorne aan Zee. We hebben ervaring met zowel vakantiewoningen als permanent bewoonde huizen op de eilanden."
    },
    {
      question: "Zijn jullie 24/7 bereikbaar voor spoedgevallen?",
      answer: "Ja, voor spoedontruimingen in Rotterdam en omgeving zijn wij 24/7 bereikbaar. We kunnen vaak binnen enkele uren ter plaatse zijn."
    },
    {
      question: "Doen jullie ook bedrijfsontruimingen?",
      answer: "Ja, naast woningen ontruimen wij ook kantoren, bedrijfspanden en winkels in heel Rijnmond."
    }
  ]

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
            Veelgestelde Vragen
          </h2>
          <p className="text-center text-muted-foreground mb-10 text-lg">
            Alles wat u moet weten over woningontruiming in {regio}
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

