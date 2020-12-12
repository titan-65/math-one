import React from "react"
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Experience({title, objective, strand, preview, level, imageHeader}) {
  console.log(imageHeader)
  return (
    <div className="card card-background" style={{backgroundImage: `url(${imageHeader.asset.fluid.src})`}}>
      <div className="card-body">
        <p>Experience</p>
        <p>{title}</p>
        <p>{objective}</p>
        <p>{strand}</p>
        <p>{level}</p>
        <p>{preview}</p>
      </div>
    </div>
  )
}
