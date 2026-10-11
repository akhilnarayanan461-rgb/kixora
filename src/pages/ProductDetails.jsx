import { Link, useParams } from "react-router-dom"
import { products } from "../data/products"
import NotFound from "./NotFound"
import "./ProductDetails.css"

function ProductDetails({ cart, onAdd }) {
    const { id } = useParams()
    const product = products.find((item) => item.id === Number(id))

    if (!product) return <NotFound />

    const added = cart.some((item) => item.id === product.id)

    return (
        <section className="section container">
            <Link className="secondary-link" to="/category">
                ← Back to collection
            </Link>

            <div className="details-grid">
                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div>
                    <p className="eyebrow">{product.category}</p>
                    <h1 className="page-title">{product.name}</h1>
                    <p className="price">AED {product.price}</p>
                    <p className="muted">{product.description}</p>

                    <div className="hero-actions">
                        <button
                            className="button"
                            disabled={added}
                            onClick={() => onAdd(product.id)}
                        >
                            {added ? "Added to cart" : "Add to cart"}
                        </button>

                        <Link className="secondary-link" to="/cart">
                            View Cart →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails