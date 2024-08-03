import React from 'react';
import { images } from '../../constants'

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="Home">
      <div className="app__wrapper_info">
        <SubHeading title='Chase the new flavour' />
        <h1 className="app__header-h1 ">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{margin: '2rem 0'}}>Earthly delights await, where flavor and passion converge. Our chefs craft dishes that delight the senses and nourish the soul. Join us for an unforgettable culinary experience</p>
        <a href="https://rakeshrachapudi.onrender.com/"><button type='button' className='custom__button'>Explore More</button></a>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
  </div>
);

export default Header;
