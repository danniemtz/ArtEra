// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/Header.css";

// export default function Header() {
//   const location = useLocation();

//   return (
//     <header className="main-header">
//       <div className="logo">
//         <Link to="/">ArtEra</Link>
//       </div>
//       <nav className="nav-links">
//         <a href="#how-it-works">How it Works</a>
//         <a href="#goals">Goals</a>
//         <a href="#about-us">About Us</a>
//         <Link to="/browse" className={location.pathname === "/browse" ? "active" : ""}>
//             Browse
//         </Link>

//         <Link to="/browse">
//           <button className="search-btn">Search</button>
//         </Link>

            

//       </nav>
//     </header>
//   );
// }
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // If already on homepage, just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate home then scroll
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to let HomePage render first
    }
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/">ArtEra</Link>
      </div>
      <nav className="nav-links">
        <button className="nav-btn" onClick={() => scrollToSection("how-it-works")}>How it Works</button>
        <button className="nav-btn" onClick={() => scrollToSection("goals")}>Goals</button>
        <button className="nav-btn" onClick={() => scrollToSection("about-us")}>About Us</button>

        <Link to="/browse" className={location.pathname === "/browse" ? "active" : ""}>
          Browse
        </Link>

        <Link to="/browse">
          <button className="search-btn">Search</button>
        </Link>
      </nav>
    </header>
  );
}
