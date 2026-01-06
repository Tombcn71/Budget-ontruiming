import React from 'react';

const MaassluisSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/maassluis/#service",
        "name": "Woningontruiming Maassluis",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Maassluis",
          "sameAs": "https://www.wikidata.org/wiki/Q511487"
        },
        "description": "Professionele woningontruiming in Maassluis. Specialist in de ontruiming van historische panden in de binnenstad en moderne woningen in Steendijkpolder. Laagste prijs garantie.",
        "knowsAbout": [
          "Woningontruiming Maassluis Centrum",
          "Historisch pand ontruimen Maassluis",
          "Huurwoning bezemschoon opleveren Maassluis",
          "Ontruiming na overlijden Maassluis"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hebben jullie ervaring met historische panden in Maassluis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij hebben ruime ervaring met de specifieke logistiek en zorg die karakteristieke en historische woningen in het centrum van Maassluis vereisen."
            }
          },
          {
            "@type": "Question",
            "name": "Werken jullie ook in de Steendijkpolder en Koningshoek?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker, wij zijn actief in heel Maassluis, van de oudere wijken rond de haven tot de modernere buurten zoals Steendijkpolder en Koningshoek."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Maassluis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u een goedkopere offerte voor uw woningontruiming in Maassluis? Wij duiken onder die prijs! Zo bent u altijd het voordeligst uit."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Maassluis",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maassluis",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3140-3149",
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

export default MaassluisSchema;

