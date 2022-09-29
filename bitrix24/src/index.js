<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { ChakraProvider } from '@chakra-ui/react';
>>>>>>> 4c24ab75626a22a045d5d927e0e967c33b392ab1

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
<<<<<<< HEAD
      <App />
    </ChakraProvider>
=======
    <App />
    </ChakraProvider>
=======
import { ChakraProvider } from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ChakraProvider>  
    <App />
</ChakraProvider>

>>>>>>> 288ebea1ee3004e20584dc24282ede1034693c07
>>>>>>> 4c24ab75626a22a045d5d927e0e967c33b392ab1
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
