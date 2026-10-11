import { useState } from "react"
import "./Category.css"
import { useSearchParams } from "react-router-dom"
import Product from "../compontents/Product"
import { products, categories } from "../data/products"

function Category({ cart, onAdd }) {
    const [params, setParams] = useSearchParams()
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("featured")

    const requestedCategory = params.get("category")

    const selectedCategory = categories.includes(requestedCategory)
        ? requestedCategory
        : "All"

    const filteredProducts = products.filter((product) => {
        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory

        const searchMatch = product.name
            .toLowerCase()
            .includes(search.trim().toLowerCase())

        return categoryMatch && searchMatch
    })

    if (sort === "low-high") {
        filteredProducts.sort((a, b) => a.price - b.price)
    } else if (sort === "high-low") {
        filteredProducts.sort((a, b) => b.price - a.price)
    }

    function resetFilters() {
        setSearch("")
        setSort("featured")
        setParams({})
    }

    return (
        <section className="section container">
            <p className="eyebrow">THE KIXORA COLLECTION</p>
            <h1 className="page-title">A pair for every move.</h1>

            <p className="muted">
                From your morning run to your weekend plans.
                Find your fit.
            </p>

            <div className="toolbar">
                <input
                    type="search"
                    placeholder="Search shoes..."
                    aria-label="Search shoes"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <label className="sort-control">
                    Sort by
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </label>
            </div>

            <div className="filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        type="button"
                        className={
                            selectedCategory === category ? "active" : ""
                        }
                        aria-pressed={selectedCategory === category}
                        onClick={() =>
                            setParams(
                                category === "All" ? {} : { category }
                            )
                        }
                    >
                        {category}
                    </button>
                ))}
            </div>

            <p className="muted" role="status">
                {filteredProducts.length} pairs found
            </p>

            {filteredProducts.length === 0 && (
                <div className="empty-state">
                    <h2>No shoes found</h2>
                    <p>Try another name or category.</p>

                    <button className="button" onClick={resetFilters}>
                        Reset filters
                    </button>
                </div>
            )}

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        cart={cart}
                        onAdd={onAdd}
                    />
                ))}
            </div>
        </section>
    )
}

export default Category