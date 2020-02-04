module.exports = {
  siteMetadata: {
    title: 'Ubaid | Portfolio',
    author: 'Ubaid',
    description:
      'I am Ubaid Siddiqui. Frontend Developer and Designer based in India. Contact Me at ubaidsid0@gmail.com',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
