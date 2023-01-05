import React from 'react'
import './portfolios.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container' >
          <article className='portfolio_item'>
            <div className='portfolio_item-image'></div>
            <h3>This Is Portfolio Image Tittle</h3>

          </article>
      </div>
    </section>
  )
}

export default Portfolio