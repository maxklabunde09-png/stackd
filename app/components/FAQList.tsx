"use client";

import { useState } from "react";

const faqs = [
  { q: "How does the deposit work?", a: "When a client books, they pay a deposit (you choose the amount or %) via Stripe. The deposit is held and applied to the final service. If they no-show, you keep the deposit." },
  { q: "What payment methods do clients see?", a: "Stripe supports credit/debit cards, Apple Pay, and Google Pay — whatever is available on the client's device." },
  { q: "When do I get paid?", a: "Deposits hit your Stripe account instantly. You can set up automatic payouts to your bank — daily, weekly, or monthly." },
  { q: "Can I customize my booking page?", a: "Yes — on Studio and Business plans you can set custom colors, your logo, bio, and service photos." },
  { q: "What happens if I need to cancel an appointment?", a: "You can cancel from your dashboard. Stackd automatically notifies the client and processes any applicable refund per your policy." },
  { q: "Is there a free trial?", a: "Yes — all plans include a 30-day free trial. No credit card required to start." },
];

export default function FAQList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {faqs.map(({ q, a }, i) => (
        <div key={q} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{ width: "100%", textAlign: "left", padding: "22px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: 16, fontWeight: 600, color: "#1D1D1F", paddingRight: 20 }}>{q}</span>
            <span style={{ fontSize: 22, color: "#86868B", flexShrink: 0, transform: open === i ? "rotate(45deg)" : "none", transition: "transform 0.2s ease", display: "block" }}>+</span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: 22, fontSize: 15, color: "#6E6E73", lineHeight: 1.65 }}>{a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
