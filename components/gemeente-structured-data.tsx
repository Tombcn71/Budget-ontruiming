import { ServiceSchema, FAQSchema, BreadcrumbSchema, WebPageSchema } from "@/components/structured-data"
import { GemeenteData } from "@/lib/gemeente-data"

interface GemeenteStructuredDataProps {
  data: GemeenteData
}

export function GemeenteStructuredData({ data }: GemeenteStructuredDataProps) {
  return (
    <>
      {/* Service Schema */}
      <ServiceSchema 
        gemeenteNaam={data.naam}
        postcodes={data.postcodes}
        description={data.description}
        wijken={data.wijken}
      />
      
      {/* FAQ Schema */}
      <FAQSchema faqs={data.faq} />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://budgetontruiming.nl" },
        { name: data.regio, url: `https://budgetontruiming.nl/regio/${data.regio.toLowerCase()}` },
        { name: data.naam, url: `https://budgetontruiming.nl/woningontruiming-${data.slug}` }
      ]} />
      
      {/* WebPage Schema */}
      <WebPageSchema 
        title={data.title}
        description={data.description}
        url={`https://budgetontruiming.nl/woningontruiming-${data.slug}`}
      />
    </>
  )
}

