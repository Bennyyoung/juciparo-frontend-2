import React from 'react'

function TermsCard(props) {
  return (
    <div className='terms--card'>
      <h4>{props.head}</h4>
      <p>{props.text}</p>
      <p className='subText'>{props.subText}</p>
      <p className='subTextOne'>{props.subTextOne}</p>
      <p className='subTextTwo'>{props.subTextTwo}</p>
      <p className='subTextThree'>{props.subTextThree}</p>
      <p className='subTextFour'>{props.subTextFour}</p>
      <p className='subTextFive'>{props.subTextFive}</p>
    </div>
  )
}

export default TermsCard
