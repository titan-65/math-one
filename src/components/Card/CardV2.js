import React from 'react'
import { Link } from 'gatsby'

export default function CardV2({ title, date, excerpt, slug}) {
    return (
      <div className="card card-blog">
        <div className="card-header card-header-image"></div>
        <div className="card-body">
          <h6>{date}</h6>
          <Link to={slug}>
            <h6>{title}</h6>
          </Link>
          <p>{excerpt}</p>
        </div>
      </div>
    )
}
