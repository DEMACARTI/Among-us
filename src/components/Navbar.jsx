import React from 'react'
import './Navbar.css'
import home from '../assets/home.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={home} alt='' className='logo' />
      <ul className='nav-links'>
        <li>First Game Login</li>
        <li>Second Game Login</li>
        </ul>
    </div>
  )
}

export default Navbar