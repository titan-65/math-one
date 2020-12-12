import React from 'react'
import {useStaticQuery, graphql} from "gatsby"

export default function TagFilter() {
  const data = useStaticQuery(graphql`
    query TagQuery {
        tags: allSanityTag {
            nodes {
                tag
            }
        }
        experience: allSanityExperience {
            nodes {
                tag {
                    tag
                    id
                }
            }
        }
    }
  `)
  return (
    <div>

    </div>
  )
}
