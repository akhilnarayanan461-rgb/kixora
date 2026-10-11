import { Link } from "react-router-dom"
import Product from "../compontents/Product"
import { products, categories } from "../data/products"
import "./Home.css"

function Home({ cart, onAdd }) {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <p className="eyebrow">MADE FOR YOUR NEXT MOVE</p>

          <h1>
            STEP INTO THE<br />
            <span>FUTURE</span> OF<br />
            MOVEMENT.
          </h1>

          <p className="hero-description">
            Discover shoes made for comfort, style,
            and everyday movement.
          </p>

          <div className="hero-actions">
            <Link className="button" to="/category">
              Shop the Collection →
            </Link>

            <Link className="secondary-link" to="/product/1">
              Meet the Nitro →
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/Shoe.png"
            alt="Kixora Nitro Velocity orange shoe"
          />

          <strong>NITRO VELOCITY</strong>
          <p className="muted">Sports / Orange</p>
        </div>
      </section>

      <section className="category-section">
        <div className="container">
          <p className="eyebrow">CURATED LINES</p>
          <h2>Browse by Category</h2>
          <p className="muted">
            Find your ideal fit for every occasion.
          </p>

          <div className="category-grid">
            {categories
              .filter((category) => category !== "All")
              .map((category) => {
                const product = products.find(
                  (item) => item.category === category
                )

                return (
                  <Link
                    className="category-card"
                    key={category}
                    to={`/category?category=${category}`}
                  >
                    <h3>{category}</h3>

                    <img
                      src={product.image}
                      alt={`${category} shoe`}
                      loading="lazy"
                    />

                    <span>Explore {category} →</span>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">YOUR NEXT FAVORITE PAIR</p>
        <h2>Featured Footwear</h2>
        <p className="muted">
          Made for comfort. Built for style.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              onAdd={onAdd}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home