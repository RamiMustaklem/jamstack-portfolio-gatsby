/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Rami Mustaklem",
    description:
      "Rami Mustaklem, Full Stack Web Developer, React/Native, Angular, NodeJS, WordPress/WooCommerce.",
    author: "@RamiMustaklem",
    twitterUsername: "@RamiMustaklem",
    image: "/avataaars.png",
    siteUrl: "https://ramimustaklem.com/",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-55174263-8",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/blog`, `/favicon`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_ENDPOINT,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    "gatsby-plugin-netlify",
  ],
}
