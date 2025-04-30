import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArtCard.css"; 

export default function ArtworkCard({ artwork }) {
  const navigate = useNavigate();

  const {
    objectID,
    primaryImageSmall,
    artistDisplayName,
    title
  } = artwork;

  return (
    <div className="artwork-card">
      <div className="artwork-card-header">
        <h4>Art Piece</h4>
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
          onClick={() => navigate(`/artwork/${objectID}`)}
        >
          View
        </button>
      </div>
    </div>
  );
}
