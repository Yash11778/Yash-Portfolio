import { config } from "@/data/config";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": config.author,
    "url": config.site,
    "image": `${config.site}/logo.png`,
    "sameAs": [
      config.social.github,
      config.social.linkedin,
      config.social.twitter,
      config.social.instagram,
      config.social.facebook
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": config.description.long
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
