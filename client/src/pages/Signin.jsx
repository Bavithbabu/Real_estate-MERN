import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { signInFailure, signInSuccess,signInStart } from '../redux/User/userSilce';
import OAuth from '../Components/OAuth';



function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [formData,setFormData] = useState({})
  // const [error,seterror] = useState(null);
  const [loading,setLoading] = useState(false);
  
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };

    const handleSubmit = async (e) =>{
      e.preventDefault();
      dispatch(signInStart());  
      // setLoading(true);
      try{
          dispatch(signInStart());
          const res = await fetch('http://localhost:3000/api/auth/signin',{
            method :'POST',
            headers:{
              'Content-Type':"application/json",
            },
            body:JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);
          if(data.success === false){
            dispatch(signInFailure(data));
            return;
          }
          dispatch(signInSuccess(data));
          setLoading(false);
          navigate('/');
      }catch(error){
        // dispatch(signInFailure(data.message));
        dispatch(signInFailure(error.message));
        setError(error.message);
        setLoading(false);
      }
    };
    console.log(formData);
  return (
    <div className='mx-auto p-3 max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        type="text"
        placeholder='Email'
        className='border p-3 rounded-lg'
        id="email"
        onChange={handleChange}
        />
        <input 
        type="password"
        placeholder='password. .'
        id = "password"
        className='border p-3 rounded-lg'
        onChange={handleChange}
        />
        <button disabled={loading} className='bg-slate-700 text-white p-3
        rounded-lg uppercase hover:oupacity-95 disabled:80'>{ loading?'Loading..':'Sign-in' }</button>
        <OAuth />
      </form>
      <div className='flex justify-center items-center gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to='/Signup'>
        <span className='text-blue-700 hover:underline'> Sign-up</span></Link>
      </div>{error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}

export default Signin;
