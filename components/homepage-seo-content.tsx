import Link from "next/link"

export function HomepageSeoContent() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main SEO Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Professionele Woningontruiming in Haaglanden en Rijnmond
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Budget Ontruiming is uw betrouwbare partner voor professionele woningontruimingen in heel Zuid-Holland. 
              Wij zijn gespecialiseerd in de regio's Haaglanden en Rijnmond en bieden onze diensten aan in meer dan 
              22 gemeentes. Van Den Haag tot Rotterdam, van Delft tot Schiedam – wij staan voor u klaar met onze 
              unieke laagste prijs garantie.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Vindt u het elders goedkoper? Wij duiken onder die prijs! Dat is geen marketingpraatje, maar een 
              concrete garantie. Wij geloven in transparantie en eerlijke prijzen voor iedereen die een woning moet 
              ontruimen, of het nu gaat om een seniorenkamer, appartement, eengezinswoning of bedrijfspand.
            </p>
          </div>

          {/* Regio's Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Haaglanden */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <Link href="/regio/haaglanden" className="hover:text-primary transition-colors">
                  Woningontruiming Haaglanden
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Actief in 9 gemeentes in de regio Haaglanden, waaronder de grote steden Den Haag, Delft en Zoetermeer.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/woningontruiming-den-haag" className="hover:text-primary">Den Haag</Link></li>
                <li>• <Link href="/woningontruiming-delft" className="hover:text-primary">Delft</Link></li>
                <li>• <Link href="/woningontruiming-zoetermeer" className="hover:text-primary">Zoetermeer</Link></li>
                <li>• <Link href="/woningontruiming-wassenaar" className="hover:text-primary">Wassenaar</Link></li>
                <li>• <Link href="/woningontruiming-westland" className="hover:text-primary">Westland</Link></li>
                <li>• <Link href="/woningontruiming-rijswijk" className="hover:text-primary">Rijswijk</Link></li>
                <li>• <Link href="/woningontruiming-pijnacker-nootdorp" className="hover:text-primary">Pijnacker-Nootdorp</Link></li>
                <li>• <Link href="/woningontruiming-leidschendam-voorburg" className="hover:text-primary">Leidschendam-Voorburg</Link></li>
                <li>• <Link href="/woningontruiming-midden-delfland" className="hover:text-primary">Midden-Delfland</Link></li>
              </ul>
              <Link 
                href="/regio/haaglanden" 
                className="inline-block mt-4 text-primary font-semibold hover:underline"
              >
                → Meer over Haaglanden
              </Link>
            </div>

            {/* Rijnmond */}
            <div className="bg-muted/30 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                <Link href="/regio/rijnmond" className="hover:text-primary transition-colors">
                  Woningontruiming Rijnmond
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">
                Actief in 13 gemeentes in de regio Rijnmond, inclusief Rotterdam, Schiedam en de eilanden.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <Link href="/woningontruiming-rotterdam" className="hover:text-primary">Rotterdam</Link></li>
                <li>• <Link href="/woningontruiming-schiedam" className="hover:text-primary">Schiedam</Link></li>
                <li>• <Link href="/woningontruiming-vlaardingen" className="hover:text-primary">Vlaardingen</Link></li>
                <li>• <Link href="/woningontruiming-capelle-aan-den-ijssel" className="hover:text-primary">Capelle a/d IJssel</Link></li>
                <li>• <Link href="/woningontruiming-barendrecht" className="hover:text-primary">Barendrecht</Link></li>
                <li>• <Link href="/woningontruiming-ridderkerk" className="hover:text-primary">Ridderkerk</Link></li>
                <li>• <Link href="/woningontruiming-nissewaard" className="hover:text-primary">Nissewaard</Link></li>
                <li>• <Link href="/woningontruiming-lansingerland" className="hover:text-primary">Lansingerland</Link></li>
                <li>• <Link href="/woningontruiming-voorne-aan-zee" className="hover:text-primary">Voorne aan Zee</Link></li>
                <li>• En 4 andere gemeentes</li>
              </ul>
              <Link 
                href="/regio/rijnmond" 
                className="inline-block mt-4 text-primary font-semibold hover:underline"
              >
                → Meer over Rijnmond
              </Link>
            </div>
          </div>

          {/* Diensten */}
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Onze Diensten
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Volledige Woningontruiming</h3>
                <p className="text-muted-foreground">
                  Complete ontruiming van uw woning, appartement of bedrijfspand. Inclusief afvoer en milieuvriendelijke verwerking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Bezemschoon Opleveren</h3>
                <p className="text-muted-foreground">
                  Wij zorgen dat uw woning volledig schoon wordt opgeleverd volgens de eisen van de verhuurder of nieuwe eigenaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Ontruiming na Overlijden</h3>
                <p className="text-muted-foreground">
                  Met respect en zorg helpen wij bij het ontruimen van een woning na het overlijden van een dierbare.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Spoedontruiming</h3>
                <p className="text-muted-foreground">
                  Bij spoed kunnen we vaak binnen 24 uur starten. In Rotterdam en omgeving zijn we 24/7 bereikbaar.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Extra Diensten</h3>
                <p className="text-muted-foreground">
                  Vloer/behang verwijderen, schilderwerk, gaatjes stoppen en inpakservice. Alles onder één dak.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-3">Bedrijfsontruimingen</h3>
                <p className="text-muted-foreground">
                  Ook voor kantoren, winkels en bedrijfspanden staan wij voor u klaar met professionele ontruiming.
                </p>
              </div>
            </div>
          </div>

          {/* Waarom Budget Ontruiming */}
          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Waarom kiezen voor Budget Ontruiming?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">🏆 Laagste Prijs Garantie</h3>
                <p className="text-muted-foreground">
                  Vindt u het elders goedkoper? Wij duiken onder die prijs! Geen verrassingen, gewoon de laagste prijs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">🚀 Snel & Flexibel</h3>
                <p className="text-muted-foreground">
                  Meestal binnen 1-3 werkdagen beschikbaar. Bij spoed vaak binnen 24 uur. U bepaalt wanneer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">♻️ Milieuvriendelijk</h3>
                <p className="text-muted-foreground">
                  Wij scheiden en verwerken alle materialen op een milieuvriendelijke manier. Duurzaam ontruimen.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">✅ All-in Service</h3>
                <p className="text-muted-foreground">
                  Van ontruiming tot bezemschoon tot schilderwerk. Alles uit één hand voor uw gemak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

