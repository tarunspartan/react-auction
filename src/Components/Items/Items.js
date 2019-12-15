import React from 'react';
import './Items.css';

const Items = (props) => {

    return (   
              <div className='Card' onClick={props.clicked}>
              <h2>{props.name}</h2>
              <img className='Image' src={props.image} alt="frame"></img>
              </div>
    );
};

export default Items;