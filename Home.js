import React from "react";
import { Link } from "react-router-dom";
import ecoders_logo from "../images/ecoders_logo.png"; // update the path if needed
import about from "../images/about.jpg";     // your about/hero side image
import proj1 from "../images/proj1.jpg";              // your project screenshots
import proj2 from "../images/proj2.jpg";
import proj3 from "../images/proj3.jpg";
import { MdDiamond } from "react-icons/md";
import { TbTool } from "react-icons/tb";
import { SiCircleci } from "react-icons/si";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <img src={ecoders_logo} alt="Ecoders Logo" className="hero-logo" />
        <h1 className="hero-title">ECODERS</h1>
        <h2 className="hero-subtitle">SOFTWARE DEVELOPMENT COMPANY</h2>
        <div className="hero-buttons">
          <Link to="/portfolio" className="hero-btn hero-btn-outline">
            OUR PROJECTS
          </Link>
          <Link to="/contact" className="hero-btn hero-btn-filled">
            CONTACT US
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-content">
          <span className="about-label">ABOUT ECODERS</span>
          <h2 className="about-title">Who Are We?</h2>
          <p>
            We are a Bangalore based software development and training company. We develop websites, web applications, e-commerce sites and many other applications for businesses and entrepreneurs. We also provide digital marketing services as well as web hosting services.
          </p>
        </div>
        <div className="about-image-box">
          <img src={about} alt="About Section" className="about-image" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="section-content">
          <span className="services-label">AWESOME SERVICES</span>
          <h1 className="services-title">What we offer</h1>
          <div className="services-grid">
            <div className="service-card">
              <MdDiamond size={38} color="#17d1fa" />
              <h3>Website Design And Development</h3>
              <p>
                We have a team of experts who specialise in creating unique and eye-catching website designs.
              </p>
            </div>
            <div className="service-card">
              <TbTool size={38} color="#17d1fa" />
              <h3>Application Development</h3>
              <p>
                We also develop applications for various different types of needs such as e-commerce, data science, machine learning and so on.
              </p>
            </div>
            <div className="service-card">
              <SiCircleci size={38} color="#17d1fa" />
              <h3>Search Engine Optimisation</h3>
              <p>
                We provide digital marketing services such as graphic design and Search Engine Optimisation (SEO).
              </p>
            </div>
            <div className="service-card">
              <MdDiamond size={38} color="#17d1fa" />
              <h3>Website Maintenance</h3>
              <p>
                Additionally, we provide 24/7 support to all our customers related to technical or non-technical queries. We also offer additional security services to make sure your applications/websites are fully secure from threats!
              </p>
            </div>
            <div className="service-card">
              <TbTool size={38} color="#17d1fa" />
              <h3>E-Commerce Websites</h3>
              <p>
                We can build professional looking e-commerce websites with payment gateways tailored to suit all your online-selling needs.
              </p>
            </div>
            <div className="service-card">
              <SiCircleci size={38} color="#17d1fa" />
              <h3>Free Support</h3>
              <p>
                24/7 service and support to ensure you have no problem with any of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="leader-section">
        <div className="leader-img-box">
          <img src={about} alt="industry leader" className="leader-img" />
        </div>
        <div className="leader-quote">
          <h3>Get the best solutions from the industry leaders</h3>
          <p>
            The company’s main objective is to provide software support and innovative website ideas to help businesses reach their audience in a far more efficient way.
          </p>
          <p className="leader-sign">Manita Rai <br /> -Founder</p>
          <Link to="/about" className="hero-btn hero-btn-outline" style={{ marginTop: '12px', display: 'inline-block' }}>MORE ABOUT US</Link>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section">
        <h1 className="projects-title">OUR PROJECTS</h1>
        <p className="projects-label">AWESOME PRODUCTS</p>
        <div className="projects-grid">
          <div className="project-card"><img src={proj1} alt="Project 1" /></div>
          <div className="project-card"><img src={proj2} alt="Project 2" /></div>
          <div className="project-card"><img src={proj3} alt="Project 3" /></div>
        </div>
        <Link to="/portfolio" className="hero-btn hero-btn-outline" style={{ marginTop: '28px' }}>
          VIEW PROJECTS
        </Link>
      </section>
    </>
  );
}

export default Home;
