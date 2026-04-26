import Link from "next/link";
import Navbar from "../../components/Navbar";

const NAVY = "#0A2540";

const services = [
  { name: "Mock Interview", duration: "60 min", price: 120 },
  { name: "Resume Review", duration: "45 min", price: 85 },
  { name: "Full Prep Package", duration: "3 sessions", price: 200 },
  { name: "Salary Negotiation Coaching", duration: "45 min", price: 95 },
];

const reviews = [
  { name: "Derek W.", text: "Got an offer from Google 3 weeks after my session with Sarah. Couldn't have done it without her.", stars: 5 },
  { name: "Aisha N.", text: "My resume went from getting 0 callbacks to 4 in one week after Sarah reviewed it.", stars: 5 },
  { name: "Leo F.", text: "The full prep package is a steal. Three sessions of real, actionable feedback.", stars: 5 },
];

export default function InterviewerExample() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: "#1D1D1F" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div
          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#F5F5F7", color: "#6E6E73" }}
        >
          <span>💼</span>
          Example page — Interview Coach
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left — profile */}
          <div className="md:col-span-1">
            <div
              className="w-full aspect-square rounded-3xl mb-6 flex items-center justify-center text-white text-5xl font-bold"
              style={{ background: "linear-gradient(135deg, #0A2540 0%, #1a6891 100%)" }}
            >
              SC
            </div>
            <h1 className="font-bold mb-1" style={{ fontSize: 22, color: "#1D1D1F" }}>Sarah Chen Career Coaching</h1>
            <p className="mb-4" style={{ fontSize: 14, color: "#86868B" }}>San Francisco, CA · Ex-FAANG Recruiter</p>
            <p className="leading-relaxed mb-6" style={{ fontSize: 14, color: "#6E6E73" }}>
              Helped 300+ candidates land offers at Google, Meta, and top startups. Former recruiter turned career coach — I know exactly what hiring managers are looking for.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
              <span style={{ fontSize: 13, color: "#6E6E73" }}>5.0 · 211 reviews</span>
            </div>
            <div className="space-y-2" style={{ fontSize: 13, color: "#6E6E73" }}>
              <p>📍 Remote (Zoom sessions)</p>
              <p>🕐 Tue–Sat, 10 AM – 7 PM PT</p>
              <p>💳 Deposits required at booking</p>
            </div>
          </div>

          {/* Right — services + booking */}
          <div className="md:col-span-2">
            <h2 className="font-semibold mb-5" style={{ fontSize: 18, color: "#1D1D1F" }}>Services &amp; Pricing</h2>
            <div className="space-y-2 mb-10">
              {services.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between rounded-2xl px-5 py-4 transition-shadow hover:shadow-sm"
                  style={{ backgroundColor: "#F5F5F7", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div>
                    <p className="font-semibold" style={{ fontSize: 14, color: "#1D1D1F" }}>{s.name}</p>
                    <p className="mt-0.5" style={{ fontSize: 12, color: "#86868B" }}>{s.duration}</p>
                  </div>
                  <span className="font-bold" style={{ fontSize: 15, color: "#1D1D1F" }}>${s.price}</span>
                </div>
              ))}
            </div>

            <h2 className="font-semibold mb-4" style={{ fontSize: 18, color: "#1D1D1F" }}>Clients placed at</h2>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { label: "Google", colors: ["#4285F4", "#34A853"] },
                { label: "Meta", colors: ["#0668E1", "#00B2FF"] },
                { label: "Apple", colors: ["#555", "#888"] },
                { label: "Stripe", colors: ["#635BFF", "#80e9ff"] },
                { label: "Airbnb", colors: ["#FF5A5F", "#FC642D"] },
                { label: "OpenAI", colors: ["#10a37f", "#1a7f64"] },
              ].map(({ label, colors }) => (
                <div
                  key={label}
                  className="aspect-square rounded-2xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}
                >
                  {label}
                </div>
              ))}
            </div>

            <h2 className="font-semibold mb-4" style={{ fontSize: 18, color: "#1D1D1F" }}>Reviews</h2>
            <div className="space-y-3 mb-10">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl p-5"
                  style={{ background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.04)" }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold" style={{ fontSize: 13, color: "#1D1D1F" }}>{r.name}</span>
                    <span className="text-yellow-400 text-xs">{"★".repeat(r.stars)}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#6E6E73" }}>{r.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ background: "linear-gradient(160deg, #0A2540 0%, #0E3A66 100%)" }}
            >
              <div>
                <p className="font-semibold text-white" style={{ fontSize: 15 }}>Ready to land your next offer?</p>
                <p className="mt-0.5" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                  $20 deposit required · remainder due at session
                </p>
              </div>
              <Link
                href="/book/sarah"
                className="whitespace-nowrap font-semibold text-white px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ fontSize: 14, backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                Book now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t py-8 text-center" style={{ borderColor: "rgba(0,0,0,0.06)", fontSize: 13, color: "#86868B" }}>
        Booked with{" "}
        <span className="font-semibold" style={{ color: NAVY }}>Stackd</span>
        {" "}· Create your own free page
      </footer>
    </div>
  );
}
