import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#Home">Home</a></li>
      <li className='p__opensans'><a href="#About">About</a></li>
      <li className='p__opensans'><a href="#Menu">Menu</a></li>
      <li className='p__opensans'><a href="#Awards">Awards</a></li>
      <li className='p__opensans'><a href="#Contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="/" className='p__opensans'>Login / Register</a>
      <div />
      <a href="/" className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#ffffff' cursor="pointer" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href="#Home">Home</a></li>
            <li className='p__opensans'><a href="#About">About</a></li>
            <li className='p__opensans'><a href="#Menu">Menu</a></li>
            <li className='p__opensans'><a href="#Awards">Awards</a></li>
            <li className='p__opensans'><a href="#Contact">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
)
};

export default Navbar;
