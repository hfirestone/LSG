"use client";
import { useReveal } from "./useReveal";

const services = [
  {
    num: "01",
    title: "Contract Negotiation",
    desc: "We secure the most competitive contracts across the NBA, EuroLeague, ACB, and leagues worldwide. Every deal is negotiated with your long-term career in mind.",
  },
  {
    num: "02",
    title: "Marketing & Brand",
    desc: "From endorsement deals and shoe contracts to social media strategy and public appearances — we build your brand as carefully as we build your career.",
  },
  {
    num: "03",
    title: "Financial Planning",
    desc: "Strategic wealth management and tax planning tailored to the unique financial circumstances of professional athletes. We protect what you earn.",
  },
  {
    num: "04",
    title: "Legal Counsel",
    desc: "Expert legal review of every contract, sponsorship deal, and dispute. You sign nothing without our full confidence.",
  },
  {
    num: "05",
    title: "Career Development",
    desc: "From training camp placement to film review and league connections — we invest in your development, not just your contract.",
  },
  {
    num: "06",
    title: "Global Network",
    desc: "Relationships across every major basketball market — NBA, EuroLeague, G League, Asia, Middle East — means more doors open for our clients.",
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
            Full-spectrum<br />
            <span style={{ fontStyle: "italic", color: "var(--grey)" }}>representation.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal py-10 px-8 transition-colors duration-300 group cursor-default"
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
