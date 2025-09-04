import React from 'react';
import Allstudent from '../Pages/Allstudent';
import { TiLocation } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <footer className='footerdivision'>
      <div className='footer-container'>
        {/* Left: Contact Info */}
        <div className='footer-col address'>
          <h3>CONTACT US TODAY</h3>
          <h1 className='ecoders-title'>ECODERS</h1>
          <div className='d-flex align-items-center'>
            <TiLocation size={'1.6em'} className='footer-icon' />
            <span>
              #198, 1st main Road, Kirloskar Layout Sidedahalli,<br />
              Hesarghatta Main Rd, Nagasandra, Bengaluru,<br />
              Karnataka 560073
            </span>
          </div>
          <div className='d-flex align-items-center'>
            <HiMail size={'1.6em'} className='footer-icon' />
            <span>ecoders.in@gmail.com</span>
          </div>
        </div>

        {/* Center: Quick Links */}
        <div className='footer-col links'>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/students">STUDENTS</Link></li>
          </ul>
        </div>

        {/* Right: Social Media */}
        <div className='footer-col social'>
          <h3>Find us on Social Media</h3>
          <div className='social-icons'>
            <Link to="https://www.facebook.com"><SiFacebook /></Link>
            <Link to="https://www.instagram.com/"><SiInstagram /></Link>
            <Link to="https://twitter.com/i/flow/login"><BsTwitter /></Link>
            <Link to="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></Link>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        Copyright © All rights reserved to The Thrice Trio.
      </div>
    </footer>
  );
}

export default Footer;
