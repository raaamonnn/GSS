import React from 'react';
import './Birthdays.css';

const Birthdays = () => {
  return (
    <div className="birthdays">
      {/* Hero Section */}
      <section className="birthdays-hero">
        <div className="container">
          <h1>Soccer Birthday Parties</h1>
          <p>Make your child's birthday unforgettable with our exciting soccer-themed celebrations</p>
        </div>
      </section>

      {/* Birthday Packages */}
      <section className="birthday-packages section">
        <div className="container">
          <h2 className="section-title">Birthday Party Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3>Basic Party</h3>
                <div className="price">$199</div>
              </div>
              <div className="package-content">
                <ul>
                  <li>1-hour soccer training session</li>
                  <li>Professional coach</li>
                  <li>Basic equipment provided</li>
                  <li>Up to 10 children</li>
                  <li>Birthday games and activities</li>
                </ul>
                <a href="/book" className="btn btn-primary">Book Basic Party</a>
              </div>
            </div>

            <div className="package-card featured">
              <div className="package-header">
                <h3>Premium Party</h3>
                <div className="price">$299</div>
                <div className="featured-badge">Most Popular</div>
              </div>
              <div className="package-content">
                <ul>
                  <li>1.5-hour soccer training session</li>
                  <li>Professional coach</li>
                  <li>Full equipment provided</li>
                  <li>Up to 15 children</li>
                  <li>Birthday games and activities</li>
                  <li>Party decorations included</li>
                  <li>Birthday certificate for guest of honor</li>
                </ul>
                <a href="/book" className="btn btn-primary">Book Premium Party</a>
              </div>
            </div>

            <div className="package-card">
              <div className="package-header">
                <h3>Ultimate Party</h3>
                <div className="price">$399</div>
              </div>
              <div className="package-content">
                <ul>
                  <li>2-hour soccer training session</li>
                  <li>Professional coach</li>
                  <li>Full equipment provided</li>
                  <li>Up to 20 children</li>
                  <li>Birthday games and activities</li>
                  <li>Party decorations included</li>
                  <li>Birthday certificate for guest of honor</li>
                  <li>Custom team jerseys for all guests</li>
                  <li>Professional photos included</li>
                </ul>
                <a href="/book" className="btn btn-primary">Book Ultimate Party</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="whats-included section">
        <div className="container">
          <h2 className="section-title">What's Included in Every Party</h2>
          <div className="included-grid">
            <div className="included-item">
              <div className="included-icon">⚽</div>
              <h3>Soccer Training</h3>
              <p>Fun and engaging soccer activities led by our professional coaches</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🎮</div>
              <h3>Birthday Games</h3>
              <p>Special birthday-themed games and competitions for all skill levels</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🏆</div>
              <h3>Trophies & Awards</h3>
              <p>Recognition for all participants with certificates and small prizes</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🎉</div>
              <h3>Party Atmosphere</h3>
              <p>Celebratory environment with music and birthday spirit</p>
            </div>
            <div className="included-item">
              <div className="included-icon">📸</div>
              <h3>Photo Opportunities</h3>
              <p>Plenty of photo moments to capture the special day</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🎁</div>
              <h3>Birthday Surprises</h3>
              <p>Special birthday surprises and recognition for the guest of honor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Party Details */}
      <section className="party-details section">
        <div className="container">
          <div className="details-content">
            <div className="details-text">
              <h2>Party Details & Information</h2>
              <div className="details-list">
                <div className="detail-item">
                  <h3>Duration</h3>
                  <p>Parties typically last 1-2 hours depending on the package selected</p>
                </div>
                <div className="detail-item">
                  <h3>Age Groups</h3>
                  <p>Suitable for children ages 4-14, with activities tailored to each age group</p>
                </div>
                <div className="detail-item">
                  <h3>Location</h3>
                  <p>Parties can be held at our training facility or at a location of your choice</p>
                </div>
                <div className="detail-item">
                  <h3>Weather</h3>
                  <p>Indoor and outdoor options available, with weather contingency plans</p>
                </div>
                <div className="detail-item">
                  <h3>Food & Drinks</h3>
                  <p>You can bring your own refreshments or we can recommend local catering options</p>
                </div>
                <div className="detail-item">
                  <h3>Booking</h3>
                  <p>Book at least 2 weeks in advance to secure your preferred date and time</p>
                </div>
              </div>
            </div>
            <div className="details-image">
              <img src="/images/birthday-party.jpg" alt="Soccer Birthday Party" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="birthday-testimonials section">
        <div className="container">
          <h2 className="section-title">What Parents Say About Our Birthday Parties</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>"My son's 8th birthday party was absolutely amazing! The kids had so much fun and learned some soccer skills too. Coach Miles was fantastic with the children."</p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>Irvine, CA</span>
              </div>
            </div>
            <div className="testimonial">
              <p>"We booked the Premium package and it was worth every penny. The decorations were perfect and all the kids got certificates. Highly recommend!"</p>
              <div className="testimonial-author">
                <strong>Mike R.</strong>
                <span>Newport Beach, CA</span>
              </div>
            </div>
            <div className="testimonial">
              <p>"The Ultimate party package was incredible! The custom jerseys were a huge hit and the professional photos turned out amazing."</p>
              <div className="testimonial-author">
                <strong>Jennifer L.</strong>
                <span>Laguna Niguel, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="birthday-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan the Perfect Soccer Birthday Party?</h2>
            <p>Contact us today to discuss your party needs and secure your preferred date!</p>
            <div className="cta-buttons">
              <a href="/book" className="btn btn-primary">Book Birthday Party</a>
              <a href="tel:949.235.8720" className="btn btn-secondary">Call 949.235.8720</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Birthdays; 