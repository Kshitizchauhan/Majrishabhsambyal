import { useEffect, useRef, useState } from "react";
import IndiaMapOutline from "./components/IndiaMapOutline.jsx";

const MAIN_VIDEO = {
  id: "x63HCoDfAhQ",
  url: "https://www.youtube.com/watch?v=x63HCoDfAhQ&t=2359s",
  title: "Featured Story — In Conversation",
  meta: "Full interview on YouTube",
};

const VIDEOS = [
  {
    id: "4rU-0plc_Fg",
    url: "https://www.youtube.com/watch?v=4rU-0plc_Fg&t=139s",
    title: "Leadership Talk",
  },
  {
    id: "cps9bjjvpxA",
    url: "https://www.youtube.com/watch?v=cps9bjjvpxA",
    title: "In Conversation",
  },
  {
    id: "x63HCoDfAhQ",
    url: "https://www.youtube.com/watch?v=x63HCoDfAhQ&t=2359s",
    title: "Featured Story",
  },
  {
    id: "5eqBb8djXEc",
    url: "https://www.youtube.com/watch?v=5eqBb8djXEc",
    title: "Service & Beyond",
  },
  {
    id: "Sd19UraIJew",
    url: "https://www.youtube.com/watch?v=Sd19UraIJew",
    title: "Motivation",
  },
  {
    id: "gYJKTSxFUME",
    url: "https://www.youtube.com/watch?v=gYJKTSxFUME&t=648s",
    title: "Latest Talk",
  },
];

const BOTTOM_IMAGE =
  "https://akm-img-a-in.tosshub.com/businesstoday/images/photo_gallery/202608/_rishabh-sambyal-3_0.jpg?size=686:*";

const SOCIALS = [
  {
    label: "Instagram",
    short: "ig",
    handle: "@major_rs_sambyal",
    href: "https://www.instagram.com/major_rs_sambyal",
  },
  {
    label: "X",
    short: "x",
    handle: "@majrssambyal",
    href: "https://x.com/majrssambyal",
  },
  {
    label: "LinkedIn",
    short: "linkedin",
    handle: "Rishabh Singh Sambyal",
    href: "https://www.linkedin.com/in/rishabh-singh-sambyal-316125185/",
  },
  {
    label: "Email",
    short: "gmail",
    handle: "rishabhsam@proton.me",
    href: "mailto:rishabhsam@proton.me",
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Connect", href: "#connect" },
];

const EMAIL = "rishabhsam@proton.me";
const EMAIL_MAILTO = `mailto:${EMAIL}`;
const EMAIL_GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

function XIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function InstagramIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.6" cy="6.4" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GmailIcon({ className = "h-6 w-6" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3.5 7 8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  );
}

function ExternalIcon({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PauseIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

function ArrowUpIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M12 19V5m-6 6 6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialIcon({ short, className }) {
  if (short === "x") return <XIcon className={className} />;
  if (short === "ig") return <InstagramIcon className={className} />;
  if (short === "linkedin") return <LinkedinIcon className={className} />;
  return <GmailIcon className={className} />;
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already in viewport on mount (e.g. hero), show immediately
    try {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-visible");
        return;
      }
    } catch {
      /* ignore */
    }
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    // Safety fallback: never leave content stuck at opacity 0
    const t = setTimeout(() => el.classList.add("is-visible"), 1500 + delay);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [delay]);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function VideoCard({ v, hidden = false }) {
  return (
    <a
      href={v.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      aria-label={`${v.title} — opens YouTube in a new tab`}
      className="brass-focus group w-44 shrink-0 overflow-hidden rounded-2xl bg-stone-950 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.5)] ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(0,0,0,0.35)] md:w-60 dark:ring-white/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumb(v.id)}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover saturate-[1.04] transition duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/25">
          <span className="flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white/95 text-stone-900 opacity-0 shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-stone-900">
            <PlayIcon className="h-5 w-5" />
          </span>
        </span>
      </div>
    </a>
  );
}

function EmailDialog({ open, onClose }) {
  const [copied, setCopied] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setCopied(false);
    closeRef.current?.focus?.();
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        setCopied(true);
      } catch {
        /* clipboard unavailable — address is visible to copy manually */
      }
    }
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Send email options"
      className="fixed inset-0 z-[60] flex items-center justify-center p-5"
    >
      <button
        type="button"
        aria-label="Close email options"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-sm"
      />
      <div className="liquid-glass relative w-full max-w-sm rounded-2xl p-6 text-center shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="brass-focus absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold leading-none text-stone-500 transition hover:text-black dark:text-stone-400 dark:hover:text-white"
        >
          ×
        </button>
        <p className="text-sm font-extrabold tracking-[-0.01em]">Send email</p>
        <p className="mt-1 truncate text-xs font-medium text-stone-500 dark:text-stone-400">
          {EMAIL}
        </p>
        <div className="mt-4 space-y-2.5">
          <a
            href={EMAIL_GMAIL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brass-focus brass-play flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 hover:-translate-y-px hover:brightness-105 active:translate-y-0"
          >
            <GmailIcon className="h-5 w-5" />
            Open in Gmail
          </a>
          <a
            href={EMAIL_MAILTO}
            className="brass-focus liquid-glass flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-stone-700 transition duration-300 hover:-translate-y-px dark:text-stone-100"
          >
            Default email app
            <ExternalIcon />
          </a>
          <button
            type="button"
            onClick={copyAddress}
            className="brass-focus flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-stone-500 ring-1 ring-inset ring-neutral-900/15 transition hover:text-black dark:text-stone-400 dark:ring-white/20 dark:hover:text-white"
          >
            {copied ? "Copied ✓" : "Copy address"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document === "undefined" ||
      document.documentElement.classList.contains("dark")
  );
  const [marqueePaused, setMarqueePaused] = useState(false);
  const [bannerFailed, setBannerFailed] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("rss-theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-clip bg-[#f4f4f5] text-stone-900 antialiased transition-colors dark:bg-[#1c1917] dark:text-stone-100"
    >
      {/* static neutral background (light) / grey (dark) — no animation */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4f4f5] to-[#e4e4e7] dark:from-[#292524] dark:via-[#1c1917] dark:to-[#0c0a09]" />
        <div className="bg-brass-glow absolute inset-0" />
        <div className="bg-static-grey absolute inset-0" />
        <div className="bg-noise absolute inset-0" />
      </div>

      {/* Fixed liquid-glass top bar — name stays visible on scroll */}
      <header className="liquid-glass-header sticky top-0 z-50">
        <div className="mx-auto flex h-14 w-full max-w-md items-center justify-between gap-3 px-5 md:max-w-4xl md:px-8 lg:max-w-5xl">
          <a
            href="#top"
            className="brass-focus flex items-center gap-2.5 truncate text-sm font-extrabold tracking-[-0.02em] md:text-base"
          >
            <span
              aria-hidden="true"
              className="brass-play flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold"
            >
              RS
            </span>
            <span className="truncate">Maj. Rishabh Singh Sambyal</span>
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="brass-focus text-[13px] font-semibold text-stone-600 transition hover:text-black dark:text-stone-300 dark:hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="brass-focus liquid-glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stone-700 transition hover:-translate-y-px hover:text-black hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] active:translate-y-0 dark:text-stone-200 dark:hover:text-white"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-md px-5 pb-10 pt-6 md:max-w-4xl md:px-8 md:pt-10 lg:max-w-5xl">
        {/* Hero — 2-col on desktop */}
        <section className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10" aria-label="Intro">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 bg-neutral-900/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-700 dark:border-white/20 dark:bg-white/10 dark:text-neutral-200">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                Veteran &bull; Speaker
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-600" />
                Mentor
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="hero-title mt-4 text-[2rem] font-extrabold leading-[1.12] md:text-[2.9rem] lg:text-[3.4rem] pb-[0.12em] -mb-[0.12em]">
                <span className="block hero-courage">Courage</span>
                <span className="block">Character</span>
                <span className="block hero-commitment">Commitment</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mx-auto mt-4 max-w-md text-[15px] font-medium leading-[1.7] text-stone-600 text-pretty dark:text-stone-300 lg:mx-0">
                Maj. Rishabh Singh Sambyal shares lessons from service,
                leadership, discipline and nation-first living through talks
                and conversations on Instagram and YouTube.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#connect"
                  className="brass-focus brass-play inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0"
                >
                  Connect
                  <ExternalIcon />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hero yt video — no Reveal wrapper so it can never get stuck at opacity 0 */}
          <div className="w-full max-w-[380px] md:max-w-[420px] mx-auto lg:ml-auto lg:mr-0 justify-self-center lg:justify-self-end">
            <div aria-label="Featured video">
              <a
                href={MAIN_VIDEO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brass-focus liquid-glass group block overflow-hidden rounded-2xl transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.35)]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-stone-950">
                  <img
                    src={thumb(MAIN_VIDEO.id)}
                    alt="Featured YouTube video — opens in a new tab"
                    className="relative z-10 h-full w-full object-cover saturate-[1.04] transition duration-500 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="brass-play flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-sm transition duration-300 group-hover:scale-110 md:h-14 md:w-14">
                      <PlayIcon className="h-6 w-6" />
                    </span>
                  </div>
                  <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-black/55 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md">
                    Featured
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0 text-left">
                    <p className="truncate text-sm font-semibold tracking-[-0.01em]">
                      {MAIN_VIDEO.title}
                    </p>
                    <p className="truncate text-xs font-medium text-stone-500 dark:text-stone-400">
                      {MAIN_VIDEO.meta}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-900/5 px-2.5 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-inset ring-neutral-900/15 dark:bg-white/10 dark:text-neutral-200 dark:ring-white/20">
                    YouTube <ExternalIcon />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-8 scroll-mt-20" aria-label="About">
          <Reveal>
            <h2 className="eyebrow mb-3 text-[13px] font-bold uppercase tracking-[0.18em]">
              About
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="liquid-glass relative overflow-hidden rounded-2xl p-5 text-[15px] font-medium leading-[1.75] tracking-[-0.005em] text-stone-700 text-pretty dark:text-stone-200 md:p-7 md:text-base">
              <IndiaMapOutline />
              <div className="relative z-10">
                <p>
                  I am Major Rishabh Singh Sambyal. I served in the Indian
                  Army, including with the Jat Regiment and 4 Para (Special
                  Forces). I also had the opportunity to serve as an
                  Aide-de-Camp (ADC) to the President of India.
                </p>
                <p className="mt-3">
                  My experience in the Army gave me the opportunity to work
                  with different teams, take responsibility, make decisions,
                  and work towards common objectives. It also taught me the
                  importance of learning from experience and from the people
                  around me.
                </p>
                <p className="mt-3">
                  My aim is to provide guidance and mentorship to young,
                  passionate individuals who are willing to learn and take
                  responsibility. I want to help them identify their strengths,
                  improve their skills, and gradually take on greater
                  responsibilities. I want to create an environment where
                  people can learn from their experiences, learn from each
                  other, and grow together.
                </p>
                <p className="mt-3">
                  For me, leadership is about giving people the right
                  direction, supporting them when needed, and helping them
                  become capable of taking responsibility themselves.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Videos */}
        <section id="videos" className="mt-10 scroll-mt-20" aria-label="More videos">
          <Reveal>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="eyebrow flex-1 text-[13px] font-bold uppercase tracking-[0.18em]">
                On YouTube
              </h2>
              <button
                type="button"
                onClick={() => setMarqueePaused((p) => !p)}
                aria-pressed={marqueePaused}
                aria-label={marqueePaused ? "Play video carousel" : "Pause video carousel"}
                title={marqueePaused ? "Play" : "Pause"}
                className="brass-focus liquid-glass flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-600 transition hover:text-black dark:text-stone-300 dark:hover:text-white"
              >
                {marqueePaused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon />}
              </button>
            </div>
          </Reveal>

          {/* Two moving carousels — opposite directions, infinite repeat */}
          <div className={`space-y-4 ${marqueePaused ? "marquee-paused" : ""}`}>
            <div className="marquee-mask -mx-5 overflow-hidden px-5 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] md:-mx-8 md:px-8">
              <div className="marquee-track flex w-max gap-4 py-1">
                {[...VIDEOS, ...VIDEOS].map((v, i) => (
                  <VideoCard key={`row1-${v.id}-${i}`} v={v} hidden={i >= VIDEOS.length} />
                ))}
              </div>
            </div>

            <div className="marquee-mask -mx-5 overflow-hidden px-5 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] md:-mx-8 md:px-8">
              <div className="marquee-track-reverse flex w-max gap-4 py-1">
                {[...VIDEOS].reverse().concat([...VIDEOS].reverse()).map((v, i) => (
                  <VideoCard key={`row2-${v.id}-${i}`} v={v} hidden={i >= VIDEOS.length} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Socials */}
        <section id="connect" className="mt-10 scroll-mt-20" aria-label="Social links">
          <Reveal>
            <h2 className="eyebrow mb-4 text-[13px] font-bold uppercase tracking-[0.18em]">
              Connect
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {SOCIALS.map((s, i) => (
              <Reveal key={s.short} delay={i * 60}>
                {s.short === "gmail" ? (
                  <button
                    type="button"
                    onClick={() => setEmailOpen(true)}
                    aria-label="Email — choose how to send"
                    aria-haspopup="dialog"
                    className="brass-focus group flex w-full cursor-pointer items-center gap-3 rounded-2xl p-3 text-left transition duration-300 hover:-translate-y-0.5 md:flex-col md:p-4 md:text-center liquid-glass hover:shadow-[0_14px_28px_-14px_rgba(0,0,0,0.25)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900/5 text-stone-700 ring-1 ring-inset ring-neutral-900/10 transition duration-300 group-hover:text-black md:h-16 md:w-16 dark:bg-white/10 dark:text-stone-100 dark:ring-white/15 dark:group-hover:text-white">
                      <SocialIcon short={s.short} className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                    <span className="min-w-0 text-left md:text-center">
                      <span className="block text-sm font-bold tracking-[-0.01em]">
                        {s.label}
                      </span>
                      <span className="block break-all text-[11px] font-medium leading-snug text-stone-500 dark:text-stone-400">
                        {s.handle}
                      </span>
                    </span>
                  </button>
                ) : (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} — opens in a new tab`}
                    className="brass-focus group flex items-center gap-3 rounded-2xl p-3 transition duration-300 hover:-translate-y-0.5 md:flex-col md:p-4 md:text-center liquid-glass hover:shadow-[0_14px_28px_-14px_rgba(0,0,0,0.25)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-900/5 text-stone-700 ring-1 ring-inset ring-neutral-900/10 transition duration-300 group-hover:text-black md:h-16 md:w-16 dark:bg-white/10 dark:text-stone-100 dark:ring-white/15 dark:group-hover:text-white">
                      <SocialIcon short={s.short} className="h-6 w-6 md:h-7 md:w-7" />
                    </span>
                    <span className="min-w-0 text-left md:text-center">
                      <span className="block text-sm font-bold tracking-[-0.01em]">
                        {s.label}
                      </span>
                      <span className="block truncate text-xs font-medium text-stone-500 dark:text-stone-400">
                        {s.handle}
                      </span>
                    </span>
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* Bottom image banner */}
        <section className="mt-10" aria-label="Gallery image">
          <Reveal>
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-stone-800 via-stone-950 to-black shadow-[0_18px_50px_-20px_rgba(0,0,0,0.4)] sm:h-[480px] md:h-[560px] dark:border-white/15">
              {!bannerFailed && (
                <img
                  src={BOTTOM_IMAGE}
                  alt="Maj Rishabh Singh Sambyal"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setBannerFailed(true)}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/55 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur-md md:right-6 md:top-6">
                Jai Hind
              </span>
              <div className="absolute inset-x-0 bottom-0 flex justify-end p-5 md:p-7">
                <blockquote className="max-w-md text-right">
                  <p className="text-balance text-lg font-extrabold leading-snug tracking-[-0.02em] text-white md:text-2xl">
                    “Service before self.”
                  </p>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </section>

        <div aria-hidden="true" className="brass-divider mt-10" />

        <footer className="mt-6 flex flex-col items-center gap-4 pb-2 text-center">
          <nav aria-label="Footer" className="flex items-center gap-5 text-xs font-semibold text-stone-500 dark:text-stone-400">
            {NAV_LINKS.map((n) => (
              <a key={n.href} href={n.href} className="brass-focus transition hover:text-black dark:hover:text-white">
                {n.label}
              </a>
            ))}
            <a
              href="#top"
              aria-label="Back to top"
              className="brass-focus liquid-glass flex h-8 w-8 items-center justify-center rounded-full text-stone-600 transition hover:-translate-y-0.5 hover:text-black dark:text-stone-300 dark:hover:text-white"
            >
              <ArrowUpIcon />
            </a>
          </nav>
        </footer>
      </main>

      <EmailDialog open={emailOpen} onClose={() => setEmailOpen(false)} />
    </div>
  );
}
