import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, Phone, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Budgetontruiming.nl",
  description:
    "Neem contact op met Budget Ontruiming. Bel, mail of plan een gratis adviesgesprek. Wij helpen u graag!",
  keywords:
    "contact budget ontruiming, budget ontruiming bellen, budget ontruiming email, woningontruiming contact, offerte aanvragen",
  openGraph: {
    title: "Contact | Budgetontruiming.nl",
    description: "Neem contact op met Budget Ontruiming. Wij helpen u graag!",
    url: "https://budgetontruiming.nl/contact",
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://budgetontruiming.nl/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Neem Contact Op
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Heeft u vragen over woningontruiming? Wij staan voor u klaar! Bel ons direct, stuur een bericht of
                plan een gratis adviesgesprek.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contactgegevens</h2>
                  <p className="text-muted-foreground mb-8">
                    Wij zijn bereikbaar via telefoon, email of plan direct een gratis adviesgesprek in.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
                      <a
                        href="tel:+31612345678"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        06 12 34 56 78
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Bel ons direct voor spoedgevallen</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:info@budgetontruiming.nl"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@budgetontruiming.nl
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We reageren binnen 24 uur</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Openingstijden</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Maandag - Vrijdag: 08:00 - 18:00</p>
                        <p>Zaterdag: 09:00 - 17:00</p>
                        <p className="text-sm mt-2">Zondag gesloten</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Area */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Werkgebied</h3>
                      <p className="text-muted-foreground">Haaglanden & Rijnmond</p>
                      <p className="text-sm text-muted-foreground mt-1">22 gemeentes in Zuid-Holland</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href="https://calendly.com/tbvanreijn/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    📅 Plan Gratis Adviesgesprek
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">Stuur ons een bericht</h2>
                <p className="text-muted-foreground mb-6">Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Bereikbaar</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">&lt;24u</div>
                  <p className="text-sm text-muted-foreground">Reactietijd</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Gratis Advies</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

