import {graphql, useStaticQuery} from 'gatsby'

import React from 'react';
import SessionPost from '../SessionPost'

export default function SessionList() {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
   `)

    return (
        <div className="row">
            {data.allMarkdownRemark.edges.map(edge => (
                <SessionPost
                    key={edge.node.id}
                    slug={edge.node.fields.slug}
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    excerpt={edge.node.excerpt}
                />
            ))}
        </div>
    )
}
