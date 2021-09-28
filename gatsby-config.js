const stylesString = `
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400&display=swap');
`;


module.exports = {
  siteMetadata: {
    title: `Andres Techera`,
    description: `I'm a Front End developer and Engineering manager with a passion for software design, leadership and mentoring.`,
    author: `@Andertech`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Bebas Neue', 'Open Sans']
        }
      }
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    "gatsby-plugin-mdx",
    {
			resolve: 'gatsby-plugin-pdf',
			options: {
				paths: ['/', '/pdf'],
				outputPath: '/public/exports',
        styleTagOptions: {
          path: 'src/components/layout.css'
        },
        pdfOptions: {
          scale: .75,
          printBackground: true,
          height: "6000px",
        }
			},
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
