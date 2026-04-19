import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-8"
      style={{ background: "var(--off-white)", borderTop: "1px solid var(--light-grey)" }}
    >
      <Image
        src="/logo.png"
        alt="Lerner Sports Group"
        width={100}
        height={42}
        className="object-contain mb-4 md:mb-0"
      />
      <p className="text-xs tracking-widest" style={{ color: "var(--grey)" }}>
        © {new Date().getFullYear()} Lerner Sports Group. All rights reserved.
      </p>
      <p className="text-xs tracking-widest mt-4 md:mt-0" style={{ color: "var(--grey)" }}>
        Elite Basketball Representation
      </p>
    </footer>
  );
}
