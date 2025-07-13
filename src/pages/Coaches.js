import React from 'react';
import './Coaches.css';

const Coaches = () => {
  return (
    <div className="coaches">
      {/* Hero Section */}
      <section className="coaches-hero">
        <div className="container">
          <h1>Meet Our Coaches</h1>
          <p>Highly qualified and experienced trainers dedicated to developing young athletes</p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="coaches-grid section">
        <div className="container">
          <div className="coaches-list">
            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-miles.jpg" alt="Coach Miles" />
              </div>
              <div className="coach-content">
                <h3>Coach Miles</h3>
                <div className="coach-title">Head Coach & Founder</div>
                <p>With over 15 years of coaching experience, Coach Miles has developed a proven methodology for training young athletes. His passion for the game and dedication to player development has made him one of the most respected coaches in Orange County.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>USSF A License</li>
                    <li>Former Professional Player</li>
                    <li>Youth Development Specialist</li>
                    <li>15+ Years Coaching Experience</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Technical Skills</span>
                  <span className="specialty-tag">Tactical Training</span>
                  <span className="specialty-tag">Youth Development</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-edgar.jpg" alt="Coach Edgar" />
              </div>
              <div className="coach-content">
                <h3>Coach Edgar</h3>
                <div className="coach-title">Senior Trainer</div>
                <p>Coach Edgar brings energy and enthusiasm to every session. His ability to connect with players of all ages and skill levels has made him a favorite among our families. He specializes in developing technical skills and building confidence.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>USSF B License</li>
                    <li>College Soccer Experience</li>
                    <li>Youth Coaching Certification</li>
                    <li>10+ Years Training Experience</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Ball Control</span>
                  <span className="specialty-tag">Shooting</span>
                  <span className="specialty-tag">Confidence Building</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-jose.jpg" alt="Coach Jose" />
              </div>
              <div className="coach-content">
                <h3>Coach Jose</h3>
                <div className="coach-title">Technical Trainer</div>
                <p>Coach Jose's attention to detail and technical expertise has helped countless players improve their game. His structured approach to training ensures that every player develops proper fundamentals and advanced skills.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>USSF C License</li>
                    <li>Former College Player</li>
                    <li>Technical Skills Specialist</li>
                    <li>8+ Years Coaching Experience</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Passing</span>
                  <span className="specialty-tag">Dribbling</span>
                  <span className="specialty-tag">Game Intelligence</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-sarah.jpg" alt="Coach Sarah" />
              </div>
              <div className="coach-content">
                <h3>Coach Sarah</h3>
                <div className="coach-title">Youth Development Coach</div>
                <p>Coach Sarah specializes in working with younger players, creating a fun and engaging environment where kids can develop their love for the game while building essential skills and confidence.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>USSF D License</li>
                    <li>Early Childhood Education</li>
                    <li>Youth Sports Psychology</li>
                    <li>5+ Years Youth Coaching</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Ages 4-8</span>
                  <span className="specialty-tag">Fun Development</span>
                  <span className="specialty-tag">Confidence Building</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-mike.jpg" alt="Coach Mike" />
              </div>
              <div className="coach-content">
                <h3>Coach Mike</h3>
                <div className="coach-title">Fitness & Conditioning Coach</div>
                <p>Coach Mike focuses on developing athletes' physical capabilities through soccer-specific training. His programs improve speed, agility, endurance, and overall athletic performance.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>Strength & Conditioning Certification</li>
                    <li>Sports Science Degree</li>
                    <li>Injury Prevention Specialist</li>
                    <li>7+ Years Fitness Training</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Speed Training</span>
                  <span className="specialty-tag">Agility</span>
                  <span className="specialty-tag">Injury Prevention</span>
                </div>
              </div>
            </div>

            <div className="coach-card">
              <div className="coach-image">
                <img src="/images/coach-lisa.jpg" alt="Coach Lisa" />
              </div>
              <div className="coach-content">
                <h3>Coach Lisa</h3>
                <div className="coach-title">Goalkeeper Specialist</div>
                <p>Coach Lisa is our dedicated goalkeeper trainer, bringing specialized knowledge and techniques to develop the unique skills required for this crucial position on the field.</p>
                <div className="coach-credentials">
                  <h4>Credentials:</h4>
                  <ul>
                    <li>Goalkeeper Coaching License</li>
                    <li>Former College Goalkeeper</li>
                    <li>Goalkeeper Psychology Training</li>
                    <li>6+ Years Goalkeeper Coaching</li>
                  </ul>
                </div>
                <div className="coach-specialties">
                  <h4>Specialties:</h4>
                  <span className="specialty-tag">Goalkeeper Training</span>
                  <span className="specialty-tag">Shot Stopping</span>
                  <span className="specialty-tag">Distribution</span>
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
              <h2>Our Coaching Philosophy</h2>
              <p>At GSS, we believe in developing complete soccer players through a comprehensive approach that focuses on:</p>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <h3>Technical Excellence</h3>
                  <p>Mastering fundamental skills and advanced techniques through structured training programs.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Tactical Understanding</h3>
                  <p>Developing game intelligence and decision-making abilities on and off the ball.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Physical Development</h3>
                  <p>Building strength, speed, agility, and endurance through soccer-specific conditioning.</p>
                </div>
                <div className="philosophy-point">
                  <h3>Mental Toughness</h3>
                  <p>Cultivating confidence, resilience, and a winning mindset in every player.</p>
                </div>
              </div>
            </div>
            <div className="philosophy-image">
              <img src="/images/coaching-philosophy.jpg" alt="Coaching Philosophy" />
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
              <h3>Highly Qualified</h3>
              <p>All coaches hold professional licenses and certifications from recognized soccer organizations.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">❤️</div>
              <h3>Passionate About Youth</h3>
              <p>Our coaches genuinely care about each player's development and success both on and off the field.</p>
            </div>
            <div className="reason">
              <div className="reason-icon">📈</div>
              <h3>Proven Results</h3>
              <p>Track record of developing players who excel at club, high school, and college levels.</p>
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
            <h2>Ready to Train with Our Expert Coaches?</h2>
            <p>Book a session with one of our qualified coaches and see the difference professional training can make in your athlete's development.</p>
            <a href="/book" className="btn btn-primary">Book Your Training Session</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coaches; 