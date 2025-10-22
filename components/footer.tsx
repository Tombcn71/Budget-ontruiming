export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">Budget Ontruiming</h3>
            <p className="text-sm lg:text-base text-primary-foreground/80 leading-relaxed max-w-md">
              Uw betrouwbare partner voor professionele woningontruimingen tegen de laagste prijs. Gegarandeerd.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>
                <a href="#diensten" className="hover:text-primary-foreground transition-colors">
                  Woningontruiming
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-primary-foreground transition-colors">
                  Bedrijfsontruiming
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-primary-foreground transition-colors">
                  Spoedontruiming
                </a>
              </li>
              <li>
                <a href="#diensten" className="hover:text-primary-foreground transition-colors">
                  Duurzaam Afvoeren
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm lg:text-base text-primary-foreground/80">
              <li>06 12 34 56 78</li>
              <li>info@budgetontruiming.nl</li>
              <li>Ma-Za: 07:00 - 22:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Budget Ontruiming. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
