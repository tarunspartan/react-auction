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
    if(!localStorage.getItem('auctionUser')){
      setLogin(false);
    }else{
      setLogin(true)
    }
  },[isLoggedIn])

  const sideMenuHandler = () => {
    const sidemenu = document.getElementById('sidemenu');
    sidemenu.classList.length === 1 ? sidemenu.classList.add('active') : sidemenu.classList.remove('active');
    const sidemenuicon = document.getElementById('sidemenuicon');
    sidemenuicon.classList.length === 2 ? sidemenuicon.classList.remove('active') && sidemenu.classList.add('sideDiv')  : sidemenuicon.classList.add('active') && sidemenu.classList.add('sideDiv');
  }

  const logoutHandler = () => {
    localStorage.removeItem('auctionUser');
    localStorage.clear();

  }

  return (
    <BrowserRouter>
        <div className="App">
          <nav>
            <Link to='/react-auction/'>Home</Link>
            <ul>
                {isLoggedIn ? null : <li><Link to='/react-auction/login'>Login</Link></li>}
            </ul>
            <div onClick={sideMenuHandler} id='sidemenuicon' className='container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
          </nav>
          <div id='sidemenu' className='sideDiv'><p onClick={logoutHandler}>Logout</p></div>
          <Route path='/react-auction/' exact component={Home}/>
          <Route path='/react-auction/login' exact component={Login}/>
          <Route path='/react-auction/signup' exact component={Signup}/>
          <Route path='/react-auction/items/:id' exact component={Item}/>
        </div>
        </BrowserRouter>
  );
}

export default App; 