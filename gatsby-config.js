module.exports = {
  siteMetadata: {
    title: `CYF`,
    description: `CYF is a germany-based Artist, part of "#DEKUBITUS"-trio with producers and long time friends Stapes and Gobi. Member of the “Water/Gang” artists-collective.`,
    author: `CYF`,
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
        background_color: `#48bb78`,
        theme_color: `#48bb78`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `php`,
        path: `${__dirname}/src/php`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/php`,
        destination: './php',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/src/config`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/src/config`,
        destination: '.',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
