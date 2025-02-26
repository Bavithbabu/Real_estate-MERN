import {configureStore} from '@reduxjs/toolkit';
// import userReducer from './user/userSilce';
import userReducer from './User/userSilce';


export const store = configureStore({
    reducer: {user:userReducer},
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
        serialization:false,
    }),
});