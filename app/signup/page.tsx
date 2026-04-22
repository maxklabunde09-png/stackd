"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

const businessTypes = [
  "Hairstylist",
  "Personal Trainer",
  "Interview Coach",
  "Tutor",
  "Photographer",
  "Consultant",
  "Other",
];

const planOptions = [
  {
    id: "solo",
    name: "Solo",
    price: "$50/mo",
    description: "1 user",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$99/mo",
    description: "Up to 5 team members",
  },
  {
    id: "business",
    name: "Business",
    price: "$175/mo",
    description: "Up to 25 team members",
  },
];

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("solo");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessType: "",
    email: "",
    password: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeUp 0.55s ease both; }
        .field {
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .field:focus {
          outline: none;
          border-color: #0A2540;
          box-shadow: 0 0 0 3px rgba(10,37,64,0.08);
        }
        .submit-btn { transition: opacity 0.15s ease, transform 0.15s ease; }
        .submit-btn:hover { opacity: 0.9; transform: scale(1.02); }
        .plan-opt { transition: border-color 0.15s ease, background 0.15s ease; cursor: pointer; }
      `}</style>

      <div className="min-h-screen flex flex-col bg-white">
        {/* Top bar */}
        <header
          className="py-5 px-6 flex items-center justify-between max-w-6xl mx-auto w-full"
        >
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            Stackd
          </Link>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-start justify-center px-6 py-12">
          {submitted ? (
            /* ── Success state ── */
            <div className="fade-in text-center max-w-md mx-auto mt-16">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6"
                style={{ background: NAVY }}
              >
                ✓
              </div>
              <h1
                className="text-3xl font-extrabold mb-4 tracking-tight"
                style={{ color: NAVY }}
              >
                You&apos;re on the list!
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                We will reach out within 24 hours to get you set up. Keep an eye
                on{" "}
                <span className="font-semibold" style={{ color: NAVY }}>
                  {form.email || "your inbox"}
                </span>
                .
              </p>
              <Link
                href="/"
                className="inline-block text-sm font-bold px-6 py-3 rounded-xl text-white"
                style={{ background: NAVY }}
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            /* ── Form state ── */
            <div
              className="fade-in w-full max-w-lg bg-white rounded-2xl p-8 md:p-10"
              style={{ boxShadow: "0 24px 56px rgba(10,37,64,0.10)" }}
            >
              <div className="mb-8">
                <h1
                  className="text-2xl font-extrabold tracking-tight mb-2"
                  style={{ color: NAVY }}
                >
                  Start your 30-day free trial
                </h1>
                <p className="text-sm text-gray-500">
                  Try Stackd free for 30 days. Cancel anytime.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Maya"
                      className="field w-full px-4 py-3 rounded-xl border text-sm"
                      style={{ borderColor: "#C8DFF0", color: NAVY }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Johnson"
                      className="field w-full px-4 py-3 rounded-xl border text-sm"
                      style={{ borderColor: "#C8DFF0", color: NAVY }}
                    />
                  </div>
                </div>

                {/* Business name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Business name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    value={form.businessName}
                    onChange={handleChange}
                    placeholder="Maya's Hair Studio"
                    className="field w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor: "#C8DFF0", color: NAVY }}
                  />
                </div>

                {/* Business type */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Business type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className="field w-full px-4 py-3 rounded-xl border text-sm appearance-none bg-white"
                    style={{
                      borderColor: "#C8DFF0",
                      color: form.businessType ? NAVY : "#9CA3AF",
                    }}
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} style={{ color: NAVY }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="maya@example.com"
                    className="field w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor: "#C8DFF0", color: NAVY }}
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="At least 8 characters"
                    className="field w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor: "#C8DFF0", color: NAVY }}
                  />
                </div>

                {/* Plan selector */}
                <div>
                  <label
                    className="block text-xs font-semibold mb-3"
                    style={{ color: NAVY }}
                  >
                    Choose your plan
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {planOptions.map((plan) => {
                      const selected = selectedPlan === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlan(plan.id)}
                          className="plan-opt rounded-xl p-3 text-left border-2"
                          style={{
                            borderColor: selected ? NAVY : "#C8DFF0",
                            background: selected ? NAVY : "#fff",
                          }}
                        >
                          <p
                            className="text-xs font-extrabold mb-0.5"
                            style={{ color: selected ? "#fff" : NAVY }}
                          >
                            {plan.name}
                          </p>
                          <p
                            className="text-xs font-bold mb-1"
                            style={{ color: selected ? "#7EBEDF" : NAVY }}
                          >
                            {plan.price}
                          </p>
                          <p
                            className="text-xs leading-tight"
                            style={{
                              color: selected
                                ? "rgba(255,255,255,0.5)"
                                : "#9CA3AF",
                            }}
                          >
                            {plan.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="submit-btn w-full py-4 rounded-xl text-sm font-extrabold text-white"
                    style={{
                      backgroundColor: NAVY,
                      boxShadow: "0 6px 20px rgba(10,37,64,0.24)",
                    }}
                  >
                    Start my 30-day free trial
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Cancel before day 30 and you won&apos;t be charged.
                  </p>
                </div>
              </form>

              <p className="text-xs text-center text-gray-400 mt-6">
                By signing up you agree to our{" "}
                <Link href="#" className="underline hover:text-gray-600">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline hover:text-gray-600">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
