import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import Signup from '../src/Components/Signup/Signup';
import Login from '../src/Components/Login/Login';
import Item from '../src/Components/Item/Item';

function App() {

  const [isLoggedIn,setLogin] = useState(true);


  return (
    <BrowserRouter>
        <div className="App">
          <nav>
            <Link to='/'>Home</Link>
            <ul>
                { isLoggedIn ? <li><Link to='/react-auction/login'>Login</Link></li> : null }
                <li><Link to='/react-auction/signup'>Signup</Link></li>
            </ul>
            <div className='container'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
          </nav>
          <Route path='/react-auction/' exact component={Home}/>
          <Route path='/react-auction/login' exact component={Login}/>
          <Route path='/react-auction/signup' exact component={Signup}/>
          <Route path='/react-auction/items/:id' exact component={Item}/>
        </div>
        </BrowserRouter>
  );
}

export default App; 