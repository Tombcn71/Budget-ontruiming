import React from 'react';

const VoorneAanZeeSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/voorne-aan-zee/#service",
        "name": "Woningontruiming Voorne aan Zee",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Voorne aan Zee",
          "sameAs": "https://www.wikidata.org/wiki/Q111537237"
        },
        "description": "Professionele woningontruiming in Voorne aan Zee. Expertise in vakantiewoningen in Rockanje en Oostvoorne, en ontruimingen in Brielle en Hellevoetsluis. Laagste prijs garantie.",
        "knowsAbout": [
          "Woningontruiming Brielle en Hellevoetsluis",
          "Vakantiehuis ontruimen Rockanje",
          "Ontruiming Oostvoorne en Zwartewaal",
          "Bezemschoon opleveren Voorne aan Zee"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle kernen van Voorne aan Zee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij zijn actief in de steden Brielle en Hellevoetsluis, en de dorpen Rockanje, Tinte, Oostvoorne, Vierpolders en Zwartewaal."
            }
          },
          {
            "@type": "Question",
            "name": "Ontruimen jullie ook vakantiewoningen aan de kust?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. Wij hebben ruime ervaring met het ontruimen en bezemschoon opleveren van zowel vakantiehuizen als permanente woningen in de kustkernen van Voorne aan Zee."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie in Voorne aan Zee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders op Voorne-Putten goedkoper? Wij duiken onder die prijs! Zo bent u altijd verzekerd van de voordeligste ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Voorne aan Zee",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Voorne aan Zee",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3230-3249",
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

export default VoorneAanZeeSchema;

