import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import logo from './logo.png';
import sivaImg from './Siva.png';

const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const teamMembers = [
    {
      id: 1,
      name: 'Sivasubramaniam N',
      position: 'Founder & Managing Director',
      experience: 'For over 15 years, I honed my financial expertise in the dynamic banking and investment banking sectors of the UAE,',
      specialization: 'Investment Strategy & Wealth Management',
      description: 'Nine years ago, I brought that global experience and strategic insight back to India, where I established Veehul Finserve to address the unique financial needs of Indian families and businesses. Our mission is to combine international best practices with a deep understanding of the local landscape, offering you a partner who truly understands your financial journey.',
      image: sivaImg
    },

  ];

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Veehul investment and financial services was established to provide comprehensive financial solutions to clients.'
    },
    {
      year: '2020',
      title: '100+ Clients Milestone',
      description: 'Reached our first major milestone of serving 100+ satisfied clients with comprehensive financial solutions.'
    },
    {
      year: '2024',
      title: 'Cleared PMS Certifications',
      description: 'NISM-XXI_A-Portfolio Management Services(PMS) Distributors Certification',
    },
    {
      year: '2025',
      title: 'Expansion Plans',
      description: 'Converted Proprietorship to LLP for enhanced credibility and service offerings.'
    }
    ,
    {
      year: '2025',
      title: 'Cleared Common Derivatives Certification to Distribute SIF Products',
      description: 'NISM-Series-XIII: Common Derivatives Certification Examination cleared to start distributing SIF products. Specialized Investment Fund (SIF) is a newly introduced investment option in India.'
    }

  ];

  return (
    <div className="about-container">
      {/* Header */}
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <img src={logo} alt="Veehul Finserve LLP" className="logo-image" />
              </div>
              <span className="logo-text">Veehul Finserve LLP</span>
            </div>

            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link active">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/calculators" className="nav-link">Calculators</Link>
              {/* {/* <Link to="/blog" className="nav-link">Blog</Link> */}
              <Link to="/faq" className="nav-link">FAQs</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
              {/* <Link to="/login" className="nav-link login-btn">LOGIN</Link> */}
            </nav>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section 
      <section className="about-hero">
        Background Animation 
        <div className="hero-bg-animation">
          <div className="floating-elements">
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
            <div className="growth-line"></div>
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <h1>About <span className="highlight">Veehul Finserve LLP</span></h1>
            <p>Building financial success stories for over 9 years. We are your trusted partners in creating wealth, securing futures, and achieving financial freedom through expert guidance and innovative solutions.</p>
            <div className="hero-achievement">
              <div className="achievement-item">
                <div className="achievement-number">9+</div>
                <div className="achievement-label">Years of Excellence</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">100+</div>
                <div className="achievement-label">Lives Transformed</div>
              </div>
              <div className="achievement-item">
                <div className="achievement-number">₹25 Cr+</div>
                <div className="achievement-label">Wealth Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our <span className="highlight">Story</span></h2>
              <p>Founded in 2016 with a vision to make comprehensive financial planning
                accessible to every Indian family. What started as a small advisory firm in Trichirappalli
                has grown into a trusted financial partner for hundreds of residential Indians and NRIs clients spread across the many countries</p>

              <p>We know your financial journey is driven by your unique dreams and aspirations. That's why we don't just focus on the numbers. By combining time-tested investment wisdom with innovative digital tools, we offer comprehensive solutions tailored to you. From basic insurance to advanced investment strategies, our holistic approach gives you the peace of mind that your financial future is in expert hands.</p>

            </div>

            <div className="story-visual">
              <div className="timeline-preview">
                <div className="timeline-line"></div>
                <div className="timeline-dot active"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
                <div className="timeline-dot"></div>
              </div>
              <div className="growth-stats">
                <div className="stat-circle">
                  <div className="stat-value">99%</div>
                  <div className="stat-desc">Client Satisfaction</div>
                </div>
                <div className="stat-circle">
                  <div className="stat-value">100%</div>
                  <div className="stat-desc">Client Centricity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card vision">
              <div className="mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>To be the regions most progressive investment service firm enabling innovative financial solutions for all.</p>
            </div>

            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <ul>
                <li align="left">Deliver superior client experience</li>
                <li align="left">Lead with innovative solutions and technology</li>
                <li align="left">Foster a culture of continuous improvement and learning</li>
                <li align="left">Empower our clients through education and support</li>
                <li align="left">Build a strong team of experts</li>
              </ul>
            </div>

            <div className="mv-card values">
              <div className="mv-icon">💎</div>
              <h3>Our Values</h3>
              <p>We are committed to upholding the highest standards of integrity, professionalism, and excellence in all that we do.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our <span className="highlight">Founder</span></h2>
          <p className="team-intro">Our success is driven by a team of dedicated financial professionals who bring decades of combined experience and unwavering commitment to your financial growth.</p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image"><img src={member.image} alt={member.name} className="team-image" /></div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <div className="team-position">{member.position}</div>
                  <div className="team-experience">{member.experience} Experience</div>
                  <div className="team-specialization">{member.specialization}</div>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title">Our <span className="highlight">Journey</span></h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition 
      <section className="awards-section">
        <div className="container">
          <h2 className="section-title">Awards & <span className="highlight">Recognition</span></h2>
          <div className="awards-grid">
            <div className="award-item">
              <div className="award-icon">🏆</div>
              <h3>Best Financial Advisory Firm 2023</h3>
              <p>Regional Finance Awards</p>
            </div>
            <div className="award-item">
              <div className="award-icon">⭐</div>
              <h3>Excellence in Client Service</h3>
              <p>Tamil Nadu Business Excellence Awards</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🎖️</div>
              <h3>Top Performing Advisor</h3>
              <p>Mutual Fund Industry Recognition</p>
            </div>
            <div className="award-item">
              <div className="award-icon">🌟</div>
              <h3>Innovation in Financial Planning</h3>
              <p>FinTech Innovation Awards</p>
            </div>
          </div>
        </div>
      </section>
*/}
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
           {/*<h2>Ready to Start Your Success Story?</h2>
            <p>Join hundreds of satisfied clients who have transformed their financial lives with our expert guidance. Your journey to financial freedom starts with a single consultation.</p>
            */}
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary">Schedule Free Consultation</Link>
              <Link to="/services" className="cta-secondary">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="logo">
                <div className="logo-icon">
                  <img src={logo} alt="Veehul Finserve LLP" className="logo-image" />
                </div>
                <span className="logo-text">Veehul Finserve LLP</span>
              </div>
              <p>Building wealth, growing futures. Your trusted partner in financial success.</p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h4>Services</h4>
                <Link to="/services">Investment Planning</Link>
                <Link to="/services">Loan Services</Link>
                <Link to="/services">Insurance</Link>
                <Link to="/services">Tax Planning</Link>
              </div>
              <div className="link-group">
                <h4>Company</h4>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
               {/*  <Link to="/blog">Blog</Link> */}
                <Link to="/faq">FAQ</Link>
              </div>
              <div className="link-group">
                <h4>Tools</h4>
                <Link to="/calculators">SIP Calculator</Link>
                <Link to="/calculators">EMI Calculator</Link>
                <Link to="/calculators">Tax Calculator</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Veehul Finserve LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;