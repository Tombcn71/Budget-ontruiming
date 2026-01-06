import React from 'react';

const SchiedamSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/schiedam/#service",
        "name": "Woningontruiming Schiedam",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Schiedam",
          "sameAs": "https://www.wikidata.org/wiki/Q10080"
        },
        "description": "Professionele woningontruiming in Schiedam. Expertise in monumentale panden in het centrum en hoogbouw appartementen in Nieuwland en Groenoord. Laagste prijs garantie.",
        "knowsAbout": [
          "Ontruiming historisch centrum Schiedam",
          "Hoogbouw ontruimen Schiedam Nieuwland",
          "Bezemschoon opleveren huurwoning Schiedam",
          "Spoedontruiming Schiedam"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle wijken van Schiedam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Schiedam: Centrum, Nieuwland, Groenoord, Kethel en Spaland. Wij kennen de lokale situatie in elke wijk goed."
            }
          },
          {
            "@type": "Question",
            "name": "Hebben jullie ervaring met monumentale panden in Schiedam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken regelmatig in het historische centrum van Schiedam en hebben veel respect en ervaring met de zorgvuldige ontruiming van oude en monumentale panden."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Schiedam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders in Schiedam goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de voordeligste woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Schiedam",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Schiedam",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3110-3125",
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

export default SchiedamSchema;

