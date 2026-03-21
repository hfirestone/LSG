"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #e8e8e6" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Lerner Sports Group"
          width={120}
          height={50}
          className="object-contain"
          priority
        />
      </Link>

      <ul className="hidden md:flex gap-12 list-none">
        {[
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Clients", href: "#clients" },
          { label: "Contact", href: "#contact" },
        ].map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-xs tracking-[0.18em] uppercase transition-colors duration-200"
              style={{ color: "var(--grey)", fontWeight: 400 }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--black)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--grey)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:block text-xs tracking-[0.18em] uppercase px-6 py-3 transition-all duration-200 border border-black hover:bg-black hover:text-white"
        style={{ fontWeight: 500 }}
      >
        Get In Touch
      </a>
    </nav>
  );
}
