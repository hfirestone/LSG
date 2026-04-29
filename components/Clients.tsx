"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";
import { useState, useEffect } from "react";

const athletes = [
  {
    name: "Preston Edmead",
    position: "Guard · NC State",
    achievements: ["CAA Rookie of the Year"],
    transfer: "Hofstra → NC State (ACC)",
    service: "Transfer Portal · NIL",
    story: "After earning CAA Rookie of the Year honors at Hofstra, Preston trusted LSG to navigate his transfer to NC State — one of the premier programs in the ACC. We handled every step of the process to make sure he landed in the right place to take his game to the next level.",
    photos: ["/preston-hofstra.jpg", "/preston-ncstate.jpg"],
    photoAlts: ["Preston Edmead at Hofstra", "Preston Edmead at NC State"],
  },
  {
    name: "Will Sydnor",
    position: "Guard · Rutgers",
    achievements: ["MAAC Rookie of the Year", "All-MAAC Second Team"],
    transfer: "Manhattan → Rutgers (Big Ten)",
    service: "Transfer Portal · NIL",
    story: "Will announced himself as one of the best freshmen in the MAAC, earning Rookie of the Year and All-MAAC Second Team honors at Manhattan. LSG guided his transfer to Rutgers, placing him in the Big Ten and setting him up for a breakout next chapter.",
    photos: ["/will-jaspers.jpg", "/will-rutgers.jpg"],
    photoAlts: ["Will Sydnor at Manhattan", "Will Sydnor at Rutgers"],
  },
];

export default function Clients() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-advance every 10 seconds
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((a) => (a + 1) % athletes.length);
          return 0;
        }
        return p + 1;
      });
    }, 100); // increments every 100ms → 100 steps × 100ms = 10s

    return () => clearInterval(interval);
  }, [active]);

  // Manual click resets the timer
  const handleClick = (i: number) => {
    setActive(i);
    setProgress(0);
  };

  const athlete = athletes[active];

  return (
    <section id="clients" style={{ background: "var(--black)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">

        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Roster</p>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--white)" }}>
            Our athletes.<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>Their journey.</span>
          </h2>
        </div>

        {/* Carousel tabs with progress bar */}
        <div className="reveal flex gap-0 mb-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {athletes.map((a, i) => (
            <button
              key={a.name}
              onClick={() => handleClick(i)}
              className="relative px-8 py-4 text-sm tracking-wide transition-all duration-200 text-left overflow-hidden"
              style={{
                background: active === i ? "rgba(255,255,255,0.06)" : "transparent",
                color: active === i ? "var(--white)" : "rgba(255,255,255,0.35)",
                fontWeight: active === i ? 500 : 400,
                borderBottom: active === i ? "2px solid transparent" : "2px solid transparent",
                marginBottom: "-1px",
              }}
            >
              {a.name}
              {/* Progress bar at bottom of active tab */}
              {active === i && (
                <div
                  className="absolute bottom-0 left-0 h-0.5 transition-none"
                  style={{ width: `${progress}%`, background: "var(--white)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Athlete card */}
        <div
          key={athlete.name}
          className="grid md:grid-cols-2 gap-0 overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.1)", borderTop: "none" }}
        >
          {/* Photos */}
          <div className="grid grid-cols-2" style={{ minHeight: "480px" }}>
            {athlete.photos.map((src, i) => (
              <div key={i} className="relative overflow-hidden" style={{ minHeight: "480px" }}>
                <Image
                  src={src}
                  alt={athlete.photoAlts[i]}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-12" style={{ background: "#111" }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Featured Client
            </p>
            <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              {athlete.name}
            </h3>
            <p className="mt-2 text-sm tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
              {athlete.position}
            </p>

            <div className="mt-8 space-y-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)", minWidth: "100px" }}>Achievements</span>
                <div className="flex flex-col gap-1">
                  {athlete.achievements.map((a) => (
                    <span key={a} className="text-sm font-medium" style={{ color: "var(--white)" }}>{a}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)", minWidth: "100px" }}>Transfer</span>
                <span className="text-sm font-medium" style={{ color: "var(--white)" }}>{athlete.transfer}</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5 flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)", minWidth: "100px" }}>Service</span>
                <span className="text-sm font-medium" style={{ color: "var(--white)" }}>{athlete.service}</span>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
              {athlete.story}
            </p>

            <div className="mt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                Additional clients available upon request
              </p>
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-3 mt-6 justify-center">
          {athletes.map((_, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                background: active === i ? "var(--white)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
