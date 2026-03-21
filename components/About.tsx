"use client";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" style={{ background: "var(--white)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--grey)" }}>About</p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Built on trust.<br />
              <span style={{ fontStyle: "italic", color: "var(--grey)" }}>Driven by results.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay space-y-6">
            <p className="leading-relaxed text-base" style={{ color: "var(--grey)", fontWeight: 300 }}>
              Lerner Sports Group was founded with a single mission: to provide professional basketball players with the highest level of personalized representation. We are a boutique agency — which means every client receives direct, dedicated attention from day one.
            </p>
            <p className="leading-relaxed text-base" style={{ color: "var(--grey)", fontWeight: 300 }}>
              We operate across the NBA, EuroLeague, and top leagues worldwide, leveraging deep relationships with clubs, coaches, and general managers to place our clients in the right environments to succeed — on and off the court.
            </p>
            <p className="leading-relaxed text-base" style={{ color: "var(--grey)", fontWeight: 300 }}>
              Our approach is simple: know every client personally, fight for them relentlessly, and build careers that last.
            </p>
            <div className="pt-4" style={{ borderTop: "1px solid var(--light-grey)" }}>
              <a href="#contact"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-3 transition-colors duration-200 hover:opacity-60"
                style={{ fontWeight: 500 }}
              >
                Work with us <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
