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

    // const clickHandler = (i) => {
      // console.log(i);
    // }

    return (
        data.map((item) => {
          return (<Link key={item._id} to={'/items/' + item._id}>
                      <Items  
                        name={item.name}
                        image={item.image}
                        // clicked={()=> clickHandler(item._id)}
                        ></Items></Link>)
        })
    );
};

export default Home;