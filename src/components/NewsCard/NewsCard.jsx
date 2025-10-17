import './NewsCard.css';

/**
 * NewsCard Component
 *
 * Reusable card component for displaying news articles with image,
 * title, author byline, and description. Features animated yellow
 * left border (faint to vibrant on hover) and smooth lift effect.
 *
 * Includes fallback SVG placeholder if no image is provided.
 * The entire card is clickable and opens the article in a new tab.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Article headline
 * @param {string} props.description - Article summary text
 * @param {string} props.image - Image source (WebP format recommended)
 * @param {string} props.url - Article URL to link to
 * @param {string} [props.author] - Author name (optional)
 */
const NewsCard = ({ title, description, image, author, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="news-card-link">
      <article className="news-card">
      {/* Article image with fallback placeholder */}
      <div className="card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          // Placeholder SVG for cards without images
          <div className="placeholder-card-image">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" fill="#E0E0E0"/>
              <path d="M20 60L32 45L44 55L56 40L68 50V70H12V60H20Z" fill="#9E9E9E"/>
              <circle cx="30" cy="28" r="6" fill="#9E9E9E"/>
            </svg>
          </div>
        )}
      </div>

      {/* Card content: title, author, description */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {author && <p className="card-author">By {author}</p>}
        <p className="card-description">{description}</p>
      </div>
    </article>
    </a>
  );
};

export default NewsCard;
