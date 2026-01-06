import React from 'react';

const ZoetermeerSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/zoetermeer/#service",
        "name": "Woningontruiming Zoetermeer",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Zoetermeer",
          "sameAs": "https://www.wikidata.org/wiki/Q71696"
        },
        "description": "Professionele woningontruiming in alle wijken van Zoetermeer. Expert in portiekflats, galerijwoningen en eengezinswoningen. Laagste prijs garantie.",
        "knowsAbout": [
          "Portiekflat ontruimen Zoetermeer",
          "Seniorenverhuizing Zoetermeer",
          "Bezemschoon opleveren huurwoning Zoetermeer",
          "Woningontruiming Oosterheem en Rokkeveen"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle wijken van Zoetermeer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, van Dorp tot Oosterheem, van Meerzicht tot Seghwaert – wij werken in heel Zoetermeer inclusief Palenstein, Buytenwegh en Rokkeveen."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie een woning in Zoetermeer ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Een gemiddelde woning ontruimen we in 1-2 werkdagen. We kunnen meestal binnen 1-3 werkdagen starten, en bij spoed zelfs binnen 24 uur."
            }
          },
          {
            "@type": "Question",
            "name": "Wat houdt de laagste prijs garantie in Zoetermeer in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Zoetermeer altijd verzekerd van de beste prijs voor uw woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Zoetermeer",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Zoetermeer",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2700-2729",
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

export default ZoetermeerSchema;

