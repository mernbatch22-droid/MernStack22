
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <ToastContainer />
    <App />

  </BrowserRouter>


);


