import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p>Comprehensive soccer training programs designed for every skill level</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid section">
        <div className="container">
          <div className="programs-list">
            <div className="program-card">
              <div className="program-image">
                <img src="/images/private-training.jpg" alt="Private Training" />
              </div>
              <div className="program-content">
                <h3>Private Training</h3>
                <p>One-on-one personalized coaching sessions tailored to your athlete's specific needs and goals.</p>
                <ul>
                  <li>Individual attention and focus</li>
                  <li>Customized training plans</li>
                  <li>Flexible scheduling</li>
                  <li>Progress tracking</li>
                </ul>
                <a href="/book" className="btn btn-primary">Book Private Session</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/images/group-training.jpg" alt="Group Training" />
              </div>
              <div className="program-content">
                <h3>Group Training</h3>
                <p>Small group sessions that combine individual skill development with team dynamics.</p>
                <ul>
                  <li>Small group sizes (3-6 players)</li>
                  <li>Team building exercises</li>
                  <li>Competitive environment</li>
                  <li>Cost-effective option</li>
                </ul>
                <a href="/book" className="btn btn-primary">Join Group Session</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/images/camps.jpg" alt="Soccer Camps" />
              </div>
              <div className="program-content">
                <h3>Soccer Camps</h3>
                <p>Intensive training camps during school breaks and summer months.</p>
                <ul>
                  <li>Full-day and half-day options</li>
                  <li>Comprehensive skill development</li>
                  <li>Fun and engaging activities</li>
                  <li>Professional coaching staff</li>
                </ul>
                <a href="/book" className="btn btn-primary">Register for Camp</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/images/team-training.jpg" alt="Team Training" />
              </div>
              <div className="program-content">
                <h3>Team Training</h3>
                <p>Specialized training for entire teams looking to improve their collective performance.</p>
                <ul>
                  <li>Tactical development</li>
                  <li>Team chemistry building</li>
                  <li>Position-specific training</li>
                  <li>Game strategy sessions</li>
                </ul>
                <a href="/book" className="btn btn-primary">Schedule Team Training</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/images/technical-skills.jpg" alt="Technical Skills" />
              </div>
              <div className="program-content">
                <h3>Technical Skills Development</h3>
                <p>Focus on mastering fundamental soccer techniques and advanced skills.</p>
                <ul>
                  <li>Ball control and dribbling</li>
                  <li>Passing and receiving</li>
                  <li>Shooting and finishing</li>
                  <li>Defensive techniques</li>
                </ul>
                <a href="/book" className="btn btn-primary">Enroll in Skills Program</a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-image">
                <img src="/images/fitness-training.jpg" alt="Fitness Training" />
              </div>
              <div className="program-content">
                <h3>Fitness & Conditioning</h3>
                <p>Soccer-specific fitness training to improve speed, agility, and endurance.</p>
                <ul>
                  <li>Speed and agility training</li>
                  <li>Endurance building</li>
                  <li>Strength development</li>
                  <li>Injury prevention</li>
                </ul>
                <a href="/book" className="btn btn-primary">Start Fitness Program</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="program-benefits section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Programs?</h2>
          <div className="benefits-grid">
            <div className="benefit">
              <h3>Expert Coaches</h3>
              <p>All our trainers are highly qualified with extensive playing and coaching experience.</p>
            </div>
            <div className="benefit">
              <h3>Personalized Approach</h3>
              <p>Every program is tailored to meet the individual needs and goals of each athlete.</p>
            </div>
            <div className="benefit">
              <h3>Proven Results</h3>
              <p>Our training methods have helped countless players reach their full potential.</p>
            </div>
            <div className="benefit">
              <h3>Flexible Scheduling</h3>
              <p>We offer convenient scheduling options to fit your busy lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Book your first session today and see the difference GSS can make in your athlete's development.</p>
            <a href="/book" className="btn btn-primary">Book Your Session Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs; 