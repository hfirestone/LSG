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
              From college courts<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>to the pros.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay space-y-6">
            {[
              "Lerner Sports Group specializes in representing NCAA basketball players through every stage of their transition to professional basketball. We understand the unique pressures and opportunities that come with being a college athlete — and we're here to help you navigate them.",
              "From maximizing your NIL potential while in school, to preparing for the NBA Draft, to securing your first professional contract — we provide the guidance, relationships, and expertise to help you make the right decisions at every step.",
              "Our approach is personal. We take on a select number of clients so that every athlete gets our full attention — not a junior agent, not an intern. You.",
            ].map((p, i) => (
              <p key={i} className="leading-relaxed text-base" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>{p}</p>
            ))}
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
