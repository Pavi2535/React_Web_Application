import React from 'react';

function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* Hero Banner */}
      <div className="portfoliodivision">
        <h1 className="portfolio-hero-title">PORTFOLIO</h1>
      </div>

      {/* Project Sections */}
      <div className="portfolio-projects">

        {/* Project 1 */}
        <div className="portfolio-project-row">
          <img className="portfolio-img desktop"
             src="https://myrobin.id/wp-content/uploads/elementor/thumbs/employee-development-q26wunwmujsnkf17hef93jpd7ue9jqm607334k0gcg.webp"
             alt="project desktop"/>
          <img className="portfolio-img mobile"
             src="https://myrobin.id/wp-content/uploads/elementor/thumbs/employee-development-q26wunwmujsnkf17hef93jpd7ue9jqm607334k0gcg.webp"
             alt="project mobile"/>
          <div className="portfolio-desc">
            <h2>Clap Collaboration</h2>
            <p>
              Clap Collaboration is a team of SAFe experts who provide training and conduct regular webinars on Scaled Agile Framework (SAFe) for working professionals.
            </p>
            <a href="https://clapcollab.com/" className="portfolio-btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="portfolio-project-row reverse">
          <img className="portfolio-img mobile"
             src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/10/ayurveda.jpg"
             alt="project mobile"/>
          <img className="portfolio-img desktop"
             src="https://www.tourmyindia.com/blog/wp-content/uploads/2018/10/ayurveda.jpg"
             alt="project desktop"/>
          <div className="portfolio-desc">
            <h2>J.S.A.F</h2>
            <p>
              Jeeva Sanjeevani Ayurveda Foundation is an Ayurvedic clinic in Bangalore with years of experience treating various illnesses using ancient Ayurvedic methods.
            </p>
            <a href="http://www.jsaf.in/" className="portfolio-btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="portfolio-project-row">
          <img className="portfolio-img desktop"
             src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80"
             alt="project desktop"/>
          <img className="portfolio-img mobile"
             src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
             alt="project mobile"/>
          <div className="portfolio-desc">
            <h2>Best Arts</h2>
            <p>
              Best Arts is an interior designing company based in Bangalore focused on creating 2D and 3D designs and wood carvings for various interior designing purposes.
            </p>
            <a href="http://www.bestarts.epizy.com/?i=1" className="portfolio-btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="portfolio-project-row reverse">
          <img className="portfolio-img mobile"
             src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80"
             alt="project mobile"/>
          <img className="portfolio-img desktop"
             src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80"
             alt="project desktop"/>
          <div className="portfolio-desc">
            <h2>San Ashwa</h2>
            <p>
              SanAshwa® is a unique and powerful anti-stress herbal supplement featuring a blend of Ashwagandha and Holy Basil extract—herbs that help reduce the effects of stress.
            </p>
            <a href="https://sanashwa.com/" className="portfolio-btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="portfolio-project-row">
          <img className="portfolio-img desktop"
             src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80"
             alt="project desktop"/>
          <img className="portfolio-img mobile"
             src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80"
             alt="project mobile"/>
          <div className="portfolio-desc">
            <h2>Sandhu Herbals</h2>
            <p>
              Sandhu Herbals was established to provide customers with natural, nutritional supplements. They continue to innovate and deliver an exceptionally pure line of science-based nutrition.
            </p>
            <a href="https://www.sandhuherbals.com/" className="portfolio-btn" target="_blank" rel="noopener noreferrer">VIEW PROJECT</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
