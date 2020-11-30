import React from 'react'

export default function CardV2({ title, date, excerpt}) {
    return (
      <div className="card card-blog">
        <div className="card-header card-header-image"></div>
        <div className="card-body">
          <h6 className="card-category text-success">{date}</h6>
          <a href="#">
            <h6 className="card-title">{title}</h6>
          </a>
          <p className="card-description">{excerpt}</p>
        </div>
      </div>
    )
}