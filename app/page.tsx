import Link from "next/link";
import Navbar from "./components/Navbar";

const features = [
  {
    icon: "⚡",
    title: "Book instantly",
    description: "Clients pick a time from your live calendar and confirm in seconds — no back-and-forth.",
  },
  {
    icon: "💳",
    title: "Get paid upfront",
    description: "Collect a deposit at the time of booking so every appointment is backed by real commitment.",
  },
  {
    icon: "🔔",
    title: "No more no-shows",
    description: "Automated SMS reminders go out 24 hours and 1 hour before so clients actually show up.",
  },
];

const useCases = [
  {
    emoji: "✂️",
    title: "Hairstylists",
    description: "Fill your chair every day. Let clients book cuts, colors, and blowouts around your exact availability.",
    href: "/examples/hairstylist",
  },
  {
    emoji: "🏋️",
    title: "Personal Trainers",
    description: "Manage 1-on-1 sessions, group classes, and nutrition consults from one clean booking page.",
    href: "/examples/trainer",
  },
  {
    emoji: "💼",
    title: "Interview Coaches",
    description: "Turn your expertise into a streamlined booking flow for mock interviews, resume reviews, and full prep packages.",
    href: "/examples/interviewer",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Everything you need to get started.",
    features: ["1 booking page", "Unlimited appointments", "Email confirmations", "Basic analytics"],
    cta: "Start for free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For pros who want zero no-shows.",
    features: ["Everything in Free", "Stripe deposit payments", "SMS reminders (Twilio)", "Advanced analytics", "Custom branding", "Priority support"],
    cta: "Start Pro free for 14 days",
    highlight: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div
          className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#E8F4FD", color: "#0A2540" }}
        >
          Now in early access
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 mb-6">
          The smartest way to<br />get booked and paid.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stackd gives hairstylists, personal trainers, interviewers, and any service business a beautiful booking page with payments, reminders, and zero no-shows.
        </p>
        <Link
          href="/#pricing"
          className="inline-block text-white font-semibold px-8 py-4 rounded-xl text-base transition-opacity hover:opacity-90 shadow-md"
          style={{ backgroundColor: "#0A2540" }}
        >
          Get started free
        </Link>
        <p className="text-sm text-gray-400 mt-4">No credit card required.</p>
      </section>

      {/* Features */}
      <section id="features" className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">Everything you need, nothing you don&apos;t</h2>
          <p className="text-center text-gray-400 mb-12 text-base">Built specifically for service businesses that book by appointment.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is Stackd for */}
      <section id="examples" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">Who is Stackd for?</h2>
          <p className="text-center text-gray-400 mb-12 text-base">See how service pros use Stackd to run their business.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl border border-gray-100 p-8 flex flex-col hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{u.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{u.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{u.description}</p>
                <Link
                  href={u.href}
                  className="text-sm font-semibold text-center py-2.5 rounded-xl border-2 transition-colors"
                  style={{ borderColor: "#0A2540", color: "#0A2540" }}
                >
                  See example →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">Simple pricing</h2>
          <p className="text-center text-gray-400 mb-12 text-base">Start free. Upgrade when you&apos;re ready.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border flex flex-col ${plan.highlight ? "border-transparent shadow-xl text-white" : "border-gray-200 bg-white"}`}
                style={plan.highlight ? { backgroundColor: "#0A2540" } : {}}
              >
                <div className="mb-6">
                  <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? "text-blue-300" : "text-gray-400"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className={`text-base mb-1 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? "text-blue-200" : "text-gray-500"}`}>{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className={`flex items-center gap-2 text-sm ${plan.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      <span className={plan.highlight ? "text-blue-300" : "text-emerald-500"}>✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`text-sm font-semibold text-center py-3 rounded-xl transition-opacity hover:opacity-90 ${plan.highlight ? "bg-white text-gray-900" : "text-white"}`}
                  style={!plan.highlight ? { backgroundColor: "#0A2540" } : {}}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10 text-center text-sm text-gray-400">
        <span className="font-semibold" style={{ color: "#0A2540" }}>Stackd</span>
        &nbsp;&middot;&nbsp;The booking platform for service pros&nbsp;&middot;&nbsp;
        <Link href="/book/maya" className="hover:underline">See a live example</Link>
      </footer>
    </div>
  );
}
