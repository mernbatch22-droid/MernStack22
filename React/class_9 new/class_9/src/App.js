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

  const [theme, setTheme] = useState(false);
  // Implementation of pagination 

  // step-1  api calling hamare pass Data aleardy hai (Complete)

  //step-2 Ui me dikhne valo cardo kee sankhya - 4
  const cardInUI = 8;


  //step-3  Data ke length nikalo so that pages bana pau 
  const totalLength = Data.length;

  // step-4 Total pages ya btn create kar lo 
  const totalPagesBtn = Math.ceil(totalLength / cardInUI);


  // step-5 create a button 
  let button = []

  for (let i = 1; i <= totalPagesBtn; i++) {
    button.push(i);
  }

  console.log(button)


  // step-6 currentPage jo Ui me dikhega 
  const [currPage, setCurrPage] = useState(1);

  // step -7 pta lga le kha se nikale
  const SI = (currPage - 1) * cardInUI;
  const EI = currPage * cardInUI;


  // step 8 ui me card dikhao
  const uiValeCards = Data.slice(SI, EI);

  // Ui me card bana do


  console.log(theme)

  const ProjectColor=theme===false?"light":"dark"
  return (

    <div className={theme===false?"light":"dark"}
>
      <Navbar

        theme={theme}
        setTheme={setTheme}
        cartItem={cartItem} setInputValue={setInputValue} inputValue={inputValue} />
      <Routes>
        <Route path="/" element={<Home
          currPage={currPage}
          totalPagesBtn={totalPagesBtn}
          setCurrPage={setCurrPage}
          button={button}
          inputValue={inputValue}
          products={uiValeCards}
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