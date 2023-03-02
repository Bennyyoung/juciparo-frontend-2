import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const uploadImage = (file) => async (dispatch, getState) => {
  const state = getState();
  if (!state.auth.isAuthenticated) {
    alert('You must be logged in to upload an image');
    return;
  }
  try {
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post('/api/upload', formData);
    dispatch(setImage(response.data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

const imageUploadSlice = createSlice({
  name: 'imageUpload',
  initialState: {
    image: null,
    error: null,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setImage, setError } = imageUploadSlice.actions;

export default imageUploadSlice.reducer;
