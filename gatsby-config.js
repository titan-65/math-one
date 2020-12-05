/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from 'dotenv'

dotenv.config({ path: 'env' })

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: 'Math-One App'
    },
    plugins: [
        'gatsby-plugin-netlify-cms',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'session',
                path: 'src/session'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pageData',
                path: 'src/pageData'
            }
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PORJECT_ID,
                dataset: process.env.DATASET,
                token: process.env.SANITY_TOKEN
            }

        },
        'gatsby-transformer-remark',
        'gatsby-plugin-styled-components'
    ]
}
