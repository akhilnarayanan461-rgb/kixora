import { Link } from "react-router-dom"

function NotFound() {
    return (
        <section className="section container empty-state">
            <h1 className="page-title">Page not found</h1>
            <Link className="button" to="/">
                Back to Home
            </Link>
        </section>
    )
}

export default NotFound