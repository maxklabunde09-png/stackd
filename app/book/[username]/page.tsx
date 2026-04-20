"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const slots = [
  { id: 1, time: "9:00 AM", service: "Full Cut & Style", price: 85 },
  { id: 2, time: "11:00 AM", service: "Full Cut & Style", price: 85 },
  { id: 3, time: "2:00 PM", service: "Blowout Only", price: 45 },
  { id: 4, time: "4:30 PM", service: "Full Cut & Style", price: 85 },
];

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 max-w-lg mx-auto w-full px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Maya's Hair Studio</h1>
          <p className="text-gray-500 text-sm mt-1">Minneapolis, MN</p>
          <p className="text-gray-700 font-medium mt-3">Tuesday, April 22</p>
        </div>

        {/* Time slots */}
        <div className="space-y-3 mb-8">
          {slots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => setSelected(slot.id)}
              className={`w-full text-left rounded-xl border px-5 py-4 transition-all ${
                selected === slot.id
                  ? "border-black bg-black text-white shadow-md"
                  : "border-gray-200 bg-white text-gray-800 hover:border-gray-400"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-base">{slot.time}</p>
                  <p className={`text-sm mt-0.5 ${selected === slot.id ? "text-gray-300" : "text-gray-500"}`}>
                    {slot.service}
                  </p>
                </div>
                <span className="font-bold text-lg">${slot.price}</span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          disabled={selected === null || loading}
          onClick={handleReserve}
          className={`w-full py-4 rounded-xl font-semibold text-base transition-all ${
            selected !== null && !loading
              ? "bg-black text-white hover:bg-gray-800 active:scale-95"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {loading ? "Redirecting…" : "Reserve and pay deposit"}
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400">
        Booked with Stackd &middot; Create your own free page
      </footer>
    </div>
  );
}
