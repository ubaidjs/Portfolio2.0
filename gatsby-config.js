module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Ubaid | Portfolio',
    author: 'Ubaid',
  },

  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
