"use client";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" style={{ background: "var(--black)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>About</p>
            <h2 className="leading-tight" style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--white)" }}>
              Maximize your value<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>while you play.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay space-y-6">
            <p className="leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              Lerner Sports Group was built for the college athlete. Our focus is simple: help you earn as much as possible while you're in school, protect your interests, and set you up for long-term success — on your terms.
            </p>
            <p className="leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              Through our network of NCAA coaches and brand representatives, we connect athletes with NIL opportunities that are the right fit — deals that reflect who you are, build your brand, and put real money in your pocket while you compete.
            </p>
            <p className="leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
              Our approach is personal. We take on a select number of clients so that every athlete gets our full attention — not a junior agent, not an intern. You.
            </p>
            <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <a href="#contact" className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-3 transition-colors duration-200 hover:opacity-60" style={{ fontWeight: 500, color: "var(--white)" }}>
                Start the conversation <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
