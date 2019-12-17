import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLutLNsZk7Cshpu7RkIRMhRo_bTnlXWNA",
    authDomain: "auctionapp-a1f6d.firebaseapp.com",
    databaseURL: "https://auctionapp-a1f6d.firebaseio.com",
    projectId: "auctionapp-a1f6d",
    storageBucket: "auctionapp-a1f6d.appspot.com",
    messagingSenderId: "651258766641"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

export { firebase as default };