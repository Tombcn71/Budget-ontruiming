import React from 'react';

const CapelleSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/capelle-aan-den-ijssel/#service",
        "name": "Woningontruiming Capelle aan den IJssel",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Capelle aan den IJssel",
          "sameAs": "https://www.wikidata.org/wiki/Q204439"
        },
        "description": "Professionele woningontruiming in Capelle aan den IJssel. Specialist in hoogbouw torens, galerijflats en bezemschone oplevering in Schollevaar en Fascinatio. Laagste prijs garantie.",
        "knowsAbout": [
          "Hoogbouw appartement ontruimen Capelle",
          "Galerijflat ontruiming logistiek",
          "Huurwoning opleveren Capelle aan den IJssel",
          "Woningontruiming Fascinatio en Schollevaar"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie ook in de hoogbouw van Capelle aan den IJssel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij hebben veel ervaring met de hoogbouw in Capelle. Wij maken efficiënt gebruik van liften en trappenhuizen conform de geldende huisregels van de VvE of verhuurder."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie een woning in Capelle ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Een gemiddelde woning in Capelle aan den IJssel ontruimen we in 1-2 werkdagen. We kunnen meestal binnen 2 tot 3 dagen na akkoord starten."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Capelle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders in Capelle aan den IJssel goedkoper? Wij duiken onder die prijs! Zo bent u gegarandeerd van de voordeligste ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Capelle aan den IJssel",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Capelle aan den IJssel",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2900-2907",
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

export default CapelleSchema;

