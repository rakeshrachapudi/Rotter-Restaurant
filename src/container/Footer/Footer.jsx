import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Kurnool, Andhra Pradesh, India</p>
        <p className="p__opensans">+91 8978454609</p>
        {/* <p className="p__opensans">+1 212-555-1230</p> */}
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/rakesh.rachapoodi/">
          <FiFacebook /></a>
          <a href="https://www.instagram.com/i_.am_.vicky/">
          <FiInstagram /></a>
          <a href="https://github.com/rakeshrachapudi/">
          <FiGithub /></a>
          <a href="https://www.threads.net/@i_.am_.vicky?xmt=AQGzev161Q_E6lz6Z2PogizUKsLFtVWxaEi_Pym4bjttnOY">
          <FiTwitter /></a>
          <a href="https://www.linkedin.com/in/rakesh-rachapudi-4572b22b4/">
          <FiLinkedin /></a>
        </div> 
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright © 2024 RakeshRachapudi ®. All rights reserved.</p>
    </div>

  </div>
);

export default Footer;
