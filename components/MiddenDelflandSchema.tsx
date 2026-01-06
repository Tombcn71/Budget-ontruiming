import React from 'react';

const MiddenDelflandSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/midden-delfland/#service",
        "name": "Woningontruiming Midden-Delfland",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Midden-Delfland",
            "sameAs": "https://www.wikidata.org/wiki/Q610443"
          }
        ],
        "description": "Professionele woningontruiming in Midden-Delfland. Expertise in boerderijen, grote panden met bijgebouwen en bezemschone oplevering in Schipluiden, Maasland en Den Hoorn.",
        "knowsAbout": [
          "Boerderij ontruimen Midden-Delfland",
          "Grote schuur of bijgebouw ontruimen",
          "Woningontruiming Schipluiden en Maasland",
          "Seniorenverhuizing Den Hoorn"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Komen jullie ook in kleinere kernen zoals Den Hoorn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Midden-Delfland: Schipluiden, Maasland én Den Hoorn. Geen enkele locatie is voor ons te afgelegen."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen jullie ook grote schuren en bijgebouwen ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. We hebben ruime ervaring met het ontruimen van boerderijen en panden met grote bijgebouwen in Midden-Delfland. Alles wordt grondig ontruimd en bezemschoon opgeleverd."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Midden-Delfland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u ook in Midden-Delfland verzekerd van de voordeligste prijs voor uw woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Midden-Delfland",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Midden-Delfland",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2636-2652",
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

export default MiddenDelflandSchema;

