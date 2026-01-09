import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log("this is entry point of react application")
root.render(

    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>


    </>

);

