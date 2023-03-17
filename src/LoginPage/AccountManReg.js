import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./AccountManReg.css"


function AccountManReg() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    const [newPassword,setnewPassword] = useState(null);
    const [confirmPassword,setconfirmPassword] = useState(null);
    

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
        if(id === "newPassword"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setPassword(value);
        }
     

    }

    const handleSubmit  = () => {
    }

    return(
        <div className="formMan">
            <div className="form-bodyMan">
                <div>
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="email">Email Address</label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="phone">Phone Number </label>
                    <input  type="text" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="password">Current Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="password">New Password </label>
                    <input className="form__input" type="password"  id="newPassword" value={newPassword} onChange = {(e) => handleInputChange(e)} placeholder="New Password"/>
                </div>
                <div>
                    <label className="form__label" htmlFor="password">Confirm Password </label>
                    <input className="form__input" type="password"  id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit">Save Changes</button>
            </div>
            
        </div>
    )       
}

export default AccountManReg
