import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/training-session-1.jpg',
      alt: 'Soccer Training Session',
      category: 'Training'
    },
    {
      id: 2,
      src: '/images/gallery/birthday-party-1.jpg',
      alt: 'Birthday Party Celebration',
      category: 'Birthdays'
    },
    {
      id: 3,
      src: '/images/gallery/team-training-1.jpg',
      alt: 'Team Training Session',
      category: 'Training'
    },
    {
      id: 4,
      src: '/images/gallery/summer-camp-1.jpg',
      alt: 'Summer Soccer Camp',
      category: 'Camps'
    },
    {
      id: 5,
      src: '/images/gallery/coach-player-1.jpg',
      alt: 'Coach and Player',
      category: 'Training'
    },
    {
      id: 6,
      src: '/images/gallery/birthday-party-2.jpg',
      alt: 'Birthday Party Games',
      category: 'Birthdays'
    },
    {
      id: 7,
      src: '/images/gallery/skills-training-1.jpg',
      alt: 'Technical Skills Training',
      category: 'Training'
    },
    {
      id: 8,
      src: '/images/gallery/summer-camp-2.jpg',
      alt: 'Camp Activities',
      category: 'Camps'
    },
    {
      id: 9,
      src: '/images/gallery/group-training-1.jpg',
      alt: 'Group Training Session',
      category: 'Training'
    },
    {
      id: 10,
      src: '/images/gallery/birthday-party-3.jpg',
      alt: 'Birthday Celebration',
      category: 'Birthdays'
    },
    {
      id: 11,
      src: '/images/gallery/fitness-training-1.jpg',
      alt: 'Fitness Training',
      category: 'Training'
    },
    {
      id: 12,
      src: '/images/gallery/summer-camp-3.jpg',
      alt: 'Camp Fun',
      category: 'Camps'
    }
  ];

  const categories = ['All', 'Training', 'Birthdays', 'Camps'];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Take a look at our training sessions, birthday parties, and special events</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="gallery-filter section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid section">
        <div className="container">
          <div className="images-grid">
            {filteredImages.map(image => (
              <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="category-tag">{image.category}</span>
                    <h3>{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="gallery-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Players</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Birthday Parties</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Summer Camps</div>
            </div>
            <div className="stat">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Training Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section section">
        <div className="container">
          <h2 className="section-title">Watch Our Training in Action</h2>
          <div className="video-grid">
            <div className="video-item">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <h3>Training Session Highlights</h3>
                <p>See our coaches in action during a typical training session</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <h3>Birthday Party Fun</h3>
                <p>Watch the excitement at one of our soccer birthday parties</p>
              </div>
            </div>
            <div className="video-item">
              <div className="video-placeholder">
                <div className="play-button">▶</div>
                <h3>Summer Camp Adventures</h3>
                <p>Experience the fun and learning at our summer soccer camps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gallery-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join the Fun?</h2>
            <p>Book your session today and become part of our GSS family!</p>
            <a href="/book" className="btn btn-primary">Book Your Session</a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="modal-info">
              <h3>{selectedImage.alt}</h3>
              <span className="category-tag">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 