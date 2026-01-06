import React from 'react';

const LansingerlandSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/lansingerland/#service",
        "name": "Woningontruiming Lansingerland",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Lansingerland",
          "sameAs": "https://www.wikidata.org/wiki/Q610446"
        },
        "description": "Professionele woningontruiming en bedrijfsontruiming in Lansingerland. Actief in Berkel en Rodenrijs, Bleiswijk en Bergschenhoek. Laagste prijs garantie en bezemschone oplevering.",
        "knowsAbout": [
          "Woningontruiming Berkel en Rodenrijs",
          "Ontruiming Bleiswijk en Bergschenhoek",
          "Bedrijfsontruiming Lansingerland",
          "Seniorenverhuizing Lansingerland"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Lansingerland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij zijn actief in alle drie de kernen: Berkel en Rodenrijs, Bleiswijk én Bergschenhoek. Wij kennen de lokale situatie in de gehele gemeente Lansingerland."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook bedrijfspanden in Lansingerland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker. Naast woningen verzorgen wij ook professionele bedrijfsontruimingen in Lansingerland voor kantoren en zakelijke panden."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie starten in Lansingerland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meestal kunnen we binnen 1 tot 3 werkdagen starten. Bij spoedgevallen in de regio Lansingerland kunnen we vaak nog sneller schakelen."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Lansingerland",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lansingerland",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2650-2665",
          "addressCountry": "NL"
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

export default LansingerlandSchema;

