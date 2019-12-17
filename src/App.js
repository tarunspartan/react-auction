import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Item from '../src/Components/Item/Item';
import Mybids from '../src/Components/Mybids/MyBids';
import Sell from '../src/Components/Sell/Sell';
import Myauctions from '../src/Components/Myauctions/Myauctions';

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

  const myBidsHandler = () => {
    sideMenuHandler();
  }

  const sellHandler = () => {
    sideMenuHandler();
  }

  const homeClicked = () => {
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
            <Link className='title' onClick={homeClicked} to='/react-auction/'>Home</Link>
          </nav>
          <div id='sidemenu' className='sideDiv'>
            {isLoggedIn ? <Link to='/react-auction/mybids'><p onClick={myBidsHandler}>My Bids</p></Link> : null}
            {isLoggedIn ? <Link to='/react-auction/myauctions'><p onClick={myBidsHandler}>My Auctions</p></Link> : null}
            {isLoggedIn ? <Link to='/react-auction/sell'><p onClick={sellHandler}>Sell</p></Link> : null}
            {isLoggedIn ? <p onClick={logoutHandler}>Logout</p> : <Link to='/react-auction/login'><p onClick={loginHandler}>Login</p></Link>}
          </div>

          <Route path='/react-auction/' exact component={Home}/>
          <Route path='/react-auction/login' exact component={Login}/>
          <Route path='/react-auction/signup' exact component={Signup}/>
          <Route path='/react-auction/mybids' exact component={Mybids}/>
          <Route path='/react-auction/myauctions' exact component={Myauctions}/>
          <Route path='/react-auction/sell' exact component={Sell}/>
          <Route path='/react-auction/items/:id' exact component={Item}/>
        </div>
        </BrowserRouter>
  );
}

export default App; 