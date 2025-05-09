import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="S-searchbar-container">
      <input
        type="text"
        placeholder="Search for..."
        value={value}
        onChange={onChange}
        className="S-searchbar-input"
      />
      <button className="S-searchbar-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
