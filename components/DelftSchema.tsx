import React from 'react';

const DelftSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/delft/#service",
        "name": "Woningontruiming Delft",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Delft",
          "sameAs": "https://www.wikidata.org/wiki/Q690"
        },
        "description": "Professionele woningontruiming in Delft. Specialisatie in studentenwoningen, monumentale panden en bezemschone oplevering. Laagste prijs garantie.",
        "knowsAbout": [
          "Studentenwoning ontruimen Delft",
          "Ontruiming binnenstad Delft",
          "Bezemschoon opleveren Delft",
          "TU Delft wijk ontruimingen"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe gaan jullie om met de binnenstad van Delft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wij hebben uitgebreide kennis van de Delftse binnenstad en de lokale toegankelijkheid. Voor smalle straatjes kunnen wij indien nodig werken met handkarren om de woning efficiënt te ontruimen."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook studentenkamers in Delft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij doen ook kleinere klussen zoals studentenkamers. Deze kunnen we vaak binnen een halve dag ontruimen en bezemschoon opleveren voor de borg-teruggave."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Delft?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Delft altijd verzekerd van de voordeligste woningontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Delft",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delft",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2600-2629",
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

export default DelftSchema;

