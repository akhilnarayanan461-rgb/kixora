import { Link } from "react-router-dom"
import { products } from "../data/products"
import "./Cart.css"

function Cart({ cart, onQuantityChange, onRemove }) {
  const items = cart.map((item) => ({
    ...products.find((product) => product.id === item.id),
    quantity: item.quantity
  }))

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const quantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <section className="section container">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1 className="page-title">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Find your next favorite pair.</p>

          <Link className="button" to="/category">
            Shop Collection
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-item" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </Link>

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p className="muted">{item.category}</p>
                  <p>AED {item.price} each</p>

                  <div className="quantity-controls">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      disabled={item.quantity === 1}
                      onClick={() =>
                        onQuantityChange(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      disabled={item.quantity === 99}
                      onClick={() =>
                        onQuantityChange(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <strong>
                  AED {item.price * item.quantity}
                </strong>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Items: {quantity}</p>
            <p className="price">Subtotal: AED {total}</p>

            <p className="muted">
              Frontend demo. Checkout is unavailable.
            </p>

            <Link className="button" to="/category">
              Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  )
}

export default Cart