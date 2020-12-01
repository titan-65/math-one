import Layout from '../components/Layout'
import React from 'react'
import { graphql } from 'gatsby'

export default function SessionTemplate({ data }) {
    return (
        <Layout>
            <div className="section">
                <div className="container">
                    <h1 className="title">
                        {data.markdownRemark.frontmatter.title}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }
        }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
