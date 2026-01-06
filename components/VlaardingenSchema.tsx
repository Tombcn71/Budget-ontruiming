import React from 'react';

const VlaardingenSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/vlaardingen/#service",
        "name": "Woningontruiming Vlaardingen",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "City",
          "name": "Vlaardingen",
          "sameAs": "https://www.wikidata.org/wiki/Q15304"
        },
        "description": "Professionele woningontruiming in alle wijken van Vlaardingen aan de Nieuwe Maas. Specialist in seniorenverhuizingen en bezemschone oplevering in Holy, Ambacht en Westwijk.",
        "knowsAbout": [
          "Woningontruiming Vlaardingen Holy",
          "Seniorenverhuizing Vlaardingen",
          "Huurwoning bezemschoon opleveren Vlaardingen",
          "Inboedelontruiming Babberspolder"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Werken jullie in alle wijken van Vlaardingen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in heel Vlaardingen: Centrum, Westwijk, Babberspolder, Holy en Ambacht. Elke wijk is ons bekend."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kunnen jullie een woning in Vlaardingen ontruimen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meestal kunnen we binnen 1-3 werkdagen starten. Bij spoedgevallen in Vlaardingen kunnen we vaak nog sneller schakelen."
            }
          },
          {
            "@type": "Question",
            "name": "Wat houdt de laagste prijs garantie in Vlaardingen in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vindt u het elders goedkoper? Wij duiken onder die prijs! Zo bent u in Vlaardingen verzekerd van de voordeligste prijs voor uw ontruiming."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Vlaardingen",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vlaardingen",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3130-3137",
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

export default VlaardingenSchema;

