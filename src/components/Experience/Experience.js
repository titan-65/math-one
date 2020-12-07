import React from "react"
import { Link } from 'gatsby'

export default function Experience({title, objective, strand, preview, level}) {
  return (
    <div className="card card-background">
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
