/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`, })
require('dotenv').config({})

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
                projectId: `1j0elxyl`,
                dataset: process.env.SANITY_DATASET,
                watchMode: true,
                token: process.env.SANITY_TOKEN
            }

        },
        'gatsby-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-transformer-remark',
        'gatsby-plugin-styled-components'
    ]
}
