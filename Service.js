import React from 'react';


function Service() {
  return (
    <div className="service-page">

      {/* Hero Section */}
      <div className="servicedivision">
        <h1 className="service-hero-title">SERVICES</h1>
      </div>

      {/* Intro Section */}
      <section className="service-main-section">
        <div className="service-columns">
          <img
            className="service-main-img"
            src="https://img.freepik.com/premium-photo/composition-businesswoman-wearing-vr-headset-touching-interactive-screen_1134-8330.jpg?w=3600"
            alt="Services"
          />
          <div className="service-intro-content">
            <span className="service-label">SERVICES OFFERED BY ECODERS</span>
            <h2 className="service-title">Enable a return to profitability</h2>
            <p>
              We offer some of the best services that you can find in the market for some of the most affordable prices to suit your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="service-services-section">
        <div className="service-services-heading">
          <span className="service-label">100% SATISFACTION GUARANTEED!</span>
          <h1>Our Services</h1>
        </div>
        <div className="service-cards-row">
          <div className="service-card">
            <h1>Website Design</h1>
            <p>We have a team of experts who specialise in creating unique and eye-catching website designs.</p>
            <img
              className="service-img"
              src="https://tse2.mm.bing.net/th/id/OIP.UtGvZJHUxOf0Sl3Lfu2r-AHaEL?pid=Api&P=0&h=180"
              alt="Website Design"
            />
          </div>
          <div className="service-card">
            <h1>Application Development</h1>
            <p>We also develop applications for various different types of needs such as e-commerce, data science, machine learning and so on.</p>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80"
              alt="Application Development"
            />
          </div>
        </div>
        <div className="service-cards-row">
          <div className="service-card">
            <h1>Search Engine Optimisation</h1>
            <p>We provide digital marketing services such as graphic design and Search Engine Optimisation (SEO).</p>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80"
              alt="SEO"
            />
          </div>
          <div className="service-card">
            <h1>E-Commerce Websites</h1>
            <p>We build professional e-commerce websites with payment gateways tailored to your online-selling needs.</p>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80"
              alt="E-Commerce"
            />
          </div>
        </div>
        <div className="service-cards-row">
          <div className="service-card">
            <h1>Website Maintenance</h1>
            <p>We provide 24/7 support, technical and non-technical. We also offer security services to keep your websites fully secure from threats!</p>
            <img
              className="service-img"
              src="https://tse1.mm.bing.net/th/id/OIP.IhGijgoVTEs0_4rPuUXboQHaE8?pid=Api&P=0&h=180"
              alt="Maintenance"
            />
          </div>
          <div className="service-card">
            <h1>Website Hosting Services</h1>
            <p>Your websites are hosted on super-fast secure servers—secure from attacks and always up and running!</p>
            <img
              className="service-img"
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80"
              alt="Hosting"
            />
          </div>
        </div>
      </section>

      {/* Unique/Feedback Section */}
      <section className="service-feedback-section">
        <span className="service-label">WHAT MAKES US UNIQUE</span>
        <h1 className="service-feedback-title">Take a Look</h1>
        <div className="service-feedback-content">
          {/* Progress bars */}
          <div className="service-feedback-bars">
            <h2>CUSTOMER SATISFACTION AND FEEDBACK</h2>
            <div className="service-bar-group">
              <label>Website Design</label>
              <div className="progress"><div className="progress-bar" style={{ width: '100%' }}>100</div></div>
            </div>
            <div className="service-bar-group">
              <label>Website Security</label>
              <div className="progress"><div className="progress-bar" style={{ width: '98%' }}>98</div></div>
            </div>
            <div className="service-bar-group">
              <label>Website Maintenance</label>
              <div className="progress"><div className="progress-bar" style={{ width: '98%' }}>98</div></div>
            </div>
            <div className="service-bar-group">
              <label>Website Speeds</label>
              <div className="progress"><div className="progress-bar" style={{ width: '90%' }}>90</div></div>
            </div>
            <div className="service-bar-group">
              <label>Search Engine Optimization</label>
              <div className="progress"><div className="progress-bar" style={{ width: '90%' }}>90</div></div>
            </div>
            <div className="service-bar-group">
              <label>Overall Satisfaction</label>
              <div className="progress"><div className="progress-bar" style={{ width: '95%' }}>95</div></div>
            </div>
          </div>
          {/* Unique points list */}
          <ul className="service-unique-list">
            <li>Some of the highest quality and unique designs in the market.</li>
            <li>24/7 support ensures a fully functional application at all times.</li>
            <li>Websites & apps built with security in mind; we use only original themes/plugins, others use cracked/nulled ones.</li>
            <li>Affordable pricing compared to other companies charging exorbitant fees for basic designs.</li>
            <li>Experienced professionals in software and IT industries.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Service;
