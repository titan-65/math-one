import {graphql, useStaticQuery} from 'gatsby'

import React from 'react';
import SessionPost from '../SessionPost'

export default function SesssionList() {
    const data = useStaticQuery(graphql`
    {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM D, YYYY")
                    }
                    excerpt
                }
            }
        }
    }
   `)

    return (
        <div>
            {data.allMarkdownRemark.edges.map(edge => (
                <SessionPost
                    key={edge.node.id}
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    excerpt={edge.node.excerpt}
                />
            ))}
        </div>
    )
}