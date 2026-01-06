import React from 'react';

const KrimpenSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/krimpen-aan-den-ijssel/#service",
        "name": "Woningontruiming Krimpen aan den IJssel",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Krimpen aan den IJssel",
            "sameAs": "https://www.wikidata.org/wiki/Q935500"
          },
          {
            "@type": "City",
            "name": "Lekkerkerk",
            "sameAs": "https://www.wikidata.org/wiki/Q1816568"
          }
        ],
        "description": "Professionele woningontruiming in Krimpen aan den IJssel en Lekkerkerk. Specialist in bezemschoon opleveren en ontruiming bij overlijden aan de rivier de Lek.",
        "knowsAbout": [
          "Woningontruiming Krimpen Centrum",
          "Ontruiming Lekkerkerk",
          "Bedrijfsontruiming Stormpolder",
          "Huurwoning opleveren Krimpen aan den IJssel"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie ook in Lekkerkerk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Krimpen aan den IJssel en zijn ook volledig actief in Lekkerkerk voor zowel woningen als bedrijfspanden."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie een woning in Krimpen ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meestal kunnen we binnen 1 tot 3 werkdagen starten. Bij spoedgevallen in de Krimpenerwaard kunnen we vaak al binnen 24 uur beginnen."
            }
          },
          {
            "@type": "Question",
            "name": "Bieden jullie de laagste prijs garantie in Krimpen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker! Vindt u in de regio Krimpen aan den IJssel een goedkopere offerte? Wij duiken onder die prijs!"
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Krimpen aan den IJssel",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Krimpen aan den IJssel",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2920-2925",
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

export default KrimpenSchema;

