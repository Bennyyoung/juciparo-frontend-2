import handleCart from './handleCart'
import { combineReducers } from "redux";
import authReducer from "../auth";
import messageReducer from "../message";
import ImageUploadSlice from '../ImageUploadSlice';

const rootReducers = combineReducers({
    handleCart,
    ImageUpload : ImageUploadSlice,
    auth: authReducer,
    message: messageReducer
})
export default rootReducers

