import React from "react";
import "../styles/HomePage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-wrapper">
            <div className="hero-content">
            <div className="hero-text">
                <h1>ARTERA</h1>
                <p>
                Artwork from around the world! Search by artist, era, culture, and piece title.
                A simple, visually engaging website designed to showcase artwork in a user-friendly, aesthetically pleasing format.
                </p>
                <button onClick={() => window.location.href = "/browse"}>Start Browsing</button>
            </div>
            <img src="hero_image.png" alt="Artwork"/>
            </div>
            </section>

        <div className="section-divider"></div>

        {/* How It Works */}
        <div className="steps-wrapper" id="how-it-works">
        <h2>How it Works</h2>
        <h3>The steps on how to search for a specific or broad variety of art pieces</h3>
            <div className="steps-row">
            <div className="step">
                <img src="arrow.png" alt="Pick a Filter" />
                <h4>Pick a Filter</h4>
                <p>Choose between Era, Artist, Culture, or Title</p>
            </div>

            <img src="swiggly.png" alt="swiggle" className="swiggle"/>

            <div className="step">
                <img src="search_icon.png" alt="Type in Search" />
                <h4>Type in your search!</h4>
                <p>Use artist name or art title based on filter</p>
            </div>

            <img src="swiggly.png" alt="swiggle" className="swiggle"/>

            <div className="step">
                <img src="browse_icon.png" alt="Browse" />
                <h4>Browse Our Gallery</h4>
                <p>Apply filters and explore the collection</p>
            </div>
            </div>
            </div>


        <div className="section-divider"></div>


        {/* Prototype Goals */}
        <section className="prototype-goals" id="goals">
            <h2>Prototype Goals</h2>
            <h3>What we aim to achieve with this design</h3>
            <div className="goals-content">
            <ul className="goal-list">
                <li>
                <div className="goal-header">
                    <span className="bullet"></span>
                    <div className="goal-title">
                        <div>Optimal</div>
                        <div>Layout</div>
                    </div>
                    </div>

                    <ul className="goal-description">
                    <li>Establish a clean, minimal layout that showcases artwork without overwhelming the user.</li>
                    <li>Visually separate filters, results, and static content like this landing page.</li>
                    <li>Use spacing, font hierarchy, and color to create a gallery-like aesthetic.</li>
                    </ul>
                </li>

                <li>
                    <div className="goal-header">
                    <span className="bullet"></span>
                    <div className="goal-title">
                        <div>Smooth</div>
                        <div>Navigation</div>
                    </div>
                    </div>
                    <ul className="goal-description">
                    <li>Allow users to filter artwork intuitively with minimal steps.</li>
                    <li>Simulate realistic search results that reflect applied filters clearly.</li>
                    <li>Provide immediate visual feedback when filters are applied.</li>
                    </ul>
                </li>

                <li>
                    <div className="goal-header">
                    <span className="bullet"></span>

                    <div className="goal-title">
                        <div>Intuitive</div>
                        <div>Experience</div>
                    </div>
                    </div>
                    <ul className="goal-description">
                    <li>Design a layout that’s instantly understandable and usable without onboarding.</li>
                    <li>Ensure users can search and navigate without confusion or needing instructions.</li>
                    <li>Use affordances like hover effects to guide user interaction naturally.</li>
                    </ul>
                </li>
                </ul>

                <img src="art_2.png" alt="Art example" />
            </div>
            </section>


        <div className="section-divider"></div>

        {/* Meet the Team */}
        <section className="team" id="about-us">
          <h1>Meet the Team!</h1>
          <h3>The creators and contributors of this site</h3>
          <div className="team-grid">
            <TeamMemberCard name="Danniella Martinez" role="Front-End Developer" />
            <TeamMemberCard name="Deanna Solis" role="UI Designer" />
            <TeamMemberCard name="Jake Ngo" role="Documentation Lead" />
            <TeamMemberCard name="Valerie Escalante" role="UX Researcher" />
          </div>
        </section>
      </main>
      <div className="section-divider"></div>

      <Footer />
    </>
  );
}
