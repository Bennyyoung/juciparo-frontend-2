import React from 'react'
import "./CreateAccount.css"
import abc from "../Images/logoOne.jpg"
import CreateHead from './CreateHead'
import RegistrationForm from './RegistrationForm'

function CreateAccount() {
  return (
    <div className='createAccount'>
        <CreateHead 
          img = {abc}
          head = "Create An Account"
          headFive = "Create Your Juciparo Account"
        />
        <RegistrationForm />
    </div>
  )
}

export default CreateAccount
