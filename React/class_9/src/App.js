import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import NotFound from "./pages/NotFound.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import { Data } from "./utils/Data.js"
import { useState } from "react";
function App() {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [cartItem, setCartItem] = useState([]);
  const [inputValue, setInputValue] = useState();
  console.log(inputValue)

  return (

    <div>
      <Navbar cartItem={cartItem} setInputValue={setInputValue} inputValue={inputValue} />
      <Routes>
        <Route path="/" element={<Home
          inputValue={inputValue}
          products={Data}
          setCartItem={setCartItem} cartItem={cartItem}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity} />} />
        <Route path="/cart" element={<Cart cartItem={cartItem} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} setCartItem={setCartItem} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;