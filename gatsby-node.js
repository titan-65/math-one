const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = function ({ node, getNode, actions }) {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode });
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}


// TODO: Complete the createPages APi in order to make dynamic pages
exports.createPages = async function ({ graphql, actions }) {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            contentKey
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // result.data.allMarkdownRemark.edges
    //   .forEach(({node}) => {
    //       createPage({
    //           path: node.fields.slug,
    //           component: path
    //             .resolve('./src/templates/session.js'),
    //           context: {
    //               slug: node.fields.slug
    //           }
    //       })
    //   })

    const posts = result.data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.contentKey === 'session')
    posts.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: path
              .resolve('./src/templates/session.js'),
            context: {
                slug: node.fields.slug
            }
        });
    })
    const pageSize = 5
    const pageCount = Math.ceil(posts.length / pageSize)

    const templatePath = path.resolve('src/templates/session-list.js')

    for (let i = 0; i < pageCount; i++) {
        let path = '/session'
        if (i > 0) {
            path += `/${i + 1}`;
        }
            createPage({
                path,
                component: templatePath,
                context: {
                    limit: pageSize,
                    skip: i * pageSize,
                    pageCount,
                    currentPage: i + 1
                }
            })

    }

}
