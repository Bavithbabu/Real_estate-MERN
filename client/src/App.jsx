import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Home from './pages/Home';
import About from './pages/About';
import Header from './Components/Header';
import {signInSuccess} from './redux/User/userSilce';

import {useDispatch,useSelector} from 'react-redux';
import PrivateRouter from './Components/PrivateRouter';

// import Signin from './pages/Signin';


function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user); // Get state
  React.useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) dispatch(signInSuccess(user));
}, [dispatch]);
  return (  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route path="/signin" element={currentUser ? <Home />:<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<Home />} />
      <Route element={<PrivateRouter />}>
      <Route path="/profile" element={<Profile />}/></Route>
      <Route path="/about" element={<About />}/>
      {/* <Route path="/Signin" element={<Signin />} />  */}
    </Routes>
    </BrowserRouter>
    )
}

export default App;
