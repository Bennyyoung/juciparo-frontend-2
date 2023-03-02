import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./SellerRegisterTwo.css"
import ImageUpload from '../LoginPage/ImageUpload';


function SellerRegisterTwo() {
    const [businessName, setBusinessName] = useState(null);
    const [city, setCityName] = useState(null);
    const [address, setAddress] = useState(null);
    const [category, setCategory] = useState(null);
    const [hear,setHear] = useState(null);
    const [subscription,setSubscription] = useState(null);
    

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "businessName"){
            setBusinessName(value);
        }
        if(id === "city"){
            setCityName(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "category"){
            setCategory(value);
        }
        if(id === "hear"){
            setHear(value);
        }
        if(id === "subscription"){
            setSubscription(value);
        }
     

    }

    const handleSubmit  = () => {
        console.log(businessName,city,address,category,hear);
    }

    return(
        <div className="sellform">
            <div className="sellform-body">
                <div>
                    <label  for="businessName">Business Name </label>
                    <input  type="text" value={businessName} onChange = {(e) => handleInputChange(e)} id="businessName" placeholder="Enter Your Store Name"/>
                </div>
                <div>
                    <label className="sellform__label" for="city">City/State </label>
                    <input  type="text" name="" id="lastName" value={city}  onChange = {(e) => handleInputChange(e)} placeholder="Select Your State or City"/>
                </div>
                <div>
                    <label for="address"> Address</label>
                    <input  type="text" id="address"  value={address} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Address" />
                </div>
                <div>
                    <label for="phone">Business Category </label>
                    <input  type="text" id="category" value={category} onChange = {(e) => handleInputChange(e)} placeholder="Select if Individual Or Group" />
                </div>
                <div>
                    <label for="hear">How did you hear about us </label>
                    <input type="text"  id="hear" value={hear} onChange = {(e) => handleInputChange(e)} placeholder="Select an option"/>
                </div>
                <div>
                    <label for="subscription">Subscription Grade </label>
                    <input type="text"  id="subscription" value={subscription} onChange = {(e) => handleInputChange(e)} placeholder="Select an option"/>
                </div>
                <div>
                    <h5>Add Your Profile Picture</h5>
                 
                </div>
                <ImageUpload />


                <Link to="/SellerProfile" onClick={()=>handleSubmit()} type="submit">Create An Account</Link>
            </div>
            
        </div>
    )       
}

export default SellerRegisterTwo;

