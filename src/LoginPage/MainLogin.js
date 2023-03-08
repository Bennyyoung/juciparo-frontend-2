import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./MainLogin.css"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../redux/auth";
import { clearMessage } from "../redux/message";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainLogin() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    // const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    const [successful, setSuccessful] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value.trimStart()
        })
    };


    const handleSubmit = (e) => {
        // setSuccessful(false);
        e.preventDefault()
        const { email, password } = formData

        try {
            dispatch(login({ email, password }))
            toast.success("Login Successful")
            navigate("/");
        } catch (err) {
            toast.error("Invalid email or password")
        }

    }

    useEffect(() => {
        dispatch(clearMessage());
    }, []);


    return (
        <div className="mainform">
            <div className="mainform-body">
                <div>
                    <label className="mainform__label" htmlFor="email">Email Address or Phone Number</label>
                    <input className="mainform__input" type="email/phone" id="email" name="email" value={formData.email} onChange={(e) => handleInputChange(e)} placeholder="Email Address or Phone Number" />
                </div>
                <div>
                    <label className="mainform__label" htmlFor="password">Password </label>
                    <input className="mainform__input" type="password" id="password" name="password" value={formData.password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <Link>
                    <button onClick={(e) => handleSubmit(e)} type="submit">
                        Sign In
                    </button>
                    <ToastContainer />
                </Link>
            </div>

            {message && (
                <div className="form-body">
                    <div className={successful ? "alert alert-success" : "alert alert-danger"}
                        role="alert"
                    >
                        {message}
                    </div>
                </div>
            )}
            <div className='social__login'>
                <div className='line'>
                    <div></div>
                    <h5>OR</h5>
                    <div></div>
                </div>
                <Link>
                    <Icon icon="akar-icons:facebook-fill" />
                    Continue with Facebook
                </Link>
                <Link>
                    <Icon icon="akar-icons:google-fill" />
                    Continue with Google
                </Link>
                <h5>Don't have an account ?
                    <Link to="/CreateAccount">Sign Up</Link>
                </h5>
            </div>
        </div>
    )
}

export default MainLogin


// This page has a Form with email & password.
// – We’re gonna verify them as required field.
// – If the verification is ok, we dispatch login action, then direct user to Profile page: navigate("/profile");, or show message with response error.

// For getting the application state and dispatching actions, we use React Redux Hooks useSelector and useDispatch.
// – by checking isLoggedIn, we can redirect user to Profile page.
// – message gives us response message.
