import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

const H1_BASE = "font-bold leading-[1.05] m-0 whitespace-nowrap tracking-[-3px] text-[clamp(40px,5vw,72px)] max-[900px]:whitespace-normal max-[900px]:text-[clamp(34px,8.5vw,52px)] max-[900px]:tracking-[-2px] max-[480px]:text-[clamp(30px,9vw,42px)] max-[480px]:tracking-[-1.5px]";

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
    <section className="grid grid-cols-[6fr_1px_4fr] min-h-[calc(100svh-72px)] bg-[#f1f1ee] dark:bg-[#111110] max-[900px]:grid-cols-1 max-[900px]:min-h-0">

      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="vblur-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28 0" />
          </filter>
          <filter id="grain-edge" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="5" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-center gap-6 pt-16 pr-16 pb-16 pl-12 max-[900px]:px-6 max-[900px]:pt-9 max-[900px]:pb-8 max-[900px]:gap-4 max-[480px]:px-5 max-[480px]:py-7">

        {/* H1 with blur/grain layers */}
        <div className="relative inline-block">
          {/* Horizontal motion blur ghost */}
          <div
            className="vblur absolute top-0 left-0 w-full h-[117%] overflow-hidden opacity-70 pointer-events-none z-[2]"
            aria-hidden="true"
          >
            <h1
              className={`${H1_BASE} text-black dark:text-white relative z-[1]`}
              style={{ fontFamily: "'Space Grotesk', Georgia, sans-serif" }}
            >
              Mabuhay! I'm Cedrick
            </h1>
          </div>

          {/* Grain + blur layer stack */}
          <div className="relative">
            <h1
              className={`hero-h1-layer-top ${H1_BASE} text-[#969696] dark:text-[#888888] absolute top-0 left-0 right-0 pointer-events-none z-[1]`}
              style={{ fontFamily: "'Space Grotesk', Georgia, sans-serif" }}
              aria-hidden="true"
            >
              Mabuhay! I'm Cedrick
            </h1>
            <h1
              className={`hero-h1-layer-base ${H1_BASE} text-[#969696] dark:text-[#888888] relative z-[1]`}
              style={{ fontFamily: "'Space Grotesk', Georgia, sans-serif" }}
            >
              Mabuhay! I'm Cedrick
            </h1>
          </div>
        </div>

        {/* Rotating subheadline */}
        <div className="min-h-[180px] flex items-start overflow-hidden max-[900px]:min-h-[130px] max-[480px]:min-h-[150px]">
          <p
            className="text-[clamp(30px,4.5vw,64px)] font-extrabold leading-[1.2] text-black/35 dark:text-white/35 m-0 max-[900px]:text-[clamp(22px,6.5vw,30px)] max-[480px]:text-[clamp(20px,7vw,28px)]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0px)" : "translateY(-40px)",
              transition: `opacity ${EXIT_DURATION}ms ease, transform ${EXIT_DURATION}ms cubic-bezier(0.4,0,0.2,1)`,
            }}
          >
            {ROTATING_HEADLINES[index]}
          </p>
        </div>

        {/* Meta */}
        <div className="flex gap-20 max-[900px]:gap-5 max-[900px]:flex-wrap max-[480px]:flex-col max-[480px]:gap-[14px]">
          <div className="flex flex-col gap-[3px]">
            <span className="text-[15px] font-bold text-black dark:text-white">Currently</span>
            <span className="text-[15px] text-black/45 dark:text-white/45">Open to Work</span>
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-[15px] font-bold text-black dark:text-white">Previously at</span>
            <span className="text-[15px] text-black/45 dark:text-white/45">Divine Software Systems</span>
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="text-[15px] font-bold text-black dark:text-white">Featured Work</span>
            <Link to="/projects/trackshot" className="text-[15px] text-black/45 dark:text-white/45 transition-colors duration-200 hover:text-black dark:hover:text-white">
              TrackShot ↗
            </Link>
          </div>
        </div>
      </div>

      {/* VERTICAL DIVIDER */}
      <div className="w-px bg-black/10 dark:bg-white/10 self-stretch max-[900px]:hidden" aria-hidden="true" />

      {/* RIGHT COLUMN — sticky */}
      <div className="sticky top-[72px] h-[calc(100svh-72px)] flex items-center overflow-y-auto max-[900px]:static max-[900px]:h-auto max-[900px]:border-t max-[900px]:border-black/10 max-[900px]:dark:border-white/10">
        <div className="pt-14 pr-10 pb-14 pl-12 flex flex-col gap-[18px] max-[900px]:p-6 max-[900px]:gap-3 max-[480px]:px-5 max-[480px]:py-7">
          <img
            src="/my-picture.webp"
            alt="Cedrick"
            className="hero-avatar object-cover object-[center_5%] grayscale contrast-[1.2] brightness-90 block"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
            }}
          />
          <div
            className="hero-avatar-fallback bg-[#0d0d0d] text-white font-bold text-[18px] flex items-center justify-center"
            style={{ display: "none" }}
          >
            Tr.
          </div>

          <p className="text-[clamp(16px,1.7vw,24px)] font-bold text-black dark:text-white mt-[6px]">Nice to meet you!</p>
          <p className="text-[clamp(15px,1.6vw,23px)] leading-[1.65] text-black/55 dark:text-white/55">
            I am your resident multimedia designer and software engineer:
            front-end developer, mobile app builder, and branding fanatic. I
            like bridging design and code to build things that actually ship.
          </p>

          <div className="flex gap-[23px] items-center mt-1">
            <a
              href="https://www.linkedin.com/in/cedrick-espiritu"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-black dark:text-white flex items-center transition-opacity duration-200 hover:opacity-40"
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:cedrickespiritu070@gmail.com"
              aria-label="Email"
              className="text-black dark:text-white flex items-center transition-opacity duration-200 hover:opacity-40"
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
