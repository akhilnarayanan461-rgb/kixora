import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
function Navbars({ cartCount }) {
    return (
        <header>
            <div className="announcement">
                FIND YOUR STRIDE. MAKE IT YOURS.
            </div>

            <nav className="navbar container">
                <Link className="logo" to="/">
                    KIXORA<span>.</span>
                </Link>

                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/category">Category</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <NavLink to="/cart">
                        Cart
                        <span className="cart-count">{cartCount}</span>
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbars