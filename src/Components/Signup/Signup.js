import React, { useState } from 'react';
import styles from'./Signup.module.css';
import axios from 'axios';

const Signup = (props) => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [password,setPassword] = useState('');

    let userData = {
        fullName: name,
        email: email,
        phoneNumber: number,
        password: password
    }

    const signupHandler = () => {
        axios.post('https://react-auction-server.herokuapp.com/signup',userData)
        .then(response => {
            if(response.data.status !== 'Ok'){
                console.error('Failed')
            }else{
                props.history.push({pathname : '/react-auction/login'});
            }
        })
        .catch(error => console.error(error))
    }

    const getInputHandler = (event) => {
        switch (event.target.placeholder) {
            case 'Name':
                setName(event.target.value);
                break;
            case 'Email':
                setEmail(event.target.value);
                break;
            case 'Phone Number':
                setNumber(event.target.value);
                break;
            case 'Password':
                setPassword(event.target.value);
                break;
            default:
                break;
        }
    }

    const loginHandler = () => {
        props.history.push({pathname : '/react-auction/login'});
    }

    return (
        <div>
            <div className={styles.Cn}>
            <input type='text' placeholder="Name" value={name} onChange={getInputHandler} required></input><br></br>               
            <input type='email' placeholder="Email" value={email} onChange={getInputHandler} required></input><br></br>                
            <input type='tel' placeholder="Phone Number" value={number} onChange={getInputHandler} required></input><br></br> 
            <input type='password' placeholder="Password" value={password} onChange={getInputHandler} required></input><br></br>               
            <button onClick={signupHandler}>Signup</button>
            <p>Already have an account? <span onClick={loginHandler}>Login here..</span></p>
            </div>
        </div>
    );
};

export default Signup;