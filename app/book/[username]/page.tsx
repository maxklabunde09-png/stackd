"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const NAVY = "#0A2540";

const slots = [
  { id: 1, time: "9:00 AM", service: "Full Cut & Style", price: 85 },
  { id: 2, time: "11:00 AM", service: "Full Cut & Style", price: 85 },
  { id: 3, time: "2:00 PM", service: "Blowout Only", price: 45 },
  { id: 4, time: "4:30 PM", service: "Full Cut & Style", price: 85 },
];

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block mr-1.5"
      style={{ verticalAlign: "-2px", color: "#86868B" }}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function BookingPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleReserve() {
    if (selected === null) return;
    const slot = slots.find((s) => s.id === selected)!;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slotId: slot.id, service: slot.service, time: slot.time }),
      });
      const { url } = await res.json();
      router.push(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ background: "#FBFBFD" }}>
      <main className="flex-1 max-w-md mx-auto w-full px-6 py-12">

        {/* Avatar + business info */}
        <div className="flex flex-col items-center text-center mb-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
            style={{ background: "linear-gradient(160deg, #0A2540, #0E3A66)", boxShadow: "0 8px 20px rgba(10,37,64,0.22)" }}
          >
            <span className="text-white text-lg font-bold tracking-wide">MH</span>
          </div>
          <h1 className="font-bold tracking-tight mb-1" style={{ fontSize: 26, color: "#1D1D1F" }}>
            Maya&apos;s Hair Studio
          </h1>
          <p style={{ fontSize: 14, color: "#86868B" }}>Minneapolis, MN</p>
        </div>

        {/* Divider */}
        <div className="mb-6" style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />

        {/* Date */}
        <p className="font-medium mb-5" style={{ fontSize: 13, color: "#6E6E73" }}>
          <CalendarIcon />
          Tuesday, April 22
        </p>

        {/* Time slots */}
        <div className="space-y-2.5 mb-8">
          {slots.map((slot) => {
            const isSelected = selected === slot.id;
            return (
              <button
                key={slot.id}
                onClick={() => setSelected(slot.id)}
                className="w-full text-left rounded-2xl px-5 py-4 transition-all duration-150"
                style={
                  isSelected
                    ? {
                        background: "linear-gradient(160deg, #0A2540, #0E3A66)",
                        boxShadow: "0 4px 16px rgba(10,37,64,0.22)",
                        border: "1px solid transparent",
                      }
                    : {
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                      }
                }
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold" style={{ fontSize: 15, color: isSelected ? "#fff" : "#1D1D1F" }}>
                      {slot.time}
                    </p>
                    <p className="mt-0.5" style={{ fontSize: 13, color: isSelected ? "rgba(255,255,255,0.55)" : "#86868B" }}>
                      {slot.service}
                    </p>
                  </div>
                  <span className="font-bold" style={{ fontSize: 17, color: isSelected ? "#fff" : "#1D1D1F" }}>
                    ${slot.price}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deposit note */}
        {selected !== null && (
          <p className="text-center mb-4" style={{ fontSize: 12, color: "#86868B" }}>
            $20 deposit collected now · remainder due at appointment
          </p>
        )}

        {/* CTA button */}
        <button
          disabled={selected === null || loading}
          onClick={handleReserve}
          className="w-full py-4 rounded-full font-semibold transition-all duration-150"
          style={
            selected !== null && !loading
              ? {
                  fontSize: 15,
                  background: "linear-gradient(160deg, #0A2540, #0E3A66)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(10,37,64,0.22)",
                }
              : {
                  fontSize: 15,
                  background: "#F5F5F7",
                  color: "#C7C7CC",
                  cursor: "not-allowed",
                }
          }
        >
          {loading ? "Redirecting…" : "Reserve and pay deposit"}
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-6" style={{ fontSize: 12, color: "#C7C7CC" }}>
        Booked with{" "}
        <span className="font-semibold" style={{ color: NAVY }}>Stackd</span>
        {" "}· Create your own free page
      </footer>
    </div>
  );
}
