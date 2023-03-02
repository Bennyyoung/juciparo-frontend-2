import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';

const store = configureStore({
    reducer: rootReducers,
    devTools: true,
})

export default store;

// This Store will bring Actions and Reducers together and hold the Application state.
// The Redux Toolkit configureStore() function automatically:
// a. enable the Redux DevTools Extension.
// b. sets up the thunk middleware by default, so you can immediately write thunks without more configuration.

