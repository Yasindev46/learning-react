import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const handleSearch = async () => {
    const result = await fetch(`https://dummyjson.com/recipes/search?q=${inputValue}`);
    const data = await result.json();
    setSearchResults(data.recipes);
  };
  useEffect(() => {
    const timer=setTimeout(() => {
        handleSearch();
    }, 300);

    return()=>{
        clearTimeout(timer);
    }
  }, [inputValue]);
  return (
    <div>
      <h1>Search Bar with autocomplete</h1>
      <Link to="/"><button className="home-button">Home</button></Link>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        className="search-input"
      />
      {showResults && <div className="results">
        { searchResults.map((item) => (
          <div className="result-item" key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
}
    </div>
  );
}

export default SearchBar;
