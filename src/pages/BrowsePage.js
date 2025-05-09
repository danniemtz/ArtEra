import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ArtworkCard from "../components/ArtworkCard";
import ArtworkModal from "./ArtworkModal";
import Masonry from "react-masonry-css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { fetchRandomArtworks, searchArtworks } from "../api/artworkAPI";
import "../styles/BrowsePage.css";

// Popup for missing filter selection
function WarningPopup({ message, onClose }) {
  return (
    <div className="B-popup-backdrop">
      <div className="B-popup-box">
        <button className="B-popup-close" onClick={onClose}>×</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [artworks, setArtworks] = useState([]);

  // Load random artworks on initial render
  useEffect(() => {
    async function loadRandom() {
      const random = await fetchRandomArtworks();
      setArtworks(random);
      setLoading(false);
    }
    loadRandom();
  }, []);
  

  // Handle search based on input and selected filter
  const handleSearch = async () => {
    if (!selectedFilter) {
      setPopupMessage("Please select a filter before searching.");
      return;
    }

    if (!searchInput.trim()) {
      setPopupMessage("Please enter something into the search bar.");
      return;}

    const regexes = {
      Era: /^[a-zA-Z0-9\s\-]{2,}$/,
      Artist: /^[a-zA-Z\s]{2,}$/,
      Culture: /^[a-zA-Z\s]{2,}$/,
      Title: /^[a-zA-Z0-9\s\-\,\.\'\"]{2,}$/
    };

    const isValid = regexes[selectedFilter]?.test(searchInput.trim());
    if (!isValid) {
      setPopupMessage(`Your input doesn’t seem valid for the selected filter: ${selectedFilter}. Try something like "${getExampleInput(selectedFilter)}".`);
      return;
    }

    setLoading(true);
    const results = await searchArtworks({
      query: searchInput,
      [selectedFilter.toLowerCase()]: searchInput,
    });
    setArtworks(results);
    setLoading(false);
  };
  const getExampleInput = (filter) => {
    const examples = {
      Era: "18th Century",
      Artist: "Frida Kahlo",
      Culture: "Mexican",
      Title: "The Starry Night"
    };
    return examples[filter] || "a valid value";
  };

  const handleClear = () => {
    setSelectedFilter(null);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Header />
    <div className="B-browse-page">
      <h2 className="B-browse-header">Discover Artist Around the World</h2>
      <p className="B-browse-subheader">
        Discover made easy! Explore diverse artworks by Era, Artist, Culture, or Title.
      </p>

      <FilterBar
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        onClear={handleClear}
      />

      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onSearch={handleSearch}
      />

      <h3 className="B-gallery-title">Browse Through Various Art Works</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="B-masonry-grid"
          columnClassName="B-masonry-column"
        >
          {artworks.map((art) => (
            <ArtworkCard
              key={art.objectID}
              artwork={art}
              onSelect={setSelectedArtwork}
            />
          ))}
        </Masonry>
      )}

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}

      {popupMessage && (
          <WarningPopup
            message={popupMessage}
            onClose={() => setPopupMessage(null)}
          />
        )}
    </div>
    <Footer />

    </>
  );
}
