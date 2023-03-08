import React from 'react'
import "./AccountDropDown.css"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "./redux/auth"
//import AccountLogin from './LoginPage/AccountLogin';


function AccountDropDown() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    dispatch(logout())
  }


  return (
    <div className='dropdown_container'>
      <div onClick={handleOpen}>
        <Icon icon="teenyicons:user-outline" />
        <button >Account</button>
        {open ?


          <>
            {
              currentUser ? (
                <div className='dropdown__list2'>

                  <Link onClick={() => handleLogout()}>
                    Logout
                  </Link>
                </div>
              ) :
                (
                  <div className='dropdown__list'>
                    <Link to="/AccountLogin">Sign In</Link>
                    <Link to="/CreateAccount">Create an account</Link>
                    <Link to={"/AccountSeller"}>
                      <Icon icon="teenyicons:user-outline" />
                      Saved Items
                    </Link>
                  </div>
                )
            }
          </>

          :
          <div></div>
        }
      </div>

    </div>
  )
}

export default AccountDropDown


//functions : logOut function, 
//Routes : my account page, login page, register page

// {currentUser ? (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <a href="/login" className="nav-link" onClick={logOut}>
//         SignOut
//       </a>
//     </li>
//     <li className="nav-item">
//       <Link to={"/profile"} className="nav-link">
//         {currentUser.username}
//           <p> My Account </>
//       </Link>
//     </li>
//   </div>
// ) : (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/login"} className="nav-link">
//         Login
//       </Link>
//     </li>

//     <li className="nav-item">
//       <Link to={"/register"} className="nav-link">
//         Sign Up
//       </Link>
//     </li>
//   </div>
// )}
