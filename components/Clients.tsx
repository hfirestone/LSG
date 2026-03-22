"use client";
import { useReveal } from "./useReveal";

const conferences = ["ACC", "Big Ten", "Big 12", "SEC", "Pac-12", "Big East", "Mountain West", "AAC"];

export default function Clients() {
  const ref = useReveal();

  return (
    <section id="clients" style={{ background: "var(--white)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--grey)" }}>Roster</p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              Our athletes.<br />
              <span style={{ fontStyle: "italic", color: "var(--grey)" }}>Their journey.</span>
            </h2>
            <p className="mt-8 text-sm leading-relaxed max-w-sm" style={{ color: "var(--grey)", fontWeight: 300 }}>
              We represent NCAA basketball players from programs across the country — from freshman standouts to seniors preparing for the draft. All client details are available upon request.
            </p>
            <div className="mt-8" style={{ borderTop: "1px solid var(--light-grey)", paddingTop: "2rem" }}>
              <a
                href="#contact"
                className="text-xs tracking-[0.18em] uppercase inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-50"
                style={{ fontWeight: 500 }}
              >
                Inquire about representation <span>→</span>
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay">
            {/* Conference tags */}
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--grey)" }}>Conferences We Recruit From</p>
            <div className="flex flex-wrap gap-3 mb-12">
              {conferences.map((c) => (
                <span
                  key={c}
                  className="text-xs tracking-[0.12em] uppercase px-4 py-2 border"
                  style={{ borderColor: "var(--light-grey)", color: "var(--grey)" }}
                >
                  {c}
                </span>
              ))}
            </div>

            {/* What we look for */}
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--grey)" }}>What We Look For</p>
            <div className="space-y-0">
              {[
                "High-level NCAA competitors",
                "NBA Draft prospects",
                "Transfer portal candidates",
                "NIL-ready athletes",
                "Players with pro potential",
                "Character-first competitors",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-4 transition-colors duration-200 px-2"
                  style={{ borderBottom: "1px solid var(--light-grey)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--off-white)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <span className="text-sm font-medium tracking-wide">{item}</span>
                  <span className="text-xs" style={{ color: "var(--light-grey)" }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
