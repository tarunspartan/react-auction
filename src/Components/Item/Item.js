import React, {useEffect, useState} from 'react';
import './Item.css';
import axios from 'axios';

const Item = (props) => {

    const [Item,setItem] = useState([]);

    const run = () => {
        axios.get('https://react-auction-server.herokuapp.com/getitem?_id='+props.match.params.id)
        .then((response) => {
            response.data.map(item => {
                return setItem(item);
            })
        })
        .catch((error) => console.error(error))
      }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{run();},[]);

    return (
        <div>
              <h1>{Item.name}</h1>
              <img className='Image' src={Item.image} alt="frame"></img>
              <p>By {Item.mail}</p>
              <p>Category: <b>{Item.category}</b></p>
              <p>Initial Price: {Item.initialprice}₹</p>
              <p>Present Bid Price: {Item.bidprice}₹ (By {Item.bidder})</p>
              <p className='Description'>About: {Item.description}</p>
        </div>
    );
};

export default Item;