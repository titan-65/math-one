import CardV2 from './Card/CardV2'
import React from 'react'

export default function SessionPost({ title, date, excerpt }) {
    return (
        <div className="col-lg-4">
            <CardV2 title={title} date={date} excerpt={excerpt}/>
        </div>
    )
    }