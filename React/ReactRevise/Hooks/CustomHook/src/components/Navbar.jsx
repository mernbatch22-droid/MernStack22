import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="nav-container">
            <ul className="nav-list">
                <Link to="/"><li className="nav-item">Page1</li></Link>
                <Link to="/page2"><li className="nav-item">Page2</li></Link>
                <Link to="/page3"><li className="nav-item">Page3</li></Link>
            </ul>
        </div>

    )
}

export default Navbar