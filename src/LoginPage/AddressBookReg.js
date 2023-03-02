import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./AddressBookReg.css"


function AddressBookReg() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address,setAddress] = useState(null);
    const [region,setRegion] = useState(null);
    const [city,setCity] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "region"){
            setRegion(value);
        }
        if(id === "city"){
            setCity(value);
        }
     

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,address,region,city);
    }

    return(
        <div className="adformMan">
            <div className="adform-bodyMan">
                <div>
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div>
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div>
                    <label className="form__label" for="phone">Phone Number </label>
                    <input  type="text" id="phone" className="form__input" value={phone} onChange = {(e) => handleInputChange(e)} placeholder="Phone Number"/>
                </div>
                <div>
                    <label className="form__label" for="address">Street Address </label>
                    <input className="form__input" type="text"  id="address" value={address} onChange = {(e) => handleInputChange(e)} placeholder="Street name / Apartment No / Building / Floor"/>
                </div>
                <div>
                    <label className="form__label" for="region">State/Region </label>
                    <input className="form__input" type="text"  id="region" value={region} onChange = {(e) => handleInputChange(e)} placeholder="Region"/>
                </div>
                <div>
                    <label className="form__label" for="city">City </label>
                    <input className="form__input" type="text"  id="city" value={city} onChange = {(e) => handleInputChange(e)} placeholder="City"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit">Save Changes</button>
            </div>
            
        </div>
    )       
}

export default AddressBookReg
