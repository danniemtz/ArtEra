import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search for..."
        value={value}
        onChange={onChange}
        className="searchbar-input"
      />
      <button className="searchbar-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
