import Link from "next/link";
import Navbar from "../components/Navbar";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

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
    studio: false,
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
    highlight: false,
    studio: true,
    badge: null,
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
    highlight: true,
    studio: false,
    badge: "Most Popular",
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
      <td
        className="py-3.5 px-4 text-center text-xs font-semibold"
        style={{ color: NAVY }}
      >
        {val}
      </td>
    );
  }
  return (
    <td className="py-3.5 px-4 text-center">
      {val ? (
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold"
          style={
            col === "business"
              ? { background: NAVY, color: "#fff" }
              : { background: LIGHT_BLUE, color: NAVY }
          }
        >
          ✓
        </span>
      ) : (
        <span className="text-gray-300 text-sm">—</span>
      )}
    </td>
  );
}

export default function PricingPage() {
  return (
    <>
      <style>{`
        .cta-primary { transition: opacity 0.15s ease, transform 0.15s ease; }
        .cta-primary:hover { opacity: 0.9; transform: scale(1.02); }
        .plan-card { transition: transform 0.2s ease; }
        .plan-card:hover { transform: translateY(-4px); }
      `}</style>

      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              Pricing
            </p>
            <h1
              className="text-5xl font-extrabold tracking-tight mb-5"
              style={{ color: NAVY }}
            >
              Simple, honest pricing
            </h1>
            <p className="text-gray-500 text-lg mb-3 leading-relaxed">
              Solo is $50/month. Studio works out to $19 per team member.
              Business works out to just $7 per team member per month.
            </p>
            <p className="text-gray-400 text-sm">
              All plans include a 30-day free trial. No credit card required.
              Cancel anytime.
            </p>
          </div>
        </section>

        {/* ── PLAN CARDS ───────────────────────────────────────────────── */}
        <section className="pb-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="plan-card rounded-2xl p-8 flex flex-col relative overflow-hidden"
                  style={
                    plan.highlight
                      ? {
                          background: NAVY,
                          boxShadow: "0 24px 56px rgba(10,37,64,0.3)",
                          transform: "scale(1.04)",
                          zIndex: 1,
                        }
                      : plan.studio
                      ? { background: LIGHT_BLUE, border: "1.5px solid #0A2540" }
                      : { background: "#fff", border: "1.5px solid #0A2540" }
                  }
                >
                  {plan.badge && (
                    <div
                      className="absolute top-6 right-6 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: LIGHT_BLUE, color: NAVY }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: plan.highlight ? "#7EBEDF" : "#9CA3AF" }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="text-xs mb-4"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.45)"
                        : "#9CA3AF",
                    }}
                  >
                    {plan.users}
                  </p>

                  <div className="flex items-end gap-1 mb-2">
                    <span
                      className="text-5xl font-extrabold"
                      style={{ color: plan.highlight ? "#fff" : NAVY }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className="text-base mb-2"
                      style={{ color: plan.highlight ? "#7EBEDF" : "#9CA3AF" }}
                    >
                      /mo
                    </span>
                  </div>

                  <p
                    className="text-sm mb-8"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.6)"
                        : "#6B7280",
                    }}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={
                            plan.highlight
                              ? {
                                  background: "rgba(255,255,255,0.14)",
                                  color: "#fff",
                                }
                              : { background: "rgba(10,37,64,0.1)", color: NAVY }
                          }
                        >
                          ✓
                        </span>
                        <span
                          style={{
                            color: plan.highlight
                              ? "rgba(255,255,255,0.85)"
                              : "#374151",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/signup"
                    className="cta-primary text-sm font-bold text-center py-4 rounded-xl block mb-3"
                    style={
                      plan.highlight
                        ? { background: "#fff", color: NAVY }
                        : { background: NAVY, color: "#fff" }
                    }
                  >
                    Start free trial
                  </Link>
                  <p
                    className="text-center text-xs"
                    style={{
                      color: plan.highlight
                        ? "rgba(255,255,255,0.35)"
                        : "#9CA3AF",
                    }}
                  >
                    30-day free trial. No credit card required. Cancel anytime.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ─────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: LIGHT_BLUE }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-3xl font-extrabold text-center mb-12 tracking-tight"
              style={{ color: NAVY }}
            >
              Full feature comparison
            </h2>
            <div
              className="overflow-x-auto rounded-2xl border"
              style={{ borderColor: "#C8DFF0" }}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th
                      className="py-4 px-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400"
                      style={{ background: "#F0F7FC" }}
                    >
                      Feature
                    </th>
                    <th
                      className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider"
                      style={{ background: "#F0F7FC", color: NAVY }}
                    >
                      Solo
                    </th>
                    <th
                      className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider"
                      style={{ background: "#F0F7FC", color: NAVY }}
                    >
                      Studio
                    </th>
                    <th
                      className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider text-white"
                      style={{ background: NAVY }}
                    >
                      Business
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      style={{ background: i % 2 === 0 ? "#fff" : "#F8FCFF" }}
                    >
                      <td className="py-3.5 px-5 text-sm text-gray-600 font-medium">
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
        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              FAQ
            </p>
            <h2
              className="text-3xl font-extrabold text-center mb-16 tracking-tight"
              style={{ color: NAVY }}
            >
              Common questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-6"
                  style={{ background: LIGHT_BLUE }}
                >
                  <p className="font-bold text-base mb-2" style={{ color: NAVY }}>
                    {faq.q}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Start your 30-day free trial today
            </h2>
            <p className="mb-10" style={{ color: "#7EBEDF" }}>
              No credit card required. No commitment. Cancel anytime.
            </p>
            <Link
              href="/signup"
              className="cta-primary inline-block font-bold px-8 py-4 rounded-xl text-sm"
              style={{ background: LIGHT_BLUE, color: NAVY }}
            >
              Get started free
            </Link>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          className="border-t py-14"
          style={{
            borderColor: "rgba(255,255,255,0.07)",
            background: "#071929",
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div>
                <p className="text-lg font-extrabold text-white mb-1">Stackd</p>
                <p className="text-sm" style={{ color: "#7EBEDF" }}>
                  The booking platform for service pros.
                </p>
              </div>
              <nav
                className="flex flex-wrap gap-8 text-sm"
                style={{ color: "#7EBEDF" }}
              >
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/examples/hairstylist" className="hover:text-white transition-colors">
                  See Example
                </Link>
                <Link href="/signup" className="hover:text-white transition-colors">
                  Sign Up
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </nav>
              <p className="text-xs" style={{ color: "#3D6E8F" }}>
                © 2025 Stackd, Inc.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
