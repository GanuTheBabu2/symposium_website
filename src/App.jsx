import React from "react";
    import "./App.css";

    function App() {
      return (
        <div className="app">
          <div className="video-wrapper">
            <video autoPlay muted loop>
              <source src="/bg.mp4" type="video/mp4" />
            </video>
            <div className="vertical-gradient"></div>
          </div>

          <header className="header">
            <div className="logo">
              SYMPO<span>SIUM</span>
            </div>
            <nav className="nav">
              <a href="#">HOME</a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT</a>
            </nav>
          </header>

          <section className="hero">
            <div className="hero-content">
              <h1>
                EMBRACE <br /> THE FUTURE, <br /> UNVEIL THE PAST
              </h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button className="hero-button">EXPLORE</button>
            </div>
          </section>

          <div className="button-container">
            <div className="button-wrapper">
              <div className="marble-button"></div>
              <div className="neon-circle"></div>
              <div className="button-base"></div>
              <div className="button-label">HOME</div>
            </div>
            <div className="button-wrapper">
              <div className="marble-button"></div>
              <div className="neon-circle"></div>
              <div className="button-base"></div>
              <div className="button-label">ABOUT</div>
            </div>
            <div className="button-wrapper">
              <div className="marble-button"></div>
              <div className="neon-circle"></div>
              <div className="button-base"></div>
              <div className="button-label">CONTACT</div>
            </div>
          </div>
        </div>
      );
    }

    export default App;
