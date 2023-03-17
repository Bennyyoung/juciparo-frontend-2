import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./RegistrationForm.css"
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth";
import { clearMessage } from "../redux/message";
import { toast } from "react-toastify";


function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: ""
    })
    const [successful, setSuccessful] = useState(false);
    let navigate = useNavigate();

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value.trimStart()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccessful(false);
        const { firstname, lastname, email, phone, password } = formData

        if (firstname && lastname && email && phone && password) {
            dispatch(register({ firstname, lastname, email, phone, password }))
            setSuccessful(true);
            navigate("/AccountLogin");

        } else {
            toast.error("Please enter all fields")
            setSuccessful(false);

        }
    }


    return (
        <div className="form">
            <div className="form-body">
                <div>
                    <label className="form__label" htmlFor="firstname">First Name </label>
                    <input className="form__input" type="text" name="firstname" value={formData.firstname} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div>
                    <label className="form__label" htmlFor="lastname">Last Name </label>
                    <input type="text" id="lastName" name="lastname" value={formData.lastname} className="form__input" onChange={(e) => handleInputChange(e)} placeholder="last Name" />
                </div>
                <div>
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form__input" name="email" value={formData.email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div>
                    <label className="form__label" htmlFor="phone">Phone Number </label>
                    <input type="text" id="phone" className="form__input" name="phone" value={formData.phone} onChange={(e) => handleInputChange(e)} placeholder="Phone Number" />
                </div>
                <div>
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" name="password" value={formData.password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
                <button onClick={(e) => handleSubmit(e)} type="submit">Create An Account</button>
            </div>

            <div className='terms'>
                <h5>By signing Up you accept our
                    <Link to="/Terms" style={{ paddingLeft: '2px' }}>terms and conditions & privacy policy</Link>
                </h5>
                <div className='div'>
                    <p>Already have an Account ?</p>
                    <Link to="/account-login" >Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
