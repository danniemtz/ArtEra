import React from "react";
import "../styles/FilterBar.css";

const filters = ["Era", "Artist", "Culture", "Title"];

export default function FilterBar({ selectedFilter, onFilterChange, onClear }) {
  return (
    <div className="F-filterbar-wrapper">
      <div className="F-filterbar-container">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`F-filter-button ${selectedFilter === filter ? "active" : ""}`}
            onClick={() =>
              selectedFilter === filter ? onFilterChange(null) : onFilterChange(filter)
            }
          >
            {filter}
          </button>
        ))}
      </div>
      <button className="F-clear-button" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}
