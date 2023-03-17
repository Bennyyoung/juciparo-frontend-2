import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./SellerRegister.css"
import { formPages } from "../utils/formPages"
import AccountHeader from './AccountHeader';
import abc from "../Images/logoOne.jpg"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { vendorRegister } from "../redux/auth"


function SellerRegister() {

    const [formData, setFormData] = useState({})
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const response = useSelector((state) => state.message)


    const handleNextPage = () => setPage(page + 1);
    const handlePrevPage = () => setPage(page - 1);

    const currentPageFields = formPages[page - 1];


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFileUpload = (e) => {
        const { name, files } = e.target
        const file = files[0];
        setFormData({ ...formData, [name]: file })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        const arrVal = Object.values(formData).every(el => el.length === 0)
        const {
            firstname,
            lastname,
            email,
            phone,
            password,
            businessName,
            state,
            address,
            referral,
            category,
            subscription,
            city,
            image
        } = formData

        dispatch(vendorRegister({
            firstname,
            lastname,
            email,
            phone,
            password,
            businessName,
            state,
            address,
            referral,
            category,
            city,
            subscription,
            image
        }));
        toast(`${response.message}`)
    }

    return (
        <div>
            <AccountHeader
                img={abc}
                head="Create Your Seller Account"
                headFive={`STEP ${page}`}
            />
            <form className="mb-[5rem]">
                {currentPageFields.map((field, i) => (
                    <div key={i} className="w-[509px] flex flex-col mt-[22px] relative">

                        {
                            field.type === "file" ? (
                                <>
                                    <label>{field.label}</label>
                                    {/* <input type={field.type} name={field.name} onChange={(e) => handleFileUpload(e)} /> */}
                                    <div className="flex items-center">
                                        <label className="flex justify-center items-center relative bg-gray-200 rounded-[5px] w-[168px] h-[139px] cursor-pointer align-center">
                                            <input
                                                className="hidden"
                                                type={field.type}
                                                name={field.name}
                                                onChange={(e) => handleFileUpload(e)}
                                            />
                                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 0H32V24H0V0ZM2 2V22H30V2H2ZM4.012 20.054C4.012 20.054 6.092 6.008 9.181 6.008C12.27 6.008 13.623 15.916 16.107 15.916C18.591 15.916 18.405 12.045 20.223 12.045C22.041 12.045 28.303 20.055 28.303 20.055L4.012 20.054ZM25 10C24.606 10 24.2159 9.9224 23.8519 9.77164C23.488 9.62087 23.1573 9.3999 22.8787 9.12132C22.6001 8.84274 22.3791 8.51203 22.2284 8.14805C22.0776 7.78407 22 7.39397 22 7C22 6.60603 22.0776 6.21593 22.2284 5.85195C22.3791 5.48797 22.6001 5.15726 22.8787 4.87868C23.1573 4.6001 23.488 4.37913 23.8519 4.22836C24.2159 4.0776 24.606 4 25 4C25.7956 4 26.5587 4.31607 27.1213 4.87868C27.6839 5.44129 28 6.20435 28 7C28 7.79565 27.6839 8.55871 27.1213 9.12132C26.5587 9.68393 25.7956 10 25 10Z" fill="black" />
                                            </svg>
                                        </label>
                                    </div>

                                </>
                            ) : field.type === "select" ? (
                                <>
                                    <label className="leading-[15px] font-[400] h-[42px] w-[100%] text-[15px] text-[#000000]">{field.label}</label>
                                    <select
                                        name={field.name}
                                        value={formData[field.name] || ""}
                                        onChange={(e) => handleInputChange(e)}
                                        className="leading-[12px] font-weight-[500] border border-black h-[60px] w-[100%] text-[15px] pl-[20px] pt-[auto]"
                                    >
                                        <option value="">{field?.placeholder}</option>
                                        {
                                            field?.options?.map((option, j) => (
                                                <option key={j} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </>
                            )
                                : (
                                    <>
                                        <label className="leading-[15px] font-[400] h-[42px] w-[100%] text-[15px] text-[#000000]">{field.label}</label>
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field?.placeholder}
                                            value={formData[field.name || ""]}
                                            onChange={(e) => handleInputChange(e)}
                                            className="leading-[12px] font-weight-[500] border border-black h-[60px] w-[100%] text-[15px] pl-[20px] pt-[auto]"
                                        />

                                    </>
                                )
                        }
                    </div>
                ))}
                {page > 1 && (
                    <div className="flex gap-4">
                        <button className='w-1/2 mb-[5rem] border text-center border-[#EF0000] rounded-[5px] text-[15px] text-[#FDFDFD] bg-[#EF0000] p-[1rem] mt-[3rem]' onClick={() => handlePrevPage()}>Prev</button>
                        <button className='w-1/2 mb-[5rem] border text-center border-[#EF0000] rounded-[5px] text-[15px] text-[#FDFDFD] bg-[#EF0000] p-[1rem] mt-[3rem]' onClick={(e) => handleSubmit(e)}>Submit</button>
                    </div>
                )}
                {page < formPages.length && (
                    <>
                        <button className="w-[509px] mb-[5rem] border text-center border-[#EF0000] rounded-[5px] text-[15px] text-[#FDFDFD] bg-[#EF0000] p-[1rem] mt-[3rem]" onClick={() => handleNextPage()}>Next</button>
                    </>
                )}
            </form>
            {/* <Link to="/seller-createTwo" onClick={() => handleSubmit()} type="submit">Next</Link> */}
        </div>


    )
}

export default SellerRegister;
