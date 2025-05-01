import React from "react";
import "../styles/FilterBar.css";

const filters = ["Era", "Artist", "Culture", "Title"];

export default function FilterBar({ selectedFilter, onFilterChange, onClear }) {
  return (
    <div className="filterbar-wrapper">
      <div className="filterbar-container">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${selectedFilter === filter ? "active" : ""}`}
            onClick={() =>
              selectedFilter === filter ? onFilterChange(null) : onFilterChange(filter)
            }
          >
            {filter}
          </button>
        ))}
      </div>
      <button className="clear-button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}
