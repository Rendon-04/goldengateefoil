import Button from "./Button";
import InstagramIcon from "./images/instagram.png"
import TrustIcon from './images/trust.png';
import CoachIcon from './images/coach.png';
import QualityIcon from './images/quality.png';
import CalendarIcon from './images/calendar.svg';
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
import kassandrasuriano from "./images/kassandra.suriano.jpg"
import salinasdanielf from "./images/salinasdanielf.jpg"
import gracechristianlee from "./images/gracechristianlee.jpg"
import jacknelson from "./images/jacknelson.jpg"
import kiramadethis from "./images/kiramadethis.jpg"
import papamiltiadisk from "./images/papamiltiadisk.jpg"
import sirenabainter from "./images/sirenabainter.png"
import thebrokencompass from "./images/thebrokencompass.jpg"
import fromthesoultothestars from "./images/fromthesoultothestars.png"

import { useRef, useState, useEffect } from "react";



function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [reviewPage, setReviewPage] = useState(0);

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

  const GlobeIcon = () => (
    <svg
      className="icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const LightningIcon = () => (
    <svg
      className="icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
    
    },
    {
      id: 2,
      name: "AndrewToursSf",
      avatar: AndrewToursAvatar,
      rating: 5,
      text:
        "Finally checked this off my SF bucket list!...it feels like you’re flying!! It was so insane…10 out of 10. I’d do this again!...such a great and patient instructor!...I had so much fun learning from Goldate Gate Efoil",
    
    },
    {
      id: 3,
      name: "Kenziritotheburrito",
      avatar: KenzAvatar,
      rating: 5,
      text:
        "This was genuinely one of the most fun new activities I’ve tried in forever… Such a good instructor and we had so much fun out there. Cannot recommend enough!!!",
    
    },
    {
      id: 4,
      name: "natalie_linan",
      avatar: NatalieLinanAvatar,
      rating: 5,
      text:
        "Are you kidding!? Seriously such a cool thing to say I have done in my life!",
    
    },
    {
      id: 5,
      name: "nature_nomad_world",
      avatar: NatureNomadAvatar,
      rating: 5,
      text:
        "Magical!!… It was an unforgettable mix of soaring over the water… filled with pure joy and adrenaline. One thing’s for sure: it was my first time, but definitely not my last…",
    
    },
    {
      id: 6,
      name: "cheycheyfromthebay",
      avatar: cheycheyfromthebay,
      rating: 5,
      text:
        "Finally got to try efoiling on the bay!!! This was hands down one of the coolest SF experiences 10/10 recommend! The views are unbelievable! The feeling of being in the air & balancing is crazy!…it was truly epic!...Whether you’re a total beginner or already have experience on the water, Golden Gate Efoil has you covered!",
    
    },
    {
      id: 7,
      name: "kimiaskravings",
      avatar: kimiaskravings,
      rating: 5,
      text:
        "OMG it was a blast!…10,000/10 for fun & the backdrop!!!! Omg it was so fun!! You gotta try it…such an incredible and unforgettable experience. We absolutely LOVED our first time.",
    
    },
    {
      id: 8,
      name: "Zoe Mintz",
      avatar: zoemintz,
      rating: 5,
      text:
        "10/10 would recommend...Easily one of the coolest side quests in the Bay Area. Trying a new water sport with views of San Francisco, the Golden Gate Bridge, and Alcatraz is incredible but when WHALES join in on the fun it’s a once in a lifetime experience!! And it was actually SO easy to learn how to efoil! Golden Gate Efoil was fantastic, went through the step by step instructions and guided me through the whole lesson - I even got up on my first try!! Yes, I fell, but honestly it felt nice to cool off in the water. It’s a workout! Can’t wait to try it again…Thank you SO much for a FANTASTIC morning!!! We had a blast.",
    
    },
    {
      id: 9,
      name: "Kassandra Soriano",
      avatar: kassandrasuriano,
      rating: 5,
      text:
        "I recommend 100%!!!...He taught me how to do one of the coolest things you can do in the Bay Area...he’s the best instructor you could ask for: super reassuring, very patient, and always right there…Before we got to the water he explained everything: the board, how it works…all the safety tips & then you just go for it…It’s such a crazy feeling you’re just gliding above the ocean. So if you live in San Francisco you have to try this at least once.",
    
    },
    {
      id: 10,
      name: "Bellabytheway",
      avatar: bellabytheway,
      rating: 5,
      text:
        "Had an EPIC time efoiling with Golden Gate Efoil in San Francisco, need to add this to your to do list…It was so insane! So so so so much fun!…Oh my god, this was the most incredible feeling…I’m literally flying…Golden Gate Efoil is a 10/10 experience in my book!!",
    
    },
    {
      id: 11,
      name: "Daniel Salinas",
      avatar: salinasdanielf,
      rating: 5,
      text:
        "Top 10 experiences in my life...Amazing day!...Woke up. Got a call. Said yes. Great explanation. 10 min in the water and I was up and enjoying. Great weather. 20 min in we saw a whale. By 45 min I was having great fun and thoughts of delusion. You need to try Golden Gate Efoil...I still have goosebumps just thinking about it.",
    
    },
    {
      id: 12,
      name: "Kiramadethis",
      avatar: kiramadethis,
      rating: 5,
      text:
        "Learned how to efoil (surfing on x-games mode)...Highly recommend! 🏄‍♀️...He kept encouraging me, telling me to believe…and before I knew it I was standing on the board, riding the waves and feeling on top of the world, while catching the most beautiful sunset in front of the Golden Gate Bridge, and I’m not sure how I’ll be able to top that feeling, so you better believe I’ll be back for another round of efoiling to chase that high again...Thank you so much for the great time today, we had a blast :) truly grateful...such a great teacher...You gotta try it!!...That was a peak SF activity! Thank you so much 🙌",
    
    },
    {
      id: 13,
      name: "Grace Christian Lee",
      avatar: gracechristianlee,
      rating: 5,
      text:
        "Had the most INCREDIBLE time learning how to efoil with Golden Gate Efoil. If you’re looking for your next San Francisco side quest adventure THIS IS IT!",
    
    },
    {
      id: 14,
      name: "Karen Guzman",
      avatar: fromthesoultothestars,
      rating: 5,
      text:
        "I just wanted to thank you again for the efoil lesson, I HAD A BLAST!! I will be joining another lesson soon. You were very clear and encouraging with your instructions...I really enjoyed it and look forward to it again.",
    
    },
    {
      id: 15,
      name: "Jackson Nelson",
      avatar:jacknelson,
      rating: 5,
      text:
        "HIGHLY RECOMMEND. As a birthday gift, a friend of mine organized for me to take e-foil lessons with Golden Gate Efoil. It was an incredible experience! The weather was great and the view of the Golden Gate Bridge was spectacular as well. Their instructions were clear and brief; learning to ride the board was a lot easier than I expected, and before I knew it I was flyin’! I’m already looking forward to e-foil again. Don’t hesitate to book this experience, it’s awesome. Thanks Golden Gate Efoil!",
    
    },
    {
      id: 16,
      name: "Konstantinos Papamiltiadis",
      avatar: papamiltiadisk,
      rating: 5,
      text:
        "There's a moment when the board lifts and the noise disappears - just you, suspended above the water, cutting through the Bay like you belong there. Flying low over the swells, chasing speed with nothing but salt air in your face and the Golden Gate standing watch in the distance. But it's what's beneath and beside you that hits different out here. A sea lion surfacing ten feet away, unbothered. Birds skimming the chop in formation. The cold, dark Pacific - not a turquoise postcard, but something rawer and more alive than that. This isn't tropical. This is wild. The water is 54ºF and the wildlife doesn't care that you're there - and that's exactly what makes it sacred. Thank you for the opportunity!!",
    
    },
    {
      id: 17,
      name: "Alex and Kasey",
      avatar: thebrokencompass,
      rating: 5,
      text:
        "I officially think that it's one of the coolest activities you can do in SF. And whether you are a local or a tourist I think it's worth doing it...we both came out of it being like this is the coolest thing ever...and you all need to try it...once you get the hang it feels like you are flying...I'm still talking about this daily...we also saw a whale in the wild and some seals...You can truly be a beginner! You need ZERO experience! You get walked through EVERYTHING and at any point you can say STOP and you will be returned to land! We were truly very nervous! We felt so safe! This is truly the COOLEST thing in San Francisco...Literally still on cloud 9!!!!",
    
    },
    {
      id: 18,
      name: "Sirena Bainter",
      avatar: sirenabainter,
      rating: 5,
      text:
        "My first time out on an efoil, and I was up by the end of the lesson. So fun and he was a helpful and patient instructor, I would definitely recommend if you’re looking to see the bay from a different vantage point.",
    
    },
    {
      id: 19,
      name: "Kaylin JH",
      avatar: "/kaylin_jh.jpg",
      rating: 5,
      text:
        "What a bucket list experience!...This was seriously the BEST EXPERIENCE EVER. Golden Gate eFoil is incredible. Encouraging, fun, excited and ready to take it as slow or as fast as you want. He strikes a perfect balance of teaching and letting you figure it out for yourself. And not to mention the setting!!! I could not have imagined a more serene and exciting way to experience San Francisco. I love Golden Gate eFoil!!!...We can’t stop talking about how much fun we had.",
    
    },
    {
      id: 20,
      name: "Dani Skova",
      avatar: "/daniskov.jpg",
      rating: 5,
      text:
        "Couldn’t recommend an eFoiling session with Golden Gate Efoil more! My roommate and I had the best morning out on the Bay with him. He was incredibly patient and gave such clear, helpful instruction that we were both up on the board by our third try!! It was such a quintessential San Francisco experience and one of the most memorable mornings we’ve had. Highly recommend!",
    
    },
    {
      id: 21,
      name: "Mya Rose",
      avatar: "/myarosemiller_.jpg",
      rating: 5,
      text:
        "Thanks for a great morning!...He was a wonderful instructor and we had a great first session efoiling! He prioritized our safety but also made sure we had fun and encouraged us to keep going...It was such a unique experience…it felt so good to get out on the water first thing in the morning with incredible views of the Golden Gate Bridge...we’re excited to come back and keep working on our skills!",
    
    },
    {
      id: 22,
      name: "Tahj Atkinson",
      avatar: "/tahjytahj.jpg",
      rating: 5,
      text:
        "10/10 recommend....Alright so Efoiling genuinely one of the best, most fun experiences I’ve ever had. The closest thing I’ve done to flying. It feels like you’re just flying on the water. Definitely going to do it again...Epic day efoiling with Golden Gate Efoil.",
    
    },
    {
      id: 23,
      name: "Charissalikesstoeat",
      avatar: "/charlilikestoeat.jpg",
      rating: 5,
      text:
        "Genuinely a ten out of ten day...Hands down one of the most fun things I've done in San Francisco. Efoiling feels like flying and Golden Gate Efoil made it so easy to learn...Most surreal thing ever...You just float in the air and it's actually crazy you're right next to the Golden Gate Bridge too. And the water it's not cold whatsoever. It's so nice. I highly recommend it. This is perfect. Oh my gosh. I've never swam here. I'm so tempted to go out more in the ocean these days now...Efoiling is so much fun. I highly recommend it. Please do it if you are in San Francisco.",
    
    },
  ];

  const reviewsPerPage = 4;
  const reviewPageCount = Math.ceil(reviews.length / reviewsPerPage);
  const reviewStart = reviewPage * reviewsPerPage;
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="landing-page">
      <div className="announcement-bar">
        <a href="tel:+14156360577">Schedule your lesson (415) 636-0577</a>
      </div>

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
                <div className="icon-title">1,000+ Efoil Lessons Taught</div>
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
                src={CalendarIcon}
                alt="Calendar Icon"
                className="icon"
                width={24}
                height={24}
              />
              <div className="icon-content">
                <div className="icon-title">Private Sessions Daily on the San Francisco Bay</div>
                <div className="icon-description">
                  Experience San Francisco’s landmarks and waterfront by efoil all year long
                </div>
              </div>
            </div>

            <div className="icon-lockup">
              <GlobeIcon />
              <div className="icon-content">
                <div className="icon-title">Eco-Friendly</div>
                <div className="icon-description">
                  Leave no trace: 100% electric, zero emissions, & quiet
                </div>
              </div>
            </div>

            <div className="icon-lockup">
              <LightningIcon />
              <div className="icon-content">
                <div className="icon-title">An Electrifying Experience</div>
                <div className="icon-description">
                  No Experience Like It & No Experience Needed
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
      <section className="content-section reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div className="reviews">
          <div className="reviews__heading">
            <div>
              <div className="specs-label">Reviews</div>
              <h2 className="content-title" id="reviews-title">What 1st time riders are saying</h2>
            </div>
            <div className="reviews__summary">
              <Stars count={averageRating} />
              <span><strong>{averageRating.toFixed(1)}</strong> from {reviews.length} reviews</span>
            </div>
          </div>

          <div className="reviews__grid" id="reviews-grid">
            {reviews.map((r, index) => (
              <article
                key={r.id}
                className="review-card"
                aria-hidden={Math.floor(index / reviewsPerPage) !== reviewPage}
                style={{
                  "--review-column": (index % 2) + 1,
                  "--review-row": Math.floor((index % reviewsPerPage) / 2) + 1,
                }}
              >
                <Stars count={r.rating} />
                <p className="review-card__text">"{r.text}"</p>
                <footer className="review-card__header">
                  <ReviewAvatar name={r.name} avatar={r.avatar} />
                  <div className="review-card__meta">
                    <h3 className="review-card__name">{r.name}</h3>
                    {r.source && <div className="review-card__source">{r.source}</div>}
                  </div>
                </footer>
              </article>
            ))}
          </div>

          <nav className="reviews__pagination" aria-label="Review pagination">
            <p className="reviews__range" role="status" aria-live="polite" aria-atomic="true">
              Showing {reviewStart + 1}–{Math.min(reviewStart + reviewsPerPage, reviews.length)} of {reviews.length} reviews
            </p>
            <div className="reviews__controls">
              <button type="button" aria-label="Previous page of reviews" aria-controls="reviews-grid"
                disabled={reviewPage === 0} onClick={() => setReviewPage((page) => Math.max(0, page - 1))}>
                <span aria-hidden="true">←</span> Previous
              </button>
              <span className="reviews__page">{reviewPage + 1} of {reviewPageCount}</span>
              <button type="button" aria-label="Next page of reviews" aria-controls="reviews-grid"
                disabled={reviewPage === reviewPageCount - 1} onClick={() => setReviewPage((page) => Math.min(reviewPageCount - 1, page + 1))}>
                Next <span aria-hidden="true">→</span>
              </button>
            </div>
          </nav>
        </div>
      </section>

      {/* Centered CTA */}
      <div className="centered-cta" id="contact">
        <div className="cta-title">Contact us</div>
        <div className="cta-description">
          <div className="cta-group cta-group--primary">
            <div className="cta-line cta-line--primary">
              Private Efoil Lessons, Demos, & Guided Rides
            </div>
            <div className="cta-line cta-line--secondary">
              All inclusive private 2-hour sessions for first time efoilers through experts
            </div>
            <div className="cta-line cta-line--secondary">All sessions by appointment</div>
          </div>

          <div className="cta-group">
            <div className="cta-line cta-line--secondary">Gift cards</div>
            <div className="cta-line cta-line--secondary">Seen on ESPN & NBC</div>
          </div>

          <div className="cta-group">
            <div className="cta-line cta-line--secondary">All Equipment Provided</div>
          </div>

          <div className="cta-group">
            <div className="cta-line">Looking to purchase an efoil?</div>
            <div className="cta-line cta-line--secondary">
              Glad to advise on your perfect set up and provide support after. Ask for our Instructor discount code.
            </div>
          </div>

          <div className="cta-group cta-group--contact">
            <div className="cta-line">Golden Gate Efoil</div>
            <div className="cta-contact">
              <span>San Francisco, California</span>
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
        <a href="https://www.instagram.com/goldengateefoil/" target="_blank" rel="noopener noreferrer">
          <Button className="info-button" variant="linkout">
            <img src={InstagramIcon} alt="" className="info-button__icon" aria-hidden="true" />
             Instagram
          </Button>
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
            <div className="copyright"> 2026 Golden Gate Efoil</div>
          </div>
          <div className="rights-reserved">All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
