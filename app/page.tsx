import Link from "next/link";
import Navbar from "./components/Navbar";
import NoShowCalculator from "./components/NoShowCalculator";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 230 }}>
      <div
        className="relative rounded-[2.6rem] shadow-2xl"
        style={{
          background: "#111827",
          padding: 5,
          boxShadow: "0 32px 80px rgba(10,37,64,0.28)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute left-0 right-0 flex justify-center z-10"
          style={{ top: 5, pointerEvents: "none" }}
        >
          <div
            className="rounded-b-2xl"
            style={{ width: 72, height: 22, background: "#111827" }}
          />
        </div>
        {/* Screen */}
        <div
          className="rounded-[2.2rem] bg-white overflow-hidden"
          style={{ minHeight: 440 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function BookingPhoneContent() {
  return (
    <div className="pt-7">
      <div className="px-4 py-4 flex items-center gap-3" style={{ background: NAVY }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
          style={{ background: "#1A6B9A" }}
        >
          MH
        </div>
        <div>
          <p className="text-white text-xs font-bold leading-tight">Maya&apos;s Hair Studio</p>
          <p className="text-xs" style={{ color: "#7EBEDF" }}>Hairstylist · Brooklyn, NY</p>
        </div>
      </div>
      <div className="px-4 py-4">
        <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#9CA3AF" }}>
          Choose a time — Thu Apr 24
        </p>
        <div className="grid grid-cols-3 gap-1.5 mb-4">
          {[
            { time: "10:00am", sel: false },
            { time: "11:30am", sel: true },
            { time: "1:00pm", sel: false },
          ].map((s) => (
            <div
              key={s.time}
              className="py-2.5 rounded-xl text-center text-xs font-semibold"
              style={
                s.sel
                  ? { background: NAVY, color: "#fff" }
                  : { background: LIGHT_BLUE, color: NAVY }
              }
            >
              {s.time}
            </div>
          ))}
        </div>
        <div
          className="rounded-xl px-3 py-3 mb-4"
          style={{ background: LIGHT_BLUE }}
        >
          <p className="text-xs font-bold mb-0.5" style={{ color: NAVY }}>
            Haircut &amp; Style
          </p>
          <p className="text-xs text-gray-400">45 min · $10 deposit</p>
        </div>
        <div
          className="w-full py-3 rounded-xl text-center text-xs font-extrabold text-white"
          style={{ background: NAVY }}
        >
          Reserve
        </div>
      </div>
    </div>
  );
}

function PaymentPhoneContent() {
  return (
    <div className="pt-7 px-4 pb-6 flex flex-col items-center text-center">
      <div className="h-10" />
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: LIGHT_BLUE }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill={NAVY} />
          <path
            d="M7.5 14.5l5 5 8-10"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-xs font-bold mb-1" style={{ color: NAVY }}>
        Payment Confirmed
      </p>
      <p className="font-extrabold mb-1" style={{ color: NAVY, fontSize: 28 }}>
        $10.00
      </p>
      <p className="text-xs text-gray-400 mb-5">Deposit received</p>
      <div
        className="w-full rounded-xl p-3 text-left mb-3"
        style={{ background: LIGHT_BLUE }}
      >
        <p className="text-xs font-bold mb-1" style={{ color: NAVY }}>
          Appointment Details
        </p>
        <p className="text-xs text-gray-500">Haircut &amp; Style · $45</p>
        <p className="text-xs text-gray-500">Thursday · 11:30am</p>
        <p className="text-xs text-gray-500">Maya&apos;s Hair Studio</p>
      </div>
      <div
        className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-white"
        style={{ background: NAVY }}
      >
        Add to Calendar
      </div>
    </div>
  );
}

function SMSPhoneContent() {
  return (
    <div className="pt-7">
      <div
        className="px-4 py-3 border-b text-center"
        style={{ borderColor: "#E8F0F8" }}
      >
        <p className="text-xs font-bold" style={{ color: NAVY }}>
          Messages
        </p>
        <p className="text-xs text-gray-400">Stackd Reminder</p>
      </div>
      <div className="px-4 py-5 space-y-4">
        <p className="text-center text-xs text-gray-300">Today 9:00 AM</p>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 text-xs leading-relaxed"
          style={{
            background: LIGHT_BLUE,
            color: NAVY,
            maxWidth: "88%",
          }}
        >
          Hi Sarah! Reminder: your appointment with Maya&apos;s Hair Studio is
          tomorrow at 11:30am. Reply STOP to opt out.
        </div>
        <p className="text-center text-xs text-gray-300">Today 10:30 AM</p>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 text-xs leading-relaxed"
          style={{
            background: LIGHT_BLUE,
            color: NAVY,
            maxWidth: "88%",
          }}
        >
          Just 1 hour until your 11:30am appointment! See you soon ✓
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Your own booking page in minutes",
    description:
      "Pick your services, set your hours, and you're live. Clients get a clean, professional page that works on any device.",
    Phone: BookingPhoneContent,
  },
  {
    title: "Deposit collection built in from day one",
    description:
      "Collect a client deposit the moment an appointment is confirmed. Powered by Stripe, with no manual invoicing or follow-up required.",
    Phone: PaymentPhoneContent,
  },
  {
    title: "Automated reminders that reduce cancellations",
    description:
      "SMS reminders go out 24 hours and 1 hour before every appointment, keeping clients informed and reducing last-minute cancellations.",
    Phone: SMSPhoneContent,
  },
];

const steps = [
  {
    number: "01",
    title: "Create your page",
    description:
      "Add your services, pricing, and availability. Your Stackd booking page is live the moment you finish setup.",
  },
  {
    number: "02",
    title: "Share your link",
    description:
      "Drop your link in your Instagram bio, send it in a text, or add it to your website. One link does everything.",
  },
  {
    number: "03",
    title: "Streamline your appointments",
    description:
      "Clients select a time, confirm with a deposit, and receive an automated confirmation. You focus on the work — Stackd handles the rest.",
  },
];

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

function Cell({
  val,
  col,
}: {
  val: boolean | string;
  col: "solo" | "studio" | "business";
}) {
  const isNavy = col === "business";
  if (typeof val === "string") {
    return (
      <td
        className="py-3.5 px-4 text-center text-xs font-semibold"
        style={{ color: isNavy ? "#7EBEDF" : NAVY }}
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
            isNavy
              ? { background: "rgba(255,255,255,0.14)", color: "#fff" }
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

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.6s ease 0.05s both; }
        .anim-2 { animation: fadeUp 0.6s ease 0.18s both; }
        .anim-3 { animation: fadeUp 0.6s ease 0.32s both; }
        .anim-4 { animation: fadeUp 0.6s ease 0.46s both; }
        .cta-primary { transition: opacity 0.15s ease, transform 0.15s ease; }
        .cta-primary:hover { opacity: 0.9; transform: scale(1.02); }
        .plan-card { transition: transform 0.2s ease; }
        .plan-card:hover { transform: translateY(-4px); }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: #fff; }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="py-24 md:py-32" style={{ backgroundColor: LIGHT_BLUE }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="anim-1 inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(10,37,64,0.08)", color: NAVY }}
            >
              30-day free trial
            </div>

            <h1
              className="anim-2 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
              style={{ color: NAVY }}
            >
              Your booking page.<br />
              Your brand.<br />
              One link.
            </h1>

            <p className="anim-3 text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
              Stackd is the booking and payment app for service businesses.
              Beautiful on every device. Set up in minutes.
            </p>

            <div className="anim-4 flex flex-col items-center gap-4 mb-16">
              <Link
                href="/signup"
                className="cta-primary font-bold px-8 py-4 rounded-xl text-base text-white"
                style={{
                  backgroundColor: NAVY,
                  boxShadow: "0 4px 16px rgba(10,37,64,0.25)",
                }}
              >
                Get started free →
              </Link>
              <p className="text-xs text-gray-400">
                Works on iPhone, Android, and web. No technical skills needed.
              </p>
            </div>

            {/* Hero phone mockup */}
            <div className="anim-4">
              <PhoneMockup>
                <BookingPhoneContent />
              </PhoneMockup>
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              Features
            </p>
            <h2
              className="text-4xl font-extrabold text-center mb-20 tracking-tight"
              style={{ color: NAVY }}
            >
              Everything your business needs
            </h2>

            <div className="space-y-28">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="grid md:grid-cols-2 gap-16 items-center"
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <h3
                      className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight"
                      style={{ color: NAVY }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{f.description}</p>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <PhoneMockup>
                      <f.Phone />
                    </PhoneMockup>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IS STACKD FOR ────────────────────────────────────────── */}
        <section className="py-24" style={{ background: NAVY }}>
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#7EBEDF" }}
            >
              Who is Stackd for
            </p>
            <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight text-white">
              Built for both sides of the appointment
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left — businesses */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#7EBEDF" }}
                >
                  For service businesses
                </p>
                <h3 className="text-xl font-extrabold text-white mb-6">
                  Your all-in-one booking system
                </h3>
                <ul className="space-y-3">
                  {[
                    "Hairstylists",
                    "Personal trainers",
                    "Interview coaches",
                    "Tutors",
                    "Photographers",
                    "Consultants",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: "#1A6B9A", color: "#fff" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — clients */}
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#7EBEDF" }}
                >
                  For their clients
                </p>
                <h3 className="text-xl font-extrabold text-white mb-6">
                  A booking experience they&apos;ll love
                </h3>
                <ul className="space-y-3">
                  {[
                    "Easy online booking",
                    "Secure payments",
                    "Automatic reminders",
                    "No more back and forth texts",
                    "Works on any device",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ background: "#1A6B9A", color: "#fff" }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-28" style={{ backgroundColor: LIGHT_BLUE }}>
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              How it works
            </p>
            <h2
              className="text-4xl font-extrabold text-center mb-20 tracking-tight"
              style={{ color: NAVY }}
            >
              Up and running in minutes
            </h2>

            <div className="grid md:grid-cols-3 gap-10 relative">
              <div
                className="hidden md:block absolute h-px"
                style={{
                  top: 32,
                  left: "calc(16.66% + 28px)",
                  right: "calc(16.66% + 28px)",
                  background:
                    "linear-gradient(to right, rgba(10,37,64,0.15), rgba(10,37,64,0.35), rgba(10,37,64,0.15))",
                }}
              />
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-extrabold mx-auto mb-7"
                    style={{ background: NAVY, color: "#fff" }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: NAVY }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NO-SHOW CALCULATOR ───────────────────────────────────────── */}
        <NoShowCalculator />

        {/* ── PRICING ──────────────────────────────────────────────────── */}
        <section id="pricing" className="py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              Pricing
            </p>
            <h2
              className="text-4xl font-extrabold text-center mb-4 tracking-tight"
              style={{ color: NAVY }}
            >
              Simple, honest pricing
            </h2>
            <p className="text-center text-gray-500 mb-3 text-base max-w-2xl mx-auto">
              Solo is $50/month. Studio works out to $19 per team member. Business works out to just $7 per team member per month.
            </p>
            <p className="text-center text-gray-400 mb-16 text-sm">
              All plans include a 30-day free trial. No credit card required. Cancel anytime.
            </p>

            {/* Plan cards */}
            <div className="grid md:grid-cols-3 gap-6 items-center mb-16">
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
                      color: plan.highlight ? "rgba(255,255,255,0.45)" : "#9CA3AF",
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
                      color: plan.highlight ? "rgba(255,255,255,0.6)" : "#6B7280",
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
                              ? { background: "rgba(255,255,255,0.14)", color: "#fff" }
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
                      color: plan.highlight ? "rgba(255,255,255,0.35)" : "#9CA3AF",
                    }}
                  >
                    30-day free trial. No credit card required. Cancel anytime.
                  </p>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div
              className="overflow-x-auto rounded-2xl border"
              style={{ borderColor: "#E8F0F8" }}
            >
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th
                      className="py-4 px-5 text-left text-xs font-bold uppercase tracking-wider text-gray-400"
                      style={{ background: "#F8FAFB" }}
                    >
                      Feature
                    </th>
                    <th
                      className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider"
                      style={{ background: "#F8FAFB", color: NAVY }}
                    >
                      Solo
                    </th>
                    <th
                      className="py-4 px-4 text-center text-xs font-bold uppercase tracking-wider"
                      style={{ background: "#F8FAFB", color: NAVY }}
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
                      style={{ background: i % 2 === 0 ? "#fff" : "#FAFBFC" }}
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

        {/* ── CTA BAND ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to grow your business?
            </h2>
            <p className="mb-10" style={{ color: "#7EBEDF" }}>
              Join service professionals already using Stackd to save time and
              reduce no-shows.
            </p>
            <Link
              href="/signup"
              className="cta-primary inline-block font-bold px-8 py-4 rounded-xl text-sm"
              style={{ background: LIGHT_BLUE, color: NAVY }}
            >
              Start your 30-day free trial
            </Link>
            <p className="text-xs mt-5" style={{ color: "#4A7A9B" }}>
              No credit card required. Cancel anytime.
            </p>
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
                <Link href="/#features" className="footer-link">
                  Features
                </Link>
                <Link href="/pricing" className="footer-link">
                  Pricing
                </Link>
                <Link href="/examples/hairstylist" className="footer-link">
                  See Example
                </Link>
                <Link href="/signup" className="footer-link">
                  Sign Up
                </Link>
                <Link href="#" className="footer-link">
                  Privacy
                </Link>
                <Link href="#" className="footer-link">
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
