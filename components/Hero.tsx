"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32 overflow-hidden"
      style={{ background: "var(--off-white)" }}
    >
      {/* Large background LSG watermark */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(18rem, 30vw, 38rem)",
          color: "rgba(0,0,0,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        LSG
      </div>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--light-grey)" }} />

      <div className="relative z-10 max-w-5xl">
        <p className="text-xs tracking-[0.3em] uppercase mb-8 animate-fadeUp" style={{ color: "var(--grey)" }}>
          Lerner Sports Group
        </p>

        <h1
          className="animate-fadeUp-1 leading-none"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(3.5rem, 8vw, 8rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "var(--black)",
          }}
        >
          Your Game.<br />
          <span style={{ fontStyle: "italic", color: "var(--grey)" }}>Your Future.</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row gap-6 md:items-end animate-fadeUp-2">
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--grey)", fontWeight: 300 }}>
            We represent NCAA basketball players preparing for the next level — guiding you through the draft process, NIL opportunities, and your professional career.
          </p>
          <div className="flex gap-4 md:ml-16">
            <a
              href="#about"
              className="text-xs tracking-[0.18em] uppercase px-8 py-4 transition-all duration-200 bg-black text-white hover:bg-gray-800"
              style={{ fontWeight: 500 }}
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.18em] uppercase px-8 py-4 border border-black transition-all duration-200 hover:bg-black hover:text-white"
              style={{ fontWeight: 500 }}
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--light-grey)" }} />
    </section>
  );
}
