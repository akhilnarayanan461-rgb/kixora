import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"

function Hero() {
  return (
    <section className='hero'>
     
          <div className='hero-content'>
        <p className='hero-label'>
          <span>.</span>MADE FOR YOUR NEXT MOVE
        </p>
            <h1>STEP INTO <br/>THE FUTURE<br/>
          OF<span> MOVEMENT</span></h1>
        <p className="hero-description">
          Discover shoes made for comfort, style, and everyday movement.
        </p>
        <div className='hero-action'>
          <Link to="/category">Shop The Collection → </Link>
          <Link className='hero-secondary' to="/category">  Meet the Nitro →</Link>
          
          </div>
            
            </div>
      <div className='hero-image'>
        <img src='Shoe.png' alt='Orange running shoe'/>
        <div className="hero-image-label">
          <h3>NITRO VELOCITY</h3>
          <p>Running / Orange</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
