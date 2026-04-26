"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";

export default function NoShowCalculator() {
  const [price, setPrice] = useState(85);
  const [noShows, setNoShows] = useState(4);
  const monthly = price * noShows;

  return (
    <section className="py-32" style={{ backgroundColor: "#F5F5F7" }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
          style={{ color: "#86868B" }}
        >
          No-Show Calculator
        </p>
        <h2
          className="font-bold mb-4 tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(34px,5vw,48px)", color: "#1D1D1F" }}
        >
          How much are no-shows<br />costing you?
        </h2>
        <p className="text-[17px] leading-relaxed mb-16" style={{ color: "#6E6E73" }}>
          Move the sliders to see your real numbers.
        </p>

        <div className="space-y-10 mb-12 text-left">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[15px] font-semibold" style={{ color: "#1D1D1F" }}>
                Average service price
              </label>
              <span
                className="text-[13px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: NAVY, color: "#fff" }}
              >
                ${price}
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={300}
              step={5}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: NAVY }}
            />
            <div className="flex justify-between text-[12px] mt-2" style={{ color: "#86868B" }}>
              <span>$20</span>
              <span>$300</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-[15px] font-semibold" style={{ color: "#1D1D1F" }}>
                No-shows per month
              </label>
              <span
                className="text-[13px] font-bold px-3 py-1.5 rounded-full"
                style={{ background: NAVY, color: "#fff" }}
              >
                {noShows}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={noShows}
              onChange={(e) => setNoShows(Number(e.target.value))}
              className="w-full cursor-pointer"
              style={{ accentColor: NAVY }}
            />
            <div className="flex justify-between text-[12px] mt-2" style={{ color: "#86868B" }}>
              <span>1</span>
              <span>20</span>
            </div>
          </div>
        </div>

        <div
          className="rounded-2xl py-12 px-8 mb-8"
          style={{
            background: "linear-gradient(160deg, #0A2540 0%, #0E3A66 100%)",
            boxShadow: "0 24px 64px rgba(10,37,64,0.22)",
          }}
        >
          <p className="text-[15px] font-medium mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
            You are losing
          </p>
          <p
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(52px,8vw,72px)", lineHeight: 1 }}
          >
            ${monthly.toLocaleString()}
          </p>
          <p className="text-[15px] font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
            per month to no-shows
          </p>
        </div>

        <p className="text-[15px] leading-relaxed mb-10" style={{ color: "#6E6E73" }}>
          Stackd Solo would pay for itself in just one recovered appointment.
        </p>

        <Link
          href="/signup"
          className="inline-block font-semibold px-8 py-3.5 rounded-full text-white text-[15px] transition-opacity hover:opacity-80"
          style={{
            background: NAVY,
            boxShadow: "0 4px 16px rgba(10,37,64,0.20)",
          }}
        >
          Start your 30-day free trial
        </Link>
      </div>
    </section>
  );
}
