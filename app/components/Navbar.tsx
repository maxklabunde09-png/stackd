"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function StackdLogo({ size = 28, dark = false }: { size?: number; dark?: boolean }) {
  const c = dark ? "#fff" : "#111";
  return (
    <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 36 27" fill="none">
      <rect x="0"  y="0"  width="36" height="7" rx="3.5" fill={c} />
      <rect x="4"  y="10" width="28" height="7" rx="3.5" fill={c} opacity="0.65" />
      <rect x="9"  y="20" width="18" height="7" rx="3.5" fill={c} opacity="0.35" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[1000] font-sans transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[60px] flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-[20px] tracking-tight"
          style={{ color: "#111", letterSpacing: "-0.02em" }}
        >
          <StackdLogo size={28} />
          Stackd
        </Link>

        <div
          className="hidden md:flex items-center gap-7"
          style={{ fontSize: 14, color: "#1D1D1F" }}
        >
          <Link href="/#features" className="opacity-70 hover:opacity-100 transition-opacity duration-150">Features</Link>
          <Link href="/pricing" className="opacity-70 hover:opacity-100 transition-opacity duration-150">Pricing</Link>
          <Link href="/#industries" className="opacity-70 hover:opacity-100 transition-opacity duration-150">Industries</Link>
        </div>

        <Link
          href="/signup"
          className="text-[13px] font-semibold text-white px-5 py-2 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#0A2540" }}
        >
          Get started free
        </Link>
      </div>
    </nav>
  );
}
