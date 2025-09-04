import React from 'react';
import { TiTick } from 'react-icons/ti';

function About() {
  return (
    <div className="about-main">

      {/* Fixed background hero/banner */}
      <div className="about-hero">
        <h1 className="about-hero-title">ABOUT US</h1>
      </div>

      {/* Main content section (text + image) */}
      <section className="about-section">
        <div className="about-img-container">
          <img
            className="about-img"
            src="https://monicamoni.netlify.app/static/media/a5.4677be7470d03f2b0cca.webp"
            alt="About Section"
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">We take care of all Your website needs</h2>
          <p>
            We are a Bangalore based software development company.<br />
            We have worked on many projects for entrepreneurs and businesses in and around our city. Our services have helped them grow their business exponentially by reaching the right targeted customers that they are looking for.
          </p>
          <ul className="about-list">
            <li><TiTick /> 24/7 Tech Support</li>
            <li><TiTick /> Superfast Hosting Servers</li>
            <li><TiTick /> Unique Website Designs That Stand Out</li>
          </ul>
        </div>
      </section>

      {/* Stats and Mission section */}
      <section className="about-stats-mission">
        <div className="about-stats">
          <div>
            <span className="stats-label">LEADING INNOVATION</span>
            <h3 className="stats-title">Founded in 2019</h3>
            <p>
              We are experts in UI designing and development. We do our best to develop the best User Interfaces for our customers. We also provide free technical support for one year after the product has been released to our customer.
            </p>
          </div>
          <div className="about-numbers">
            <div>
              <span className="stat-number">10+</span>
              <div className="stat-label">Project Finished</div>
            </div>
            <div>
              <span className="stat-number">10+</span>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
        <div className="about-mission-card">
          <span className="mission-label">LEADING INNOVATION</span>
          <h4 className="mission-title">Our Mission</h4>
          <p>
            The company’s main objective is to provide software support and innovative website ideas to help businesses reach their audience in a far more efficient way.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
