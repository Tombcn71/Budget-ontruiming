import React from 'react';

const BarendrechtSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/barendrecht/#service",
        "name": "Woningontruiming Barendrecht",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Barendrecht",
          "sameAs": "https://www.wikidata.org/wiki/Q790580"
        },
        "description": "Professionele woningontruiming in Barendrecht. Expertise in moderne gezinswoningen in Carnisselande en oudere panden in het centrum. Laagste prijs garantie.",
        "knowsAbout": [
          "Woningontruiming Barendrecht Carnisselande",
          "Gezinswoning ontruimen Barendrecht",
          "Huurwoning bezemschoon opleveren Barendrecht",
          "Tuin en schuur ontruimen Barendrecht"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie ook in Carnisselande?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Barendrecht inclusief de wijk Carnisselande, evenals Oost- en West-Barendrecht."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen jullie ook de tuin ontruimen in Barendrecht?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij ontruimen de gehele woning inclusief tuin, schuur, garage en berging. Alles wordt netjes afgevoerd en bezemschoon opgeleverd."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Barendrecht?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders in Barendrecht goedkoper? Wij duiken onder die prijs! Zo bent u gegarandeerd van de voordeligste prijs voor uw woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Barendrecht",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Barendrecht",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2990-2995",
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

export default BarendrechtSchema;

