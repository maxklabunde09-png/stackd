import Link from "next/link";
import Navbar from "../../components/Navbar";

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
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Page label */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#E8F4FD", color: "#0A2540" }}
        >
          💼 Example page — Interview Coach
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left — profile */}
          <div className="md:col-span-1">
            <div className="w-full aspect-square rounded-2xl mb-5 flex items-center justify-center text-white text-5xl font-bold"
              style={{ background: "linear-gradient(135deg, #0A2540 0%, #1a6891 100%)" }}>
              SC
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Sarah Chen Career Coaching</h1>
            <p className="text-sm text-gray-400 mb-4">San Francisco, CA · Ex-FAANG Recruiter</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Helped 300+ candidates land offers at Google, Meta, and top startups. Former recruiter turned career coach — I know exactly what hiring managers are looking for.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
              <span className="text-sm text-gray-500">5.0 · 211 reviews</span>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📍 Remote (Zoom sessions)</p>
              <p>🕐 Tue–Sat, 10 AM – 7 PM PT</p>
              <p>💳 Deposits required at booking</p>
            </div>
          </div>

          {/* Right — services + booking */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Services & Pricing</h2>
            <div className="space-y-3 mb-8">
              {services.map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-4 hover:shadow-sm transition-shadow"
                  style={{ backgroundColor: "#F9FAFB" }}>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{s.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.duration}</p>
                  </div>
                  <span className="font-bold text-gray-800">${s.price}</span>
                </div>
              ))}
            </div>

            {/* Companies */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">Clients placed at</h2>
            <div className="grid grid-cols-3 gap-3 mb-8">
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
                  className="aspect-square rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)` }}
                >
                  {label}
                </div>
              ))}
            </div>

            {/* Reviews */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">Reviews</h2>
            <div className="space-y-3 mb-8">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-xl border border-gray-100 p-4" style={{ backgroundColor: "#F9FAFB" }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm text-gray-800">{r.name}</span>
                    <span className="text-yellow-400 text-xs">{"★".repeat(r.stars)}</span>
                  </div>
                  <p className="text-sm text-gray-500">{r.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
              style={{ backgroundColor: "#E8F4FD" }}
            >
              <div>
                <p className="font-bold text-gray-900">Ready to land your next offer?</p>
                <p className="text-sm text-gray-500 mt-0.5">$20 deposit required · remainder due at session</p>
              </div>
              <Link
                href="/book/sarah"
                className="whitespace-nowrap text-sm font-semibold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90 shadow-sm"
                style={{ backgroundColor: "#0A2540" }}
              >
                Book now →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-100 py-8 text-center text-xs text-gray-400">
        Booked with <span className="font-semibold" style={{ color: "#0A2540" }}>Stackd</span> &middot; Create your own free page
      </footer>
    </div>
  );
}
