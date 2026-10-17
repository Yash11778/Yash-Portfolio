export async function GET() {
  const baseUrl = "https://www.yashdharme.tech";
  const lastmod = new Date().toISOString().split("T")[0];

  const pages = [
    { path: "", priority: "1.0", changefreq: "monthly" },
    { path: "/about", priority: "0.9", changefreq: "monthly" },
    { path: "/projects", priority: "0.9", changefreq: "weekly" },
    { path: "/contact", priority: "0.8", changefreq: "monthly" },
    { path: "/blog", priority: "0.7", changefreq: "weekly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
