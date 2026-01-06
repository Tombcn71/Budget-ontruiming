import React from 'react';

const NissewaardSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/nissewaard/#service",
        "name": "Woningontruiming Nissewaard",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Nissewaard",
          "sameAs": "https://www.wikidata.org/wiki/Q15111162"
        },
        "description": "Professionele woningontruiming in Nissewaard. Expertise in hoogbouw in Spijkenisse en woningontruiming in de dorpen Abbenbroek, Geervliet, Heenvliet, Hekelingen, Simonshaven, Zuidland en Oudenhoorn.",
        "knowsAbout": [
          "Woningontruiming Spijkenisse hoogbouw",
          "Woningontruiming Zuidland en Heenvliet",
          "Bezemschoon opleveren Nissewaard",
          "Seniorenverhuizing Spijkenisse"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Nissewaard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Nissewaard: Spijkenisse en alle 7 dorpen waaronder Abbenbroek, Geervliet, Heenvliet, Hekelingen, Simonshaven, Zuidland en Oudenhoorn."
            }
          },
          {
            "@type": "Question",
            "name": "Hebben jullie ervaring met hoogbouw in Spijkenisse?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker, wij hebben veel ervaring met de specifieke logistiek van hoogbouw appartementen in Spijkenisse, inclusief liftgebruik en efficiënte afvoer."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Nissewaard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders in Nissewaard of Spijkenisse goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de voordeligste woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Nissewaard",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nissewaard",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3200-3209",
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

export default NissewaardSchema;

