require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby E-shop`,
    description: `A simple eshop starter to get up with Gatsby, Contenful and Snipcart`,
    author: `@ttrmz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.12",
        defaultLang: "en",
        currency: "eur",
        openCartOnAdd: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby E-shop`,
        short_name: `G E-shop`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
