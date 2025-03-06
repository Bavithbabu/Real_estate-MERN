import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
// import {Home} from 'Components/Home';


function Header() {
    const {currentUser} = useSelector(state=>state.user)
  return (
     <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <Link  to="/">
            <span className='text-slate-500'>Royal</span>
            <span className=' text-slate-700'>Estate</span></Link>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input  type="text" placeholder='Search..'
                className='bg-transparent focus:outline-none w-24 sm:w-48'/>
                <FaSearch  className='text-slate-600' />
            </form>
            <ul className='flex justify-between gap-3 text-slate-700'>
                <Link to="/Home">
                <li className='hidden sm:inline text-slate-700 
                hover:underline delay-75'>Home</li></Link>
                <Link to="/About">
                <li className='hidden sm:inline text-slate-700 
                hover:underline delay-75'>About</li></Link>
                <Link to="/Profile"> 
                {currentUser ?(<img
                    className='rounded-full h-7 w-7 object-cover'
                    src={currentUser.avatar}
                    alt="provider"
                />):( <li className='hidden sm:inline text-slate-700 '>Log In</li>)}

               </Link>
                <Link to="/Signup">
                <li className='hidden sm:inline text-slate-700 
                hover:underline delay-75'>Sign-up</li></Link>
            </ul>
        </div>
     </header>
  );
}

export default Header;
