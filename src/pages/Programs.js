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
                <h3>Private Training ($150)</h3>
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
                <h3>Group Training ($50)</h3>
                <p>Group sessions that combine individual skill development with team dynamics.</p>
                <ul>
                  <li>Team building exercises</li>
                  <li>Competitive environment</li>
                  <li>Cost-effective option</li>
                </ul>
                <a href="/book" className="btn btn-primary">Join Group Session</a>
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