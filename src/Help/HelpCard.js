import React from 'react'

function HelpCard(props) {
  return (
    <div className='helpCard'>
      <h4>{props.head}</h4>
      <p>{props.para}</p>
    </div>
  )
}

export default HelpCard
