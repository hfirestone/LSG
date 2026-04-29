"use client";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" style={{ background: "var(--off-white)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--grey)" }}>Contact</p>
            <h2 className="leading-tight" style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--black)" }}>
              Ready to take<br />
              <span style={{ fontStyle: "italic", color: "var(--grey)" }}>the next step?</span>
            </h2>
            <p className="mt-8 text-sm leading-relaxed max-w-sm" style={{ color: "var(--grey)", fontWeight: 300 }}>
              Whether you&apos;re a current NCAA athlete exploring your options, a parent with questions, or a coach looking to connect — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="reveal reveal-delay space-y-8">
            <div style={{ borderBottom: "1px solid var(--light-grey)", paddingBottom: "2rem" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--grey)" }}>Email</p>
              <a href="mailto:lernersportsgroup@gmail.com" className="text-lg font-light transition-opacity duration-200 hover:opacity-60" style={{ color: "var(--black)" }}>
                lernersportsgroup@gmail.com
              </a>
            </div>
            <div style={{ borderBottom: "1px solid var(--light-grey)", paddingBottom: "2rem" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--grey)" }}>Who We Work With</p>
              <p className="text-lg font-light" style={{ color: "var(--black)" }}>NCAA Athletes & Families</p>
            </div>
            <div style={{ borderBottom: "1px solid var(--light-grey)", paddingBottom: "2rem" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--grey)" }}>Focus</p>
              <p className="text-lg font-light" style={{ color: "var(--black)" }}>NIL · Transfer Portal · Pro Contracts</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--grey)" }}>Based In</p>
              <p className="text-lg font-light" style={{ color: "var(--black)" }}>United States</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
