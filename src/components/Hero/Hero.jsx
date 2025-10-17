import { useState } from 'react';
import './Hero.css';
import heroBackground from '../../assets/images/hero/hero_04.png';

/**
 * Hero Component
 *
 * Main hero section featuring a background image, headline text,
 * and integrated search functionality. Includes interactive hover
 * effects (headline underline + faint overlay) for enhanced UX.
 *
 * Background image is constrained on mobile to ensure text readability.
 *
 * @component
 */
const Hero = () => {
  // State for controlled search input
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handles search form submission
   * Note: Full search functionality not implemented per project requirements
   *
   * @param {Event} e - Form submit event
   */
  const handleSearch = (e) => {
    e.preventDefault();
    // Search functionality not required per the brief - logs to console only
    console.log('Search term:', searchTerm);
  };

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      {/* Hero content with text constrained to left side for readability */}
      <div className="hero-content">
        {/* Clickable hero text linking to the full article */}
        <a
          href="https://digiday.com/media-buying/wtf-ad-context-protocol/"
          className="hero-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1><span className="highlight-text">Explainer Series:</span> WTH is Ad Context Protocol</h1>
          <p>Open standard aims to let AI agents negotiate directly across ad tech, with comparisons to OpenRTB and header bidding.</p>
        </a>
      </div>

      {/* Integrated search bar positioned at bottom of hero section */}
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for news, articles, and insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search for articles"
          />
          <button type="submit" className="search-button">
            SEARCH
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
