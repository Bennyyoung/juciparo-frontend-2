import React, {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./RegistrationForm.css"
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth";
import { clearMessage } from "../redux/message";


function RegistrationForm() {
    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [successful, setSuccessful] = useState(false);
    let navigate = useNavigate();

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
      }, [dispatch]);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "password"){
            setPassword(value);
        }
     

    }

    const handleSubmit  = () => {
        //console.log(firstname, lastname, email, phone, password);
        setSuccessful(false);

        dispatch(register({firstname, lastname, email, phone, password }))
        .unwrap()
        .then(() => {
            setSuccessful(true);
            navigate("/AccountLogin");
            window.location.reload();
        })
        .catch(() => {
            setSuccessful(false);
        });
    }


    return(
        <div className="form">
            <div className="form-body">
                <div>
                    <label className="form__label" for="firstname">First Name </label>
                    <input className="form__input" type="text" value={firstname} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="form__label" for="lastname">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastname}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="last Name"/>
                </div>
                <div>
                    <label className="form__label" for="email">Email Address</label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div>
                    <label className="form__label" for="phone">Phone Number </label>
                    <input  type="text" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                <div>
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit">Create An Account</button>
            </div>

            <div className='terms'>
                <h5>By signing Up you accept our 
                    <Link to="/Terms">terms and conditions & privacy policy</Link>
                </h5>
                <div className='div'>
                    <p>ALready have an Account ?</p>
                    <Link to="/AccountLogin" >Sign In</Link>
                </div>
            </div>

            {message && (
                <div className="orm-body">
                    <div
                        className={successful ? "alert alert-success" : "alert alert-danger"}
                        role="alert"
                    >
                        {message}
                    </div>
                </div>
            )}
        </div>
    )       
}

export default RegistrationForm
