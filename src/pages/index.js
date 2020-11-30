import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/Layout'
import React from "react"
import SessionList from '../components/SessionList/SessionList'

export default function Home() {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
      <Layout title={data.site.siteMetadata.title}>
        <section className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <h2 className="title">
                Choosing the right path is necessary for success
              </h2>
              <h5 className="description">
                Ea velit mollit adipisicing ullamco ea irure occaecat sunt culpa
                labore. Ullamco eu reprehenderit nostrud dolore pariatur. Mollit
                qui amet sit laborum proident non laboris culpa occaecat
                voluptate id cillum velit. Commodo dolore quis mollit deserunt
                in do irure enim deserunt. Duis fugiat ex ea irure magna elit
                voluptate eu Lorem officia. Commodo labore fugiat ea excepteur
                sit. Consequat consequat dolore dolore nulla aute exercitation
                anim.
              </h5>
            </div>
          </div>
        </section>
        <div className="section text-center">
          <div className="container">
            <SessionList />
          </div>
        </div>
      </Layout>
    )
}