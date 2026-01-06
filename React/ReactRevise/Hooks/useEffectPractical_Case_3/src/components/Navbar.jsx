import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <NavLink to="/"><li className="nav-item">Home</li></NavLink>
        <NavLink to="/about"><li className="nav-item">About</li></NavLink>
      </ul>
    </div>

  )
}

export default Navbar