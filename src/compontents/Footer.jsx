import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div>
                    <Link className="logo" to="/">
                        KIXORA<span>.</span>
                    </Link>
                    <p className="muted">Comfort in every step.</p>
                </div>

                <div className="footer-links">
                    <Link to="/category">Collection</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <p className="muted">
                    © {new Date().getFullYear()} Kixora
                </p>
            </div>
        </footer>
    )
}

export default Footer