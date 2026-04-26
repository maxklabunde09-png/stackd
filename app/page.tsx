import Link from "next/link";
import Navbar from "./components/Navbar";
import NoShowCalculator from "./components/NoShowCalculator";

const NAVY = "#0A2540";
const SUBTLE = "#F5F5F7";

// ── Phone mockup shell ────────────────────────────────────────────────────

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 244 }}>
      <div
        className="relative rounded-[2.8rem]"
        style={{
          background: "#0F0F0F",
          padding: "5px",
          boxShadow:
            "0 50px 100px rgba(0,0,0,0.20), 0 15px 35px rgba(0,0,0,0.10), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
        }}
      >
        {/* Notch */}
        <div
          className="absolute left-0 right-0 flex justify-center z-10"
          style={{ top: 5, pointerEvents: "none" }}
        >
          <div
            className="rounded-b-xl"
            style={{ width: 68, height: 20, background: "#0F0F0F" }}
          />
        </div>
        {/* Screen */}
        <div
          className="rounded-[2.4rem] bg-white overflow-hidden"
          style={{ minHeight: 460 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

// ── Phone screen content ──────────────────────────────────────────────────

function BookingPhoneContent() {
  return (
    <div>
      <div className="px-4 pt-7 pb-4 flex items-center gap-3" style={{ background: NAVY }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ background: "#1A6B9A" }}
        >
          MH
        </div>
        <div>
          <p className="text-white text-xs font-semibold leading-tight">Maya&apos;s Hair Studio</p>
          <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>Hairstylist · Brooklyn, NY</p>
        </div>
      </div>
      <div className="px-4 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] mb-3" style={{ color: "#86868B" }}>
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
              style={s.sel ? { background: NAVY, color: "#fff" } : { background: SUBTLE, color: "#1D1D1F" }}
            >
              {s.time}
            </div>
          ))}
        </div>
        <div className="rounded-xl px-3 py-3 mb-4" style={{ background: SUBTLE }}>
          <p className="text-xs font-semibold mb-0.5" style={{ color: "#1D1D1F" }}>Haircut &amp; Style</p>
          <p className="text-[11px]" style={{ color: "#86868B" }}>45 min · $10 deposit</p>
        </div>
        <div
          className="w-full py-3 rounded-xl text-center text-xs font-semibold text-white"
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
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ background: SUBTLE }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill={NAVY} />
          <path d="M7.5 14.5l5 5 8-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-xs font-semibold mb-1" style={{ color: "#1D1D1F" }}>Payment Confirmed</p>
      <p className="font-bold mb-1" style={{ color: "#1D1D1F", fontSize: 28 }}>$10.00</p>
      <p className="text-[11px] mb-5" style={{ color: "#86868B" }}>Deposit received</p>
      <div className="w-full rounded-xl p-3 text-left mb-3" style={{ background: SUBTLE }}>
        <p className="text-xs font-semibold mb-1" style={{ color: "#1D1D1F" }}>Appointment Details</p>
        <p className="text-[11px]" style={{ color: "#6E6E73" }}>Haircut &amp; Style · $45</p>
        <p className="text-[11px]" style={{ color: "#6E6E73" }}>Thursday · 11:30am</p>
        <p className="text-[11px]" style={{ color: "#6E6E73" }}>Maya&apos;s Hair Studio</p>
      </div>
      <div
        className="w-full py-2.5 rounded-xl text-center text-xs font-semibold text-white"
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
      <div className="px-4 py-3 border-b text-center" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <p className="text-xs font-semibold" style={{ color: "#1D1D1F" }}>Messages</p>
        <p className="text-[11px]" style={{ color: "#86868B" }}>Stackd Reminder</p>
      </div>
      <div className="px-4 py-5 space-y-4">
        <p className="text-center text-[11px]" style={{ color: "#C7C7CC" }}>Today 9:00 AM</p>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 text-[11px] leading-relaxed"
          style={{ background: SUBTLE, color: "#1D1D1F", maxWidth: "88%" }}
        >
          Hi Sarah! Reminder: your appointment with Maya&apos;s Hair Studio is tomorrow at 11:30am. Reply STOP to opt out.
        </div>
        <p className="text-center text-[11px]" style={{ color: "#C7C7CC" }}>Today 10:30 AM</p>
        <div
          className="rounded-2xl rounded-tl-sm px-4 py-3 text-[11px] leading-relaxed"
          style={{ background: SUBTLE, color: "#1D1D1F", maxWidth: "88%" }}
        >
          Just 1 hour until your 11:30am appointment! See you soon.
        </div>
      </div>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────

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
    title: "Automated reminders that cut cancellations",
    description:
      "SMS reminders go out 24 hours and 1 hour before every appointment, keeping clients informed and reducing last-minute no-shows.",
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
    title: "Grow on autopilot",
    description:
      "Clients select a time, confirm with a deposit, and get an automatic reminder. You focus on the work — Stackd handles the rest.",
  },
];

const industries = [
  { name: "Hairstylists", benefit: "Fill your chair. Deposits mean clients show up." },
  { name: "Personal Trainers", benefit: "Sell sessions upfront. No-shows become a thing of the past." },
  { name: "Interview Coaches", benefit: "Collect payment before the call. Every time." },
  { name: "Tutors", benefit: "Keep your schedule full and predictable week over week." },
  { name: "Photographers", benefit: "Secure shoots with a deposit before you pick up your camera." },
  { name: "Consultants", benefit: "Professional booking that matches your premium positioning." },
];

const examplePreviews = [
  {
    name: "Maya's Hair Studio",
    type: "Hairstylist",
    href: "/book/maya",
    initials: "MH",
    color: "#1A6B9A",
  },
  {
    name: "Jake's PT Studio",
    type: "Personal Trainer",
    href: "/book/jake",
    initials: "JP",
    color: "#0A4A7A",
  },
  {
    name: "Career Ready Coaching",
    type: "Interview Coach",
    href: "/book/sarah",
    initials: "CR",
    color: "#0E5A8A",
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

const homepageFaqs = [
  {
    q: "How long does it take to get set up?",
    a: "Most service providers are live in under 10 minutes. Add your services, set your hours, and share your link. That's it.",
  },
  {
    q: "Do my clients need to create an account to book?",
    a: "No. Clients book directly from your page without signing up for anything. Fewer steps means more bookings.",
  },
  {
    q: "What happens if a client needs to cancel?",
    a: "You control the cancellation policy. Deposits can be kept, refunded, or applied as credit — your call.",
  },
  {
    q: "Is Stackd only for solo providers?",
    a: "No. Studio supports up to 5 team members and Business supports up to 25, each with their own booking page and a shared team dashboard.",
  },
];

// ── Comparison table cell ─────────────────────────────────────────────────

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

// ── Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeUp 0.6s ease 0.05s both; }
        .anim-2 { animation: fadeUp 0.6s ease 0.15s both; }
        .anim-3 { animation: fadeUp 0.6s ease 0.28s both; }
        .anim-4 { animation: fadeUp 0.6s ease 0.42s both; }
        .cta-primary { transition: opacity 0.15s ease; }
        .cta-primary:hover { opacity: 0.80; }
        .plan-card { transition: transform 0.22s ease; }
        .plan-card:hover { transform: translateY(-4px); }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: rgba(255,255,255,0.85); }
        .industry-card { transition: background 0.15s ease; }
        .industry-card:hover { background: rgba(255,255,255,0.08) !important; }
        .example-card { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .example-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.12) !important; }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-36" style={{ background: "#FBFBFD" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div
              className="anim-1 inline-flex items-center gap-2 text-[13px] font-medium px-4 py-1.5 rounded-full mb-10 border"
              style={{ borderColor: "rgba(10,37,64,0.12)", color: "#0A2540", background: "#fff" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#34C759" }} />
              30-day free trial — no credit card required
            </div>

            <h1
              className="anim-2 font-bold tracking-tight leading-[1.06] mb-6"
              style={{ fontSize: "clamp(44px,6.5vw,76px)", color: "#1D1D1F" }}
            >
              Your booking page.<br />
              Your brand.<br />
              <span style={{ color: NAVY }}>One link.</span>
            </h1>

            <p
              className="anim-3 leading-relaxed max-w-xl mx-auto mb-12"
              style={{ fontSize: 19, color: "#6E6E73" }}
            >
              Stackd gives service businesses a professional booking page with built-in payments,
              automatic SMS reminders, and no-show protection. Set up in minutes.
            </p>

            <div className="anim-4 flex flex-col sm:flex-row items-center justify-center gap-3 mb-24">
              <Link
                href="/signup"
                className="cta-primary font-semibold px-8 py-3.5 rounded-full text-white"
                style={{
                  fontSize: 15,
                  backgroundColor: NAVY,
                  boxShadow: "0 4px 16px rgba(10,37,64,0.18)",
                }}
              >
                Get started free →
              </Link>
              <Link
                href="/#features"
                className="font-medium px-6 py-3.5 rounded-full transition-colors duration-150"
                style={{ fontSize: 15, color: NAVY, background: "rgba(10,37,64,0.06)" }}
              >
                See how it works
              </Link>
            </div>

            <div className="anim-4 relative inline-block">
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-40px",
                  background: "radial-gradient(ellipse at center, rgba(10,37,64,0.07) 0%, transparent 68%)",
                }}
              />
              <PhoneMockup>
                <BookingPhoneContent />
              </PhoneMockup>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ──────────────────────────────────────────────── */}
        <section className="py-5 border-b" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.06)" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
              {[
                "Set up in under 10 minutes",
                "30-day free trial",
                "Works on iPhone, Android & web",
                "Cancel anytime",
              ].map((fact) => (
                <div key={fact} className="flex items-center gap-2" style={{ fontSize: 14, color: "#6E6E73" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="rgba(10,37,64,0.1)" />
                    <path d="M4 7l2.5 2.5L10.5 5" stroke={NAVY} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POWERED BY ───────────────────────────────────────────────── */}
        <section className="py-10" style={{ background: SUBTLE }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-6"
              style={{ color: "#86868B" }}
            >
              Powered by technology you already trust
            </p>
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {["Stripe", "Apple Pay", "Google Pay", "Twilio"].map((brand) => (
                <span
                  key={brand}
                  className="text-[15px] font-bold tracking-tight"
                  style={{ color: "#C7C7CC" }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────── */}
        <section id="features" className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              Features
            </p>
            <h2
              className="font-bold text-center mb-24 tracking-tight leading-tight"
              style={{ fontSize: "clamp(34px,5vw,48px)", color: "#1D1D1F" }}
            >
              Everything your business needs
            </h2>

            <div className="space-y-32">
              {features.map((f, i) => (
                <div key={f.title} className="grid md:grid-cols-2 gap-16 items-center">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <h3
                      className="font-bold mb-5 tracking-tight leading-tight"
                      style={{ fontSize: "clamp(26px,3.5vw,32px)", color: "#1D1D1F" }}
                    >
                      {f.title}
                    </h3>
                    <p className="leading-relaxed" style={{ fontSize: 17, color: "#6E6E73" }}>
                      {f.description}
                    </p>
                  </div>
                  <div className={`relative flex items-center justify-center py-12 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at center, rgba(10,37,64,0.05) 0%, transparent 68%)" }}
                    />
                    <PhoneMockup>
                      <f.Phone />
                    </PhoneMockup>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXAMPLES ─────────────────────────────────────────────────── */}
        <section id="examples" className="py-32" style={{ backgroundColor: SUBTLE }}>
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              Examples
            </p>
            <h2
              className="font-bold text-center mb-5 tracking-tight leading-tight"
              style={{ fontSize: "clamp(34px,5vw,48px)", color: "#1D1D1F" }}
            >
              What your clients see
            </h2>
            <p className="text-center mb-16" style={{ fontSize: 17, color: "#6E6E73" }}>
              Click any card to try a live Stackd booking page — exactly as your clients would use it.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {examplePreviews.map((ex) => (
                <Link
                  key={ex.name}
                  href={ex.href}
                  className="example-card block rounded-2xl overflow-hidden bg-white"
                  style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}
                >
                  <div className="px-5 py-4 flex items-center gap-3" style={{ background: NAVY }}>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: ex.color }}
                    >
                      {ex.initials}
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-semibold">{ex.name}</p>
                      <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.5)" }}>{ex.type}</p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <div className="grid grid-cols-3 gap-1.5 mb-3">
                      {["10:00am", "11:30am", "2:00pm"].map((t, i) => (
                        <div
                          key={t}
                          className="py-2 rounded-lg text-center text-[12px] font-semibold"
                          style={i === 1 ? { background: NAVY, color: "#fff" } : { background: SUBTLE, color: "#1D1D1F" }}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                    <div
                      className="w-full py-2.5 rounded-lg text-center text-[13px] font-semibold text-white"
                      style={{ background: NAVY }}
                    >
                      Try it live →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO IS STACKD FOR ────────────────────────────────────────── */}
        <section className="py-32" style={{ background: "#1D1D1F" }}>
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#6E6E73" }}
            >
              Who is Stackd for
            </p>
            <h2
              className="font-bold text-center mb-4 tracking-tight leading-tight text-white"
              style={{ fontSize: "clamp(34px,5vw,48px)" }}
            >
              Built for service businesses
            </h2>
            <p className="text-center mb-16" style={{ fontSize: 17, color: "#6E6E73" }}>
              If clients pay you for your time, Stackd was made for you.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="industry-card rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="font-semibold text-white mb-1.5" style={{ fontSize: 15 }}>{ind.name}</p>
                  <p className="leading-relaxed" style={{ fontSize: 13, color: "rgba(255,255,255,0.42)" }}>
                    {ind.benefit}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-5"
                style={{ color: "#6E6E73" }}
              >
                For their clients
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  "Easy online booking",
                  "Secure payments",
                  "Automatic reminders",
                  "No more back-and-forth texts",
                  "Works on any device",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                      <circle cx="7" cy="7" r="6.5" fill="rgba(255,255,255,0.1)" />
                      <path d="M4 7l2.5 2.5L10.5 5" stroke="rgba(255,255,255,0.65)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section id="how-it-works" className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              How it works
            </p>
            <h2
              className="font-bold text-center mb-24 tracking-tight leading-tight"
              style={{ fontSize: "clamp(34px,5vw,48px)", color: "#1D1D1F" }}
            >
              Up and running in minutes
            </h2>

            <div className="grid md:grid-cols-3 gap-10 relative">
              <div
                className="hidden md:block absolute h-px"
                style={{
                  top: 28,
                  left: "calc(16.66% + 28px)",
                  right: "calc(16.66% + 28px)",
                  background: "linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)",
                }}
              />
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-[15px] font-bold mx-auto mb-7"
                    style={{
                      background: "linear-gradient(160deg, #0A2540, #0E3A66)",
                      color: "#fff",
                      boxShadow: "0 4px 16px rgba(10,37,64,0.20)",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-[17px] font-semibold mb-3" style={{ color: "#1D1D1F" }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed max-w-xs mx-auto" style={{ fontSize: 15, color: "#6E6E73" }}>
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
        <section id="pricing" className="py-32 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] mb-4"
              style={{ color: "#86868B" }}
            >
              Pricing
            </p>
            <h2
              className="font-bold text-center mb-4 tracking-tight leading-tight"
              style={{ fontSize: "clamp(34px,5vw,48px)", color: "#1D1D1F" }}
            >
              Simple, honest pricing
            </h2>
            <p className="text-center mb-3 max-w-2xl mx-auto" style={{ fontSize: 17, color: "#6E6E73" }}>
              Solo is $50/month. Studio works out to $19 per team member. Business works out to just $7 per team member per month.
            </p>
            <p className="text-center mb-20" style={{ fontSize: 14, color: "#86868B" }}>
              All plans include a 30-day free trial. Cancel before day 30 and you won&apos;t be charged.
            </p>

            <div className="grid md:grid-cols-3 gap-5 items-stretch mb-16">
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

            {/* Comparison table */}
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th
                      className="py-4 px-5 text-left text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: SUBTLE, color: "#86868B" }}
                    >
                      Feature
                    </th>
                    <th
                      className="py-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: SUBTLE, color: "#1D1D1F" }}
                    >
                      Solo
                    </th>
                    <th
                      className="py-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.1em]"
                      style={{ background: SUBTLE, color: "#1D1D1F" }}
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
        <section className="py-32" style={{ backgroundColor: SUBTLE }}>
          <div className="max-w-2xl mx-auto px-6">
            <h2
              className="font-bold text-center mb-14 tracking-tight"
              style={{ fontSize: "clamp(30px,4vw,40px)", color: "#1D1D1F" }}
            >
              Common questions
            </h2>
            <div className="space-y-3">
              {homepageFaqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-6 bg-white"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                >
                  <p className="font-semibold mb-2" style={{ fontSize: 15, color: "#1D1D1F" }}>{faq.q}</p>
                  <p className="leading-relaxed" style={{ fontSize: 15, color: "#6E6E73" }}>{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="font-medium transition-opacity hover:opacity-70"
                style={{ fontSize: 14, color: NAVY, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                See all FAQs and full pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA BAND ─────────────────────────────────────────────────── */}
        <section className="py-32" style={{ background: NAVY }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2
              className="font-bold text-white mb-5 tracking-tight leading-tight"
              style={{ fontSize: "clamp(32px,5vw,52px)" }}
            >
              Ready to stop losing money<br />to no-shows?
            </h2>
            <p className="mb-12" style={{ fontSize: 17, color: "rgba(255,255,255,0.5)" }}>
              Join service professionals using Stackd to book clients, collect deposits, and grow on autopilot.
            </p>
            <Link
              href="/signup"
              className="cta-primary inline-block font-semibold px-8 py-3.5 rounded-full"
              style={{ fontSize: 15, background: "#fff", color: NAVY }}
            >
              Start your 30-day free trial
            </Link>
            <p className="text-[13px] mt-5" style={{ color: "rgba(255,255,255,0.28)" }}>
              Cancel before day 30 and you won&apos;t be charged.
            </p>
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
                <Link href="/#examples" className="footer-link">Examples</Link>
                <Link href="/pricing" className="footer-link">Pricing</Link>
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
