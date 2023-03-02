import React from 'react'
import { Link } from 'react-router-dom'

function CreateHead(props) {
  return (
    <div className='create__head'>
        <Link to='/'>
          <img src={props.img} alt='logo' />
        </Link>
        <h3>{props.head}</h3>
        <h5>{props.headFive}</h5>
    </div>
  )
}

export default CreateHead
