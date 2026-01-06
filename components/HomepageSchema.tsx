import React from 'react';

const HomepageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": "https://www.budgetontruiming.nl/#organization",
        "name": "Budget Ontruiming",
        "url": "https://www.budgetontruiming.nl/",
        "telephone": "+31629759181",
        "email": "info@budgetontruiming.nl",
        "priceRange": "€",
        "description": "Gespecialiseerd in woningontruiming in Zuid-Holland met een unieke laagste prijs garantie en AI-prijscalculator.",
        "areaServed": [
          { "@type": "City", "name": "Den Haag" },
          { "@type": "City", "name": "Rotterdam" },
          { "@type": "City", "name": "Delft" },
          { "@type": "City", "name": "Zoetermeer" },
          { "@type": "City", "name": "Schiedam" },
          { "@type": "City", "name": "Vlaardingen" }
        ],
        "knowsAbout": ["Woningontruiming", "Bedrijfsontruiming", "Bezemschoon opleveren", "Ontruiming na overlijden"]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Budget Ontruiming AI Prijscalculator",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "description": "Slimme AI tool voor directe prijsindicatie van woningontruiming op basis van m2 en woningtype."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.budgetontruiming.nl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Wat is de laagste prijs garantie voor woningontruiming?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Budget Ontruiming garandeert de laagste prijs in Haaglanden en Rijnmond. Wij duiken onder elke concurrerende offerte zodat u nooit te veel betaalt."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe werkt de AI prijscalculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Onze AI-tool berekent direct een prijsindicatie op basis van de oppervlakte, het type woning en de verdieping. Een huisbezoek is niet meer nodig voor een offerte."
            }
          }
        ]
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

export default HomepageSchema;

