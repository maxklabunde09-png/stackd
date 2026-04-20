"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block mr-1.5 text-gray-400"
      style={{ verticalAlign: "-2px" }}
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
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <main className="flex-1 max-w-md mx-auto w-full px-6 py-10">

        {/* Avatar + business info */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-emerald-800 flex items-center justify-center mb-4 shadow-sm">
            <span className="text-white text-xl font-bold tracking-wide">MH</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Maya&apos;s Hair Studio
          </h1>
          <p className="text-gray-400 text-sm mt-1">Minneapolis, MN</p>
        </div>

        {/* Divider */}
        <hr className="border-gray-100 mb-6" />

        {/* Date */}
        <p className="text-sm font-medium text-gray-500 mb-4">
          <CalendarIcon />
          Tuesday, April 22
        </p>

        {/* Time slots */}
        <div className="space-y-3 mb-8">
          {slots.map((slot) => {
            const isSelected = selected === slot.id;
            return (
              <button
                key={slot.id}
                onClick={() => setSelected(slot.id)}
                className={`w-full text-left rounded-2xl border px-5 py-4 transition-all duration-150 ${
                  isSelected
                    ? "border-emerald-700 bg-emerald-700 text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-800 hover:border-emerald-400 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-base">{slot.time}</p>
                    <p className={`text-sm mt-0.5 ${isSelected ? "text-emerald-100" : "text-gray-400"}`}>
                      {slot.service}
                    </p>
                  </div>
                  <span className={`font-bold text-lg ${isSelected ? "text-white" : "text-gray-700"}`}>
                    ${slot.price}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deposit note */}
        {selected !== null && (
          <p className="text-xs text-gray-400 text-center mb-4">
            $20 deposit collected now · remainder due at appointment
          </p>
        )}

        {/* CTA button */}
        <button
          disabled={selected === null || loading}
          onClick={handleReserve}
          className={`w-full py-4 rounded-2xl font-semibold text-base transition-all duration-150 ${
            selected !== null && !loading
              ? "bg-emerald-700 text-white hover:bg-emerald-800 active:scale-95 shadow-sm"
              : "bg-gray-100 text-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? "Redirecting…" : "Reserve and pay deposit"}
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-300 tracking-wide">
        Booked with Stackd &middot; Create your own free page
      </footer>
    </div>
  );
}
