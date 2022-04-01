import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { initializeApp } from "firebase/app";
import '@firebase/firestore'
import 'firebase/auth'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDxzsI4wEjdQ_DGIe239-AQVmtjKDKxW4U",
  authDomain: "sport-shop-fd1bd.firebaseapp.com",
  projectId: "sport-shop-fd1bd",
  storageBucket: "sport-shop-fd1bd.appspot.com",
  messagingSenderId: "688170118195",
  appId: "1:688170118195:web:d4ccba5bdd36ee67f4c746"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
console.log(auth)

ReactDOM.render(
 
  <React.StrictMode>
    <App />
    <button onClick={()=>signInWithPopup(auth,new GoogleAuthProvider())}></button>
  </React.StrictMode>,
  document.getElementById('root')
);