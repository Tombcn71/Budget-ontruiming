import React from 'react';

const HaaglandenHubSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/haaglanden/#service",
        "name": "Woningontruiming Regio Haaglanden",
        "description": "Centrale service voor woningontruiming in de regio Haaglanden, inclusief Den Haag, Delft, Zoetermeer en omstreken.",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "telephone": "+31629759181"
        },
        "areaServed": [
          { "@type": "City", "name": "Den Haag" },
          { "@type": "City", "name": "Delft" },
          { "@type": "City", "name": "Zoetermeer" },
          { "@type": "City", "name": "Rijswijk" },
          { "@type": "City", "name": "Wassenaar" },
          { "@type": "City", "name": "Leidschendam-Voorburg" },
          { "@type": "City", "name": "Pijnacker-Nootdorp" },
          { "@type": "City", "name": "Westland" },
          { "@type": "City", "name": "Midden-Delfland" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Ontruimingsdiensten Haaglanden",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seniorenverhuizing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spoedontruiming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bedrijfsontruiming" } }
          ]
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

export default HaaglandenHubSchema;

