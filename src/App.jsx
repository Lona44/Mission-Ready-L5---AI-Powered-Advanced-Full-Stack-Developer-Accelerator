import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import NewsGrid from './components/NewsGrid/NewsGrid'
import './App.css'

/**
 * App Component (Root)
 *
 * Main application component that orchestrates the entire page layout.
 * Integrates Header, Hero, and NewsGrid components in a single-page structure.
 *
 * Component hierarchy:
 * App
 * ├── Header (navigation + logo)
 * ├── Hero (headline + search)
 * └── NewsGrid (news articles)
 *
 * @component
 */
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <NewsGrid />
    </div>
  )
}

export default App
