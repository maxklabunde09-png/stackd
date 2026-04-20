import Link from "next/link";
import Navbar from "../../components/Navbar";

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
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Page label */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#E8F4FD", color: "#0A2540" }}
        >
          ✂️ Example page — Hairstylist
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Left — profile */}
          <div className="md:col-span-1">
            {/* Photo placeholder */}
            <div className="w-full aspect-square rounded-2xl mb-5 flex items-center justify-center text-white text-5xl font-bold"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
              MH
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Maya&apos;s Hair Studio</h1>
            <p className="text-sm text-gray-400 mb-4">Minneapolis, MN · Est. 2018</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Specializing in lived-in color, precision cuts, and blowouts. 7 years of experience helping clients feel confident every day.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
              <span className="text-sm text-gray-500">4.9 · 142 reviews</span>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>📍 Downtown Minneapolis</p>
              <p>🕐 Mon–Sat, 9 AM – 6 PM</p>
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

            {/* Gallery placeholders */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <div className="grid grid-cols-3 gap-3 mb-8">
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
                  className="aspect-square rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)` }}
                />
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
                <p className="font-bold text-gray-900">Ready to book with Maya?</p>
                <p className="text-sm text-gray-500 mt-0.5">$20 deposit required · remainder due at appointment</p>
              </div>
              <Link
                href="/book/maya"
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
