import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function HomepageFaq() {
  const faqs = [
    {
      question: "In welke regio's zijn jullie actief?",
      answer: "Wij zijn actief in heel Zuid-Holland, met name in de regio's Haaglanden (Den Haag, Delft, Zoetermeer e.o.) en Rijnmond (Rotterdam, Schiedam, Vlaardingen e.o.). In totaal bedienen wij meer dan 22 gemeentes."
    },
    {
      question: "Wat is de laagste prijs garantie?",
      answer: "Vindt u het elders goedkoper? Wij duiken onder die prijs! Dit is geen marketingpraatje maar een concrete garantie. Heeft u een goedkopere offerte? Laat het ons weten en wij zorgen dat u bij ons de laagste prijs krijgt."
    },
    {
      question: "Hoe snel kunnen jullie starten met de ontruiming?",
      answer: "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen kunnen we vaak binnen 24 uur beginnen. In Rotterdam en omgeving zijn we zelfs 24/7 bereikbaar voor spoedontruimingen."
    },
    {
      question: "Wat kost een woningontruiming?",
      answer: "De prijs hangt af van verschillende factoren: type woning (seniorenkamer, appartement, eengezinswoning), grootte in vierkante meters, hoeveelheid inboedel, verdieping en eventuele extra diensten. Upload foto's via onze AI tool voor een directe prijsindicatie binnen 2 minuten."
    },
    {
      question: "Kunnen jullie ook bezemschoon opleveren?",
      answer: "Ja, wij zorgen dat uw woning volledig bezemschoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar. Ook extra diensten zoals schilderwerk, behang verwijderen en vloer verwijderen behoren tot de mogelijkheden."
    },
    {
      question: "Hoe werkt de AI prijscalculator?",
      answer: "Upload minimaal 1 foto van uw woning. Onze AI analyseert de foto's en bepaalt de hoeveelheid inboedel en het vulniveau (leegstaand, normaal bewoond, vol ingericht). Op basis daarvan krijgt u binnen 2 minuten een prijsindicatie per email."
    },
    {
      question: "Werken jullie ook op hogere verdiepingen?",
      answer: "Ja, wij hebben ruime ervaring met hoogbouw, vooral in Rotterdam. Is er een lift aanwezig? Dan krijgt u 50% korting op de trapkosten. Ook zonder lift kunnen wij uw woning professioneel ontruimen."
    },
    {
      question: "Wat gebeurt er met mijn spullen?",
      answer: "Alle materialen worden milieuvriendelijk verwerkt. Bruikbare spullen gaan naar kringloopwinkels, de rest wordt gescheiden en gerecycled. U kunt er zeker van zijn dat alles verantwoord wordt afgehandeld."
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
            Alles wat u moet weten over woningontruiming met Budget Ontruiming
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

