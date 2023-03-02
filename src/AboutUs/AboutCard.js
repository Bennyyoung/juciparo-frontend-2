//import { Icon } from '@iconify-icon/react'
import React from 'react'

function AboutCard(props) {
  return (
    <div className='about__card'>
      <img src={props.img} alt="img" />
      <h4>{props.head}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default AboutCard
