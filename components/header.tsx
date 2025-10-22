import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-primary border-r-[12px] border-r-transparent" />
            <span className="font-bold text-xl lg:text-2xl text-foreground">Budget</span>
            <span className="font-normal text-xl lg:text-2xl text-foreground">Ontruiming</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#diensten"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
            >
              Diensten
              <ChevronDown className="w-4 h-4 text-primary" />
            </a>
            <a
              href="#werkwijze"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Werkwijze
            </a>
            <a
              href="#contact"
              className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="#mijn-offertes"
              className="hidden sm:inline-block text-sm lg:text-base text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Mijn Offertes
            </a>
            <a
              href="#help"
              className="hidden sm:inline-block text-sm lg:text-base text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Help
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
              <a href="#offerte">Gratis Adviesgesprek</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
