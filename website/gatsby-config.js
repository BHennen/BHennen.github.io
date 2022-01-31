module.exports = {
  siteMetadata: {
    title: `Bryce Hennen`,
    author: {
      name: `Bryce Hennen`,
      quote: `Let's make awesome things together!`,
    },
    description: `Bryce Hennen's personal website.`,
    siteUrl: `https://bhennen.github.io`,
    copyright: 2020,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
          blog: require.resolve("./src/templates/blog-post.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-slug`,
    //FIXME: for RSS feeds https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/: `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bryce Hennen`,
        short_name: `brycehennen`,
        start_url: `/`,
        background_color: `#ffffaa`,
        theme_color: `#696969`,
        display: `minimal-ui`,
        icon: `src/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

// // https://github.com/ChristopherBiscardi/gatsby-mdx/issues/199
// //
// // Allows import of components from any folder in src/ such as:
// //
// // import Thing from 'components/thing/whatever.js';
// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//     },
//   })
// }