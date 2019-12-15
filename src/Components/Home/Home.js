import React,{useEffect, useState} from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Items from '../Items/Items';


const Home = (props) => {

    const [data,setData] = useState([]);

    const start = () => {
      axios.get('https://react-auction-server.herokuapp.com/sell')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error))
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

export default Home;