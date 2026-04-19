"use client";
import { useReveal } from "./useReveal";

const services = [
  {
    title: "NIL Representation",
    desc: "Maximize your name, image, and likeness opportunities while in school. We negotiate NIL deals, brand partnerships, and endorsements that fit your personal brand and grow your market value.",
  },
  {
    title: "Transfer Portal Guidance",
    desc: "Navigating the transfer portal is one of the most important decisions of your college career. We help you evaluate opportunities, connect with the right programs, and make the move that sets you up for success.",
  },
  {
    title: "Financial Planning",
    desc: "From your first NIL check to your first professional contract — we connect you with trusted financial advisors who specialize in young athletes.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" style={{ background: "#1a1a1a" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="reveal mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Services</p>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--white)" }}>
            Everything you need<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>at every stage.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal py-10 px-8 transition-colors duration-300 cursor-default"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                borderRight: i < services.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              <h3 className="text-base mb-4 font-medium tracking-tight" style={{ color: "var(--white)" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
