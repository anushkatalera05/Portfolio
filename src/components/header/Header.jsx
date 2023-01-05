import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/Meq.jpg'
import Headersocial from './Headersocial'

const Header = () => {
  return (
  <header>
   <div className='container header_cotanier'>
    <h5>Hello I'm</h5>
    <h1>Anushka Talera</h1>
    <h5 className='text-light'>FulLstack Developer</h5>
    <CTA />
    <Headersocial/>
    <div className='me'>
        <img src={ME} alt='me'></img>
    </div>
    <a href='#contact' className='scroll__down'>Scroll Down</a>
   </div>
  </header>
  )
}

export default Header