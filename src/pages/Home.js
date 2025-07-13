import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>PREMIER SOCCER TRAINING</h1>
              <p>Orange County based private soccer coaching, designed to equip kids to reach the highest levels in the game.</p>
              <div className="hero-features">
                <ul>
                  <li>All trainers are highly qualified</li>
                  <li>Our programs are tailored to your players training needs</li>
                  <li>An ever innovating program</li>
                  <li>Great communication and development feedback</li>
                  <li>Injury preventative training</li>
                  <li>Reliable and friendly trainers</li>
                </ul>
              </div>
              <a href="/book" className="btn btn-primary">Book Your Session</a>
            </div>
            <div className="hero-image">
              <img src="/images/8C6A8374.jpg" alt="Soccer Training" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="text-center mb-5">It's as easy as 1, 2, 3!</p>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Select A Program</h3>
              <p>Choose a program that works best for you and your athlete.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Book Online</h3>
              <p>Pick a day that works best for you directly on our website.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Watch Your Athlete Progress</h3>
              <p>Stand by as a proud parent as your athlete becomes better every session.</p>
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
              <img src="/images/hand-670-copy.jpg" alt="Soccer Training" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features section">
        <div className="container">
          <div className="features-grid">
            <div className="feature">
              <h3>Saves You Time</h3>
              <p>Convenient scheduling and flexible training options.</p>
            </div>
            <div className="feature">
              <h3>Only The Best Trainers</h3>
              <p>Highly qualified and experienced coaching staff.</p>
            </div>
            <div className="feature">
              <h3>Cash-Free Payments</h3>
              <p>Secure online payment processing.</p>
            </div>
            <div className="feature">
              <h3>Effortless Rescheduling</h3>
              <p>Easy session management and rescheduling.</p>
            </div>
            <div className="feature">
              <h3>Health & Safety</h3>
              <p>Prioritizing player safety and well-being.</p>
            </div>
            <div className="feature">
              <h3>Best Customer Service</h3>
              <p>Dedicated support for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"My daughter has already learned so much from her 3 one on one sessions with Coach Miles. Looking forward to a full week of camp next week with all the amazing coaches."</p>
                <div className="testimonial-author">
                  <strong>Vickie Y.</strong>
                  <span>Rancho Santa Margarita, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"My 12 year old is on another level now because of Coach Edgar! I love how he makes every session impactful to my son's needs."</p>
                <div className="testimonial-author">
                  <strong>Alan A.</strong>
                  <span>Irvine, CA</span>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Both my daughter and my son have seen such a big change in their abilities. They are also getting more playing time in their games because of Coach Jose."</p>
                <div className="testimonial-author">
                  <strong>Tyler C.</strong>
                  <span>Lake Forest, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology section">
        <div className="container">
          <div className="methodology-content">
            <div className="methodology-image">
              <img src="/images/Premier-Team.jpg" alt="Premier Team" />
            </div>
            <div className="methodology-text">
              <h2>OUR METHODOLOGY</h2>
              <p>Our proven training methodology focuses on developing complete soccer players through personalized coaching, technical skill development, tactical understanding, and physical conditioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Still Have Questions?</h2>
              <p>Reach out to us and a dedicated person from our team will help answer all of your questions!</p>
              <p>Email us at <a href="mailto:info@premier-soccertraining.com">info@premier-soccertraining.com</a> or call us at <a href="tel:949.235.8720">949.235.8720</a>.</p>
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