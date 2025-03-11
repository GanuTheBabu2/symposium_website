import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <video autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <header className="header">
        <div className="logo">
          SYMPO<span>SIUM</span>
        </div>
        <nav className="nav">
          <a href="#">HOME</a>
          <a href="#">CONTACT</a>
          <a href="#">CONTACT</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            EMBRACE <br /> THE FUTURE, <br /> UNVEIL THE PAST
          </h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="hero-button">HOME</button>
        </div>
      </section>

      <footer className="footer">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`footer-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="marble-button">
            HOME
          </a>
          <a href="#" className="marble-button">
            ABOUT
          </a>
          <a href="#" className="marble-button">
            SERVICES
          </a>
          <a href="#" className="marble-button">
            CONTACT
          </a>
          <a href="#" className="marble-button">
            FAQ
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
