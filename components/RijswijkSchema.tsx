import React from 'react';

const RijswijkSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/rijswijk/#service",
        "name": "Woningontruiming Rijswijk",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rijswijk",
          "sameAs": "https://www.wikidata.org/wiki/Q652467"
        },
        "description": "Professionele woningontruiming in Rijswijk. Expert in hoogbouw appartementen, huurwoningen en bedrijfsruimtes in Plaspoelpolder. Laagste prijs garantie.",
        "knowsAbout": [
          "Hoogbouw appartement ontruimen Rijswijk",
          "Huurwoning opleveren Rijswijk",
          "Bedrijfsruimte ontruimen Plaspoelpolder",
          "Ontruiming na overlijden Rijswijk"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe werken jullie bij hoogbouw in Rijswijk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wij hebben ruime ervaring met hoogbouw in Rijswijk. Wij gebruiken liften volgens de huisregels en regelen beschermingsmateriaal voor het trappenhuis om schade te voorkomen."
            }
          },
          {
            "@type": "Question",
            "name": "Leveren jullie bezemschoon op voor woningcorporaties in Rijswijk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij leveren huurwoningen in Rijswijk bezemschoon op volgens de strikte oplevervoorwaarden van lokale woningcorporaties."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Rijswijk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Rijswijk altijd verzekerd van de voordeligste prijs voor uw ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Rijswijk",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rijswijk",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2280-2289",
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

export default RijswijkSchema;

