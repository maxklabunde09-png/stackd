import Link from "next/link";
import Navbar from "./components/Navbar";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

const stats = [
  { value: "2,400+", label: "Businesses" },
  { value: "98%", label: "Show-up Rate" },
  { value: "47,000+", label: "Bookings Completed" },
  { value: "4.9 / 5", label: "Average Rating" },
];

const features = [
  {
    icon: "📅",
    title: "Live availability, always",
    description:
      "Clients book directly into your calendar. No back-and-forth, no double-bookings — just appointments that fit your real schedule.",
  },
  {
    icon: "💳",
    title: "Deposits collected at booking",
    description:
      "Require a deposit via Stripe when a client books. Every appointment is backed by real commitment before you pick up your tools.",
  },
  {
    icon: "🔔",
    title: "Automated SMS reminders",
    description:
      "Reminders go out 24 hours and 1 hour before every appointment — so clients show up and you keep your hard-earned revenue.",
  },
];

const steps = [
  {
    number: "01",
    title: "Set your availability",
    description:
      "Choose your working hours, services, and deposit amount. Takes less than 5 minutes to go live.",
  },
  {
    number: "02",
    title: "Share your booking link",
    description:
      "Your personalized link goes on your Instagram bio, website, or anywhere clients will find you.",
  },
  {
    number: "03",
    title: "Get booked and paid",
    description:
      "Clients pick a time, pay the deposit, and get a confirmation instantly. You just show up.",
  },
];

const testimonials = [
  {
    quote:
      "Before Stackd, I was texting every client to confirm appointments one by one. Now my chair is full and I haven't chased a single person in two months. The deposit feature alone paid for itself the first week.",
    name: "Maya Robinson",
    role: "Hairstylist · New York, NY",
    initials: "MR",
    accentBg: "#1A6B9A",
  },
  {
    quote:
      "I used to lose $200–$400 a week to no-shows. Stackd dropped that to almost zero. My clients respect the booking because they've already put skin in the game. I can't imagine running my training business without it.",
    name: "Carlos Mendez",
    role: "Personal Trainer · Austin, TX",
    initials: "CM",
    accentBg: "#145E8A",
  },
  {
    quote:
      "As an interview coach, my clients are already anxious — the last thing they need is a clunky booking experience. Stackd is clean, fast, and professional. It sets the right tone before we even meet.",
    name: "Priya Kapoor",
    role: "Interview Coach · San Francisco, CA",
    initials: "PK",
    accentBg: "#0E5278",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Everything you need to get started.",
    features: [
      "1 booking page",
      "Unlimited appointments",
      "Email confirmations",
      "Basic analytics dashboard",
    ],
    cta: "Start for free",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For pros who want zero no-shows.",
    features: [
      "Everything in Free",
      "Stripe deposit payments",
      "SMS reminders via Twilio",
      "Advanced analytics",
      "Custom branding",
      "Priority support",
    ],
    cta: "Start Pro — 14 days free",
    highlight: true,
    badge: "Most Popular",
  },
];

const phoneServices = [
  { name: "Haircut & Style", price: "$45", time: "45 min", selected: false },
  { name: "Full Color", price: "$120", time: "2 hr", selected: true },
  { name: "Blowout", price: "$55", time: "30 min", selected: false },
];

const phoneSlots = ["9:00am", "10:30am", "12:00pm", "2:00pm", "3:30pm", "5:00pm"];

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
          50%       { transform: translateY(-16px) rotate(-1.5deg); }
        }
        .anim-1 { animation: fadeUp 0.65s ease 0.08s both; }
        .anim-2 { animation: fadeUp 0.65s ease 0.22s both; }
        .anim-3 { animation: fadeUp 0.65s ease 0.38s both; }
        .phone-float { animation: float 5.5s ease-in-out infinite; }
        .feat-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .feat-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 28px 52px rgba(10,37,64,0.13);
        }
        .cta-btn {
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .cta-btn:hover {
          transform: scale(1.035);
          box-shadow: 0 12px 32px rgba(10,37,64,0.32);
        }
        .outline-btn {
          transition: background 0.18s ease, color 0.18s ease;
        }
        .outline-btn:hover {
          background: #0A2540;
          color: #fff;
        }
        .plan-card {
          transition: transform 0.22s ease;
        }
        .plan-card:hover {
          transform: translateY(-4px);
        }
        .footer-link {
          transition: color 0.15s ease;
        }
        .footer-link:hover { color: #fff; }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
        <Navbar />

        {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          className="relative flex items-center"
          style={{ minHeight: "92vh" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 65% 65% at 72% 48%, ${LIGHT_BLUE} 0%, transparent 68%)`,
            }}
          />

          <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center w-full">
            {/* ── Left copy */}
            <div>
              <div
                className="anim-1 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
                style={{ backgroundColor: LIGHT_BLUE, color: NAVY }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#18B981",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Loved by 2,400+ service pros
              </div>

              <h1
                className="anim-2 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
                style={{ color: NAVY }}
              >
                Book more clients.<br />
                Chase zero of them.
              </h1>

              <p className="anim-2 text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
                Stackd gives hairstylists, trainers, and coaches a stunning
                booking page with built-in payments and SMS reminders. Set it up
                in 5 minutes.
              </p>

              <div className="anim-3 flex flex-wrap gap-4">
                <Link
                  href="/#pricing"
                  className="cta-btn inline-block font-bold px-8 py-4 rounded-xl text-base text-white"
                  style={{
                    backgroundColor: NAVY,
                    boxShadow: `0 8px 24px rgba(10,37,64,0.28)`,
                  }}
                >
                  Get started free
                </Link>
                <Link
                  href="/book/maya"
                  className="outline-btn inline-block font-bold px-8 py-4 rounded-xl text-base border-2"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  See a live page →
                </Link>
              </div>

              <p className="anim-3 text-sm text-gray-400 mt-5">
                No credit card required. Free forever on the starter plan.
              </p>
            </div>

            {/* ── Right: Phone mockup */}
            <div className="hidden md:flex justify-center items-center">
              <div
                className="phone-float relative"
                style={{ width: 288, height: 572 }}
              >
                {/* Phone shell */}
                <div
                  className="absolute inset-0 rounded-[3rem]"
                  style={{
                    background: NAVY,
                    boxShadow: `0 48px 96px rgba(10,37,64,0.42), 0 0 0 1.5px rgba(255,255,255,0.08) inset`,
                  }}
                />
                {/* Dynamic island / notch */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    top: 14,
                    width: 90,
                    height: 26,
                    background: "#000",
                    zIndex: 10,
                  }}
                />
                {/* Screen */}
                <div
                  className="absolute overflow-hidden"
                  style={{
                    inset: 6,
                    borderRadius: "2.55rem",
                    background: "#fff",
                    zIndex: 5,
                  }}
                >
                  {/* Profile header */}
                  <div
                    className="px-5 pt-14 pb-5"
                    style={{ background: LIGHT_BLUE }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="rounded-full flex items-center justify-center text-white text-sm font-extrabold shrink-0"
                        style={{ width: 46, height: 46, background: NAVY }}
                      >
                        MJ
                      </div>
                      <div>
                        <p
                          className="font-extrabold text-sm"
                          style={{ color: NAVY }}
                        >
                          Maya Johnson
                        </p>
                        <p className="text-xs text-gray-500">
                          Hairstylist · New York, NY
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Book your appointment below
                    </p>
                  </div>

                  {/* Services */}
                  <div className="px-5 pt-4">
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-3"
                      style={{ color: "#9CA3AF" }}
                    >
                      Services
                    </p>
                    {phoneServices.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-center justify-between mb-2 px-3 py-2.5 rounded-xl"
                        style={{
                          background: s.selected ? LIGHT_BLUE : "#F9FAFB",
                          border: s.selected
                            ? `1.5px solid ${NAVY}`
                            : "1.5px solid transparent",
                        }}
                      >
                        <div>
                          <p
                            className="text-xs font-semibold"
                            style={{ color: NAVY }}
                          >
                            {s.name}
                          </p>
                          <p className="text-xs text-gray-400">{s.time}</p>
                        </div>
                        <span
                          className="text-xs font-bold"
                          style={{ color: NAVY }}
                        >
                          {s.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Time slots */}
                  <div className="px-5 pt-3">
                    <p
                      className="text-xs font-bold uppercase tracking-wider mb-3"
                      style={{ color: "#9CA3AF" }}
                    >
                      Today&apos;s Slots
                    </p>
                    <div className="grid grid-cols-3 gap-1.5">
                      {phoneSlots.map((t, i) => (
                        <div
                          key={t}
                          className="text-center py-2 rounded-xl text-xs font-semibold"
                          style={{
                            background: i === 2 ? NAVY : LIGHT_BLUE,
                            color: i === 2 ? "#fff" : NAVY,
                          }}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book button */}
                  <div className="px-5 pt-4">
                    <div
                      className="w-full py-3 rounded-xl text-center text-xs font-extrabold text-white"
                      style={{ background: NAVY }}
                    >
                      Book · Pay $20 Deposit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━ SOCIAL PROOF BAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          className="border-y"
          style={{ borderColor: "#D8EAF5", background: "#fff" }}
        >
          <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ color: NAVY }}
                >
                  {s.value}
                </p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ━━ FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          id="features"
          className="py-32"
          style={{ backgroundColor: LIGHT_BLUE }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              Why Stackd
            </p>
            <h2
              className="text-4xl font-extrabold text-center mb-4 tracking-tight"
              style={{ color: NAVY }}
            >
              Built for pros who hate admin
            </h2>
            <p className="text-center text-gray-500 mb-16 text-base max-w-xl mx-auto">
              Everything you need to fill your calendar and protect your income
              — nothing you don&apos;t.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="feat-card bg-white rounded-2xl p-8 border"
                  style={{ borderColor: "#C8DFF0" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                    style={{ backgroundColor: LIGHT_BLUE }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: NAVY }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ HOW IT WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: NAVY }}
            >
              How it works
            </p>
            <h2
              className="text-4xl font-extrabold text-center mb-4 tracking-tight"
              style={{ color: NAVY }}
            >
              Up and running in minutes
            </h2>
            <p className="text-center text-gray-500 mb-20 text-base">
              Three steps. No tech skills required.
            </p>

            <div className="grid md:grid-cols-3 gap-10 relative">
              {/* Connector line */}
              <div
                className="hidden md:block absolute h-px"
                style={{
                  top: 32,
                  left: "calc(16.66% + 28px)",
                  right: "calc(16.66% + 28px)",
                  background: `linear-gradient(to right, ${LIGHT_BLUE}, rgba(10,37,64,0.18), ${LIGHT_BLUE})`,
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
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: NAVY }}
                  >
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

        {/* ━━ TESTIMONIALS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-32" style={{ backgroundColor: NAVY }}>
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#7EBEDF" }}
            >
              Testimonials
            </p>
            <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight text-white">
              Pros who switched to Stackd
            </h2>
            <p
              className="text-center mb-16 text-base"
              style={{ color: "#7EBEDF" }}
            >
              Real businesses. Real results.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl p-8 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: "#F5C518", fontSize: 15 }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-white text-sm leading-relaxed flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                      style={{ background: t.accentBg }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: "#7EBEDF" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ PRICING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section
          id="pricing"
          className="py-32"
          style={{ backgroundColor: LIGHT_BLUE }}
        >
          <div className="max-w-4xl mx-auto px-6">
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
            <p className="text-center text-gray-500 mb-16 text-base">
              Start free. Upgrade when you&apos;re ready to scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="plan-card rounded-2xl p-10 flex flex-col relative overflow-hidden"
                  style={
                    plan.highlight
                      ? {
                          background: NAVY,
                          color: "#fff",
                          boxShadow: `0 32px 64px rgba(10,37,64,0.28)`,
                        }
                      : {
                          background: "#fff",
                          border: "1.5px solid #C8DFF0",
                        }
                  }
                >
                  {plan.badge && (
                    <div
                      className="absolute top-7 right-7 text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: LIGHT_BLUE, color: NAVY }}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ color: plan.highlight ? "#7EBEDF" : "#9CA3AF" }}
                  >
                    {plan.name}
                  </p>

                  <div className="flex items-end gap-1.5 mb-2">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span
                      className="text-base mb-2"
                      style={{ color: plan.highlight ? "#7EBEDF" : "#9CA3AF" }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className="text-sm mb-8"
                    style={{
                      color: plan.highlight ? "#A8D4EF" : "#6B7280",
                    }}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-3.5 mb-10 flex-1">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 text-sm">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                          style={
                            plan.highlight
                              ? {
                                  background: "rgba(255,255,255,0.14)",
                                  color: "#fff",
                                }
                              : { background: LIGHT_BLUE, color: NAVY }
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
                    href="#"
                    className="text-sm font-bold text-center py-4 rounded-xl block cta-btn"
                    style={
                      plan.highlight
                        ? { background: "#fff", color: NAVY }
                        : { background: NAVY, color: "#fff" }
                    }
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ BOTTOM CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-28 text-center" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Your next client is<br />looking for you right now.
            </h2>
            <p className="text-lg mb-10" style={{ color: "#7EBEDF" }}>
              Give them a place to book. Start free in minutes.
            </p>
            <Link
              href="/#pricing"
              className="cta-btn inline-block font-bold px-10 py-5 rounded-2xl text-base"
              style={{
                background: LIGHT_BLUE,
                color: NAVY,
                boxShadow: `0 8px 32px rgba(232,244,253,0.18)`,
              }}
            >
              Create your free booking page
            </Link>
            <p className="text-sm mt-5" style={{ color: "#7EBEDF" }}>
              No credit card required. Setup takes 5 minutes.
            </p>
          </div>
        </section>

        {/* ━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <footer
          className="border-t py-14"
          style={{ borderColor: "rgba(255,255,255,0.07)", background: "#071929" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              <div>
                <p className="text-lg font-extrabold text-white mb-1">Stackd</p>
                <p className="text-sm" style={{ color: "#7EBEDF" }}>
                  The booking platform for service pros.
                </p>
              </div>

              <nav className="flex flex-wrap gap-8 text-sm" style={{ color: "#7EBEDF" }}>
                <Link href="#features" className="footer-link">Features</Link>
                <Link href="#pricing" className="footer-link">Pricing</Link>
                <Link href="/book/maya" className="footer-link">See Example</Link>
                <Link href="#" className="footer-link">Privacy</Link>
                <Link href="#" className="footer-link">Terms</Link>
                <Link href="#" className="footer-link">Contact</Link>
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
