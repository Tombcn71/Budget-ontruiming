import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${Math.random()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema - Voor hele website
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://budgetontruiming.nl/#organization",
    "name": "Budget Ontruiming",
    "alternateName": "Budget Ontruiming Nederland",
    "url": "https://budgetontruiming.nl",
    "logo": "https://budgetontruiming.nl/logo.png",
    "description": "Professionele woningontruiming in Haaglanden en Rijnmond. Vindt u het elders goedkoper? Wij duiken onder die prijs! Actief in 22 gemeentes.",
    "priceRange": "€€",
    "telephone": "+31612345678",
    "email": "info@budgetontruiming.nl",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Zuid-Holland",
      "addressCountry": "NL"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Den Haag"
      },
      {
        "@type": "City",
        "name": "Rotterdam"
      },
      {
        "@type": "City",
        "name": "Delft"
      },
      {
        "@type": "City",
        "name": "Zoetermeer"
      },
      {
        "@type": "City",
        "name": "Schiedam"
      },
      {
        "@type": "City",
        "name": "Vlaardingen"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.0705",
        "longitude": "4.3007"
      },
      "geoRadius": "50000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      // TODO: Social media links toevoegen als beschikbaar
    ]
  }

  return <StructuredData data={schema} />
}

// Service Schema - Voor specifieke diensten per gemeente
interface ServiceSchemaProps {
  gemeenteNaam: string
  postcodes: string
  description: string
  wijken?: string[]
}

export function ServiceSchema({ gemeenteNaam, postcodes, description, wijken }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Woningontruiming",
    "name": `Woningontruiming ${gemeenteNaam}`,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Budget Ontruiming",
      "url": "https://budgetontruiming.nl"
    },
    "areaServed": {
      "@type": "City",
      "name": gemeenteNaam,
      "postalCode": postcodes
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Woningontruiming diensten",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Volledige woningontruiming"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bezemschoon opleveren"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spoedontruiming"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ontruiming na overlijden"
          }
        }
      ]
    }
  }

  return <StructuredData data={schema} />
}

// FAQ Schema - Voor FAQ secties
interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return <StructuredData data={schema} />
}

// BreadcrumbList Schema - Voor navigatie
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return <StructuredData data={schema} />
}

// WebPage Schema - Voor specifieke pagina's
interface WebPageSchemaProps {
  title: string
  description: string
  url: string
}

export function WebPageSchema({ title, description, url }: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Budget Ontruiming",
      "url": "https://budgetontruiming.nl"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://budgetontruiming.nl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": url
        }
      ]
    }
  }

  return <StructuredData data={schema} />
}

