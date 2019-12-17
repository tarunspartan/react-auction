import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Items from '../Items/Items';

const MyBids = () => {

    const [data,setData] = useState([]);
    const start = () => {
      if(localStorage.getItem('auctionUser')){
        axios.get('https://react-auction-server.herokuapp.com/mybids?bidder='+localStorage.getItem('auctionUser'))
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.error(error))
      }else{
        alert('You must Login first');
      }
      }
      

    useEffect(() => {
      start();
    },[]);

    return (
        data.map((item) => {
            return (<Link key={item._id} to={'/react-auction/items/' + item._id}>
                   <Items  
                  name={item.name}
                  image={item.image}
                  ></Items></Link>)
        })
    );
};

export default MyBids;