import React from 'react';

const WassenaarSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/wassenaar/#service",
        "name": "Woningontruiming Wassenaar",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Wassenaar",
          "sameAs": "https://www.wikidata.org/wiki/Q501443"
        },
        "description": "Discrete woningontruiming in Wassenaar. Gespecialiseerd in grote villa's, landhuizen en taxatie van waardevolle inboedel. Laagste prijs garantie.",
        "knowsAbout": [
          "Villa ontruiming Wassenaar",
          "Discrete woningontruiming",
          "Inboedel taxatie en verkoop",
          "Landhuis ontruimen Rijksstraatweg"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hoe discreet werken jullie in Wassenaar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Privacy is essentieel in Wassenaar. Onze medewerkers werken professioneel en discreet, zonder onnodige aandacht of opvallende voertuigen."
            }
          },
          {
            "@type": "Question",
            "name": "Werken jullie met taxateurs voor waardevolle spullen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. Voor antiek en waardevolle inboedel schakelen we indien gewenst een erkend taxateur in, zodat u het maximale uit uw bezittingen haalt."
            }
          },
          {
            "@type": "Question",
            "name": "Kunnen jullie ook grote landhuizen en tuinen ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij hebben ruime ervaring met grote panden, kelders, zolders en bijgebouwen in Wassenaar. Ook het ontruimen van tuinen en tuinhuizen behoort tot onze service."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Wassenaar",
        "telephone": "+31629759181",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Wassenaar",
          "addressRegion": "Zuid-Holland",
          "postalCode": "2240-2249",
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

export default WassenaarSchema;

