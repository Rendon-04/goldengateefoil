import Button from "./Button";
import InstagramIcon from "./images/instagram.png"
import TrustIcon from './images/trust.png';
import CoachIcon from './images/coach.png';
import QualityIcon from './images/quality.png';
import Logo from './images/gg-logo.svg';
import FishermansLifeAvatar from "./images/fishermansLife.jpg";
import NatalieLinanAvatar from "./images/natalieLinan.jpg";
import KenzAvatar from "./images/kensitotheBurritio.jpg";
import NatureNomadAvatar from "./images/natureNomad.jpg";
import AndrewToursAvatar from "./images/andrewTours.jpg";
import cheycheyfromthebay from "./images/cheycheyfromthebay.jpg";
import kimiaskravings from "./images/kimiaskravingss.jpg";
import zoemintz from "./images/zoemintz.jpg";
import bellabytheway from "./images/bellabytheway.jpg";

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

  const Stars = ({ count = 5 }) => (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star ${i < count ? "filled" : ""}`} />
      ))}
    </div>
  );

  const ReviewAvatar = ({ name, avatar }) => {
    const [hasError, setHasError] = useState(false);
    const initials = name
      .replace(/^@/, "")
      .split(/[\s_]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");

    if (!avatar || hasError) {
      return (
        <div className="review-card__avatar review-card__avatar--fallback" aria-hidden="true">
          {initials || "GG"}
        </div>
      );
    }

    return (
      <img
        src={avatar}
        alt={`${name} profile`}
        className="review-card__avatar"
        loading="lazy"
        width="56"
        height="56"
        onError={() => setHasError(true)}
      />
    );
  };
  
  const reviews = [
    {
      id: 1,
      name: "Fisherman’s\nLife",
      avatar: FishermansLifeAvatar,
      rating: 5,
      text: "This is pretty cool! Damn y’all this is hella fun!",
      source: "Instagram",
    },
    {
      id: 2,
      name: "@AndrewToursSf",
      avatar: AndrewToursAvatar,
      rating: 5,
      text:
        "Finally checked this off my SF bucket list!...it feels like you’re flying!! It was so insane…10 out of 10. I’d do this again!...such a great and patient instructor!...I had so much fun learning from Goldate Gate Efoil",
      source: "Instagram",
    },
    {
      id: 3,
      name: "Kenziritotheburrito",
      avatar: KenzAvatar,
      rating: 5,
      text:
        "This was genuinely one of the most fun new activities I’ve tried in forever… Such a good instructor and we had so much fun out there. Cannot recommend enough!!!",
      source: "Instagram",
    },
    {
      id: 4,
      name: "natalie_linan",
      avatar: NatalieLinanAvatar,
      rating: 5,
      text:
        "Are you kidding!? Seriously such a cool thing to say I have done in my life!",
      source: "Instagram",
    },
    {
      id: 5,
      name: "nature_nomad_world",
      avatar: NatureNomadAvatar,
      rating: 5,
      text:
        "Magical!!… It was an unforgettable mix of soaring over the water… filled with pure joy and adrenaline. One thing’s for sure: it was my first time, but definitely not my last…",
      source: "Instagram",
    },
    {
      id: 6,
      name: "cheycheyfromthebay",
      avatar: cheycheyfromthebay,
      rating: 5,
      text:
        "Finally got to try efoiling on the bay!!! This was hands down one of the coolest SF experiences 10/10 recommend! The views are unbelievable! The feeling of being in the air & balancing is crazy!",
      source: "Instagram",
    },
    {
      id: 7,
      name: "kimiaskravings",
      avatar: kimiaskravings,
      rating: 5,
      text:
        "OMG it was a blast!…10,000/10 for fun & the backdrop!!!! Omg it was so fun!! You gotta try it…such an incredible and unforgettable experience. We absolutely LOVED our first time.",
      source: "Instagram",
    },
    {
      id: 8,
      name: "@Zoe Mintz",
      avatar: zoemintz,
      rating: 5,
      text:
        "10/10 would recommend...Easily one of the coolest side quests in the Bay Area. Trying a new water sport with views of San Francisco, the Golden Gate Bridge, and Alcatraz is incredible but when WHALES join in on the fun it’s a once in a lifetime experience!! And it was actually SO easy to learn how to efoil! Golden Gate Efoil was fantastic, went through the step by step instructions and guided me through the whole lesson - I even got up on my first try!! Yes, I fell, but honestly it felt nice to cool off in the water. It’s a workout! Can’t wait to try it again…Thank you SO much for a FANTASTIC morning!!! We had a blast.",
      source: "Instagram",
    },
    {
      id: 9,
      name: "@Kassandra Soriano",
      avatar: null,
      rating: 5,
      text:
        "I recommend 100%!!!...He taught me how to do one of the coolest things you can do in the Bay Area...Before we got to the water he explained everything: the board, how it works…all the safety tips & then you just go for it…It’s such a crazy feeling you’re just gliding above the ocean. So if you live in San Francisco you have to try this at least once.",
      source: "Instagram",
    },
    {
      id: 10,
      name: "@Bellabytheway",
      avatar: bellabytheway,
      rating: 5,
      text:
        "Had an EPIC time efoiling with Golden Gate Efoil in San Francisco, need to add this to your to do list…It was so insane! So so so so much fun!…Oh my god, this was the most incredible feeling…I’m literally flying.",
      source: "Instagram",
    },
    {
      id: 11,
      name: "@Daniel Salinas",
      avatar: null,
      rating: 5,
      text:
        "Woke up. Got a call. Said yes. Great explanation. 10 min in the water and I was up and enjoying. Great weather. 20 min in we saw a whale. By 45 min I was having great fun and thoughts of delusion. You need to try goldengateefoil…I still have goosebumps just thinking about it.",
      source: "Instagram",
    },
  ];

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
        <div className="hero-image">
          
        <video
        className="hero-video"
        src="https://my-site-media-todd.s3.amazonaws.com/ToddBridge.mp4"
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
          src="https://my-site-media-todd.s3.us-east-2.amazonaws.com/ToddHome.mp4"
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
                <div className="icon-title">Authorized Lift Foils Partner</div>
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

            <div className="icon-lockup">
              <img
                src={TrustIcon}
                alt="Trust Icon"
                className="icon"
                width={24}
                height={24}
              />
              <div className="icon-content">
                <div className="icon-title">Year-round on the San Francisco Bay</div>
                <div className="icon-description">
                  Experience San Francisco’s famous landmarks and waterfront by efoil all year long
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


       {/* Reviews */}
     {/* Reviews */}
      <div className="content-section" id="reviews">
        <div className="content-wrapper">
          <div className="specs-label">Reviews</div>
          <div className="content-title">What 1st time riders are saying</div>

          <div className="reviews">
            <div className="reviews__grid">
              {reviews.map((r) => (
                <article key={r.id} className="review-card">
                  <header className="review-card__header">
                    <ReviewAvatar name={r.name} avatar={r.avatar} />
                    <div className="review-card__meta">
                      <h3 className="review-card__name">
                        {r.name.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i === 0 && <br />}
                          </span>
                        ))}
                      </h3>
                      {r.source && <div className="review-card__source">{r.source}</div>}
                      <Stars count={r.rating} />
                    </div>
                  </header>

                  <p className="review-card__text">"{r.text}"</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Centered CTA */}
      <div className="centered-cta" id="contact">
        <div className="cta-title">Contact us</div>
        <div className="cta-description">
          <div className="cta-group cta-group--primary">
            <div className="cta-line cta-line--primary">
              Private Efoil Lessons, Demos, & Guided Rides
            </div>
          </div>

          <div className="cta-group">
            <div className="cta-line cta-line--secondary">
              Private sessions scheduled daily by appointment
            </div>
            <div className="cta-line cta-line--secondary">Gift cards</div>
          </div>

          <div className="cta-group">
            <div className="cta-line cta-line--secondary">All Equipment Provided</div>
            <div className="cta-line cta-line--secondary">
              No Experience Needed & No Experience Like It
            </div>
          </div>

          <div className="cta-group">
            <div className="cta-line">Looking to purchase an efoil?</div>
            <div className="cta-line cta-line--secondary">
              Glad to advise on your perfect set up, ask for our promo code
            </div>
          </div>

          <div className="cta-group cta-group--contact">
            <div className="cta-line">Golden Gate Efoil</div>
            <div className="cta-contact">
              <span className="bold-text">info@goldengateefoil.com</span>
              <span className="bold-text">(415) 636-0577</span>
            </div>
          </div>
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
