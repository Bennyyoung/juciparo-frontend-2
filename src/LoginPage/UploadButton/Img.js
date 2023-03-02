import React from 'react'
import { useState } from 'react';

function Img() {
    const [previewImage, setPreviewImage] = useState(undefined);
    // const [progress, setProgress] = useState(0);
  return (
    <div>
    {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}
    </div>
    
  )
}

export default Img
