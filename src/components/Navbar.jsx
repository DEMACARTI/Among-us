import React from 'react';
import './Navbar.css';
import home from '../assets/home.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="crewmate-button">
        <img src={home} alt='' className='home'></img>
      </div>
      
      <ul className='nav-links'>
        <li>First Game Login</li>
        <li>Second Game Login</li>
        
      </ul>
    </div>
  );
};

export default Navbar;