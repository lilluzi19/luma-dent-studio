const dentalSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "LumaDent Studio",
  url: "https://lumadentstudio.netlify.app/",
  logo: "https://lumadentstudio.netlify.app/images/icons/logo.png",
  image:
    "https://lumadentstudio.netlify.app/images/hero/dentist.webp",
  description:
    "LumaDent Studio is a private cosmetic dental clinic in Chelsea, London, offering veneers, Invisalign, teeth whitening, smile design, general dentistry and preventative dental care.",
  telephone: "+44 20 7868 1198",
  email: "lumadentstudio@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 King's Road",
    addressLocality: "Chelsea",
    addressRegion: "London",
    postalCode: "SW3 5XP",
    addressCountry: "GB",
  },
  areaServed: [
    "Chelsea",
    "Kensington",
    "London",
  ],
  priceRange: "£££",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
  sameAs: [
    "https://www.tiktok.com/",
    "https://www.instagram.com/",
    "https://x.com/",
    "https://www.linkedin.com/",
  ],
  medicalSpecialty: [
    "Cosmetic Dentistry",
    "General Dentistry",
    "Orthodontics",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Teeth Whitening",
    },
    {
      "@type": "MedicalProcedure",
      name: "Veneers",
    },
    {
      "@type": "MedicalProcedure",
      name: "Invisalign",
    },
    {
      "@type": "MedicalProcedure",
      name: "Dental Implants",
    },
    {
      "@type": "MedicalProcedure",
      name: "Smile Design",
    },
  ],
};

export default function DentalSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(dentalSchema),
      }}
    />
  );
}