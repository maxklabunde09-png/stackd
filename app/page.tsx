import Link from "next/link";
import Navbar, { StackdLogo } from "./components/Navbar";
import NoShowCalculator from "./components/NoShowCalculator";
import FAQList from "./components/FAQList";

const NAVY = "#0A2540";
const SUBTLE = "#F5F5F7";

// ── Phone mockup shell ───────────────────────────────────────────────────────

function PhoneMockup({ children, scale = 1 }: { children: React.ReactNode; scale?: number }) {
  const w = 280 * scale;
  const h = 560 * scale;
  const r = 44 * scale;
  const p = 10 * scale;
  const ri = 36 * scale;
  return (
    <div style={{ width: w, height: h, background: "#1a1a1a", borderRadius: r, padding: p, boxShadow: "0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.06)", flexShrink: 0, position: "relative", overflow: "hidden" }}>
      <div style={{ width: "100%", height: "100%", background: "#fff", borderRadius: ri, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

// ── Phone screens ────────────────────────────────────────────────────────────

function BookingScreen() {
  return (
    <div style={{ height: "100%", overflowY: "auto", background: "#fff" }}>
      <div style={{ background: "#fff", padding: "14px 16px 8px", display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600 }}>
        <span>9:41</span><span>●●●</span>
      </div>
      <div style={{ textAlign: "center", padding: "8px 16px 16px" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #0A2540 0%, #1565c0 100%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", color: "#fff", fontWeight: 700, fontSize: 16 }}>MC</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#1D1D1F" }}>Maya Chen</div>
        <div style={{ fontSize: 12, color: "#86868B", marginTop: 2 }}>Hair Stylist · Brooklyn</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginTop: 4 }}>$85 · 60 min</div>
      </div>
      <div style={{ padding: "0 12px 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#1D1D1F", marginBottom: 8 }}>Select a date</div>
        <div style={{ display: "flex", gap: 6 }}>
          {[{d:"Mon",n:21},{d:"Tue",n:22},{d:"Wed",n:23},{d:"Thu",n:24},{d:"Fri",n:25}].map((item, i) => (
            <div key={item.d} style={{ flex: 1, padding: "6px 0", borderRadius: 10, background: i === 1 ? NAVY : SUBTLE, textAlign: "center" }}>
              <div style={{ fontSize: 10, fontWeight: 500, color: i === 1 ? "rgba(255,255,255,0.7)" : "#86868B" }}>{item.d}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: i === 1 ? "#fff" : "#1D1D1F" }}>{item.n}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "0 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#1D1D1F", marginBottom: 8 }}>Available times</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {["9:00 AM","10:30 AM","2:00 PM","3:30 PM"].map((s, i) => (
            <div key={s} style={{ padding: "8px 0", borderRadius: 10, background: i === 1 ? NAVY : SUBTLE, textAlign: "center", fontSize: 12, fontWeight: 600, color: i === 1 ? "#fff" : "#1D1D1F" }}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{ padding: 12, marginTop: 8 }}>
        <div style={{ width: "100%", padding: "13px", borderRadius: 9999, background: NAVY, color: "#fff", fontWeight: 600, fontSize: 14, textAlign: "center" }}>
          Book &amp; Pay $25 deposit
        </div>
        <div style={{ textAlign: "center", fontSize: 10, color: "#86868B", marginTop: 6 }}>🔒 Powered by Stripe</div>
      </div>
    </div>
  );
}

function LinkScreen() {
  return (
    <div style={{ height: "100%", background: SUBTLE, display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#fff", padding: "14px 16px 8px", display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600 }}>
        <span>9:41</span><span>●●●</span>
      </div>
      <div style={{ background: "#fff", padding: "6px 12px 8px", display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #eee" }}>
        <div style={{ flex: 1, background: SUBTLE, borderRadius: 8, padding: "6px 10px", fontSize: 10, color: "#6E6E73" }}>stackd.so/maya</div>
        <div style={{ fontSize: 10, color: NAVY, fontWeight: 600 }}>Share</div>
      </div>
      <div style={{ padding: "16px 14px" }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#0A2540,#1565c0)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 6px", color: "#fff", fontWeight: 700, fontSize: 14 }}>MC</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Maya Chen</div>
          <div style={{ fontSize: 10, color: "#86868B" }}>Hair Stylist · San Francisco</div>
        </div>
        <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>Services</div>
        {["Haircut & Style — $85","Full Color — $180","Blowout — $65"].map(s => (
          <div key={s} style={{ background: "#fff", borderRadius: 12, padding: "10px 12px", marginBottom: 6, display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <span style={{ fontSize: 11 }}>{s}</span>
            <span style={{ fontSize: 10, color: NAVY, fontWeight: 700 }}>Book →</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EarningsScreen() {
  return (
    <div style={{ height: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#fff", padding: "14px 16px 8px", display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600 }}>
        <span>9:41</span><span>●●●</span>
      </div>
      <div style={{ padding: "8px 16px", flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#1D1D1F", marginBottom: 16 }}>Your Earnings</div>
        <div style={{ background: "linear-gradient(135deg, #0A2540 0%, #1565c0 100%)", borderRadius: 18, padding: "20px", color: "#fff", marginBottom: 16 }}>
          <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 4 }}>THIS WEEK</div>
          <div style={{ fontSize: 28, fontWeight: 800 }}>$1,240</div>
        </div>
        {[
          { client: "Alex M.", service: "Haircut", amt: "+$85", status: "Paid", time: "Today 9AM" },
          { client: "Jordan K.", service: "Color", amt: "+$180", status: "Deposit", time: "Today 2PM" },
          { client: "Sam R.", service: "Blowout", amt: "+$65", status: "Paid", time: "Yesterday" },
        ].map((t, i) => (
          <div key={t.client} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid #F5F5F7" : "none" }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{t.client}</div>
              <div style={{ fontSize: 10, color: "#86868B" }}>{t.service} · {t.time}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>{t.amt}</div>
              <div style={{ fontSize: 9, color: t.status === "Paid" ? "#2e7d32" : "#e65100", fontWeight: 600 }}>{t.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReminderScreen() {
  return (
    <div style={{ height: "100%", background: SUBTLE, display: "flex", flexDirection: "column" }}>
      <div style={{ background: "#fff", padding: "14px 16px 8px", display: "flex", justifyContent: "space-between", fontSize: 11, fontWeight: 600 }}>
        <span>9:41</span><span>●●●</span>
      </div>
      <div style={{ flex: 1, padding: "12px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#1D1D1F" }}>Messages</div>
        {[
          { time: "24h before", msg: "Hi Alex! Reminder: you have a session with Maya tomorrow at 10:30 AM. Reply CANCEL to cancel.", isNew: false },
          { time: "1h before", msg: "Your appointment with Maya is in 1 hour. See you soon! 🗓️", isNew: true },
        ].map((m, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 14, padding: "12px 14px", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 12, fontWeight: 700 }}>Stackd</span>
              <span style={{ fontSize: 10, color: "#86868B" }}>{m.time}</span>
            </div>
            <div style={{ fontSize: 11, color: "#6E6E73", lineHeight: 1.5 }}>{m.msg}</div>
            {m.isNew && <div style={{ marginTop: 6, display: "inline-block", background: NAVY, color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>NEW</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    eyebrow: "Your link, live in 3 minutes",
    headline: "Share it anywhere.\nBook everywhere.",
    body: "Your page lives at stackd.so/yourname. Drop it in your Instagram bio, your email signature, or a text thread. Clients see your services, pick a slot, and pay — without a single DM.",
    bullets: ["Custom services and pricing", "Live in under 3 minutes", "Mobile-optimized by default", "Deposit collected on booking"],
    Phone: LinkScreen,
    flip: false,
    bg: SUBTLE,
  },
  {
    eyebrow: "Clients who actually show up",
    headline: "Two texts.\nZero empty chairs.",
    body: "Stackd texts your client 24 hours before and again 1 hour before every appointment. They reply to confirm or cancel — and either way, you're covered: the deposit is yours if they bail.",
    bullets: ["24-hour and 1-hour SMS reminders", "Two-way reply to confirm or cancel", "Cancellations free up your calendar instantly", "Deposit collected upfront — you're protected either way"],
    Phone: ReminderScreen,
    flip: true,
    bg: "#fff",
  },
  {
    eyebrow: "Get paid instantly",
    headline: "Stripe checkout,\nbuilt in.",
    body: "Every booking triggers a Stripe checkout — cards, Apple Pay, Google Pay. Deposits land in your account immediately. No invoicing, no chasing, no awkward payment convos at the end of a session.",
    bullets: ["Deposit or full payment upfront", "Apple Pay & Google Pay supported", "Automatic payouts to your bank", "See all earnings in your dashboard"],
    Phone: EarningsScreen,
    flip: false,
    bg: SUBTLE,
  },
];

const clientProfiles = [
  {
    name: "Maya Chen",
    title: "Hair Stylist · Hayes Valley, SF",
    slug: "mayachen",
    headerBg: "linear-gradient(135deg, #2d1b69 0%, #8b5cf6 100%)",
    accent: "#7c3aed",
    avatarBg: "linear-gradient(135deg, #a78bfa, #7c3aed)",
    initials: "MC",
    tagline: "Precision cuts & lived-in color",
    services: [
      { name: "Haircut & Style", duration: "60 min", price: "$85" },
      { name: "Full Color", duration: "90 min", price: "$180" },
      { name: "Blowout", duration: "45 min", price: "$65" },
    ],
  },
  {
    name: "James Wright",
    title: "Personal Trainer · Brooklyn, NY",
    slug: "coachwright",
    headerBg: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    accent: "#059669",
    avatarBg: "linear-gradient(135deg, #6ee7b7, #059669)",
    initials: "JW",
    tagline: "Strength. Mobility. Results.",
    services: [
      { name: "1-on-1 Training", duration: "60 min", price: "$120" },
      { name: "Nutrition Consult", duration: "45 min", price: "$60" },
      { name: "5-Session Pack", duration: "Bundle", price: "$500" },
    ],
  },
  {
    name: "Priya Nair",
    title: "Interview Coach · Remote",
    slug: "priya",
    headerBg: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
    accent: "#ea580c",
    avatarBg: "linear-gradient(135deg, #fdba74, #ea580c)",
    initials: "PN",
    tagline: "Land your dream offer",
    services: [
      { name: "Mock Interview", duration: "60 min", price: "$95" },
      { name: "Resume Review", duration: "30 min", price: "$45" },
      { name: "3-Session Bundle", duration: "Bundle", price: "$240" },
    ],
  },
];

const industries = [
  { label: "Hair & Beauty", examples: "Stylists · Barbers · Aestheticians · Nail techs" },
  { label: "Fitness & Wellness", examples: "Personal trainers · Yoga instructors · Nutritionists" },
  { label: "Coaching", examples: "Life coaches · Interview coaches · Career advisors" },
  { label: "Tutoring", examples: "Academic tutors · Music teachers · Test prep" },
  { label: "Photography", examples: "Portrait · Events · Real estate · Headshots" },
  { label: "Consulting", examples: "Freelancers · Legal · Financial · Tech" },
  { label: "Therapy & Healing", examples: "Massage therapists · Acupuncturists · Reiki" },
  { label: "Creative Services", examples: "Makeup artists · Tattoo artists · Stylists" },
  { label: "And so much more…", examples: "If you take appointments, Stackd works for you." },
];

const steps = [
  { n: "01", title: "Create your profile", desc: "Set up your services, pricing, and availability in minutes. Get your unique booking link — stackd.so/yourname." },
  { n: "02", title: "Clients book & pay", desc: "Your clients visit your link, pick a time, and pay a deposit instantly. No back-and-forth DMs." },
  { n: "03", title: "Show up, get paid", desc: "Stackd sends SMS reminders before every appointment. You show up. The money is already in your account." },
];

const plans = [
  {
    name: "Solo",
    price: "$50",
    users: "1 user",
    description: "Perfect for solo practitioners just getting started.",
    features: ["1 booking page", "Unlimited appointments", "Stripe payments", "SMS reminders", "Email support"],
    highlight: false,
    badge: null,
  },
  {
    name: "Studio",
    price: "$99",
    users: "Up to 5 team members",
    description: "For established pros who want more power and customization.",
    features: ["Custom branding & colors", "Analytics dashboard", "Priority SMS delivery", "Deposit % control", "Priority support"],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Business",
    price: "$175",
    users: "Up to 25 team members",
    description: "For multi-service businesses with a growing team.",
    features: ["Up to 5 team members", "All Studio features", "Team scheduling", "Client CRM notes", "Dedicated support"],
    highlight: false,
    badge: null,
  },
];

const comparisonRows: Array<{ label: string; solo: boolean | string; studio: boolean | string; business: boolean | string }> = [
  { label: "Booking page", solo: true, studio: true, business: true },
  { label: "Unlimited appointments", solo: true, studio: true, business: true },
  { label: "Stripe payments", solo: true, studio: true, business: true },
  { label: "Automatic SMS reminders", solo: true, studio: true, business: true },
  { label: "Custom branding", solo: false, studio: true, business: true },
  { label: "Analytics dashboard", solo: false, studio: true, business: true },
  { label: "Deposit % control", solo: false, studio: true, business: true },
  { label: "Team members", solo: "1", studio: "Up to 5", business: "Up to 25" },
  { label: "Client CRM notes", solo: false, studio: false, business: true },
  { label: "API access", solo: false, studio: false, business: true },
];

const faqs = [
  { q: "How does the deposit work?", a: "When a client books, they pay a deposit (you choose the amount or %) via Stripe. The deposit is held and applied to the final service. If they no-show, you keep the deposit." },
  { q: "What payment methods do clients see?", a: "Stripe supports credit/debit cards, Apple Pay, and Google Pay — whatever is available on the client's device." },
  { q: "When do I get paid?", a: "Deposits hit your Stripe account instantly. You can set up automatic payouts to your bank — daily, weekly, or monthly." },
  { q: "Can I customize my booking page?", a: "Yes — on Studio and Business plans you can set custom colors, your logo, bio, and service photos." },
  { q: "What happens if I need to cancel an appointment?", a: "You can cancel from your dashboard. Stackd automatically notifies the client and processes any applicable refund per your policy." },
  { q: "Is there a free trial?", a: "Yes — all plans include a 30-day free trial. No credit card required to start." },
];

// ── Comparison table cell ─────────────────────────────────────────────────────

function Cell({ val, col }: { val: boolean | string; col: "solo" | "studio" | "business" }) {
  if (typeof val === "string") return (
    <td className="py-3.5 px-4 text-center text-[13px] font-semibold" style={{ color: "#1D1D1F" }}>{val}</td>
  );
  return (
    <td className="py-3.5 px-4 text-center">
      {val ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto">
          <circle cx="9" cy="9" r="9" fill={col === "studio" ? NAVY : col === "business" ? NAVY : "rgba(10,37,64,0.1)"} />
          <path d="M5.5 9.5l2.5 2.5 4-5" stroke={col === "solo" ? NAVY : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <span style={{ color: "#D1D5DB", fontSize: 16 }}>—</span>
      )}
    </td>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(24px) skewY(2deg); filter: blur(4px); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); filter: blur(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-line-1 { display: block; animation: wordReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both; }
        .hero-line-2 { display: block; color: #0A2540; animation: wordReveal 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both; }
        .anim-1 { animation: fadeUp 0.6s ease 0.05s both; }
        .anim-2 { animation: fadeUp 0.6s ease 0.45s both; }
        .anim-3 { animation: fadeUp 0.6s ease 0.6s both; }
        .anim-phones { animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.75s both; }
        .pill-btn { transition: opacity 0.15s ease; }
        .pill-btn:hover { opacity: 0.80; }
        .plan-card { transition: transform 0.22s ease; }
        .plan-card:hover { transform: translateY(-4px); }
        .footer-link { transition: color 0.15s ease; }
        .footer-link:hover { color: rgba(255,255,255,0.85); }
        .faq-btn { transition: color 0.15s ease; }
        .profile-card-link { display: block; text-decoration: none; transition: transform 0.22s ease; }
        .profile-card-link:hover { transform: translateY(-4px); }
        .industry-cell { transition: background 0.2s ease; }
        .industry-cell:hover { background: rgba(255,255,255,0.06) !important; }
      `}</style>

      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        <Navbar />

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", paddingTop: 120, paddingBottom: 100, overflow: "hidden" }}>
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
            <div className="anim-1">
              <div className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] mb-5" style={{ color: "#86868B" }}>
                Booking + deposits + reminders — done.
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(44px,6.5vw,76px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.04em", lineHeight: 1.06, maxWidth: 820, marginBottom: 28 }}>
              <span className="hero-line-1">Your booking page.</span>
              <span className="hero-line-2">Your clients. Guaranteed.</span>
            </h1>

            <div className="anim-2">
              <p style={{ fontSize: "clamp(17px,2vw,21px)", color: "#6E6E73", maxWidth: 520, lineHeight: 1.6, marginBottom: 40 }}>
                Get your own booking link in minutes. Clients pick a time, pay a deposit, and get automatic SMS reminders. You stop chasing people and start getting paid.
              </p>
            </div>

            <div className="anim-3" style={{ display: "flex", gap: 14, marginBottom: 80, flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/signup" className="pill-btn inline-flex items-center justify-center font-semibold text-white rounded-full" style={{ fontSize: 16, padding: "14px 36px", background: NAVY, boxShadow: "0 4px 16px rgba(10,37,64,0.22)" }}>
                Start free — no credit card
              </Link>
              <Link href="/book/maya" className="pill-btn inline-flex items-center justify-center font-semibold rounded-full" style={{ fontSize: 16, padding: "14px 36px", color: NAVY, border: "1.5px solid #0A2540" }}>
                See a live booking page
              </Link>
            </div>

            {/* Three phones */}
            <div className="anim-phones" style={{ position: "relative", display: "flex", gap: 24, alignItems: "flex-end", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 480, background: "radial-gradient(ellipse, rgba(10,37,64,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
              <div className="hidden md:block" style={{ transform: "translateY(30px) rotate(-4deg)", opacity: 0.75 }}>
                <PhoneMockup scale={0.75}><LinkScreen /></PhoneMockup>
              </div>
              <PhoneMockup scale={1}><BookingScreen /></PhoneMockup>
              <div className="hidden md:block" style={{ transform: "translateY(30px) rotate(4deg)", opacity: 0.75 }}>
                <PhoneMockup scale={0.75}><EarningsScreen /></PhoneMockup>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────────────────── */}
        <div id="features">
          {features.map((f) => (
            <section key={f.headline} style={{ background: f.bg, padding: "100px 0" }}>
              <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20" style={{ flexDirection: f.flip ? "row-reverse" : "row" }}>
                <div style={{ flex: 1 }}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>{f.eyebrow}</p>
                  <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: 20 }}>
                    {f.headline.split("\n").map((line, i) => <span key={i} style={{ display: "block" }}>{line}</span>)}
                  </h2>
                  <p style={{ fontSize: 17, color: "#6E6E73", lineHeight: 1.65, marginBottom: 28 }}>{f.body}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {f.bullets.map((b) => (
                      <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: NAVY, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <span style={{ fontSize: 15, color: "#1D1D1F", fontWeight: 500 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ flexShrink: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                  <div style={{ position: "absolute", inset: 0, borderRadius: 32, background: "radial-gradient(ellipse at center, rgba(10,37,64,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
                  <PhoneMockup><f.Phone /></PhoneMockup>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ── CLIENT VIEW ───────────────────────────────────────────────────── */}
        <section style={{ background: SUBTLE, padding: "100px 0" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>The booking experience</p>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em", lineHeight: 1.12 }}>What your clients see</h2>
              <p style={{ fontSize: 17, color: "#6E6E73", marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>Every pro gets a beautiful, fully branded page — their colors, their vibe, their link.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {clientProfiles.map((p) => (
                <Link key={p.name} href="/book/maya" className="profile-card-link">
                  <div style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div style={{ background: p.headerBg, padding: "32px 24px 28px", textAlign: "center" }}>
                      <div style={{ width: 60, height: 60, borderRadius: "50%", background: p.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: "#fff", fontWeight: 800, fontSize: 18, border: "3px solid rgba(255,255,255,0.25)" }}>{p.initials}</div>
                      <div style={{ color: "#fff", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em" }}>{p.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginTop: 3 }}>{p.title}</div>
                      <div style={{ marginTop: 10, display: "inline-block", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", borderRadius: 9999, padding: "4px 14px", fontSize: 12, color: "rgba(255,255,255,0.9)", fontStyle: "italic" }}>&ldquo;{p.tagline}&rdquo;</div>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#86868B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Services</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {p.services.map(s => (
                          <div key={s.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 14px", background: "#F9F9FB", borderRadius: 12, border: "1px solid rgba(0,0,0,0.04)" }}>
                            <div>
                              <div style={{ fontSize: 13, fontWeight: 600, color: "#1D1D1F" }}>{s.name}</div>
                              <div style={{ fontSize: 11, color: "#86868B", marginTop: 1 }}>{s.duration}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: 14, fontWeight: 800, color: p.accent }}>{s.price}</div>
                              <div style={{ fontSize: 10, color: p.accent, fontWeight: 600, opacity: 0.7 }}>Book →</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 14, padding: "12px", borderRadius: 9999, background: p.accent, color: "#fff", fontSize: 14, fontWeight: 600, textAlign: "center" }}>
                        Book with {p.name.split(" ")[0]}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
        <section id="industries" style={{ background: "#1D1D1F", padding: "100px 0" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>Built for every independent pro</p>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,52px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Endless industries.<br /><span style={{ color: "rgba(255,255,255,0.4)" }}>One platform.</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden" }}>
              {industries.map(({ label, examples }, i) => (
                <div
                  key={label}
                  className="industry-cell"
                  style={{
                    padding: "32px 28px",
                    borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    background: i === 8 ? "rgba(255,255,255,0.02)" : "transparent",
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: 17, fontWeight: 700, color: i === 8 ? "rgba(255,255,255,0.35)" : "#fff", marginBottom: 8, letterSpacing: "-0.01em" }}>{label}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>{examples}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "100px 0" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>Simple by design</p>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em" }}>Up and running in minutes</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
              {steps.map(({ n, title, desc }, i) => (
                <div key={n}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", marginBottom: 24, background: "linear-gradient(135deg, #0A2540 0%, #1565c0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800, color: "#fff", boxShadow: "0 8px 24px rgba(10,37,64,0.25)" }}>{n}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1D1D1F", marginBottom: 12, letterSpacing: "-0.02em" }}>{title}</h3>
                  <p style={{ fontSize: 15, color: "#6E6E73", lineHeight: 1.65 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CALCULATOR ────────────────────────────────────────────────────── */}
        <NoShowCalculator />

        {/* ── PRICING ───────────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "100px 0" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>Simple pricing</p>
              <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em" }}>One price. Everything included.</h2>
              <p style={{ fontSize: 17, color: "#6E6E73", marginTop: 16 }}>No per-booking fees. No hidden charges. Cancel anytime.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }}>
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="plan-card"
                  style={{
                    borderRadius: 24, padding: "36px 32px", display: "flex", flexDirection: "column", position: "relative",
                    background: plan.highlight ? "linear-gradient(145deg, #0A2540 0%, #1565c0 100%)" : SUBTLE,
                    border: plan.highlight ? "none" : "1px solid rgba(0,0,0,0.06)",
                    boxShadow: plan.highlight ? "0 24px 64px rgba(10,37,64,0.28)" : "none",
                  }}
                >
                  {plan.badge && (
                    <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#fff", color: NAVY, fontSize: 11, fontWeight: 700, padding: "4px 16px", borderRadius: 9999, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 2px 12px rgba(0,0,0,0.12)", whiteSpace: "nowrap" }}>
                      {plan.badge}
                    </div>
                  )}
                  <div style={{ fontSize: 20, fontWeight: 700, color: plan.highlight ? "#fff" : "#1D1D1F", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ marginBottom: 16 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, color: plan.highlight ? "#fff" : NAVY, letterSpacing: "-0.04em" }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.55)" : "#86868B", marginLeft: 4 }}>/mo</span>
                  </div>
                  <p style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.65)" : "#6E6E73", marginBottom: 28, lineHeight: 1.5 }}>{plan.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                    {plan.features.map(feat => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill={plan.highlight ? "rgba(255,255,255,0.2)" : "rgba(10,37,64,0.1)"} /><path d="M5 8l2 2 4-4" stroke={plan.highlight ? "#fff" : NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span style={{ fontSize: 14, color: plan.highlight ? "rgba(255,255,255,0.9)" : "#1D1D1F" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/signup" className="pill-btn block text-center py-3.5 rounded-full font-semibold" style={{ fontSize: 15, background: plan.highlight ? "#fff" : NAVY, color: plan.highlight ? NAVY : "#fff", textDecoration: "none" }}>
                    Get started
                  </Link>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em" }}>Compare plans</h3>
            </div>
            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
              <table className="w-full border-collapse" style={{ background: "#fff", borderRadius: 16 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <th className="py-4 px-6 text-left text-[13px] font-medium" style={{ color: "#86868B", width: "40%" }}>Feature</th>
                    {["Solo", "Studio", "Business"].map((h, i) => (
                      <th key={h} className="py-4 px-4 text-center text-[14px] font-bold" style={{ color: i === 1 ? NAVY : "#1D1D1F" }}>
                        {h}{i === 1 && <span style={{ fontSize: 10, background: NAVY, color: "#fff", padding: "2px 8px", borderRadius: 99, marginLeft: 6 }}>Popular</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} style={{ borderBottom: i < comparisonRows.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none", background: i % 2 === 1 ? "#FAFAFA" : "#fff" }}>
                      <td className="py-3.5 px-6 text-[14px]" style={{ color: "#1D1D1F" }}>{row.label}</td>
                      <Cell val={row.solo} col="solo" />
                      <Cell val={row.studio} col="studio" />
                      <Cell val={row.business} col="business" />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/pricing" style={{ fontSize: 14, color: NAVY, fontWeight: 500, borderBottom: "1px solid rgba(10,37,64,0.3)", paddingBottom: 2, textDecoration: "none" }}>
                Full pricing details →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <FAQSection />

        {/* ── CTA BAND ──────────────────────────────────────────────────────── */}
        <section style={{ background: NAVY, padding: "100px 0" }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 style={{ fontSize: "clamp(36px,4vw,60px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
              Get your booking link<br />in the next 3 minutes.
            </h2>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", marginBottom: 40, maxWidth: 440, margin: "0 auto 40px" }}>
              Independent pros who switched to Stackd say clients actually show up.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/signup" className="pill-btn inline-flex items-center justify-center font-semibold rounded-full" style={{ fontSize: 16, padding: "15px 40px", background: "#fff", color: NAVY, textDecoration: "none" }}>
                Start free trial
              </Link>
              <Link href="/book/maya" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 16, color: "rgba(255,255,255,0.65)", padding: "15px 24px", fontWeight: 500, textDecoration: "none" }}>
                See a demo page →
              </Link>
            </div>
            <div style={{ marginTop: 28, fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
              30-day free trial · No credit card · Cancel anytime
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer style={{ background: "#111", padding: "72px 0 40px", color: "#fff" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 60 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 20, marginBottom: 12, letterSpacing: "-0.02em", color: "#fff" }}>
                  <StackdLogo size={26} dark={true} />
                  Stackd
                </div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 200 }}>
                  Booking and payments for independent service professionals.
                </div>
                <div style={{ marginTop: 20, fontSize: 13, color: "rgba(255,255,255,0.25)" }}>© 2026 Stackd, Inc.</div>
              </div>
              {[
                { title: "Product", links: [["Features", "/#features"], ["Pricing", "/pricing"], ["Industries", "/#industries"]] },
                { title: "Get started", links: [["Sign up free", "/signup"], ["See a demo", "/book/maya"], ["Pricing", "/pricing"]] },
                { title: "Legal", links: [["Privacy", "#"], ["Terms", "#"], ["Cookie Policy", "#"]] },
              ].map(({ title, links }) => (
                <div key={title}>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>{title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {links.map(([label, href]) => (
                      <Link key={label} href={href} className="footer-link" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

function FAQSection() {
  return (
    <section style={{ background: "#fff", padding: "100px 0" }}>
      <div className="max-w-3xl mx-auto px-6">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "#86868B" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(32px,3.5vw,48px)", fontWeight: 800, color: "#1D1D1F", letterSpacing: "-0.03em" }}>Questions answered</h2>
        </div>
        <FAQList />
      </div>
    </section>
  );
}
