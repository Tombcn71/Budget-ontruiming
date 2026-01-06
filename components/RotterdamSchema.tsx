import React from 'react';

const RotterdamSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/rotterdam/#service",
        "name": "Woningontruiming Rotterdam",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
                  "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Rotterdam",
          "sameAs": "https://www.wikidata.org/wiki/Q34370"
        },
        "description": "Professionele woningontruiming in heel Rotterdam. Specialisatie in hoogbouw, appartementen en spoedontruimingen. Laagste prijs garantie.",
        "knowsAbout": [
          "Hoogbouw appartementen Rotterdam",
          "Spoedontruiming Rotterdam",
          "Bedrijfsontruiming Rotterdam",
          "Woningontruiming Hillegersberg"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle Rotterdamse wijken?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Rotterdam: Centrum, Noord, Zuid, West, Oost, Kralingen, Feijenoord, Charlois, IJsselmonde en Prins Alexander."
            }
          },
          {
            "@type": "Question",
            "name": "Zijn jullie 24/7 bereikbaar in Rotterdam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voor spoedgevallen zijn wij 24/7 bereikbaar in Rotterdam. Wij kunnen vaak binnen enkele uren beschikbaar zijn voor een spoedontruiming."
            }
          },
          {
            "@type": "Question",
            "name": "Hebben jullie ervaring met hoogbouw in Rotterdam?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij hebben uitgebreide ervaring met hoogbouw appartementen in Rotterdam en gebruiken de juiste apparatuur en bescherming voor een veilige ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Rotterdam",
                "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Rotterdam",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3000-3099",
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

export default RotterdamSchema;

