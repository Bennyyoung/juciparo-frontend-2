import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import "./Newsletter.css"

function Newsletter() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className='newsletter'>
      <div className='newsletter__text'>
        <h3>Suscribe Newsletter</h3>
        <p>Subscribe to our email and get updates right in your inbox</p>
      </div>
      <div className='newsletter__input'>
          <input
              type="text"
              placeholder="Enter your Email"
              onChange={handleChange}
              value={searchInput} 
          />
          <button className='newsletter__search'>
            <Icon icon="bi:send" />
          </button>
        </div>
    </div>
  )
}


export default Newsletter
