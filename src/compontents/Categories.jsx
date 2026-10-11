import { Link } from 'react-router-dom'
import './Categories.css'

function Categories() {
    return (
        <section className="categories">
            <div className="categories-container">
                <span className="category-label">CURATED LINES</span>
                <h2>Browse by Category</h2>
                <p className="category-intro">
                    Find your ideal fit for every occasion.
                </p>

                <div className="categories-list">
                    <div className="category-card">
                        <span className="category-tag">STREET & CULTURE</span>
                        <h3>Sneakers</h3>
                        <p>Streetwear & Everyday Comfort</p>
                        <img src="/sneakers.png" alt="White sneaker" />
                        <Link to="/category">Explore Sneakers →</Link>
                    </div>

                    <div className="category-card">
                        <span className="category-tag">TRACK & CIRCUIT</span>
                        <h3>Sports</h3>
                        <p>Performance & Marathon Ready</p>
                        <img src="/sports.png" alt="Sports shoe" />
                        <Link to="/category">Explore Sports →</Link>
                    </div>

                    <div className="category-card">
                        <span className="category-tag">SARTORIAL CRAFT</span>
                        <h3>Formal</h3>
                        <p>Handcrafted Luxury Leather</p>
                        <img src="/formal.png" alt="Black formal shoe" />
                        <Link to="/category">Explore Formal →</Link>
                    </div>
                    <div className='category-card'>
                        <span className='category-tag'>Casual</span>
                        <h3>casual</h3>
                        <p>luxuary</p>
                        <img src="/formal.png" alt="Black formal shoe" />
                        <Link to="/category">Explore CASUAL →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories