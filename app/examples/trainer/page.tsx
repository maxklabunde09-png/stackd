import Link from "next/link";
import Navbar from "../../components/Navbar";

const NAVY = "#0A2540";

const services = [
  { name: "1-on-1 Session", duration: "60 min", price: 75 },
  { name: "Group Class", duration: "45 min", price: 35 },
  { name: "Nutrition Consult", duration: "50 min", price: 60 },
  { name: "Monthly Coaching Package", duration: "4 sessions", price: 260 },
];

const reviews = [
  { name: "Marcus D.", text: "Jake pushed me harder than I ever pushed myself. Down 22 lbs in 3 months.", stars: 5 },
  { name: "Taylor B.", text: "The group classes are amazing. Great energy, great coaching.", stars: 5 },
  { name: "Sandra K.", text: "Nutrition consult alone was worth every penny. Finally have a plan that works.", stars: 5 },
];

export default function TrainerExample() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: "#1D1D1F" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div
          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#F5F5F7", color: "#6E6E73" }}
        >
          <span>🏋️</span>
          Example page — Personal Trainer
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left — profile */}
          <div className="md:col-span-1">
            <div
              className="w-full aspect-square rounded-3xl mb-6 flex items-center justify-center text-white text-5xl font-bold"
              style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
            >
              JP
            </div>
            <h1 className="font-bold mb-1" style={{ fontSize: 22, color: "#1D1D1F" }}>Jake&apos;s Performance Training</h1>
            <p className="mb-4" style={{ fontSize: 14, color: "#86868B" }}>Chicago, IL · NASM Certified</p>
            <p className="leading-relaxed mb-6" style={{ fontSize: 14, color: "#6E6E73" }}>
              Strength, conditioning, and nutrition coaching for everyday athletes. 10 years helping real people hit real goals — no fads, no fluff.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
              <span style={{ fontSize: 13, color: "#6E6E73" }}>4.8 · 89 reviews</span>
            </div>
            <div className="space-y-2" style={{ fontSize: 13, color: "#6E6E73" }}>
              <p>📍 River North Gym, Chicago</p>
              <p>🕐 Mon–Fri, 6 AM – 8 PM</p>
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

            <h2 className="font-semibold mb-4" style={{ fontSize: 18, color: "#1D1D1F" }}>Results &amp; Studio</h2>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                ["#f093fb", "#f5576c"],
                ["#4facfe", "#00f2fe"],
                ["#43e97b", "#38f9d7"],
                ["#fa709a", "#fee140"],
                ["#a18cd1", "#fbc2eb"],
                ["#ffecd2", "#fcb69f"],
              ].map(([from, to], i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
                />
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
              style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}
            >
              <div>
                <p className="font-semibold text-white" style={{ fontSize: 15 }}>Ready to train with Jake?</p>
                <p className="mt-0.5" style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>
                  $20 deposit required · remainder due at session
                </p>
              </div>
              <Link
                href="/book/jake"
                className="whitespace-nowrap font-semibold text-white px-6 py-3 rounded-full transition-opacity hover:opacity-80"
                style={{ fontSize: 14, backgroundColor: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}
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
