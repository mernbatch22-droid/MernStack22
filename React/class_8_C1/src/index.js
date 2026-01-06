
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { createContext, useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));


//1. create the context and export so that soone can use
export const tutiContext = createContext();

//2. make your vriable, state and function which are using in multiple components
const name = "Jagmohan"
const age = 90;

function sum(a,b){
  return a+b
}
const obj = {
  name,
  age,
  sum
}


// const [name1,setName]=useState("mohggfv")

//3. provide context so that componets can use the data of context 
root.render(
  <tutiContext.Provider value={obj}>
    <App />
  </tutiContext.Provider>

);


