module.exports = {
  siteMetadata: {
    title: `cyftime`,
    description: `Germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective.`,
    author: `cyf`,
    siteUrl: `https://cyftime.de`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cyftime`,
        short_name: `cyftime`,
        start_url: `/`,
        background_color: `#68d391`,
        theme_color: `#68d391`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
