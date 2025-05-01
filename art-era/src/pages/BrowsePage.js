import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import ArtworkCard from "../components/ArtworkCard";
import ArtworkModal from "./ArtworkModal";
import Masonry from "react-masonry-css";

import { fetchRandomArtworks, searchArtworks } from "../api/artworkAPI";
import "../styles/BrowsePage.css";

// Popup for missing filter selection
function WarningPopup({ message, onClose }) {
  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>×</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default function BrowsePage() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
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
      setShowPopup(true);
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
    <div className="browse-page">
      <h2 className="browse-header">Discover Artist Around the World</h2>
      <p className="browse-subheader">
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

      <h3 className="gallery-title">Browse Through Various Art Works</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-column"
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

      {showPopup && (
        <WarningPopup
          message="Please select a filter before searching."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
