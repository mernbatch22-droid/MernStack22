import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar({ cartItem, setInputValue, inputValue, theme, setTheme }) {


  return (
    <nav className="blinkit-navbar">
      {/* Left: Logo & Location */}
      <div className="left">
        <Link to="/">
          <div className="logo">Home</div>
        </Link>
        <div className="location">
          <p className="delivery">Delivery in 10 minutes</p>
          <p className="address">C21 Vijay Nagar, Indore ▼</p>
        </div>
      </div>

      {/* Center: Search */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for groceries, fruits, snacks..."
          name={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
        />
      </div>

      {/* Right: Login & Cart */}
      <div className="right">
        <Link to="/cart">
          <button className="cart-btn">🛒 My Cart {cartItem?.length > 0 ? (<span>{cartItem?.length}</span>) : ""}
          </button>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/signup"><button className="login-btn">Singup</button></Link>
        <div>
          {
            theme === false ? (<div onClick={() => setTheme(!theme)}><FaMoon /></div>) : (<div onClick={() => setTheme(!theme)}> <MdOutlineWbSunny color="white" /></div>)
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
