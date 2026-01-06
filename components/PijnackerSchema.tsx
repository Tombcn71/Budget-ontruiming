import React from 'react';

const PijnackerSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/pijnacker-nootdorp/#service",
        "name": "Woningontruiming Pijnacker-Nootdorp",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Pijnacker-Nootdorp",
          "sameAs": "https://www.wikidata.org/wiki/Q162058"
        },
        "description": "Professionele woningontruiming in Pijnacker, Nootdorp en Delfgauw. Expertise in moderne gezinswoningen, appartementen en seniorenverhuizingen. Laagste prijs garantie.",
        "knowsAbout": [
          "Gezinswoning ontruimen Pijnacker",
          "Appartement bezemschoon opleveren Nootdorp",
          "Woningontruiming Delfgauw",
          "Ontruiming Keijzershof"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie ook in Delfgauw?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in de hele gemeente Pijnacker-Nootdorp, inclusief Delfgauw en alle wijken in Pijnacker en Nootdorp."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen jullie ook de tuin en schuur ontruimen in Pijnacker-Nootdorp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker, wij ontruimen de gehele woning inclusief alle bijgebouwen zoals garages, schuren, tuinen en bergingen. Alles wordt netjes afgevoerd."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Pijnacker-Nootdorp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Pijnacker-Nootdorp altijd verzekerd van de voordeligste prijs voor uw woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Pijnacker-Nootdorp",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pijnacker-Nootdorp",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2640-2649",
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

export default PijnackerSchema;

