import React from "react";
import "../styles/ArtCard.css";

export default function ArtworkCard({ artwork, onSelect }) {
  const {
    primaryImageSmall,
    artistDisplayName,
    title
  } = artwork;

  return (
    <div className="A-artwork-card">
      <div className="A-artwork-card-header">
        <h4>{title}</h4>
      </div>

      <img
        src={primaryImageSmall}
        alt={title}
        className="A-artwork-image"
      />

      <div className="A-artwork-info">
        <p className="A-artist-name">{artistDisplayName || "Unknown Artist"}</p>
        <button
          className="A-view-button"
          onClick={() => onSelect(artwork)} // this will trigger the modal to open
        >
          View
        </button>
      </div>
    </div>
  );
}
