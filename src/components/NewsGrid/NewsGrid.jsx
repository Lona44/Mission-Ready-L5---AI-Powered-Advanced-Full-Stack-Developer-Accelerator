import NewsCard from '../NewsCard/NewsCard';
import './NewsGrid.css';
// Import news card images using Vite's asset import system
import newsImage1 from '../../assets/images/news/news_card_001.webp';
import newsImage2 from '../../assets/images/news/news_card_002.webp';
import newsImage3 from '../../assets/images/news/news_card_003.webp';

/**
 * NewsGrid Component
 *
 * Grid container for displaying news articles in a responsive layout.
 * Transforms from 3-column (desktop) to 2-column (tablet) to 1-column (mobile).
 *
 * Images are imported using Vite's asset import system for optimized loading.
 * Each card receives props: title, description, author, image, and url.
 * Cards are fully clickable and open the article in a new tab.
 *
 * @component
 */
const NewsGrid = () => {
  // News articles data array
  // In a production app, this would typically come from an API or CMS
  const newsItems = [
    {
      id: 1,
      title: "WTF is IAB Tech Lab's Concurrent Streams API?",
      description: "This week's Future of TV Briefing looks at how IAB Tech Lab's Concurrent Streams API aims to address one of the fundamental challenges facing the programmatic supply chain as more major live games and events are streamed.",
      author: "TIM PETERSON",
      image: newsImage1,
      url: "https://digiday.com/future-of-tv/future-of-tv-briefing-wtf-is-iab-tech-labs-concurrent-streams-api/"
    },
    {
      id: 2,
      title: "A look at the wide-ranging jargo coming out of the many ad networks",
      description: "Retail media is booming. Here's a breakdown of the expanding media network landscape and why definitions behind retail, commerce and beyond matter.",
      author: "KIMEKO MCCOY",
      image: newsImage2,
      url: "https://digiday.com/marketing/a-look-at-the-wide-ranging-jargon-coming-out-of-the-many-ad-networks/"
    },
    {
      id: 3,
      title: "Is Meta's Vibes the future of TikTok?",
      description: "This week's Future of TV Briefing looks at how the AI-generated content feed of Meta's Vibes could fill the doomscrolling void if TikTok users abandon the U.S. version of the app.",
      author: "TIM PETERSON",
      image: newsImage3,
      url: "https://digiday.com/future-of-tv/future-of-tv-briefing-is-metas-vibes-the-future-of-tiktok/"
    }
  ];

  return (
    <section className="news-grid-section">
      <div className="news-grid-container">
        {/* Responsive CSS Grid - 3 columns → 2 columns → 1 column */}
        <div className="news-grid">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              author={item.author}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
