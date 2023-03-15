import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {},
  plugins: [
    'gatsby-plugin-react-helmet',
  	'gatsby-plugin-styled-components',
    'gatsby-plugin-postcss',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
  ],
}

export default config