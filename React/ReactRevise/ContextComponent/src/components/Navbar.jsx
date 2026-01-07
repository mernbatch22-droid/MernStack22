import { NavLink } from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">

        <NavLink to="/"><li>Home</li></NavLink> 
        <NavLink to="/myinfo"><li>my-info</li></NavLink>
        <NavLink to="/myfamily-info"> <li>myfamily-info</li></NavLink>
        <NavLink to="/myeducation-info"><li>myeducation-info</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
