import { graphql, useStaticQuery } from "gatsby"

import Layout from '../components/Layout'
import React from "react"
import SessionList from '../components/SessionList/SessionList'

export default function Home() {
    // TODO: Create and additional functionalty in the web app

    // const data = useStaticQuery(graphql`
    //     {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)
    return (
      <>
        <div
          className="page-header"
          data-parallax="true"
          // style={{
          //   backgroundImage: `url('https://images.unsplash.com/photo-1606318005254-bdb2bcd14d34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80')`,
          // }}
        >
          <div className="container">
            {/*<div className="row">*/}
            {/*  <div className="col-md-6">*/}
            {/*    <h1 className="title">Your Story Starts With Us.</h1>*/}
            {/*    <h4>*/}
            {/*      Every landing page needs a small description after the big*/}
            {/*      bold title, that&apos;s why we added this text here. Add here*/}
            {/*      all the information that can make you or your product create*/}
            {/*      the first impression.*/}
            {/*    </h4>*/}
            {/*    <br />*/}
            {/*    <a*/}
            {/*      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"*/}
            {/*      target="_blank"*/}
            {/*      class="btn btn-danger btn-raised btn-lg"*/}
            {/*    >*/}
            {/*      <i className="fa fa-play"></i> Watch video*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*</div>*/}


          </div>
        </div>
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
      </>
    )
}
