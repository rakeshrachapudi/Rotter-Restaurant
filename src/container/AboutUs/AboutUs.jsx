import React from 'react';
import {Images, images} from "../../constants"

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="About">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Welcome to our restaurant! We are passionate about providing a delightful dining experience with a diverse and delectable menu. Our cozy and inviting atmosphere ensures that every meal with us is memorable. Join us to enjoy exceptional flavors and warm hospitality.</p>
        <a href="https://rakeshrachapudi.onrender.com/"><button type='button' className='custom__button'>Know More</button></a>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Our journey began with a passion for great food and has grown into a beloved dining spot. We pride ourselves on quality dishes and a warm, inviting atmosphere. Join us to experience our rich culinary heritage and exceptional hospitality.</p>
        <a href="https://rakeshrachapudi.onrender.com/"><button type='button' className='custom__button'>Know More</button></a>
      </div>

    </div>
  </div>
);

export default AboutUs;
