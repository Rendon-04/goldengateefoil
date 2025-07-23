import Button from "./Button";
import InstagramIcon from "./images/instagram.png"
import TrustIcon from './images/trust.png';
import CoachIcon from './images/coach.png';
import QualityIcon from './images/quality.png';
import Logo from './images/gg-logo.svg';
import { useRef, useState, useEffect } from "react";



function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu after clicking a link
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // If menu is open and click was outside the floating nav, close it
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <div className="navigation-wrapper">
        <div className="navigation">
          <div className="nav-brand">
            <img
              className="brand-logo"
              src={Logo}
              alt="Logo for efoiling"
            />
            <div className="brand-text">Golden Gate Efoil</div>
          </div>

          {/* Hamburger Icon - only visible on mobile */}
          <button
            className="hamburger"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen)
            }}
          >
            ☰
          </button>

          {/* Floating Navigation */}
          <div
            ref={navRef}
            className={`floating-nav ${menuOpen ? "mobile-open" : ""}`}
          >
            <div
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("ride")}
            >
              Ride
            </div>
            <div
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("why-us")}
            >
              Why Us
            </div>
            <div
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </div>
            <a
              href="https://www.instagram.com/goldengateefoil/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-item nav-icon-item"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                className="nav-icon"
              />
            </a>
          </div>

      {/* Instagram Icon Nav Item */}
      
          <Button className="contact-button" variant="linkout" onClick={() => scrollToSection("contact")}>Contact Us</Button>
        </div>
        
      </div>
     
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-title">Fly with the Pelicans</div>
        <div className="hero-image">
          
        <video
        className="hero-video"
        src="https://res.cloudinary.com/drmgn21d2/video/upload/v1753218477/ToddBridge_ahy4uq.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

        </div>
      </div>

      {/* Features Carousel */}
      <div className="features-carousel" id="ride">
        <div className="features-content">
          <div className="features-title-section">
            <div className="features-title">Your ride, your way</div>
          </div>
          <div className="features-list">
            <div className="list-item">
              <div className="list-item-text">
                Looking for personalized instruction?{" "}
                <span className="bold-text">
                  We tailor every session to you.
                </span>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item-text">
                Never stepped on a board?
                <span className="bold-text">
                  {" "}
                  We'll teach you from square one.
                </span>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item-text">
                Already foiling?
                <span className="bold-text">
                  {" "}
                  Let's unlock your next level.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* video */}
          <div className="features-image-wrapper">
          <video
          className="features-image"
          src="https://res.cloudinary.com/drmgn21d2/video/upload/v1753218475/ToddHome_zp3tdo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        </div>
      </div>

      {/* Content/Specs Section */}
      <div className="content-section" id="why-us">
        <div className="content-wrapper">
          <div className="specs-label">Specs</div>
          <div className="content-title">Golden Gate Efoil</div>
          <div className="icons-module">
            <div className="icon-lockup">
              <img
                src={TrustIcon}
                alt="Trust Icon"
                className="icon"
                width={24}
                height={24}
              />
              <div className="icon-content">
                <div className="icon-title">Official Lift Foils Partner</div>
                <div className="icon-description">
                  Ride the industry's top eFoil technology, trusted by
                  professionals worldwide for performance and innovation.
                </div>
              </div>
            </div>

            <div className="icon-lockup">
            <img
                src={CoachIcon}
                alt="Coach Icon"
                className="icon"
                width={24}
                height={24}
              />
              <div className="icon-content">
                <div className="icon-title">500+ Efoil Lessons Taught</div>
                <div className="icon-description">
                  Learn with an expert instructor who's guided hundreds of
                  riders safely into the world of eFoiling.
                </div>
              </div>
            </div>

            <div className="icon-lockup">
            <img
                src={QualityIcon}
                alt="Quality Icon"
                className="icon"
                width={24}
                height={24}
              />
              <div className="icon-content">
                <div className="icon-title">
                  20+ Years Guiding and Outdoor Instruction
                </div>
                <div className="icon-description">
                  Get personalized coaching from a seasoned guide with decades
                  of experience on the water.
                </div>
              </div>
            </div>
          </div>
          <Button className="contact-button" variant="primary" onClick={() => scrollToSection("contact")}>Contact Us</Button>
        </div>
      </div>

      {/* Still Shot Image */}
      {/* <img
        className="stillshot-image"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c5846e31b9fd35285a0d8987ec32559bb923c3e?width=2424"
        alt=""
      /> */}
     <div className="stillshot-wrapper">
        <iframe
          className="stillshot-image"
          src="https://www.youtube.com/embed/INOsLdsuvA0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>



      {/* Centered CTA */}
      <div className="centered-cta" id="contact">
        <div className="cta-title">Contact us</div>
        <div className="cta-description">
        Private Efoil Lessons, Demos, & Guided Rides 
        <br />
        Year-round on the San Francisco Bay
          <br />
          Gear is included, no experience needed
          <br />
          <br />
          Golden Gate Efoil
          <br />
          <span className="bold-text">
            info@goldengateefoil.com
            <br />
            (415) 636-0577
            <br />
            Ask about our promo code
          </span>
        </div>
        <div className="cta-buttons">
        <a href="mailto:info@goldengateefoil.com">
          <Button className="info-button" variant="secondary">Email us</Button>
      </a>
        <a href="tel:+14156360577">
          <Button className="info-button" variant="linkout">Call us</Button>
      </a>
        </div>
      </div>


      {/* Credits/Footer */}
      <div className="credits-wrapper">
        <div className="credits">
          <img
            className="credits-logo"
            src={Logo}
            alt="efoil logo"
          />
          <div className="credits-content">
            <div className="copyright"> 2025 Golden Gate Efoil</div>
          </div>
          <div className="rights-reserved">All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
