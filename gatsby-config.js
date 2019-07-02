require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Content Partner`,
    description: `Słowa to nie zbiór znaków`,
    author: `@burzychsd`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/components/templates/Layout/index.js`)
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Content Partner`,
        short_name: `Content Partner`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/favicon.png`
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Sans`,
            variants: [`400`, `700`],
            subsets: [`latin-ext`]
          },
          {
            family: `Merriweather`,
            variants: [`200`, `300`, `400`],
            subsets: [`latin-ext`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vmnwaafskj8m`,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `content-partner`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ['___gatsby', 'ScrollbarsCustom', 'ScrollbarsCustom-Wrapper'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-offline`,
  ],
}
