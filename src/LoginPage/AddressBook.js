import React from 'react'
import "./AddressBook.css"
import abc from "../Images/logoOne.jpg"
import CreateHead from './CreateHead'
import AddressBookReg from './AddressBookReg'

function AccountManagement() {
  return (
    <div className='addressBook'>
        <CreateHead 
          img = {abc}
          head = "Address Book"
        />
        <AddressBookReg />
    </div>
  )
}

export default AccountManagement
