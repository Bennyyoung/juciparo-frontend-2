import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducers from './reducer';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import ImmutableStateInvariantMiddleware from "@reduxjs/toolkit/dist/middleware/immutableStateInvariant"
// import ImmutableStateInvariantMiddleware from '@reduxjs/toolkit/dist/middleware-immutable';
// import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';


const persistStorage = {
    key: "user",
    storage
}

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    // immutableCheck: false
})
// .filter(middleware => middleware !== immutableStateInvariantMiddleware)

const persistedReducer = persistReducer(persistStorage, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
    devTools: true,
})

export default store;

// This Store will bring Actions and Reducers together and hold the Application state.
// The Redux Toolkit configureStore() function automatically:
// a. enable the Redux DevTools Extension.
// b. sets up the thunk middleware by default, so you can immediately write thunks without more configuration.

