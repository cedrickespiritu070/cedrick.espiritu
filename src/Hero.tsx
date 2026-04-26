import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const ROTATING_HEADLINES = [
  "I started designing at the age of 10",
  "I love bridging the gap between design and code",
  "I will write clean code for buttered shrimp",
  "I love playing FPS Games",
  "Certified coffee-to-code conversion unit",
  "I studied ICT and Multimedia Arts",
  "Living with two cats and two hyper dogs",
];

const DISPLAY_DURATION = 3200;
const EXIT_DURATION = 350;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROTATING_HEADLINES.length);
        setVisible(true);
      }, EXIT_DURATION);
    }, DISPLAY_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <filter id="vblur-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28 0" />
          </filter>
          <filter id="grain-edge" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.82"
              numOctaves="5"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* LEFT COLUMN */}
      <div className="hero-left">
        <div className="hero-h1-wrap">
          <div className="vblur" aria-hidden="true">
            <h1 className="hero-h1">Mabuhay! I'm Cedrick</h1>
          </div>
          <div className="hero-h1-blur-layers">
            <h1 className="hero-h1 hero-h1-layer-top" aria-hidden="true">
              Mabuhay! I'm Cedrick
            </h1>
            <h1 className="hero-h1 hero-h1-layer-base">Mabuhay! I'm Cedrick</h1>
          </div>
        </div>

        <div className="hero-subhead-clip">
          <p
            className="hero-subhead"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(-40px)",
              transition: `opacity ${EXIT_DURATION}ms ease, transform ${EXIT_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
            }}
          >
            {ROTATING_HEADLINES[index]}
          </p>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-col">
            <span className="hero-meta-label">Currently</span>
            <span className="hero-meta-value">Open to Work</span>
          </div>
          <div className="hero-meta-col">
            <span className="hero-meta-label">Previously at</span>
            <span className="hero-meta-value">Divine Software Systems</span>
          </div>
          <div className="hero-meta-col">
            <span className="hero-meta-label">Featured Work</span>
            <Link to="/projects/trackshot" className="hero-meta-value hero-meta-link">
              TrackShot ↗
            </Link>
          </div>
        </div>
      </div>

      {/* VERTICAL DIVIDER */}
      <div className="hero-divider" aria-hidden="true" />

      {/* RIGHT COLUMN — sticky */}
      <div className="hero-right">
        <div className="hero-right-inner">
          <img
            src="/my-picture.webp"
            alt="Cedrick"
            className="hero-avatar"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              (
                e.currentTarget.nextElementSibling as HTMLElement
              ).style.display = "flex";
            }}
          />
          <div className="hero-avatar-fallback" style={{ display: "none" }}>
            Tr.
          </div>

          <p className="hero-bio-title">Nice to meet you!</p>
          <p className="hero-bio-text">
            I am your resident multimedia designer and software engineer:
            front-end developer, mobile app builder, and branding fanatic. I
            like bridging design and code to build things that actually ship.
          </p>

          <div className="hero-socials">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.243 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
