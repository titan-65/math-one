/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
        'gatsby-transformer-remark',
        'gatsby-plugin-styled-components'
    ]
}
