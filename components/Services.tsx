"use client";
import { useReveal } from "./useReveal";

const services = [
  {
    num: "01",
    title: "NBA Draft Preparation",
    desc: "We guide you through every step of the draft process — from deciding whether to declare, to pre-draft workouts, combine preparation, and agent meetings.",
  },
  {
    num: "02",
    title: "NIL Representation",
    desc: "Maximize your name, image, and likeness opportunities while in school. We negotiate NIL deals, brand partnerships, and endorsements that fit your personal brand.",
  },
  {
    num: "03",
    title: "Contract Negotiation",
    desc: "Whether it's an NBA rookie contract, a two-way deal, or a professional contract overseas, we fight to get you the best possible terms.",
  },
  {
    num: "04",
    title: "Transfer Portal Guidance",
    desc: "Navigating the transfer portal is one of the most important decisions of your college career. We help you evaluate opportunities and make the move that's right for you.",
  },
  {
    num: "05",
    title: "Financial Planning",
    desc: "From your first NIL check to your first professional contract — we connect you with trusted financial advisors who specialize in young athletes.",
  },
  {
    num: "06",
    title: "Brand & Marketing",
    desc: "Building your personal brand early is critical. We help develop your social media presence, media strategy, and public profile from day one.",
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" style={{ background: "var(--off-white)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="reveal mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--grey)" }}>Services</p>
          <h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need<br />
            <span style={{ fontStyle: "italic", color: "var(--grey)" }}>at every stage.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal py-10 px-8 transition-colors duration-300 cursor-default"
              style={{
                borderTop: "1px solid var(--light-grey)",
                borderRight: i % 3 !== 2 ? "1px solid var(--light-grey)" : "none",
                transitionDelay: `${i * 0.05}s`,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--white)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
            >
              <div className="text-xs tracking-widest mb-4" style={{ color: "var(--light-grey)", fontFamily: "var(--font-dm-serif)" }}>
                {s.num}
              </div>
              <h3 className="text-base mb-4 font-medium tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--grey)", fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
