import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./SellerRegister.css"


function SellerRegister() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password,setPassword] = useState(null);
    

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
        console.log(firstName,lastName,email,password);
    }

    return(
        <div className="sellerform">
            <div className="sellerform-body">
                <div>
                    <label  for="firstName">First Name </label>
                    <input  type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="sellerform__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div>
                    <label for="email">Email Address</label>
                    <input  type="email" id="email"  value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div>
                    <label for="phone">Phone Number </label>
                    <input  type="text" id="phone" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                <div>
                    <label for="password">Password </label>
                    <input type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <Link to="/SellerCreateTwo" onClick={()=>handleSubmit()} type="submit">Next</Link>
            </div>
            
        </div>
    )       
}

export default SellerRegister;
