import React, { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
   

// onchange={handleChange}

function Signup() {
  const [formData,setFormData] = useState({})
  const [error,seterror] = useState(null);
  const [loading,setLoading] = useState(false);
  // const []
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        seterror(data.message || 'Something went wrong');
        setLoading(false);
        return;
      }
  
      setLoading(false);
      console.log(data);
    } catch (error) {
      seterror('Failed to fetch: ' + error.message);
      setLoading(false);
    }
  };
  console.log(formData);
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7' >Sign UP</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
          type="text"
          placeholder= "Username"
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input 
          type='password'
          placeholder="Password . ."
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button disabled={loading}className='bg-slate-700 text-white p-3
        rounded-lg uppercase hover:opacity-95 disabled:80'> { loading ? 'Loading..':'Sign-up'}</button>
      </form>
    <div className='flex justify-center items-center  gap-2 mt-5'>
      <p>Have an account?</p>
      <Link path={'/sign-in'}>
        <span className='text-blue-700 hover:underline'>Sign in</span>
      </Link>
    </div>
    </div>
  );
}

export default Signup;
