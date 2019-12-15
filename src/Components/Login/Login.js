import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = (props) => {

    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        axios.post('https://react-auction-server.herokuapp.com/signin',{mail:input,password:password})
        .then((response) => {
            if(response.data.status !== 'OK'){
                console.error('Authentication Failed')
            }else{
                localStorage.setItem('auctionUser',input);
                props.history.push({pathname : '/react-auction/'});
            }
        })
        .catch(error => console.error(error));
    }

    const getInputHandler = (event) => {
        setInput(event.target.value);
    }

    const getPasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className='Main'>
            <input type='text' placeholder="Email" value={input} onChange={getInputHandler} required></input><br></br>                <input type='password' placeholder="Password" value={password} onChange={getPasswordHandler} required></input><br></br>
            <button onClick={loginHandler}>Login</button>
            </div>
    );
    
}

export default Login;