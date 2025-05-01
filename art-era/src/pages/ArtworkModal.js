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
    <div className="modal-overlay" onClick={onClose}>
        <button className="modal-close" onClick={onClose}> X </button>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <div className="modal-image-container">
          <img src={artwork.primaryImageSmall} alt={artwork.title} className="modal-image" />
        </div>

        <div className="modal-details">
          <h2 className="modal-title">{artwork.title}</h2>
          <p className="modal-artist"><strong>Artist:</strong> {artwork.artistDisplayName || artwork.creditLine || "Unknown"}</p>
          <p className="modal-artist"><strong>Period: </strong> {artwork.period || "Unknown"}</p>
          <p className="modal-artist"><strong>Date:</strong> {artwork.objectDate || "Unknown"}</p>
          <p className="modal-description">
            {artwork.creditLine?.trim() ||
             wikidataDescription?.trim() ||
             "No description available."}
          </p>

          {artwork.objectWikidata_URL && (
            <a
              className="modal-wiki"
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
