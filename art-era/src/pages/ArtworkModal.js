import React, { useState, useEffect } from "react";
import "../styles/Modal.css";
import { fetchWikidataDescription } from "../api/artworkAPI";


export default function ArtworkModal({ artwork, onClose }) {
    const [wikidataDescription, setWikidataDescription] = useState(null);

    useEffect(() => {
        async function loadWikidataDescription() {
            if (artwork.objectWikidata_URL) {
            const description = await fetchWikidataDescription(artwork.objectWikidata_URL);
            setWikidataDescription(description);
            }
        }
        loadWikidataDescription();
    }, [artwork]);

  if (!artwork) return null;

  return (
    <div className="M-modal-overlay" onClick={onClose}>
        <button className="M-modal-close" onClick={onClose}> X </button>
      <div className="M-modal-box" onClick={(e) => e.stopPropagation()}>

        <div className="M-modal-image-container">
          <img src={artwork.primaryImageSmall} alt={artwork.title} className="M-modal-image" />
        </div>

        <div className="M-modal-details">
          <h2 className="M-modal-title">{artwork.title}</h2>
          <p className="M-modal-artist"><strong>Artist:</strong> {artwork.artistDisplayName || artwork.creditLine || "Unknown"}</p>
          <p className="M-modal-artist"><strong>Period: </strong> {artwork.period || "Unknown"}</p>
          <p className="M-modal-artist"><strong>Date:</strong> {artwork.objectDate || "Unknown"}</p>
          <p className="M-modal-description">
            {artwork.creditLine?.trim() ||
             wikidataDescription?.trim() ||
             "No description available."}
          </p>

          {artwork.objectWikidata_URL && (
            <a
              className="M-modal-wiki"
              href={artwork.objectWikidata_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Wikidata
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
