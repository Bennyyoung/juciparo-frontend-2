import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../services/auth.service";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from "react-router-dom";
import { push } from "connected-react-router";


const user = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("user")) : null;

// register
export const register = createAsyncThunk(
  "auth/register",
  async ({ firstname, lastname, email, phone, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(firstname, lastname, email, phone, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      toast.success("Login Successful")

      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      toast.error(`${message}`)
      return thunkAPI.rejectWithValue();
    }
  }
);

// Vendor register
export const vendorRegister = createAsyncThunk(
  "auth/vendorRegister",
  async ({ firstname,
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
    image }, thunkAPI) => {
    try {
      const formData = new FormData()
      formData.append("image", image)
      const response = await AuthService.vendorRegister(
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
        image);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
      // thunkAPI.dispatch(push('/AccountLogin'))
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      // return thunkAPI.rejectWithValue();
    }
  }
);

//login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      toast.success("Login Successful")


      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      toast.error(`${message}`)



      return thunkAPI.rejectWithValue();
    }
  }
);

// checkout
export const checkout = createAsyncThunk(
  "auth/checkout",
  async ({
    first_name,
    last_name,
    email,
    phone,
    country,
    address1,
    address2,
    postal_code
  }, thunkAPI) => {
    try {
      const response = await AuthService.checkout(
        first_name,
        last_name,
        email,
        phone,
        country,
        address1,
        address2,
        postal_code);
      thunkAPI.dispatch(setMessage(response.url));
      toast.success(`${response.status}`)

      return response.url
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message))
      toast(`${message}`)
      return thunkAPI.rejectWithValue();
    }
  }
)

//logout
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});


const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;


// We’re gonna import AuthService to make asynchronous HTTP requests 
// with trigger one or more dispatch in the result.

// We also need to use Redux Toolkit createAsyncThunk which provides a thunk 
// that will take care of the action types and dispatching the right actions
//  based on the returned promise.

//There are 3 async Thunks to be exported: register,login,logout!
