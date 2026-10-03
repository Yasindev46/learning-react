import { useState } from 'react'
import { Link } from 'react-router-dom'
import './WikipediaSearch.css'

const WIKIPEDIA_API = 'https://en.wikipedia.org/w/api.php'

function WikipediaSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const term = searchTerm.trim()

    if (!term) {
      return
    }

    setSearchTerm('')
    setError('')
    setIsLoading(true)
    setRecentSearches((searches) => [
      { term, timestamp: new Date().toLocaleString() },
      ...searches.filter((search) => search.term.toLowerCase() !== term.toLowerCase()),
    ].slice(0, 5))

    try {
      const params = new URLSearchParams({
        action: 'opensearch',
        search: term,
        format: 'json',
        origin: '*',
      })
      const response = await fetch(`${WIKIPEDIA_API}?${params}`)

      if (!response.ok) {
        throw new Error('Wikipedia could not be reached.')
      }

      const [, titles, descriptions, urls] = await response.json()
      setResults(titles.map((title, index) => ({
        title,
        description: descriptions[index],
        url: urls[index],
      })))
    } catch (requestError) {
      setResults([])
      setError(requestError.message || 'Something went wrong while searching.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="wikipedia-page">
      <div className="wikipedia-header">
        <Link className="wikipedia-home-link" to="/">Home</Link>
        <p className="wikipedia-kicker">Open knowledge, one query away</p>
        <h1>Wikipedia Search</h1>
        <p className="wikipedia-intro">Find articles across the world&apos;s living encyclopedia.</p>
      </div>

      <form className="wikipedia-form" onSubmit={handleSubmit}>
        <label htmlFor="wikipedia-search">Search Wikipedia</label>
        <div className="wikipedia-search-row">
          <input
            id="wikipedia-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Try a topic, person, or place"
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      <div className="wikipedia-content">
        <section className="wikipedia-results" aria-live="polite">
          <div className="section-heading">
            <h2>Results</h2>
            {results.length > 0 && <span>{results.length} found</span>}
          </div>
          {error && <p className="wikipedia-message error-message">{error}</p>}
          {!isLoading && !error && results.length === 0 && (
            <p className="wikipedia-message">Search for something to see article results here.</p>
          )}
          <div className="result-list">
            {results.map((result) => (
              <a className="wikipedia-result" href={result.url} target="_blank" rel="noreferrer" key={result.url}>
                <span className="result-title">{result.title}</span>
                <span className="result-description">{result.description || 'Read this article on Wikipedia.'}</span>
                <span className="result-url">Open article &#8599;</span>
              </a>
            ))}
          </div>
        </section>

        <aside className="recent-searches">
          <div className="section-heading">
            <h2>Recent searches</h2>
            <span>Last 5</span>
          </div>
          {recentSearches.length === 0 ? (
            <p className="wikipedia-message">Your recent searches will appear here.</p>
          ) : (
            <ol>
              {recentSearches.map((search) => (
                <li key={`${search.term}-${search.timestamp}`}>
                  <strong>{search.term}</strong>
                  <time>{search.timestamp}</time>
                </li>
              ))}
            </ol>
          )}
        </aside>
      </div>
    </main>
  )
}

export default WikipediaSearch
