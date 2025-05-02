import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">ArtEra</Link>
      </div>
      <nav className="nav-links">
        <a href="#how-it-works">How it Works</a>
        <a href="#goals">Goals</a>
        <a href="#about-us">About Us</a>
        <Link to="/browse" className={location.pathname === "/browse" ? "active" : ""}>
            Browse
        </Link>

        <button className="search-btn">Search</button>

            

      </nav>
    </header>
  );
}
