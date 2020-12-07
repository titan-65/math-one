import React from "react"
import { Link } from 'gatsby'
import Experience from "./Experience"


export default function ExperienceList({experiences}) {
  return (
    <div>
      {experiences.map(experience => (
        <Experience key={experience._id}
                    title={experience.experience}
                    objective={experience.objective}
                    strand={experience.strand}
                    preview={experience.preview}
                    level={experience.level}/>
      ))}
    </div>
  )
}

