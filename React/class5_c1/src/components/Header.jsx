
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <div className="navbar">
            <div className="logo">MySite</div>

            {/* <div className="nav-links">
                <div className="nav-item"><Link to="/">Home</Link></div>
                <div className="nav-item"><Link to="/about">About</Link></div>
                <div className="nav-item"><Link to="/servies">Services</Link></div>
                <div className="nav-item"><Link to="/contacts">Contacts</Link></div>
            </div> */}

            <div className="nav-links">
                <div className="nav-item"><NavLink to="/">Home</NavLink></div>
                <div className="nav-item"><NavLink to="/about">About</NavLink></div>
                <div className="nav-item"><NavLink to="/servies">Services</NavLink></div>
                <div className="nav-item"><NavLink to="/contacts">Contacts</NavLink></div>
            </div>
        </div>
    )
}

export default Header