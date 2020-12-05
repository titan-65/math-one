import Header from './Header'
import React from 'react'
import styled from 'styled-components'

import '../styles/global.css'
import 'normalize.css'
import { graphql, useStaticQuery } from "gatsby"
import Carousel from "./Carousel/Carousel"
import NavbarTop from "./Navbar/NavbarTop"
import Footer from "./Footer/Footer"

const Container = styled.div`
    flex: 1 0 auto;
`

const Box = styled.div`
    box-sizing: border-box;
    margin: 24 auto;
    display: block;
`

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
`
export default function Layout({ children, title }) {
  const data = useStaticQuery(graphql`
      {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)
    // FIXME: Tweak the layout APi
    return (
      <div>
          <Header title={data.site.siteMetadata.title} />
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

          {children}
          <Footer />
      </div>
    )
    }
