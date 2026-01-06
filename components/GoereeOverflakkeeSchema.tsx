import React from 'react';

const GoereeOverflakkeeSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/goeree-overflakkee/#service",
        "name": "Woningontruiming Goeree-Overflakkee",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Goeree-Overflakkee",
          "sameAs": "https://www.wikidata.org/wiki/Q653634"
        },
        "description": "Professionele woningontruiming op heel Goeree-Overflakkee. Expertise in vakantiewoningen in Ouddorp en Stellendam, en permanente woningen in Middelharnis, Sommelsdijk en Oude-Tonge.",
        "knowsAbout": [
          "Vakantiehuis ontruimen Ouddorp",
          "Woningontruiming Middelharnis",
          "Bezemschoon opleveren Sommelsdijk",
          "Ontruiming na overlijden Goeree-Overflakkee"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Goeree-Overflakkee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken op het gehele eiland: van Middelharnis, Sommelsdijk en Dirksland tot Ouddorp, Stellendam en Oude-Tonge."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook vakantiehuizen op Goeree-Overflakkee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zeker. Wij hebben ruime ervaring met het ontruimen en bezemschoon opleveren van vakantiewoningen op recreatieparken, met name in de regio Ouddorp en Stellendam."
            }
          },
          {
            "@type": "Question",
            "name": "Geldt de laagste prijs garantie ook op het eiland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. Ondanks de eilandlocatie garanderen wij de laagste prijs. Vindt u het elders op Goeree-Overflakkee goedkoper? Wij duiken onder die prijs!"
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Goeree-Overflakkee",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Middelharnis",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3240-3259",
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

export default GoereeOverflakkeeSchema;

