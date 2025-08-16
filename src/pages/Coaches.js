import React from 'react';
import './Coaches.css';
import LogoSidebars from '../components/LogoSidebars';

const Coaches = () => {
  return (
    <div className="coaches">
      <LogoSidebars />
      {/* Hero Section */}
      <section className="coaches-hero">
        <div className="container">
                     <h1>Meet Our Coaches</h1>
           <p>UEFA-certified professionals bringing European soccer excellence to Orange County</p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="coaches-grid section">
        <div className="container">
          <div className="coaches-list">
            <div className="coach-card">
              <div className="coach-image">
                <img src={`${process.env.PUBLIC_URL}/images/Cem.jpg`} alt="Coach Cem Yüksel" />
              </div>
              <div className="coach-content">
                <h3>Cem Yüksel</h3>
                <div className="coach-title">Head Coach & Technical Director</div>
                <p>Coach Cem brings European soccer expertise and a deep understanding of the German training methodology. His UEFA certification and international experience make him the perfect guide for developing elite soccer fundamentals in Orange County.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>UEFA Coaching License</li>
                    <li>German Soccer Federation Certification</li>
                    <li>International Coaching Experience</li>
                    <li>Youth Development Specialist</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Technical Skills</span>
                  <span className="specialty-tag">European Methodology</span>
                  <span className="specialty-tag">Youth Development</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src={`${process.env.PUBLIC_URL}/images/Tamim.jpg`} alt="Coach Tamim Amini" />
              </div>
              <div className="coach-content">
                <h3>Tamim Amini</h3>
                <div className="coach-title">Senior Training Coach</div>
                <p>Coach Tamim specializes in developing advanced technical skills and tactical understanding. His structured approach ensures players master both fundamental techniques and game intelligence.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>Advanced Coaching Certification</li>
                    <li>Professional Playing Experience</li>
                    <li>Tactical Training Specialist</li>
                    <li>10+ Years Coaching Experience</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Tactical Training</span>
                  <span className="specialty-tag">Advanced Skills</span>
                  <span className="specialty-tag">Game Intelligence</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src={`${process.env.PUBLIC_URL}/images/Ramon.jpg`} alt="Coach Ramon Amini" />
              </div>
              <div className="coach-content">
                <h3>Ramon Amini</h3>
                <div className="coach-title">Youth Development Coach</div>
                <p>Coach Ramon creates an engaging and fun environment for younger players while building essential soccer skills and confidence. His approach ensures kids develop a love for the game from an early age.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>Youth Coaching Certification</li>
                    <li>Early Childhood Sports Education</li>
                    <li>Player Psychology Training</li>
                    <li>8+ Years Youth Coaching</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Ages 4-12</span>
                  <span className="specialty-tag">Fun Development</span>
                  <span className="specialty-tag">Confidence Building</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src={`${process.env.PUBLIC_URL}/images/Leiss.jpg`} alt="Coach Leiss Amini" />
              </div>
              <div className="coach-content">
                <h3>Leiss Amini</h3>
                <div className="coach-title">Skills & Conditioning Coach</div>
                <p>Coach Leiss focuses on developing players' physical capabilities and technical skills through specialized training programs. His expertise in conditioning helps players reach their full athletic potential.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>Strength & Conditioning Certification</li>
                    <li>Technical Skills Specialist</li>
                    <li>Injury Prevention Training</li>
                    <li>6+ Years Training Experience</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Physical Conditioning</span>
                  <span className="specialty-tag">Technical Skills</span>
                  <span className="specialty-tag">Injury Prevention</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="coaching-philosophy section">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Our German Soccer School Philosophy</h2>
                             <p>At GSS, we follow the proven German methodology that has produced world-class players. Our comprehensive approach develops complete soccer athletes through:</p>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <h3>Technical Excellence</h3>
                                     <p>Building rock-solid fundamentals and advanced techniques through progressive, structured training programs.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Tactical Understanding</h3>
                                     <p>Teaching players to read the game, make smart decisions, and understand tactical positioning.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Physical Development</h3>
                                     <p>Developing soccer-specific fitness: speed, agility, endurance, and explosive power for peak performance.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Mental Toughness</h3>
                                     <p>Building mental toughness, confidence, and the competitive spirit needed to succeed at every level.</p>
                </div>
              </div>
            </div>
                         <div className="philosophy-image">
               <img src={`${process.env.PUBLIC_URL}/images/julio-pacheco-Pe3XvUYCZAQ-unsplash.jpg`} alt="Coaching Philosophy - Coach working with young players" />
             </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Coaches */}
      <section className="why-choose-coaches section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Coaches?</h2>
          <div className="reasons-grid">
            <div className="reason">
              <div className="reason-icon">🎓</div>
                             <h3>UEFA Certified</h3>
               <p>Our coaches hold professional licenses and certifications from recognized European soccer organizations.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">❤️</div>
              <h3>Passionate About Youth</h3>
              <p>Our coaches genuinely care about each player's development and success both on and off the field.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">📈</div>
                             <h3>Proven Results</h3>
               <p>Track record of developing players who excel at club, high school, college, and professional levels.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">🤝</div>
              <h3>Great Communication</h3>
              <p>Regular feedback and open communication with parents about player progress and development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="coaches-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Train the German Way?</h2>
                         <p>Book a session with our UEFA-certified coaching team and experience the world-class training that has produced European champions.</p>
            <a href="https://docs.google.com/forms/d/1TfOOKB2NfErY2DAALDHZEL9XfHyeTiDpbBSlDIp5tL0/viewform" className="cta-button" target="_blank" rel="noopener noreferrer">Book Your Training Session</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaches; 