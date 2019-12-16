import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Item from '../src/Components/Item/Item';

const App = (props) => {

  const [isLoggedIn,setLogin] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('auctionUser')){
      setLogin(true);
    }else{
      setLogin(false);
    }
  },[isLoggedIn])

  const sideMenuHandler = () => {
    if(localStorage.getItem('auctionUser')){
      setLogin(true);
    }else{
      setLogin(false);
    }
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.length === 1 ? sidemenu.classList.add('active') : sidemenu.classList.remove('active');
    const sidemenuicon = document.getElementById('sidemenuicon');
    sidemenuicon.classList.length === 2 ? sidemenuicon.classList.remove('active') && sidemenu.classList.add('sideDiv')  : sidemenuicon.classList.add('active') && sidemenu.classList.add('sideDiv');
  }

  const logoutHandler = () => {
    localStorage.removeItem('auctionUser');
    localStorage.clear();
    setLogin(false);
    sideMenuHandler();
  }

  const loginHandler = () => {
    sideMenuHandler();
  }

  return (
    <BrowserRouter>
        <div className="App">
          <nav>
          <div onClick={sideMenuHandler} id='sidemenuicon' className='container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <Link className='title' to='/react-auction/'>Home</Link>
          </nav>
          <div id='sidemenu' className='sideDiv'>
            {/* {isLoggedOut ? null : <p onClick={logoutHandler}>My Bids</p>} */}
            {isLoggedIn ? <p onClick={logoutHandler}>Logout</p> : <Link to='/react-auction/login'><p onClick={loginHandler}>Login</p></Link>}
          </div>

          <Route path='/react-auction/' exact component={Home}/>
          <Route path='/react-auction/login' exact component={Login}/>
          <Route path='/react-auction/signup' exact component={Signup}/>
          <Route path='/react-auction/items/:id' exact component={Item}/>
        </div>
        </BrowserRouter>
  );
}

export default App; 