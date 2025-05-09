import {combineReducers, configureStore} from '@reduxjs/toolkit';
// import userReducer from './user/userSilce';
import userReducer from './User/userSilce';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";



const rootReducer =  combineReducers({user:userReducer});
// const rootReducer = combineReducers({ user: userReducer });
const persistConfig = {
    key:"root",
    storage,
    version:1,
}


const presistedReducer =  persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: presistedReducer,
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
        serializableCheck:false,
    }),
});

export const persist = persistStore(store);

