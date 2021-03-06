module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'A New Blog'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`
      }
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     excerpt_separator: `<!--- end --->`
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify-cms'
  ],
}

// pathPrefix: "/levelupgatsby",