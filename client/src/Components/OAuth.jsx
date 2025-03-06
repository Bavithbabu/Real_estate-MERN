// import React from 'react';
// import {GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth";
// import {app} from "../firebase";
// import { signInSuccess } from '../redux/User/userSilce';
// import { useDispatch } from 'react-redux';
// import {useNavigate} from 'react-router-dom';

// export default function OAuth() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handelOauth = async () =>{
//         try{
//             const provider = new GoogleAuthProvider();
//             const auth = getAuth(app);

            
//             const result =  await signInWithPopup(auth,provider);
//             const res =await fetch('http://localhost:3000/api/auth/google',{
//               method:'POST',
//               headers:{
//                 'Content-Type':"application/json",
//               },
//               body:JSON.stringify({
//                 name:result.user.displayName,
//                 email:result.user.email,
//                 photo:result.user.photoURL}),
//             });
//             const data = await res.json();
//             dispatch(signInSuccess(data));
//             navigate('/');
//         }catch(error){
//             console.log("Couldn't sigin in google ",error)
//         }
//     }
//   return (
//     <button onClick={handelOauth} className='bg-red-700 p-3 rounded-lg uppercase text-white'>
//       Continue with google 
//     </button>
//   );
// }

import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
// import { signInSuccess } from '../redux/user/userSlice';
import {signInSuccess} from "../redux/User/userSilce";
import { useNavigate } from 'react-router-dom';

export default function oAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      // const res = await fetch(`${API_URL}/api/auth/google`, { ... });

      const res = await fetch(`${API_URL}/api/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type='button'
      className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'
    >
      Continue with google
    </button>
  );
}