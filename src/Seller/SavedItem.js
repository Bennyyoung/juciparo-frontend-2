import React, { useState } from 'react'
import "./SavedItem.css"
import UserService from "../services/user.service";
import { useEditable } from '@chakra-ui/react';
import { useEffect } from 'react';

function SavedItem() {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);


  return (
    <div className='saved'>
      <h4>Saved Items</h4>
    </div>
  )
}

export default SavedItem

