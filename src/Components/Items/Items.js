import React from 'react';
import './Items.css';
// import {Route} from 'react-router-dom';

const Items = (props) => {

    return (   
              <div className='Card' onClick={props.clicked}>
              <h2>{props.name}</h2>
              <img className='Image' src={props.image} alt="frame"></img>
              {/* <p>By {props.children.mail}</p>
              <p>Category: <b>{props.children.category}</b></p>
              <p>Initial Price: {props.children.initialprice}₹</p>
              <p>Present Bid Price: {props.children.bidprice}₹ (By {props.children.bidder})</p>
              <p className='Description'>About: {props.children.description}</p> */}
              </div>
    );
};

export default Items;