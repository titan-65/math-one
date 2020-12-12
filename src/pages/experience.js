import React, {Fragment} from 'react';
import {graphql} from 'gatsby'

import ExperienceList from "../components/Experience/ExperienceList"
import TagFilter from "../components/Tags/TagFilter"


export default function Experience({data}) {
  const experiences = data.experience.nodes
  return (
    <Fragment>
      <section className="section-content" style={{marginTop: 100}}>
        <div className="container">
          <h2>Experiences</h2>
          <div className="row">
            <div className="col-md-6 align-content-md-center">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="row">
              <div className="col-md-10">
                <ExperienceList experiences={experiences}/>
              </div>
            <div className="col-md-2">
              <TagFilter/>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export const query = graphql`
    query ExperienceQuery {
        experience: allSanityExperience {
            nodes {
                id
                experience
                content
                _updatedAt
                _rawSlug
                _id
                preview
                level
                strand
                objective
                imageHeader {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
        tag: allSanityTag {
            nodes {
                tag
            }
        }
    }
`
