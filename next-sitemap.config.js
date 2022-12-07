/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.wictronix.com",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  // ...other options
};
