// import { createSlice, current } from "@reduxjs/toolkit";

// const initialState ={
//     currentUser:null,
//     error:null,
//     loading:false,
// };

// const userSlice = createSlice({
//         name:'user',
//         initialState,
//         reducers:{
//             signInStart:(state) =>{
//                 state.loading = true;
//             },
//             signInSuccess: (state,action)=>{
//                 state.loading = false;
//                 state.currentUser = action.payload;
//                 state.error = null;
//             },
//             signInFailure: (state, action) => {
//                 state.loading = false;  
//                 state.error = action.payload;
//             },
//             updateUserStart:(state)=>{
//                 state.loading=true;
//             },
//             updateUserSuccess:(state,action)=>{
//                 state.currentUser = action.payload;
//                 state.loading=false;
//                 state.error=null;
//             },
//             updateUserFailure:(state,action)=>{
//                 state.error = action.payload;
//                 state.loading = false;
//             },
//             deleteUserStart:(state)=>{
//                 state.loading = true;
//             },
//             deleteUserSuccess: (state) => {
//                 state.currentUser = null;  
//                 state.loading = false;
//                 state.error = null;
//             },
//             deleteUserFaliure:(state,action)=>{
//                 state.error =action.payload;
//                 state.loading=false;
//             },
//             signoutSuccess:(state)=>{
//                 state.error=null;
//                 state.loading=false;
//                 state.currentUser=null;
//             },
//             signOutUserStart:(state)=>{
//                 state.currentUser=null;
//                 state.loading=false;
//                 state.error=null;
//             },signOutFailure:(state,action)=>{
//                 state.loading=false;
//                 state.error=action.payload;
//             },
//         },
//     });
//     export const {
//         signInStart,
//         signInFailure,
//         signInsuccess,
//         // signInSuccess, // ✅ Fixed typo
//         updateUserStart,
//         updateUserSuccess,
//         updateUserFailure,
//         deleteUserStart,
//         deleteUserSuccess,
//         deleteUserFailure, // ✅ Fixed typo
//         signOutFailure,
//         signOutSuccess, // ✅ Fixed typo
//         signOutUserStart
//     } = userSlice.actions;
//     export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  signInStart,
  signInSuccess, 
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,  
  signOutUserStart,
  signOutSuccess,  
  signOutFailure,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;