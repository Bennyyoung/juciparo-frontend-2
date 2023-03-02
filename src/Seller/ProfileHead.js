import React from 'react'
import "./ProfileHead.css"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Icon } from '@iconify/react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProfileHead() {

  const now = 60;
  const zero = 10;
  return (
    <div className='profileHead'>
      <div className='avatar__section'>
        <Stack>
          <Avatar sx={{ bgcolor: "white" }}>
            <Icon icon="fontisto:picture" />
            
          </Avatar>
        </Stack>
        <h4>JMK STORES</h4>
        <div className='profileHead__star'>
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
          <Icon icon="clarity:favorite-solid" />
        </div>
        <p>
          3.9 from 129 reviews
        </p>
      </div>
      
      <div className='profileHead__deli'>
          <div>
            <h4>Delivery Rate</h4>
            <ProgressBar now={now} label={`${now}%`} />
          </div>
          <div>
            <h4>Communication</h4>
            <ProgressBar now={zero} label={`${zero}%`} />
          </div>
      </div>
      <div className='profileHead__fol'>
          <div className='fol__top'>
            <h4>500 followers</h4>
            <button>Follow</button>
          </div>
          <div className='fol__bottom'>
            <div>
              <Icon icon="fontisto:shopping-sale" />
              <div>
                <h4>26</h4>
                <p>Successful Sales</p>
              </div>
            </div>
            <div>
              <Icon icon="mdi:timer-sand" />
              <div>
                <h4>5 Years</h4>
                <p>Selling on Juciparo</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfileHead



