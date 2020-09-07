import React from 'react'
import './Info.scss'
import { skills } from './skills'

const Info = () => {
  return (
    <div className="info">
      <h1>Меня зовут Дима</h1>
      <ul>
        {skills.map((skill) => 
          <li key={skill.id}>
            {!skill.href
              ? <span>{skill.text}</span>
              : <a href={skill.href} target="_blank" rel="noopener noreferrer">{skill.text}</a>
            }
          </li>)
        }
      </ul>
    </div>
  )
}

export default Info