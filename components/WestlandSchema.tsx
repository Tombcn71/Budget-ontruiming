import React from 'react';

const WestlandSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/westland/#service",
        "name": "Woningontruiming Westland",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Westland",
          "sameAs": "https://www.wikidata.org/wiki/Q5915"
        },
        "description": "Professionele woningontruiming in alle kernen van Westland. Expertise in woningen met kassen, schuren en bedrijfsruimtes. Laagste prijs garantie.",
        "knowsAbout": [
          "Woningontruiming Westland",
          "Kas ontruimen Westland",
          "Bedrijfsruimte ontruimen",
          "Bezemschoon opleveren Westland"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Westland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Westland: Naaldwijk, Wateringen, Monster, De Lier, 's-Gravenzande, Poeldijk, Ter Heijde en alle andere omliggende kernen."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen jullie ook kassen of bedrijfsruimtes ontruimen in Westland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij hebben specifieke ervaring met het ontruimen van woningen met bijbehorende kassen, schuren en bedrijfsruimtes in de regio Westland."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel is een ontruiming in Westland mogelijk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In de meeste gevallen kunnen we binnen 1-3 werkdagen beginnen. Bij spoedgevallen in Westland is een start binnen 24 uur vaak mogelijk."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Westland",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Westland",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2670-2685",
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

export default WestlandSchema;

