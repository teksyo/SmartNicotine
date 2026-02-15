import { useState, useEffect, useRef } from "react";

export function ComingSoonPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://smartnicotine-n0nv.onrender.com/api/subscribers",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setError("This email is already on our waitlist!");
        } else if (response.status === 400) {
          setError(data.error || "Please check your information and try again.");
        } else {
          setError("Something went wrong. Please try again later.");
        }
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError("Unable to connect. Please check your internet and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --deep: #0A1628;
          --navy: #0F2440;
          --teal: #00C9A7;
          --teal-light: #00E8C0;
          --teal-glow: rgba(0, 201, 167, 0.12);
          --snuk-white: #F8FAFB;
          --grey: #94A3B8;
          --mid: #1E3A5F;
          --accent: #00FFD1;
          --warm: #FF6B35;
        }

        .snuk-page * { box-sizing: border-box; }

        .snuk-page {
          font-family: 'DM Sans', 'Outfit', sans-serif;
          background: var(--deep);
          color: var(--snuk-white);
          line-height: 1.7;
        }

        /* NAV */
        .snuk-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(10, 22, 40, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 201, 167, 0.08);
        }

        .snuk-nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .snuk-nav-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--teal);
          animation: snukPulse 2.5s ease-in-out infinite;
        }

        @keyframes snukPulse {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .snuk-nav-logo span {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--snuk-white);
          letter-spacing: 0.15em;
        }

        .snuk-nav-cta {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          padding: 0.6rem 1.4rem;
          border-radius: 50px;
          background: var(--teal);
          color: var(--deep);
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .snuk-nav-cta:hover {
          background: var(--teal-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(0, 201, 167, 0.3);
        }

        /* HERO */
        .snuk-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .snuk-hero::before {
          content: '';
          position: absolute;
          top: -40%;
          left: -30%;
          width: 160%;
          height: 160%;
          background: radial-gradient(ellipse at 40% 40%, rgba(0, 201, 167, 0.07) 0%, transparent 55%),
                      radial-gradient(ellipse at 70% 70%, rgba(0, 255, 209, 0.04) 0%, transparent 45%);
          animation: snukDrift 25s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes snukDrift {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-3%, 2%) rotate(1deg); }
        }

        .snuk-hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .snuk-hero-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: snukFadeUp 0.8s ease forwards 0.3s;
        }

        .snuk-hero h1 {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(2.4rem, 6vw, 4.2rem);
          line-height: 1.08;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: snukFadeUp 0.8s ease forwards 0.5s;
        }

        .snuk-hero h1 .snuk-teal { color: var(--teal); }

        .snuk-hero-sub {
          font-size: 1.15rem;
          color: var(--grey);
          max-width: 560px;
          margin: 0 auto 2.5rem;
          line-height: 1.7;
          opacity: 0;
          animation: snukFadeUp 0.8s ease forwards 0.7s;
        }

        .snuk-hero-cta-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: snukFadeUp 0.8s ease forwards 0.9s;
        }

        .snuk-btn-primary {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          background: var(--teal);
          color: var(--deep);
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .snuk-btn-primary:hover {
          background: var(--teal-light);
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(0, 201, 167, 0.35);
        }

        .snuk-btn-secondary {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.9rem 2.2rem;
          border-radius: 50px;
          background: transparent;
          color: var(--snuk-white);
          text-decoration: none;
          border: 1px solid rgba(148, 163, 184, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .snuk-btn-secondary:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: translateY(-2px);
        }

        .snuk-launch-badge {
          display: inline-block;
          margin-top: 2rem;
          font-family: 'Outfit', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--grey);
          opacity: 0;
          animation: snukFadeUp 0.8s ease forwards 1.1s;
        }

        .snuk-launch-badge strong { color: var(--teal); }

        @keyframes snukFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* STAT BAR */
        .snuk-stat-bar {
          background: var(--navy);
          border-top: 1px solid rgba(0, 201, 167, 0.08);
          border-bottom: 1px solid rgba(0, 201, 167, 0.08);
          padding: 3rem 2rem;
        }

        .snuk-stat-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .snuk-stat-item h3 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--teal);
          line-height: 1;
          margin-bottom: 0.4rem;
        }

        .snuk-stat-item p {
          font-size: 0.85rem;
          color: var(--grey);
          line-height: 1.4;
          margin: 0;
        }

        /* SECTIONS */
        .snuk-section {
          padding: 6rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .snuk-section-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 0.75rem;
        }

        .snuk-section-title {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .snuk-section-desc {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--grey);
          max-width: 620px;
          margin-bottom: 3rem;
        }

        /* PROBLEM CARDS */
        .snuk-problem-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .snuk-problem-card {
          background: var(--navy);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .snuk-problem-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 201, 167, 0.15);
        }

        .snuk-problem-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
        }

        .snuk-problem-icon.red { background: rgba(255, 107, 53, 0.12); }
        .snuk-problem-icon.amber { background: rgba(255, 193, 7, 0.12); }
        .snuk-problem-icon.blue { background: rgba(96, 165, 250, 0.12); }

        .snuk-problem-card h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: var(--snuk-white);
        }

        .snuk-problem-card p {
          font-size: 0.9rem;
          color: var(--grey);
          line-height: 1.6;
          margin: 0;
        }

        /* TRUTH SECTION */
        .snuk-truth-section {
          background: var(--navy);
          border-radius: 24px;
          padding: 4rem 3rem;
          margin: 0 auto;
          max-width: 1100px;
          position: relative;
          overflow: hidden;
        }

        .snuk-truth-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 201, 167, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .snuk-truth-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .snuk-truth-content p {
          font-size: 1rem;
          color: var(--grey);
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .snuk-truth-content .snuk-highlight {
          color: var(--teal);
          font-weight: 700;
        }

        .snuk-truth-facts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .snuk-fact-card {
          background: rgba(10, 22, 40, 0.6);
          border: 1px solid rgba(0, 201, 167, 0.1);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .snuk-fact-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 201, 167, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--teal);
          font-size: 1rem;
          font-weight: 700;
        }

        .snuk-fact-card h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          margin-bottom: 0.3rem;
          color: var(--snuk-white);
        }

        .snuk-fact-card p {
          font-size: 0.82rem;
          color: var(--grey);
          line-height: 1.5;
          margin: 0;
        }

        .snuk-fact-source {
          font-size: 0.7rem;
          color: rgba(148, 163, 184, 0.6);
          font-style: italic;
          margin-top: 0.25rem;
        }

        /* STEPS */
        .snuk-steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .snuk-step-card {
          background: var(--navy);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .snuk-step-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 201, 167, 0.2);
        }

        .snuk-step-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 2.5rem;
          color: rgba(0, 201, 167, 0.15);
          line-height: 1;
          margin-bottom: 1rem;
        }

        .snuk-step-card h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
          color: var(--snuk-white);
        }

        .snuk-step-card p {
          font-size: 0.88rem;
          color: var(--grey);
          line-height: 1.6;
          margin: 0;
        }

        /* REWARDS */
        .snuk-rewards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .snuk-reward-card {
          background: var(--navy);
          border: 1px solid rgba(0, 201, 167, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .snuk-reward-card:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 201, 167, 0.25);
        }

        .snuk-reward-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }

        .snuk-reward-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 2.8rem;
          color: var(--teal);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .snuk-reward-card h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--snuk-white);
        }

        .snuk-reward-card p {
          font-size: 0.85rem;
          color: var(--grey);
          line-height: 1.6;
          margin: 0;
        }

        /* BENEFITS */
        .snuk-benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .snuk-benefit-card {
          background: var(--navy);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .snuk-benefit-card:hover { transform: translateY(-4px); }

        .snuk-benefit-card .snuk-time {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 0.75rem;
        }

        .snuk-benefit-card h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          margin-bottom: 0.5rem;
        }

        .snuk-benefit-card p {
          font-size: 0.88rem;
          color: var(--grey);
          line-height: 1.6;
          margin: 0;
        }

        /* IMPACT */
        .snuk-impact-bar {
          background: var(--navy);
          border-top: 1px solid rgba(0, 201, 167, 0.08);
          padding: 4rem 2rem;
          text-align: center;
        }

        .snuk-impact-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: var(--teal);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .snuk-impact-desc {
          font-size: 1.1rem;
          color: var(--grey);
          max-width: 500px;
          margin: 0 auto 2rem;
        }

        .snuk-impact-sub {
          font-size: 0.82rem;
          color: rgba(148, 163, 184, 0.5);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* SIGNUP */
        .snuk-signup-section {
          text-align: center;
          padding: 6rem 2rem;
          position: relative;
        }

        .snuk-signup-section::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(0, 201, 167, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .snuk-signup-box {
          max-width: 520px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .snuk-signup-box .snuk-section-label,
        .snuk-signup-box .snuk-section-title,
        .snuk-signup-box .snuk-section-desc {
          text-align: center;
        }

        .snuk-signup-box .snuk-section-desc {
          max-width: 100%;
        }

        .snuk-signup-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .snuk-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .snuk-signup-form input {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.92rem;
          padding: 0.85rem 1.25rem;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: var(--navy);
          color: var(--snuk-white);
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
        }

        .snuk-signup-form input::placeholder {
          color: rgba(148, 163, 184, 0.5);
        }

        .snuk-signup-form input:focus {
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(0, 201, 167, 0.1);
        }

        .snuk-signup-form button {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.95rem 2rem;
          border-radius: 12px;
          background: var(--teal);
          color: var(--deep);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.03em;
        }

        .snuk-signup-form button:hover {
          background: var(--teal-light);
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(0, 201, 167, 0.3);
        }

        .snuk-signup-form button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .snuk-signup-note {
          font-size: 0.75rem;
          color: rgba(148, 163, 184, 0.5);
          line-height: 1.5;
        }

        .snuk-signup-success {
          text-align: center;
          padding: 2rem;
        }

        .snuk-signup-success h3 {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--teal);
          margin-bottom: 0.75rem;
        }

        .snuk-signup-success p {
          color: var(--grey);
          font-size: 0.95rem;
        }

        .snuk-signup-error {
          background: rgba(255, 100, 100, 0.15);
          border: 1px solid rgba(255, 100, 100, 0.3);
          color: #fca5a5;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
        }

        /* FOOTER */
        .snuk-footer {
          padding: 3rem 2rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .snuk-footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: center;
          margin-bottom: 1rem;
          text-decoration: none;
        }

        .snuk-footer-logo .snuk-nav-dot { width: 8px; height: 8px; }

        .snuk-footer-logo span {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--snuk-white);
          letter-spacing: 0.15em;
        }

        .snuk-footer-tagline {
          font-size: 0.8rem;
          color: var(--grey);
          margin-bottom: 1.5rem;
        }

        .snuk-footer-legal {
          font-size: 0.7rem;
          color: rgba(148, 163, 184, 0.4);
          line-height: 1.6;
        }

        .snuk-footer-legal a {
          color: rgba(148, 163, 184, 0.5);
          text-decoration: none;
        }

        .snuk-footer-legal a:hover { color: var(--teal); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .snuk-nav { padding: 0.8rem 1.25rem; }
          .snuk-stat-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .snuk-section { padding: 4rem 1.25rem; }
          .snuk-truth-grid { grid-template-columns: 1fr; gap: 2rem; }
          .snuk-truth-section { padding: 2.5rem 1.5rem; }
          .snuk-form-row { grid-template-columns: 1fr; }
        }

        /* SCROLL ANIMATIONS */
        .snuk-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .snuk-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="snuk-page">
        {/* NAV */}
        <nav className="snuk-nav">
          <a href="#" className="snuk-nav-logo">
            <div className="snuk-nav-dot" />
            <span>SNUK</span>
          </a>
          <a href="#signup" className="snuk-nav-cta">Join the Waitlist</a>
        </nav>

        {/* HERO */}
        <div className="snuk-hero">
          <div className="snuk-hero-content">
            <div className="snuk-hero-label">Launching April 2026</div>
            <h1>Keep the Nicotine.<br /><span className="snuk-teal">Lose the Smoke.</span></h1>
            <p className="snuk-hero-sub">SNUK is a free, AI-powered programme that helps you switch from cigarettes to safer nicotine alternatives. No judgement. No pressure. Just science, support, and a smarter way forward.</p>
            <div className="snuk-hero-cta-group">
              <a href="#signup" className="snuk-btn-primary">Join the Waitlist &#8594;</a>
              <a href="#how" className="snuk-btn-secondary">How It Works</a>
            </div>
            <div className="snuk-launch-badge">100% free programme &middot; Launching <strong>April 2026</strong></div>
          </div>
        </div>

        {/* STAT BAR */}
        <div className="snuk-stat-bar">
          <div className="snuk-stat-grid">
            <div className="snuk-stat-item snuk-reveal" ref={addRevealRef}>
              <h3>5.3m</h3>
              <p>UK adults still smoke<br />(ONS, 2024)</p>
            </div>
            <div className="snuk-stat-item snuk-reveal" ref={addRevealRef}>
              <h3>80,000+</h3>
              <p>UK deaths from smoking<br />every single year</p>
            </div>
            <div className="snuk-stat-item snuk-reveal" ref={addRevealRef}>
              <h3>95%</h3>
              <p>Less harmful: smoke-free<br />alternatives vs cigarettes</p>
            </div>
          </div>
        </div>

        {/* THE PROBLEM */}
        <section className="snuk-section">
          <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>The Problem</div>
          <div className="snuk-section-title snuk-reveal" ref={addRevealRef}>Nicotine isn't killing you.<br />Smoking is.</div>
          <div className="snuk-section-desc snuk-reveal" ref={addRevealRef}>Most people think nicotine is the villain. It's not. It's the combustion, the tar, the 7,000+ chemicals released when tobacco burns. Nicotine itself is a stimulant, comparable to caffeine. The delivery method is what matters.</div>

          <div className="snuk-problem-cards">
            <div className="snuk-problem-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-problem-icon red">&#128684;</div>
              <h3>Cigarettes burn at 900&deg;C</h3>
              <p>That combustion creates tar, carbon monoxide, and thousands of toxic chemicals. This is what causes cancer, heart disease, and lung disease. Not the nicotine.</p>
            </div>
            <div className="snuk-problem-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-problem-icon amber">&#129300;</div>
              <h3>Willpower alone fails 95% of the time</h3>
              <p>Quitting cold turkey has a 5% success rate. People don't fail because they're weak. They fail because nobody taught them there's a smarter way to get their nicotine.</p>
            </div>
            <div className="snuk-problem-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-problem-icon blue">&#128161;</div>
              <h3>Safer alternatives already exist</h3>
              <p>Heated tobacco, nicotine pouches, and other smoke-free products deliver nicotine without combustion. Public Health England confirmed they are at least 95% less harmful than cigarettes.</p>
            </div>
          </div>
        </section>

        {/* NICOTINE TRUTH */}
        <div style={{ padding: "0 2rem" }}>
          <div className="snuk-truth-section snuk-reveal" ref={addRevealRef}>
            <div className="snuk-truth-grid">
              <div className="snuk-truth-content">
                <div className="snuk-section-label">The Science</div>
                <div className="snuk-section-title">What if the only way to get caffeine was setting fire to coffee beans and inhaling the smoke?</div>
                <p>That's essentially what 5.3 million UK smokers are doing with nicotine every day. They're not addicted to smoking. They're addicted to nicotine, and smoking is just the worst possible delivery method.</p>
                <p>Modern science has solved this problem. <span className="snuk-highlight">Smoke-free nicotine products remove the combustion</span> and deliver what your body actually wants, without the 7,000+ chemicals that come from burning tobacco.</p>
                <p>SNUK exists to educate you on the options, based on peer-reviewed research, and coach you through the switch at your own pace.</p>
              </div>
              <div className="snuk-truth-facts">
                <div className="snuk-fact-card">
                  <div className="snuk-fact-icon">&#10003;</div>
                  <div>
                    <h4>Nicotine is not a carcinogen</h4>
                    <p>The Royal College of Physicians confirms nicotine itself does not cause cancer. It's the smoke that kills.</p>
                    <div className="snuk-fact-source">Royal College of Physicians, 2016</div>
                  </div>
                </div>
                <div className="snuk-fact-card">
                  <div className="snuk-fact-icon">&#10003;</div>
                  <div>
                    <h4>95% less harmful</h4>
                    <p>Public Health England's landmark review found smoke-free alternatives are at least 95% less harmful than cigarettes.</p>
                    <div className="snuk-fact-source">Public Health England, 2015 (reaffirmed 2022)</div>
                  </div>
                </div>
                <div className="snuk-fact-card">
                  <div className="snuk-fact-icon">&#10003;</div>
                  <div>
                    <h4>Cognitive and physical benefits</h4>
                    <p>Studies show nicotine can improve focus, memory, and reaction time. It may also have neuroprotective properties.</p>
                    <div className="snuk-fact-source">Psychopharmacology journal, multiple studies</div>
                  </div>
                </div>
                <div className="snuk-fact-card">
                  <div className="snuk-fact-icon">&#10003;</div>
                  <div>
                    <h4>Switching works</h4>
                    <p>Smokers who switch completely to smoke-free alternatives see measurable health improvements within weeks.</p>
                    <div className="snuk-fact-source">NHS / OHID guidance, ongoing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="snuk-section" id="how">
          <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>How It Works</div>
          <div className="snuk-section-title snuk-reveal" ref={addRevealRef}>Your AI coach.<br />Your schedule. Your pace.</div>
          <div className="snuk-section-desc snuk-reveal" ref={addRevealRef}>SNUK pairs you with a personal AI voice coach that learns how you think, what triggers your cravings, and what motivates you. It's like having a knowledgeable friend in your pocket, available whenever you need support.</div>

          <div className="snuk-steps-grid">
            <div className="snuk-step-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-step-number">01</div>
              <h3>Sign Up Free</h3>
              <p>Join the programme at no cost. No credit card. No hidden fees. Just your name, email, and a desire to make a change.</p>
            </div>
            <div className="snuk-step-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-step-number">02</div>
              <h3>Meet Your AI Coach</h3>
              <p>Your personal AI voice coach gets to know you. Your smoking history, your triggers, your goals. Every conversation is private and tailored to you.</p>
            </div>
            <div className="snuk-step-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-step-number">03</div>
              <h3>Weekly Check-ins</h3>
              <p>Four quick conversations a month with your AI coach. Stay on track, get science-backed insights, and earn &pound;30 in monthly credits for smoke-free products.</p>
            </div>
            <div className="snuk-step-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-step-number">04</div>
              <h3>Switch Smarter</h3>
              <p>Learn about smoke-free alternatives through evidence-based education. Make informed choices. Keep the nicotine, lose the smoke.</p>
            </div>
          </div>
        </section>

        {/* REWARDS */}
        <section className="snuk-section">
          <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>Your Reward</div>
          <div className="snuk-section-title snuk-reveal" ref={addRevealRef}>&pound;30 a month in<br />smoke-free products. Free.</div>
          <div className="snuk-section-desc snuk-reveal" ref={addRevealRef}>Complete just 4 check-ins a month with your AI coach and earn &pound;30 in credits to spend on smoke-free nicotine products. That's it. No catches, no subscriptions, no cost to you.</div>

          <div className="snuk-rewards-grid">
            <div className="snuk-reward-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-reward-icon">&#128172;</div>
              <div className="snuk-reward-number">4</div>
              <h3>Check-ins per month</h3>
              <p>Quick, meaningful conversations with your AI coach. One a week. On your schedule, whenever suits you.</p>
            </div>
            <div className="snuk-reward-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-reward-icon">&#163;</div>
              <div className="snuk-reward-number">&pound;30</div>
              <h3>Monthly credits</h3>
              <p>&pound;30 every month to spend on smoke-free nicotine alternatives. Heated tobacco, nicotine pouches, whatever works for you.</p>
            </div>
            <div className="snuk-reward-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-reward-icon">&#128197;</div>
              <div className="snuk-reward-number">12</div>
              <h3>Month programme</h3>
              <p>A full year of coaching, education, and support. That's up to &pound;360 in free smoke-free products over the programme.</p>
            </div>
          </div>
        </section>

        {/* WHEN YOU SWITCH */}
        <section className="snuk-section">
          <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>When You Switch</div>
          <div className="snuk-section-title snuk-reveal" ref={addRevealRef}>Your body starts<br />recovering immediately.</div>
          <div className="snuk-section-desc snuk-reveal" ref={addRevealRef}>The moment you stop inhaling combustion products, your body begins to repair itself. Here's what the science shows.</div>

          <div className="snuk-benefits-grid">
            <div className="snuk-benefit-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-time">Within 20 Minutes</div>
              <h3>Heart rate drops</h3>
              <p>Your heart rate and blood pressure begin returning to normal levels as carbon monoxide clears from your blood.</p>
            </div>
            <div className="snuk-benefit-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-time">Within 48 Hours</div>
              <h3>Taste and smell return</h3>
              <p>Nerve endings start regenerating. Food tastes better. The world smells different. Small changes, big impact.</p>
            </div>
            <div className="snuk-benefit-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-time">Within 3 Months</div>
              <h3>Lung function improves</h3>
              <p>Circulation gets better. Walking becomes easier. Your lungs start clearing out the damage from years of smoke.</p>
            </div>
            <div className="snuk-benefit-card snuk-reveal" ref={addRevealRef}>
              <div className="snuk-time">Within 1 Year</div>
              <h3>Heart disease risk halves</h3>
              <p>Your risk of coronary heart disease drops to roughly half that of a continuing smoker. Your body is resilient.</p>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <div className="snuk-impact-bar">
          <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>The Bigger Picture</div>
          <div className="snuk-impact-number snuk-reveal" ref={addRevealRef}>44.6 Million</div>
          <div className="snuk-impact-desc snuk-reveal" ref={addRevealRef}>Years of human life that could be saved if UK smokers switched to safer alternatives.</div>
          <div className="snuk-impact-sub snuk-reveal" ref={addRevealRef}>That's the equivalent of 595,000 complete lifespans. This isn't theory. The science exists. The products exist. The only thing missing is education and support. That's what SNUK provides.</div>
        </div>

        {/* SIGNUP */}
        <section className="snuk-signup-section" id="signup">
          <div className="snuk-signup-box">
            <div className="snuk-section-label snuk-reveal" ref={addRevealRef}>Be First In Line</div>
            <div className="snuk-section-title snuk-reveal" ref={addRevealRef}>Join the SNUK waitlist.</div>
            <div className="snuk-section-desc snuk-reveal" ref={addRevealRef}>We launch in April 2026. Leave your details and you'll be first to know when the programme goes live, plus early access to our AI coach.</div>

            {isSubmitted ? (
              <div className="snuk-signup-success">
                <h3>You're on the list.</h3>
                <p>We'll be in touch before launch day. In the meantime, spread the word. Every smoker who switches is a life changed.</p>
              </div>
            ) : (
              <div className="snuk-reveal" ref={addRevealRef}>
                <form className="snuk-signup-form" onSubmit={handleSignup}>
                  {error && <div className="snuk-signup-error">{error}</div>}
                  <div className="snuk-form-row">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value); if (error) setError(""); }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => { setLastName(e.target.value); if (error) setError(""); }}
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (error) setError(""); }}
                    required
                  />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Joining..." : "Get Early Access"}
                  </button>
                </form>
                <p className="snuk-signup-note">We'll only email you about launch updates. No spam, ever. Unsubscribe anytime.</p>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="snuk-footer">
          <a href="#" className="snuk-footer-logo">
            <div className="snuk-nav-dot" />
            <span>SNUK</span>
          </a>
          <p className="snuk-footer-tagline">Smart Nicotine UK &middot; Keep the Nicotine. Lose the Smoke.</p>
          <p className="snuk-footer-legal">
            &copy; 2026 SNUK Ltd. All rights reserved.<br />
            SNUK is an independent educational platform. SNUK does not sell tobacco or nicotine products.<br />
            <a href="#">Privacy Policy</a> &middot; <a href="#">Terms of Service</a>
          </p>
        </footer>
      </div>
    </>
  );
}
