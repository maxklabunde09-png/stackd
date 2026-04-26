import Link from "next/link";
import Navbar from "../components/Navbar";

const NAVY = "#0A2540";
const SUBTLE = "#F5F5F7";

const plans = [
  {
    name: "Solo",
    price: "$50",
    users: "1 user",
    description: "For independent service providers working alone.",
    features: [
      "Your own Stackd booking page",
      "Built-in Stripe payments and deposits",
      "Automatic SMS reminders",
      "No-show protection",
      "Basic analytics",
      "Works on all devices",
      "Unlimited bookings",
      "Cancel anytime",
    ],
    highlight: false,
    badge: null,
  },
  {
    name: "Studio",
    price: "$99",
    users: "Up to 5 team members",
    description: "For small teams and growing businesses.",
    features: [
      "Everything in Solo",
      "Up to 5 team members with booking pages",
      "Shared calendar view",
      "Team dashboard showing all bookings",
      "Client history across staff",
      "Email support",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Business",
    price: "$175",
    users: "Up to 25 team members",
    description: "For established businesses with large teams.",
    features: [
      "Everything in Studio",
      "Up to 25 team members",
      "Master dashboard with advanced analytics",
      "Busiest days and top earners reporting",
      "Cancellation rate tracking",
      "Team management — add and remove staff",
      "Priority support",
    ],
    highlight: false,
    badge: null,
  },
];

const comparisonRows: Array<{
  label: string;
  solo: boolean | string;
  studio: boolean | string;
  business: boolean | string;
}> = [
  { label: "Stackd booking page", solo: true, studio: true, business: true },
  { label: "Stripe payments & deposits", solo: true, studio: true, business: true },
  { label: "Automatic SMS reminders", solo: true, studio: true, business: true },
  { label: "No-show protection", solo: true, studio: true, business: true },
  { label: "Basic analytics", solo: true, studio: true, business: true },
  { label: "Works on all devices", solo: true, studio: true, business: true },
  { label: "Unlimited bookings", solo: true, studio: true, business: true },
  { label: "Team members", solo: "1", studio: "Up to 5", business: "Up to 25" },
  { label: "Individual team booking pages", solo: false, studio: true, business: true },
  { label: "Shared calendar view", solo: false, studio: true, business: true },
  { label: "Team dashboard", solo: false, studio: true, business: true },
  { label: "Client history across staff", solo: false, studio: true, business: true },
  { label: "Email support", solo: false, studio: true, business: true },
  { label: "Advanced analytics", solo: false, studio: false, business: true },
  { label: "Busiest days & top earners", solo: false, studio: false, business: true },
  { label: "Cancellation rate tracking", solo: false, studio: false, business: true },
  { label: "Team management", solo: false, studio: false, business: true },
  { label: "Priority support", solo: false, studio: false, business: true },
];

const faqs = [
  {
    q: "Can I switch plans?",
    a: "Yes, you can upgrade or downgrade anytime. Changes take effect immediately.",
  },
  {
    q: "What happens after my trial?",
    a: "You will be charged your chosen plan monthly. We'll send a reminder before the trial ends.",
  },
  {
    q: "Is there a contract?",
    a: "No. Cancel anytime with no fees or penalties.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit and debit cards via Stripe.",
  },
  {
    q: "Can I add team members later?",
    a: "Yes — up to 5 on Studio and up to 25 on Business. You can add or remove staff anytime from your dashboard.",
  },
  {
    q: "What is the difference between Studio and Business?",
    a: "Studio is for small teams of up to 5 people. Business adds advanced analytics, full team management, busiest days and top earners reporting, cancellation rate tracking, and priority support for teams up to 25.",
  },
];

function Cell({
  val,
  col,
}: {
  val: boolean | string;
  col: "solo" | "studio" | "business";
}) {
  if (typeof val === "string") {
    return (
      <td className="py-3.5 px-4 text-center text-[13px] font-semibold" style={{ color: "#1D1D1F" }}>
        {val}
      </td>
    );
  }
  return (
    <td className="py-3.5 px-4 text-center">
      {val ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto">
          <circle
            cx="9" cy="9" r="9"
            fill={col === "business" ? NAVY : "rgba(10,37,64,0.1)"}
          />
          <path
            d="M5.5 9.5l2.5 2.5 4-5"
            stroke={col === "business" ? "#fff" : NAVY}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span style={{ color: "#D1D5DB", fontSize: 16 }}>—</span>
      )}
    </td>
  );
}

export default function PricingPage() {
  return (
    <>
      <style>{`
        .cta-primary { transition: opacity 0.15s ease; }
        .cta-primary:hover { opacity: 0.80; }
        .plan-card { transition: transform 0.22s ease; }
        .plan-card:hover { transform: translateY(-4px); }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: rgba(255,255,255,0.85); }
      `}</style>

      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              Pricing
            </p>
            <h1
              className="font-bold tracking-tight mb-5"
              style={{ fontSize: "clamp(40px,6vw,60px)", color: "#1D1D1F" }}
            >
              Simple, honest pricing
            </h1>
            <p className="leading-relaxed mb-3" style={{ fontSize: 19, color: "#6E6E73" }}>
              Solo is $50/month. Studio works out to $19 per team member.
              Business works out to just $7 per team member per month.
            </p>
            <p style={{ fontSize: 14, color: "#86868B" }}>
              All plans include a 30-day free trial. Cancel before day 30 and you won&apos;t be charged.
            </p>
          </div>
        </section>

        {/* ── PLAN CARDS ───────────────────────────────────────────────── */}
        <section className="pb-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-5 items-stretch">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="plan-card rounded-2xl p-8 flex flex-col relative"
                  style={
                    plan.highlight
                      ? {
                          background: "linear-gradient(160deg, #0A2540 0%, #0E3A66 100%)",
                          boxShadow: "0 24px 64px rgba(10,37,64,0.28)",
                        }
                      : {
                          background: "#fff",
                          border: "1px solid rgba(0,0,0,0.08)",
                          boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                        }
                  }
                >
                  {plan.badge && (
                    <div
                      className="absolute top-6 right-6 text-[11px] font-semibold px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-1"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.45)" : "#86868B" }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="text-[12px] mb-5"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.38)" : "#86868B" }}
                  >
                    {plan.users}
                  </p>

                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="font-bold leading-none"
                      style={{ fontSize: 52, color: plan.highlight ? "#fff" : "#1D1D1F" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="mb-1.5"
                      style={{ fontSize: 15, color: plan.highlight ? "rgba(255,255,255,0.38)" : "#86868B" }}
                    >
                      /mo
                    </span>
                  </div>

                  <p
                    className="mb-8"
                    style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.52)" : "#6E6E73" }}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
                          <circle
                            cx="8" cy="8" r="8"
                            fill={plan.highlight ? "rgba(255,255,255,0.12)" : "rgba(10,37,64,0.08)"}
                          />
                          <path
                            d="M5 8.5l2 2 4-4"
                            stroke={plan.highlight ? "#fff" : NAVY}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span
                          style={{
                            fontSize: 14,
                            color: plan.highlight ? "rgba(255,255,255,0.80)" : "#374151",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/signup"
                    className="cta-primary text-[14px] font-semibold text-center py-3.5 rounded-full block mb-3"
                    style={
                      plan.highlight
                        ? { background: "#fff", color: NAVY }
                        : { background: NAVY, color: "#fff" }
                    }
                  >
                    Start free trial
                  </Link>
                  <p
                    className="text-center"
                    style={{ fontSize: 12, color: plan.highlight ? "rgba(255,255,255,0.28)" : "#86868B" }}
                  >
                    30-day free trial. Cancel anytime.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: SUBTLE }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="font-bold text-center mb-14 tracking-tight"
              style={{ fontSize: "clamp(30px,4vw,40px)", color: "#1D1D1F" }}
            >
              Full feature comparison
            </h2>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th
                      className="py-4 px-5 text-left text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: "#EBEBED", color: "#86868B" }}
                    >
                      Feature
                    </th>
                    <th
                      className="py-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: "#EBEBED", color: "#1D1D1F" }}
                    >
                      Solo
                    </th>
                    <th
                      className="py-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: "#EBEBED", color: "#1D1D1F" }}
                    >
                      Studio
                    </th>
                    <th
                      className="py-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-white"
                      style={{ background: NAVY }}
                    >
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} style={{ background: i % 2 === 0 ? "#fff" : "#FAFAFA" }}>
                      <td className="py-3.5 px-5 font-medium" style={{ fontSize: 13, color: "#6E6E73" }}>
                        {row.label}
                      </td>
                      <Cell val={row.solo} col="solo" />
                      <Cell val={row.studio} col="studio" />
                      <Cell val={row.business} col="business" />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-32 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              FAQ
            </p>
            <h2
              className="font-bold text-center mb-16 tracking-tight"
              style={{ fontSize: "clamp(30px,4vw,40px)", color: "#1D1D1F" }}
            >
              Common questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-6"
                  style={{ background: SUBTLE }}
                >
                  <p className="font-semibold mb-2" style={{ fontSize: 15, color: "#1D1D1F" }}>
                    {faq.q}
                  </p>
                  <p className="leading-relaxed" style={{ fontSize: 15, color: "#6E6E73" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────── */}
        <section className="py-32" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-bold text-white mb-5 tracking-tight leading-tight"
              style={{ fontSize: "clamp(32px,5vw,48px)" }}
            >
              Start your 30-day free trial today
            </h2>
            <p className="mb-12" style={{ fontSize: 17, color: "rgba(255,255,255,0.5)" }}>
              Cancel before day 30 and you won&apos;t be charged.
            </p>
            <Link
              href="/signup"
              className="cta-primary inline-block font-semibold px-8 py-3.5 rounded-full"
              style={{ fontSize: 15, background: "#fff", color: NAVY }}
            >
              Get started free
            </Link>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className="border-t py-16"
          style={{ borderColor: "rgba(255,255,255,0.06)", background: "#111" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div>
                <p className="text-[17px] font-bold text-white mb-1">Stackd</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)" }}>
                  The booking platform for service pros.
                </p>
              </div>
              <nav className="flex flex-wrap gap-7" style={{ fontSize: 14, color: "rgba(255,255,255,0.42)" }}>
                <Link href="/#features" className="footer-link">Features</Link>
                <Link href="/pricing" className="footer-link">Pricing</Link>
                <Link href="/examples/hairstylist" className="footer-link">See Example</Link>
                <Link href="/signup" className="footer-link">Sign Up</Link>
                <Link href="#" className="footer-link">Privacy</Link>
                <Link href="#" className="footer-link">Terms</Link>
              </nav>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
                © 2025 Stackd, Inc.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
