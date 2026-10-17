import { config } from "@/data/config";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config.author,
    url: config.site,
    image: `${config.site}/logo.png`,
    email: config.email,
    telephone: config.phone,
    sameAs: [
      config.social.github,
      config.social.linkedin,
      config.social.twitter,
      config.social.instagram,
    ],
    jobTitle: "Full Stack Developer & AI Builder",
    worksFor: {
      "@type": "Organization",
      name: "Trust Fintech",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nagpur",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React.js", "Next.js", "Node.js", "Python", "TypeScript",
      "Solidity", "Web3", "AI", "Machine Learning", "FastAPI",
      "MongoDB", "Docker", "REST APIs", "GraphQL",
    ],
    description: config.description.long,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.author,
    url: config.site,
    potentialAction: {
      "@type": "SearchAction",
      target: `${config.site}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
