import React from "react";
import "../styles/ArtCard.css";

export default function ArtworkCard({ artwork, onSelect }) {
  const {
    primaryImageSmall,
    artistDisplayName,
    title
  } = artwork;

  return (
    <div className="artwork-card">
      <div className="artwork-card-header">
        <h4>{title}</h4>
      </div>

      <img
        src={primaryImageSmall}
        alt={title}
        className="artwork-image"
      />

      <div className="artwork-info">
        <p className="artist-name">{artistDisplayName || "Unknown Artist"}</p>
        <button
          className="view-button"
          onClick={() => onSelect(artwork)} // this will trigger the modal to open
        >
          View
        </button>
      </div>
    </div>
  );
}
