import React from 'react';
import { graphql, Link} from 'gatsby'

import SessionPost from "../components/SessionPost"
import Layout from "../components/Layout"

export default function SessionListTemplate({ data, pageContext }) {
  // Generate the previous and next page URLS
  const previousPage = pageContext.currentPage === 2 ? '/session' : `/session/${pageContext.currentPage - 1}`;
  const nextPage = `/session/${pageContext.currentPage + 1}`

  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(node => (
          <SessionPost key={node.node.id}
                       slug={node.node.fields.slug}
                       title={node.node.frontmatter.title}
                       date={node.node.frontmatter.date}
                       excerpt={node.node.excerpt}
          />
      ))}

      <div className="row">
        <div className="col-md-6">
          <ul className="pagination pagination-info">
          {pageContext.currentPage > 1 && (
              <li className="page-item"><Link to={previousPage} className="page-link"> prev</Link></li>
              )}
          {pageContext.currentPage < pageContext.pageCount && (
              <li className="page-item"><Link to={nextPage} className="page-link"> next</Link></li>
          )}
          </ul>
        </div>
      </div>

    </Layout>
  )
}

// Page Query
export const query = graphql`
    query SessionListQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { contentKey: { eq: "session" }}}
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`
