export default async function Sitemap() {
  return [
    {
      url: "https://",
      lastModified: new Date()
    },
    {
      url: "https://${domain}",
      lastModified: new Date()
    }
  ]
}
