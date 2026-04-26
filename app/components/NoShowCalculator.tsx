"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";

export default function NoShowCalculator() {
  const [appts, setAppts] = useState(20);
  const [rate, setRate] = useState(15);
  const [avg, setAvg] = useState(85);

  const noShows = Math.round(appts * rate / 100);
  const lost = noShows * avg;
  const saved = Math.round(lost * 0.94);
  const annual = saved * 12;

  const sliders = [
    { label: "Appointments per month", val: appts, set: setAppts, min: 5, max: 100, step: 1, fmt: (v: number) => `${v}` },
    { label: "Average cancellation rate", val: rate, set: setRate, min: 5, max: 50, step: 1, fmt: (v: number) => `${v}%` },
    { label: "Average service price", val: avg, set: setAvg, min: 30, max: 300, step: 5, fmt: (v: number) => `$${v}` },
  ];

  return (
    <section className="py-32" style={{ background: "#F5F5F7" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>
            ROI Calculator
          </p>
          <h2
            className="font-bold tracking-tight leading-tight"
            style={{ fontSize: "clamp(32px,4.5vw,48px)", color: "#1D1D1F" }}
          >
            How much revenue are you<br />leaving on the table?
          </h2>
        </div>

        <div
          className="rounded-3xl"
          style={{
            background: "#fff",
            boxShadow: "0 4px 40px rgba(0,0,0,0.07)",
            padding: "clamp(28px,5vw,52px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(32px,5vw,64px)",
          }}
        >
          {/* Sliders */}
          <div>
            {sliders.map(({ label, val, set, min, max, step, fmt }) => (
              <div key={label} style={{ marginBottom: 36 }}>
                <div className="flex justify-between items-center mb-3">
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#1D1D1F" }}>{label}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{fmt(val)}</span>
                </div>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={val}
                  onChange={e => set(Number(e.target.value))}
                  className="w-full cursor-pointer"
                  style={{ accentColor: NAVY }}
                />
                <div className="flex justify-between mt-1.5">
                  <span style={{ fontSize: 11, color: "#86868B" }}>{fmt(min)}</span>
                  <span style={{ fontSize: 11, color: "#86868B" }}>{fmt(max)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center gap-5">
            <div className="rounded-2xl p-7" style={{ background: "#FFF3F0" }}>
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
                style={{ color: "#c0392b" }}
              >
                You&apos;re losing every month
              </div>
              <div
                className="font-bold"
                style={{ fontSize: "clamp(40px,6vw,52px)", color: "#c0392b", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                ${lost.toLocaleString()}
              </div>
              <div className="mt-2 text-[13px]" style={{ color: "#e07070" }}>
                {noShows} missed appointments × ${avg} avg
              </div>
            </div>

            <div
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(135deg, #0A2540 0%, #1565c0 100%)" }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-2"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Stackd saves you annually
              </div>
              <div
                className="font-bold text-white"
                style={{ fontSize: "clamp(40px,6vw,52px)", letterSpacing: "-0.04em", lineHeight: 1 }}
              >
                ${annual.toLocaleString()}
              </div>
              <div className="mt-2 text-[13px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                Deposits mean every slot has value
              </div>
            </div>

            <Link
              href="/signup"
              className="block text-center font-semibold py-3.5 rounded-full text-white transition-opacity hover:opacity-80"
              style={{ fontSize: 15, background: NAVY }}
            >
              Start recovering revenue →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
