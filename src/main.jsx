import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  { ChakraProvider }  from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA620GTkrqItVVqKpB6vWC0Ve9kx7EQwKU",
  authDomain: "coder-react-af43c.firebaseapp.com",
  projectId: "coder-react-af43c",
  storageBucket: "coder-react-af43c.appspot.com",
  messagingSenderId: "404318940010",
  appId: "1:404318940010:web:39d2b5d5ca86e23d8bd313",
  measurementId: "G-YPV1T6HBE6"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
