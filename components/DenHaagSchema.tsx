import React from 'react';

const DenHaagSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/den-haag/#service",
        "name": "Woningontruiming Den Haag",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
                  "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Den Haag",
          "sameAs": "https://www.wikidata.org/wiki/Q36500"
        },
        "description": "Gespecialiseerde woningontruiming in Den Haag. Wij leveren bezemschoon op conform de eisen van Staedion, Haag Wonen en Vestia.",
        "knowsAbout": [
          "Woningontruiming Den Haag",
          "Bezemschoon opleveren Staedion",
          "Seniorenverhuizing Den Haag",
          "Haagse woningcorporaties"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie ontruimen in Den Haag?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In Den Haag kunnen wij vaak binnen 24-48 uur starten. Bij spoed in wijken zoals het Centrum of Scheveningen zijn we direct beschikbaar."
            }
          },
          {
            "@type": "Question",
            "name": "Voldoen jullie aan de eisen van Haagse woningbouwverenigingen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij kennen de oplevervoorwaarden van alle grote Haagse corporaties zoals Staedion, Haag Wonen en Vestia en garanderen een correcte oplevering."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Den Haag",
                "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Den Haag",
          "addressRegion": "Zuid-Holland",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.0705",
          "longitude": "4.3007"
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

export default DenHaagSchema;

