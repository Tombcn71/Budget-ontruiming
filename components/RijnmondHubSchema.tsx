import React from 'react';

const RijnmondHubSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/rijnmond/#service",
        "name": "Woningontruiming Regio Rijnmond",
        "description": "Centrale ontruimingsservice voor de regio Rijnmond, inclusief Rotterdam, de Drechtsteden en de eilanden.",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "telephone": "+31629759181",
          "openingHours": "Mo-Sa 07:00-22:00"
        },
        "areaServed": [
          { "@type": "City", "name": "Rotterdam" },
          { "@type": "City", "name": "Schiedam" },
          { "@type": "City", "name": "Vlaardingen" },
          { "@type": "City", "name": "Capelle aan den IJssel" },
          { "@type": "City", "name": "Barendrecht" },
          { "@type": "City", "name": "Ridderkerk" },
          { "@type": "City", "name": "Albrandswaard" },
          { "@type": "City", "name": "Lansingerland" },
          { "@type": "City", "name": "Krimpen aan den IJssel" },
          { "@type": "City", "name": "Nissewaard" },
          { "@type": "City", "name": "Maassluis" },
          { "@type": "City", "name": "Goeree-Overflakkee" },
          { "@type": "City", "name": "Voorne aan Zee" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Diensten Rijnmond",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hoogbouw Ontruiming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bedrijfsontruiming" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spoedontruiming 24/7" } }
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

export default RijnmondHubSchema;

