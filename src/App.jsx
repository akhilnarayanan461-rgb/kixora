import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Navbars from "./compontents/Navbars"
import Footer from "./compontents/Footer"

import Home from "./pages/Home"
import Category from "./pages/Category"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { products } from "./data/products.js"

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("kixora-cart"))

    if (!Array.isArray(saved)) return []

    const ids = new Set()

    return saved.filter((item) => {
      const valid =
        item &&
        products.some((product) => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity >= 1 &&
        item.quantity <= 99 &&
        !ids.has(item.id)

      if (valid) ids.add(item.id)

      return valid
    })
  } catch {
    return []
  }
}

function App() {
  const [cart, setCart] = useState(readCart)
  const [storageError, setStorageError] = useState("")

  useEffect(() => {
    try {
      localStorage.setItem("kixora-cart", JSON.stringify(cart))
      setStorageError("")
    } catch {
      setStorageError(
        "Cart works for this session, but could not be saved."
      )
    }
  }, [cart])

  function addToCart(id) {
    setCart((previousCart) => {
      if (previousCart.some((item) => item.id === id)) {
        return previousCart
      }

      return [...previousCart, { id, quantity: 1 }]
    })
  }

  function updateQuantity(id, quantity) {
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
      return
    }

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbars cartCount={cartCount} />

        {storageError && (
          <p className="container" role="status">
            {storageError}
          </p>
        )}

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home cart={cart} onAdd={addToCart} />
              }
            />

            <Route
              path="/category"
              element={
                <Category cart={cart} onAdd={addToCart} />
              }
            />

            <Route
              path="/product/:id"
              element={
                <ProductDetails
                  cart={cart}
                  onAdd={addToCart}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onQuantityChange={updateQuantity}
                  onRemove={removeFromCart}
                />
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App