import Link from "next/link";
import Navbar from "./components/Navbar";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

const features = [
  {
    title: "Your own booking page in minutes",
    description:
      "Pick your services, set your hours, and you're live. Clients get a clean, professional page that works on any device — no app download required.",
    accent: "#C5DFF2",
    accentDark: "#A3CBE8",
  },
  {
    title: "Deposit collection built in from day one",
    description:
      "Collect a client deposit the moment an appointment is confirmed. Powered by Stripe, with no manual invoicing or follow-up required.",
    accent: "#B8D8EF",
    accentDark: "#93C2E2",
  },
  {
    title: "Automated reminders that reduce cancellations",
    description:
      "SMS reminders go out 24 hours and 1 hour before every appointment, keeping clients informed and reducing last-minute cancellations.",
    accent: "#C8E3F4",
    accentDark: "#A8CEE8",
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
      "Clients select a time, confirm with a deposit, and receive an automated confirmation. You focus on the work — Stackd manages the rest.",
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
      "Basic analytics",
    ],
    cta: "Start for free",
    highlight: false,
    badge: null,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For service businesses that prioritize reliable scheduling.",
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
        .nav-link { transition: color 0.15s ease; }
        .nav-link:hover { color: #0A2540; }
        .cta-primary {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .cta-primary:hover { opacity: 0.9; transform: scale(1.02); }
        .plan-card { transition: transform 0.2s ease; }
        .plan-card:hover { transform: translateY(-4px); }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: #fff; }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
        <Navbar />

        {/* ━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-28 md:py-36" style={{ backgroundColor: LIGHT_BLUE }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="anim-1 inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
              style={{ background: "rgba(10,37,64,0.08)", color: NAVY }}
            >
              Now in early access
            </div>

            <h1
              className="anim-2 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
              style={{ color: NAVY }}
            >
              Book clients.<br />
              Collect deposits.<br />
              Reduce cancellations.
            </h1>

            <p className="anim-3 text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
              Stackd gives service businesses a professional booking page with
              integrated deposit collection and automated appointment reminders.
            </p>

            <form
              className="anim-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
              action="/signup"
              method="get"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl border text-sm outline-none focus:ring-2"
                style={{
                  borderColor: "#C8DFF0",
                  background: "#fff",
                  color: NAVY,
                }}
              />
              <Link
                href="/signup"
                className="cta-primary font-bold px-6 py-3.5 rounded-xl text-sm text-white text-center whitespace-nowrap"
                style={{
                  backgroundColor: NAVY,
                  boxShadow: `0 4px 16px rgba(10,37,64,0.25)`,
                }}
              >
                Get started free
              </Link>
            </form>

            <p className="anim-4 text-xs text-gray-400">
              Free forever on the starter plan. No credit card required.
            </p>

            {/* Booking page mockup */}
            <div
              className="anim-4 mt-16 rounded-2xl overflow-hidden border mx-auto text-left"
              style={{
                maxWidth: 440,
                borderColor: "#C8DFF0",
                boxShadow: `0 24px 64px rgba(10,37,64,0.14)`,
              }}
            >
              {/* Mockup header */}
              <div
                className="px-6 py-5 border-b"
                style={{ background: NAVY, borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold text-white shrink-0"
                    style={{ background: "#1A6B9A" }}
                  >
                    MH
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Maya&apos;s Hair Studio</p>
                    <p className="text-xs" style={{ color: "#7EBEDF" }}>Brooklyn, NY · Hairstylist</p>
                  </div>
                </div>
              </div>

              {/* Mockup body */}
              <div className="px-6 py-5" style={{ background: "#fff" }}>
                <p
                  className="text-xs font-bold uppercase tracking-wider mb-4"
                  style={{ color: "#9CA3AF" }}
                >
                  Choose a time — Thursday, Apr 24
                </p>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[
                    { time: "10:00am", avail: true, sel: false },
                    { time: "11:30am", avail: true, sel: true },
                    { time: "1:00pm",  avail: true, sel: false },
                    { time: "2:30pm",  avail: false, sel: false },
                    { time: "4:00pm",  avail: true, sel: false },
                    { time: "5:30pm",  avail: true, sel: false },
                  ].map((s) => (
                    <div
                      key={s.time}
                      className="py-2.5 rounded-xl text-center text-xs font-semibold"
                      style={
                        s.sel
                          ? { background: NAVY, color: "#fff" }
                          : s.avail
                          ? { background: LIGHT_BLUE, color: NAVY }
                          : { background: "#F3F4F6", color: "#D1D5DB" }
                      }
                    >
                      {s.time}
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between px-4 py-3 rounded-xl mb-4"
                  style={{ background: LIGHT_BLUE }}
                >
                  <div>
                    <p className="text-xs font-bold" style={{ color: NAVY }}>Haircut &amp; Style</p>
                    <p className="text-xs text-gray-400">45 min · $10 deposit required</p>
                  </div>
                  <p className="text-sm font-extrabold" style={{ color: NAVY }}>$45</p>
                </div>

                <div
                  className="w-full py-3.5 rounded-xl text-center text-sm font-extrabold text-white"
                  style={{ background: NAVY }}
                >
                  Confirm Booking
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ━━ FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                    <h3
                      className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight"
                      style={{ color: NAVY }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{f.description}</p>
                  </div>

                  {/* Colored placeholder */}
                  <div
                    className="rounded-2xl h-64 md:h-72 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${f.accent} 0%, ${f.accentDark} 100%)`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                      style={{ background: "rgba(10,37,64,0.12)" }}
                    >
                      {i === 0 ? "📅" : i === 1 ? "💳" : "🔔"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ━━ HOW IT WORKS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-28" style={{ backgroundColor: LIGHT_BLUE }}>
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
                  background: `linear-gradient(to right, rgba(10,37,64,0.15), rgba(10,37,64,0.35), rgba(10,37,64,0.15))`,
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

        {/* ━━ PRICING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section id="pricing" className="py-28 bg-white">
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
              Start free. Upgrade when you&apos;re ready to grow.
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
                          boxShadow: `0 24px 56px rgba(10,37,64,0.26)`,
                        }
                      : {
                          background: "#fff",
                          border: `1.5px solid #C8DFF0`,
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
                    style={{ color: plan.highlight ? "#A8D4EF" : "#6B7280" }}
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
                              ? { background: "rgba(255,255,255,0.14)", color: "#fff" }
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
                    href="/signup"
                    className="cta-primary text-sm font-bold text-center py-4 rounded-xl block"
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

        {/* ━━ EARLY ACCESS BAND ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(232,244,253,0.15)", color: "#E8F4FD" }}
            >
              Early access
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Be one of the first businesses on Stackd
            </h2>
            <p className="mb-10" style={{ color: "#7EBEDF" }}>
              We&apos;re onboarding our first wave of service pros. Join the
              waitlist and we&apos;ll be in touch as soon as a spot opens.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              action="/signup"
              method="get"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl border text-sm outline-none"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
              />
              <Link
                href="/signup"
                className="cta-primary font-bold px-6 py-3.5 rounded-xl text-sm text-center whitespace-nowrap"
                style={{ background: LIGHT_BLUE, color: NAVY }}
              >
                Join the waitlist
              </Link>
            </form>
            <p className="text-xs mt-5" style={{ color: "#4A7A9B" }}>
              No spam. No credit card. We&apos;ll reach out when your spot is ready.
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
                <Link href="/signup" className="footer-link">Sign Up</Link>
                <Link href="#" className="footer-link">Privacy</Link>
                <Link href="#" className="footer-link">Terms</Link>
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
