// import { current } from '@reduxjs/toolkit';
// import { updateCurrentUser } from 'firebase/auth';
import React from 'react';
import {useSelector} from 'react-redux';

function Profile() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-center  text=3xl font-semibold my-7'>Profile</h1>
      <form className='flex flex-col gap-3'>
        <img  src ={currentUser.avatar} alt="Profile"
          className='h-24 w-34 rounded-full object-cover self-center  mt-3'/>
        <input id="UserName" placeholder='User-Name' type="text" className='border p-3 rounded-lg'/>
        <input id="Email" placeholder='Email' type="text" className='rounded-lg border p-3 '/>
        <input id="Password" placeholder='Password' type="text" className='rounded-lg border p-3'/>
        <button className='bg-slate-700 text-white uppercase hover:opacity-95
              p-3    rounded-lg disablebed:80'> Update</button>
      </form>
      <div className='flex justify-between mt-6'>
        <span className='text-red-500 cursor-pointer'>Delete account </span>
        <span className='text-red-500 cursor-pointer'>Sign out </span>
      </div>
    </div>
  );
}

export default Profile;
