import React from 'react';

const RidderkerkSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/ridderkerk/#service",
        "name": "Woningontruiming Ridderkerk",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Ridderkerk",
          "sameAs": "https://www.wikidata.org/wiki/Q935515"
        },
        "description": "Professionele woningontruiming en bedrijfsontruiming in Ridderkerk. Actief in alle kernen: Bolnes, Slikkerveer, Rijsoord en het Centrum. Laagste prijs garantie.",
        "knowsAbout": [
          "Woningontruiming Ridderkerk Bolnes",
          "Bedrijfsontruiming Ridderkerk",
          "Seniorenverhuizing Rijsoord",
          "Huurwoning bezemschoon opleveren Slikkerveer"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Ridderkerk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Ridderkerk inclusief Bolnes, Rijsoord en Slikkerveer. Onze lokale kennis van deze wijken zorgt voor een snelle service."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook bedrijfspanden in Ridderkerk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, naast woningontruiming verzorgen wij ook professionele bedrijfsontruimingen in Ridderkerk voor kantoren, magazijnen en winkelpanden."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Ridderkerk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Ridderkerk altijd verzekerd van de voordeligste prijs voor uw ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Ridderkerk",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ridderkerk",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2980-2989",
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

export default RidderkerkSchema;

