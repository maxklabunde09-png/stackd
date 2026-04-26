import Link from "next/link";
import Navbar from "../../components/Navbar";

const NAVY = "#0A2540";

const services = [
  { name: "Full Cut & Style", duration: "60 min", price: 85 },
  { name: "Blowout Only", duration: "45 min", price: 45 },
  { name: "Color & Highlights", duration: "120 min", price: 150 },
  { name: "Keratin Treatment", duration: "90 min", price: 200 },
];

const reviews = [
  { name: "Jess T.", text: "Maya is incredible. I never have to worry about my hair looking off anymore.", stars: 5 },
  { name: "Camille R.", text: "Booked through Stackd in 30 seconds. The reminder texts are so helpful.", stars: 5 },
  { name: "Priya M.", text: "Best haircut I've had in years. Highly recommend the full cut & style.", stars: 5 },
];

export default function HairstylistExample() {
  return (
    <div className="min-h-screen bg-white font-sans" style={{ color: "#1D1D1F" }}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-2">
        <div
          className="inline-flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full"
          style={{ backgroundColor: "#F5F5F7", color: "#6E6E73" }}
        >
          <span>✂️</span>
          Example page — Hairstylist
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-8 pb-24">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left — profile */}
          <div className="md:col-span-1">
            <div
              className="w-full aspect-square rounded-3xl mb-6 flex items-center justify-center text-white text-5xl font-bold"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
            >
              MH
            </div>
            <h1 className="font-bold mb-1" style={{ fontSize: 22, color: "#1D1D1F" }}>Maya&apos;s Hair Studio</h1>
            <p className="mb-4" style={{ fontSize: 14, color: "#86868B" }}>Minneapolis, MN · Est. 2018</p>
            <p className="leading-relaxed mb-6" style={{ fontSize: 14, color: "#6E6E73" }}>
              Specializing in lived-in color, precision cuts, and blowouts. 7 years of experience helping clients feel confident every day.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
              <span style={{ fontSize: 13, color: "#6E6E73" }}>4.9 · 142 reviews</span>
            </div>
            <div className="space-y-2" style={{ fontSize: 13, color: "#6E6E73" }}>
              <p>📍 Downtown Minneapolis</p>
              <p>🕐 Mon–Sat, 9 AM – 6 PM</p>
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

            <h2 className="font-semibold mb-4" style={{ fontSize: 18, color: "#1D1D1F" }}>Portfolio</h2>
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                ["#f6d365", "#fda085"],
                ["#a8edea", "#fed6e3"],
                ["#d299c2", "#fef9d7"],
                ["#89f7fe", "#66a6ff"],
                ["#fddb92", "#d1fdff"],
                ["#a1c4fd", "#c2e9fb"],
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
              style={{ background: "linear-gradient(160deg, #0A2540 0%, #0E3A66 100%)" }}
            >
              <div>
                <p className="font-semibold text-white" style={{ fontSize: 15 }}>Ready to book with Maya?</p>
                <p className="mt-0.5" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                  $20 deposit required · remainder due at appointment
                </p>
              </div>
              <Link
                href="/book/maya"
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
