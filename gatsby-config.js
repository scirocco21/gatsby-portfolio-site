// comment this out for production builds
// const fs = require('fs');
// const dotenv = require('dotenv');
// const envConfig = 
// dotenv.parse(fs.readFileSync('.env'));
// for (var k in envConfig) {
//   process.env[k] = envConfig[k];
// }

module.exports = {
  siteMetadata: {
    title: `Sebastian Gertz`,
    description: `Portfolio Site for Sebastian Gertz || Web Developer NYC.`,
    author: `Sebastian Gertz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // make local filesystem available to graphql queries
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    // image handling
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sebastian Gertz | Web Developer | NYC`,
        short_name: `Seb Gertz Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    { resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vb0h3gv8lx2b`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
     },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`, 
    `gatsby-plugin-layout`,
  ]
}
