import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const logoContainers = document.querySelectorAll('.scrolling-logo-container');
      
      logoContainers.forEach((container) => {
        // Both logos move cleanly with scroll direction
        const speed = 0.05; // Very subtle, clean movement
        const yPos = scrollY * speed;
        container.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">

      
      {/* Left GSS Logo Sidebar */}
      <div className="logo-sidebar left-logo-sidebar">
        <div className="scrolling-logo-container">
          <img src={`${process.env.PUBLIC_URL}/images/gsslogo.webp`} alt="GSS Logo" className="scrolling-logo" />
        </div>
      </div>
      
      {/* Right GSS Logo Sidebar */}
      <div className="logo-sidebar right-logo-sidebar">
        <div className="scrolling-logo-container">
          <img src={`${process.env.PUBLIC_URL}/images/gsslogo.webp`} alt="GSS Logo" className="scrolling-logo" />
        </div>
      </div>
      
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Train the German Way — in Orange County</h1>
              <p>Elite soccer fundamentals with European structure, led by a UEFA-certified coach. First session is FREE.</p>
              <a href="#signup" className="cta-button">Claim Your Free Session</a>
            </div>
            <div className="hero-image">
              <img 
                src={`${process.env.PUBLIC_URL}/images/alliance-football-club-TPF963E7G88-unsplash.jpg`} 
                alt="Youth soccer training session with coach and players on field" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="text-center mb-5">It's as easy as 1, 2, 3!</p>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Select A Program</h3>
              <p>Choose a program that works best for you and your athlete.</p>
              <div className="step-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/pexels-laura-rincon-318039951-16304162.jpg`} 
                  alt="Soccer training equipment and gear selection" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Book Online</h3>
              <p>Pick a day that works best for you directly on our website.</p>
              <div className="step-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/pexels-kampus-8941567.jpg`} 
                  alt="Small group soccer scrimmage on training field" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Watch Your Athlete Progress</h3>
              <p>Stand by as a proud parent as your athlete becomes better every session.</p>
              <div className="step-image">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/pexels-kampus-8941650.jpg`} 
                  alt="Goalkeeper training drill focusing on positioning and reflexes" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Train With Us Section */}
      <section className="why-train section">
        <div className="container">
          <div className="why-train-content">
            <div className="why-train-text">
              <h2>Why Train With Us?</h2>
              <p>We strive to provide you with the best service in Orange County. Our mission is to make your athlete better by giving them the training they deserve. All of our Trainers come with a 100% satisfaction guarantee. If you are still not convinced, read some of our reviews below.</p>
              <a href="/book" className="btn btn-primary">Book a Session</a>
            </div>
            <div className="why-train-image">
              <img 
                src={`${process.env.PUBLIC_URL}/images/kenny-eliason-otYC4eoGJGg-unsplash.jpg`} 
                alt="Soccer players practicing footwork drills with cones and training equipment" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology section">
        <div className="container">
          <div className="methodology-content">
            <div className="methodology-image">
              <img 
                src={`${process.env.PUBLIC_URL}/images/aleksandar-andreev-ZLFcqm26mgI-unsplash.jpg`} 
                alt="Coach providing personalized feedback during youth soccer training session" 
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                loading="lazy"
              />
            </div>
            <div className="methodology-text">
              <h2>OUR METHODOLOGY</h2>
              <p>Our proven training methodology focuses on developing complete soccer players through personalized coaching, technical skill development, tactical understanding, and physical conditioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Gallery Section */}
      <section className="training-gallery section">
        <div className="container">
          <h2 className="section-title">Training in Action</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src={`${process.env.PUBLIC_URL}/images/james-lee-0axqBrI8Or4-unsplash.jpg`} 
                alt="Youth soccer players practicing dribbling drills" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={`${process.env.PUBLIC_URL}/images/kenny-eliason-AvcBDbR-LWc-unsplash.jpg`} 
                alt="Soccer training session with focus on ball control" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                loading="lazy"
              />
            </div>
            <div className="gallery-item">
              <img 
                src={`${process.env.PUBLIC_URL}/images/debra-brewster-XRlGy3N-REw-unsplash.jpg`} 
                alt="Young soccer player practicing shooting technique" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Still Have Questions?</h2>
              <p>Reach out to us and a dedicated person from our team will help answer all of your questions!</p>
              <p>Email us at <a href="mailto:info@premier-soccertraining.com">info@premier-soccertraining.com</a> or call us at <a href="tel:949.537.6465">949.537.6465</a>.</p>
              <a href="/book" className="btn btn-primary">BOOK YOUR SESSION</a>
            </div>
            <div className="contact-form">
              <h3>CONTACT US HERE</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Parents First Name" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Parents Last Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 