import React from 'react';

const LeidschendamSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/leidschendam-voorburg/#service",
        "name": "Woningontruiming Leidschendam-Voorburg",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Leidschendam-Voorburg",
          "sameAs": "https://www.wikidata.org/wiki/Q651163"
        },
        "description": "Professionele woningontruiming in Leidschendam-Voorburg. Expertise in bezemschoon opleveren conform verhuurderseisen, inclusief Stompwijk en de Korte Akkeren. Laagste prijs garantie.",
        "knowsAbout": [
          "Seniorenverhuizing Leidschendam-Voorburg",
          "Huurwoning opleveren zonder pluggen en spijkergaten",
          "Woningontruiming Stompwijk",
          "Complete inboedelontruiming Voorburg"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie starten in Leidschendam-Voorburg?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meestal kunnen we binnen 1-3 werkdagen beginnen. Bij spoed is ontruiming in de regio Leidschendam-Voorburg vaak al binnen 24 uur mogelijk."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook tuinen en schuren?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij ontruimen de gehele woning inclusief tuin, schuur, garage en berging in Leidschendam-Voorburg. Alles wordt bezemschoon opgeleverd."
            }
          },
          {
            "@type": "Question",
            "name": "Wat houdt de laagste prijs garantie in Leidschendam-Voorburg in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders in de regio goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de scherpste prijs voor uw ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Leidschendam-Voorburg",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Leidschendam-Voorburg",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2260-2275",
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

export default LeidschendamSchema;

