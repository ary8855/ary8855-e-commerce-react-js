import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTp0Or4RGf8X_7oWYlX-M9QLrvBSd2cRY",
  authDomain: "ecommerce-dba49.firebaseapp.com",
  projectId: "ecommerce-dba49",
  storageBucket: "ecommerce-dba49.appspot.com",
  messagingSenderId: "916075406939",
  appId: "1:916075406939:web:a86137e7d20a40948a817e"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
