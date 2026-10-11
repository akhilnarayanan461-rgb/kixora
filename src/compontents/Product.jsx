import { Link } from "react-router-dom"
import "./Product.css"
function Product({ product, cart, onAdd }) {
    const added = cart.some((item) => item.id === product.id)

    return (
        <article className="product-card">
            <Link
                className="product-image"
                to={`/product/${product.id}`}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </Link>

            <div className="product-info">
                <p className="muted">{product.category}</p>

                <h3>
                    <Link to={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>

                <p className="price">AED {product.price}</p>

                <button
                    className="button"
                    type="button"
                    disabled={added}
                    onClick={() => onAdd(product.id)}
                >
                    {added ? "Added to cart" : "Add to cart"}
                </button>
            </div>
        </article>
    )
}

export default Product