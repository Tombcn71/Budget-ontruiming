import React from 'react';

const AlbrandswaardSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.budgetontruiming.nl/albrandswaard/#service",
        "name": "Woningontruiming Albrandswaard",
        "provider": {
          "@type": "MovingCompany",
          "name": "Budget Ontruiming",
          "url": "https://www.budgetontruiming.nl/",
          "telephone": "+31629759181"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Albrandswaard",
          "sameAs": "https://www.wikidata.org/wiki/Q10001"
        },
        "description": "Professionele en persoonlijke woningontruiming in Albrandswaard. Lokale expertise in de kernen Rhoon en Poortugaal voor zowel huur- als koopwoningen.",
        "knowsAbout": [
          "Woningontruiming Rhoon",
          "Woningontruiming Poortugaal",
          "Bezemschoon opleveren Albrandswaard",
          "Ontruiming na overlijden Albrandswaard"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Zijn jullie actief in zowel Poortugaal als Rhoon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wij werken in de gehele gemeente Albrandswaard, met volledige dekking in de kernen Poortugaal en Rhoon."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe snel kan een woning in Albrandswaard ontruimd worden?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meestal starten we binnen 1-3 werkdagen. Bij spoedontruimingen in Albrandswaard kunnen we vaak al binnen 24 tot 48 uur beginnen."
            }
          },
          {
            "@type": "Question",
            "name": "Geldt de laagste prijs garantie ook in Albrandswaard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. Als u ergens anders in Albrandswaard een lagere offerte krijgt, duiken wij onder die prijs!"
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Budget Ontruiming Albrandswaard",
        "telephone": "+31629759181",
        "priceRange": "€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Albrandswaard",
          "addressRegion": "Zuid-Holland",
          "postalCode": "3160-3161",
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

export default AlbrandswaardSchema;

