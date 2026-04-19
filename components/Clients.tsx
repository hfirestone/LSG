"use client";
import { useReveal } from "./useReveal";
import Image from "next/image";

export default function Clients() {
  const ref = useReveal();

  return (
    <section id="clients" style={{ background: "var(--black)" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-8 md:px-16 py-28">

        <div className="reveal mb-16">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Roster</p>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, letterSpacing: "-0.02em", color: "var(--white)" }}>
            Our athletes.<br />
            <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>Their journey.</span>
          </h2>
        </div>

        {/* Preston Edmead feature */}
        <div className="reveal grid md:grid-cols-2 gap-0 overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Photo column */}
          <div className="relative" style={{ minHeight: "500px" }}>
            <div className="grid grid-cols-2 h-full">
              <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
                <Image
                  src="/preston-hofstra.jpg"
                  alt="Preston Edmead at Hofstra"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative overflow-hidden" style={{ minHeight: "500px" }}>
                <Image
                  src="/preston-ncstate.jpg"
                  alt="Preston Edmead at NC State"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col justify-center p-12" style={{ background: "#111" }}>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Featured Client
            </p>
            <h3 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 400, color: "var(--white)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Preston Edmead
            </h3>
            <p className="mt-2 text-sm tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
              Guard · NC State
            </p>

            <div className="mt-8 space-y-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.3)", minWidth: "80px" }}>Achievement</span>
                <span className="text-sm font-medium" style={{ color: "var(--white)" }}>CAA Rookie of the Year</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.3)", minWidth: "80px" }}>Transfer</span>
                <span className="text-sm font-medium" style={{ color: "var(--white)" }}>Hofstra → NC State (ACC)</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.3)", minWidth: "80px" }}>Service</span>
                <span className="text-sm font-medium" style={{ color: "var(--white)" }}>Transfer Portal · NIL</span>
              </div>
            </div>

            <p className="mt-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
              After earning CAA Rookie of the Year honors at Hofstra, Preston trusted LSG to navigate his transfer to NC State — one of the premier programs in the ACC. We handled every step of the process to make sure he landed in the right place to take his game to the next level.
            </p>

            <div className="mt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
              <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
                Additional clients available upon request
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
