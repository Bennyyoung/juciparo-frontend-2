import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uploadImage } from '../redux/ImageUploadSlice';

function ImageUpload() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth.isAuthenticated) {
      alert('You must be logged in to upload an image');
      return;
    }
    if (!selectedFile) {
      return;
    }
    dispatch(uploadImage(selectedFile));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUpload;
