import React from 'react';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import cntme from '../images/cntme.jpg';

function Contact() {
  return (
    <div>
      {/* Main header division */}
      <div className="contactdivision p-5 mb-10">
        <div className="text-center-underline mt-5 mb-15 p-5">
          <h1>CONTACT US</h1>
        </div>
      </div>

      {/* Contact info card centered */}
      <div className="card-center">
        <div className="contact-card">
          {/* Contact image */}
          <img src={cntme} alt="Contact visual" />

          {/* Contact details */}
          <div className="contact-details">
            <h3>GET IN TOUCH</h3>
            <h2>Contact Info</h2>

            <div className="email-row">
              <HiMail />
              <span style={{ marginLeft: 8 }}>ecoders.in@gmail.com</span>
            </div>

            <div className="social-row">
              <Link to="https://www.facebook.com" className="social-link">
                <SiFacebook />
              </Link>
              <Link to="https://twitter.com" className="social-link">
                <BsTwitter />
              </Link>
              <Link to="https://instagram.com" className="social-link">
                <SiInstagram />
              </Link>
            </div>

            <div className="phone-row">
              Phone : 080-XXXXXXXXXX
            </div>
          </div>
        </div>
      </div>

      {/* Quote section */}
      <div className="quote-section">
        <h3>
          Your positive action<br />
          combined with positive thinking<br />
          results in success.
        </h3>
      </div>
    </div>
  );
}

export default Contact;
