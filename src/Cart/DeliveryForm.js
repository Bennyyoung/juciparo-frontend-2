import React, { useState } from 'react';
import { button } from 'react-router-dom';
import "./DeliveryForm.css"
import { checkout } from "../redux/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify"

function DeliveryForm() {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        address1: "",
        address2: "",
        postal_code: ""
    })

    const { message } = useSelector((state) => state.message)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
          first_name,
          last_name,
          email,
          phone,
          country,
          address1,
          address2,
          postal_code
        } = formData;
      
        if (
          first_name &&
          last_name &&
          email &&
          phone &&
          country &&
          address1 &&
          address2 &&
          postal_code
        ) {
          const checkoutPromise = new Promise((resolve, reject) => {
            dispatch(
              checkout({
                first_name,
                last_name,
                email,
                phone,
                country,
                address1,
                address2,
                postal_code
              })
            )
              .then((url) => {
                resolve(url);
              })
              .catch((error) => {
                reject(error);
              });
          });
      
          try {
            const url = await checkoutPromise;
            window.open(url.payload, "_blank");
          } catch (error) {
            toast("Error during checkout:", error);
          }
        }
      };
      

    return (
        <div className="deliform">
            <div className="deliform-body">
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input className="border border-black" type="text" name="first_name" value={formData.first_name} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>
                <div>
                    <label className="deliform__label" htmlFor="lastName">Last Name </label>
                    <input className="border border-black" type="text" name="last_name" id="lastName" value={formData.last_name} onChange={(e) => handleInputChange(e)} placeholder="Last Name" />
                </div>
                <div>
                    <label className="deliform__label" htmlFor="email">Email </label>
                    <input className="border border-black" type="text" name="email" id="email" value={formData.email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number </label>
                    <input className="border border-black" type="text" id="phone" name="phone" value={formData.phone} onChange={(e) => handleInputChange(e)} placeholder="Phone Number" />
                </div>
                <div>
                    <label htmlFor="country">Country </label>
                    <input className="border border-black" type="text" id="country" name="country" value={formData.country} onChange={(e) => handleInputChange(e)} placeholder="Country" />
                </div>

                <div>
                    <label htmlFor="address1">Address 1</label>
                    <input className="border border-black" type="text" name="address1" id="address1" value={formData.address1} onChange={(e) => handleInputChange(e)} placeholder="Address 1" />
                </div>
                <div>
                    <label className="sellform__label" htmlFor="address2">Address 2 </label>
                    <input className="border border-black" type="text" name="address2" id="address2" value={formData.address2} onChange={(e) => handleInputChange(e)} placeholder="Address 2" />
                </div>
                <div>
                    <label className="sellform__label" htmlFor="postal_code">Postal Code</label>
                    <input className="border border-black" type="text" name="postal_code" id="postal_code" value={formData.postal_code} onChange={(e) => handleInputChange(e)} placeholder="Select One" />
                </div>
                <button className="w-[509px] mb-[5rem] border text-center border-[#EF0000] rounded-[5px] text-[15px] text-[#FDFDFD] bg-[#EF0000] p-[1rem] mt-[3rem]" onClick={(e) => handleSubmit(e)} type="submit">Make Payment</button>
            </div>

        </div>
    )
}


export default DeliveryForm;


