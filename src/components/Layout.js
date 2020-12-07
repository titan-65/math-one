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


          {children}
          <Footer />
      </div>
    )
    }
