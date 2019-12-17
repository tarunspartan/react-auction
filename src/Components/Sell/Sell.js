import React, { useState } from 'react';
import styles from './Sell.module.css';
import firebase from '../../Firebase/Firebase';
import axios from 'axios';

const Sell = (props) => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [date,setDate] = useState('');
    const [category,setCategory] = useState('');
    const [description,setDescription] = useState('');

    const [url,setUrl] = useState('');
    const [progress,setProgress] = useState(0);

    const getInputHandler = (event) => {
        if(localStorage.getItem('auctionUser')){
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'price':
                setPrice(event.target.value);
                break;
            case 'date':
                setDate(event.target.value);
                break;
            case 'category':
                setCategory(event.target.value);
                break;
            case 'description':
                setDescription(event.target.value);
                break;
            default:
                break;
        }
    }else(alert('You must Login first!'))
    }

    let productData = {
        mail: localStorage.getItem('auctionUser'),
        name: name,
        initialprice: price,
        bidprice: '',
        bidder: '',
        date: date,
        image: url,
        category: category,
        description: description
    }

    const sellHandler = () => {
        if(localStorage.getItem('auctionUser')){
            axios.post('https://react-auction-server.herokuapp.com/sell',productData)
        .then(response => {
            if(response.data.status !== 'Ok'){
                console.error('Failed')
            }else{
                props.history.push({pathname : '/react-auction/'});
            }
        })
        .catch(error => console.error(error))
        }
        else{alert('You must Login first!')}
    }

    const uploadImage = async (i) => {
        if(localStorage.getItem('auctionUser')){
        let storageRef = firebase.storage().ref("/itemphotos");
        var uuid = guid();
        const imageRef = storageRef.child("itemphotos" + uuid);
        await imageRef.put(i).then((snapshot)=>{
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            imageRef.getDownloadURL()
            .then(url=>{
                setUrl(url);
            })
        })
    }else(alert('You must Login first!'))
}

    var guid = () => {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return (s4() +s4() +"-" +s4() +"-" +s4() +"-" +s4() +"-" +s4() +s4() +s4());
      }

    return (
        <div className={styles.ell}>
            <input type='text' name='name' placeholder='Name of Item' value={name} onChange={getInputHandler} required></input><br></br>
            <input type='number' name='price' placeholder='Your Price' value={price} onChange={getInputHandler} required></input><br></br>
            <input type='datetime-local' name='date' value={date} onChange={getInputHandler} required></input><br></br>
            <select name="category" value={category} onChange={getInputHandler} required>
            <option value="Fine Art">Fine Art</option>
            <option value="Coins and Jewelry">Coins and Jewelry</option>
            <option value="Collectibles">Collectibles</option>
            <option value="Antiques">Antiques</option>
            <option value="Memorabilia">Memorabilia</option>
            <option value="Clothing and Souvenirs">Clothing and Souvenirs</option>
            </select><br></br>
            <input type='file' accept="image/*" name='file' onChange={(e) => uploadImage(e.target.files[0])}></input><br></br>
            <div>{progress}</div><br></br>
            <textarea placeholder='Write a short description about item...' name='description' value={description} onChange={getInputHandler} rows="3" cols="20">
            </textarea><br></br>
            <button onClick={sellHandler}>Sell</button>
        </div>
    );
};

export default Sell;