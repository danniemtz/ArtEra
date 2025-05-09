// import React from "react";
// import "../styles/SearchBar.css";

// export default function SearchBar({ value, onChange, onSearch }) {
//   return (
//     <div className="S-searchbar-container">
//       <input
//         type="text"
//         placeholder="Search for..."
//         value={value}
//         onChange={onChange}
//         className="S-searchbar-input"
//       />
//       <button className="S-searchbar-button" onClick={onSearch}>
//         Search
//       </button>
//     </div>
//   );
// }
import React from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ value, onChange, onSearch, suggestions, onSelectSuggestion }) {
  return (
    <div className="S-searchbar-container">
      <input
        type="text"
        placeholder="Search for..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
        className="S-searchbar-input"
      />

      <button className="S-searchbar-button" onClick={onSearch}>
        Search
      </button>

      {suggestions.length > 0 && (
        <ul className="S-suggestion-list">
          {suggestions.map((word, index) => (
            <li key={index} onClick={() => onSelectSuggestion(word)}>
              {word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

