"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

export default function NoShowCalculator() {
  const [price, setPrice] = useState(85);
  const [noShows, setNoShows] = useState(4);
  const monthly = price * noShows;

  return (
    <section className="py-28" style={{ backgroundColor: LIGHT_BLUE }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: NAVY }}
        >
          No-Show Calculator
        </p>
        <h2
          className="text-4xl font-extrabold mb-4 tracking-tight"
          style={{ color: NAVY }}
        >
          How much are no-shows costing you?
        </h2>
        <p className="text-gray-500 mb-14 text-base">
          Move the sliders to see your real numbers.
        </p>

        <div className="space-y-10 mb-12 text-left">
          {/* Slider 1 — price */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold" style={{ color: NAVY }}>
                Average service price
              </label>
              <span
                className="text-sm font-extrabold px-3 py-1 rounded-lg"
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
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: NAVY }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>$20</span>
              <span>$300</span>
            </div>
          </div>

          {/* Slider 2 — no-shows */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold" style={{ color: NAVY }}>
                No-shows per month
              </label>
              <span
                className="text-sm font-extrabold px-3 py-1 rounded-lg"
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
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: NAVY }}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>1</span>
              <span>20</span>
            </div>
          </div>
        </div>

        {/* Result */}
        <div
          className="rounded-2xl py-10 px-8 mb-8"
          style={{ background: NAVY }}
        >
          <p className="text-white text-base font-medium mb-3">
            You are losing
          </p>
          <p
            className="text-white font-extrabold mb-3"
            style={{ fontSize: 56, lineHeight: 1 }}
          >
            ${monthly.toLocaleString()}
          </p>
          <p className="text-white text-base font-medium" style={{ color: "#A8D4EF" }}>
            per month to no-shows
          </p>
        </div>

        <p className="text-gray-600 mb-10 text-base">
          Stackd Solo would pay for itself in just one recovered appointment.
        </p>

        <Link
          href="/signup"
          className="inline-block font-bold px-8 py-4 rounded-xl text-white text-sm"
          style={{
            background: NAVY,
            boxShadow: "0 4px 16px rgba(10,37,64,0.25)",
          }}
        >
          Start your 30-day free trial
        </Link>
      </div>
    </section>
  );
}
