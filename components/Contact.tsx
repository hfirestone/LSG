"use client";
import { useReveal } from "./useReveal";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" style={{ background: "var(--black)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="reveal">
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>Contact</p>
            <h2
              className="leading-tight"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                color: "var(--white)",
              }}
            >
              Let&apos;s build your<br />
              <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>career together.</span>
            </h2>
            <p className="mt-8 text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
              Whether you&apos;re looking for representation or want to learn more about what LSG can do for your career, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="reveal reveal-delay space-y-8">
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "2rem" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Email</p>
              <a
                href="mailto:info@lernersportsgroup.com"
                className="text-lg font-light transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--white)" }}
              >
                info@lernersportsgroup.com
              </a>
            </div>

            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "2rem" }}>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Based In</p>
              <p className="text-lg font-light" style={{ color: "var(--white)" }}>United States</p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Markets</p>
              <p className="text-lg font-light" style={{ color: "var(--white)" }}>NBA · Europe · Global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
