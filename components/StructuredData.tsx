import React from 'react';

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": "https://www.budgetontruiming.nl/#organization",
        "name": "Budget Ontruiming",
        "url": "https://www.budgetontruiming.nl/",
        "telephone": "+31629759181",
        "email": "info@budgetontruiming.nl",
        "priceRange": "€",
        "description": "Dé specialist in woningontruiming in Haaglanden en Rijnmond. Wij bieden een laagste prijs garantie en een directe AI-prijsindicatie.",
        "areaServed": [
          { "@type": "City", "name": "Den Haag" },
          { "@type": "City", "name": "Rotterdam" },
          { "@type": "City", "name": "Delft" },
          { "@type": "City", "name": "Zoetermeer" },
          { "@type": "City", "name": "Schiedam" },
          { "@type": "City", "name": "Vlaardingen" },
          { "@type": "City", "name": "Westland" },
          { "@type": "City", "name": "Rijswijk" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Ontruimingsdiensten",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Woningontruiming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bedrijfsontruiming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bezemschoon opleveren" } }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.budgetontruiming.nl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie voor woningontruiming?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget Ontruiming garandeert de laagste prijs. Als u een lagere offerte heeft, duiken wij daaronder. Wij betalen het verschil als u het elders goedkoper vindt."
            }
          },
          {
            "@type": "Question",
            "name": "In welke regio's is Budget Ontruiming actief?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wij zijn actief in heel Zuid-Holland, met een focus op Haaglanden (o.a. Den Haag, Delft) en Rijnmond (o.a. Rotterdam, Schiedam)."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe werkt de AI prijscalculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Onze AI-tool berekent op basis van m2, type woning en verdieping direct een eerlijke prijsindicatie zonder dat een huisbezoek nodig is."
            }
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Budget Ontruiming AI Prijscalculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.budgetontruiming.nl/#website",
        "url": "https://www.budgetontruiming.nl/",
        "name": "Budget Ontruiming",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.budgetontruiming.nl/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;

