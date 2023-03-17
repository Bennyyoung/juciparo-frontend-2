import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react';


const AccountDropDownModal = ({ handleLogout, currentUser }) => {
  return (
    <>
      {
        currentUser ? (
          <div className='dropdown__list2'>
            <Link onClick={() => handleLogout()}>
              Sign Out
            </Link>
            <Link to="/AccountSeller">
              <Icon icon="teenyicons:user-outline" />
              My Account
            </Link>
            <Link to={"/AccountSeller"}>
              <Icon icon="teenyicons:user-outline" />
              Saved Items
            </Link>
          </div>
        ) :
          (
            <div className='dropdown__list'>
              <Link to="/account-login">Sign In</Link>
              <Link to="/CreateAccount">Create an account</Link>
              <Link to={"/AccountSeller"}>
                <Icon icon="teenyicons:user-outline" />
                Saved Items
              </Link>
            </div>
          )
      }
    </>
  )
}

export default AccountDropDownModal