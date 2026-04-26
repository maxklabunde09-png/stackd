"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";

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
  { id: "solo", name: "Solo", price: "$50/mo", description: "1 user" },
  { id: "studio", name: "Studio", price: "$99/mo", description: "Up to 5 members" },
  { id: "business", name: "Business", price: "$175/mo", description: "Up to 25 members" },
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
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
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeUp 0.5s ease both; }
        .field {
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          outline: none;
        }
        .field:focus {
          border-color: #0A2540;
          box-shadow: 0 0 0 3px rgba(10,37,64,0.08);
        }
        .submit-btn { transition: opacity 0.15s ease; }
        .submit-btn:hover { opacity: 0.85; }
        .plan-opt { transition: border-color 0.15s ease, background 0.15s ease; cursor: pointer; }
      `}</style>

      <div className="min-h-screen flex flex-col" style={{ background: "#FBFBFD" }}>
        {/* Top bar */}
        <header className="py-4 px-6 flex items-center justify-between max-w-6xl mx-auto w-full border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
          <Link
            href="/"
            className="text-[17px] font-bold tracking-tight"
            style={{ color: "#1D1D1F" }}
          >
            Stackd
          </Link>
          <p style={{ fontSize: 13, color: "#86868B" }}>
            Already have an account?{" "}
            <Link href="#" className="font-medium" style={{ color: NAVY, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Log in
            </Link>
          </p>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-start justify-center px-6 py-14">
          {submitted ? (
            <div className="fade-in text-center max-w-md mx-auto mt-16">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7"
                style={{ background: "linear-gradient(160deg, #0A2540, #0E3A66)", boxShadow: "0 8px 24px rgba(10,37,64,0.22)" }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M7 14.5l5 5 9-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1
                className="font-bold mb-4 tracking-tight"
                style={{ fontSize: 30, color: "#1D1D1F" }}
              >
                You&apos;re on the list!
              </h1>
              <p className="leading-relaxed mb-8" style={{ fontSize: 17, color: "#6E6E73" }}>
                We&apos;ll reach out within 24 hours to get you set up. Keep an eye on{" "}
                <span className="font-semibold" style={{ color: "#1D1D1F" }}>
                  {form.email || "your inbox"}
                </span>
                .
              </p>
              <Link
                href="/"
                className="inline-block font-semibold px-7 py-3 rounded-full text-white transition-opacity hover:opacity-80"
                style={{ fontSize: 15, background: NAVY }}
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            <div
              className="fade-in w-full max-w-lg bg-white rounded-3xl p-8 md:p-10"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div className="mb-8">
                <h1
                  className="font-bold tracking-tight mb-2"
                  style={{ fontSize: 24, color: "#1D1D1F" }}
                >
                  Start your 30-day free trial
                </h1>
                <p style={{ fontSize: 15, color: "#6E6E73" }}>
                  Try Stackd free for 30 days. Cancel anytime.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-semibold mb-1.5"
                      style={{ fontSize: 12, color: "#1D1D1F" }}
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
                      className="field w-full px-4 py-3 rounded-xl border text-[14px]"
                      style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1D1D1F" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-semibold mb-1.5"
                      style={{ fontSize: 12, color: "#1D1D1F" }}
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
                      className="field w-full px-4 py-3 rounded-xl border text-[14px]"
                      style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1D1D1F" }}
                    />
                  </div>
                </div>

                {/* Business name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block font-semibold mb-1.5"
                    style={{ fontSize: 12, color: "#1D1D1F" }}
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
                    className="field w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1D1D1F" }}
                  />
                </div>

                {/* Business type */}
                <div>
                  <label
                    htmlFor="businessType"
                    className="block font-semibold mb-1.5"
                    style={{ fontSize: 12, color: "#1D1D1F" }}
                  >
                    Business type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className="field w-full px-4 py-3 rounded-xl border text-[14px] appearance-none bg-white"
                    style={{
                      borderColor: "rgba(0,0,0,0.12)",
                      color: form.businessType ? "#1D1D1F" : "#86868B",
                    }}
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t} style={{ color: "#1D1D1F" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-1.5"
                    style={{ fontSize: 12, color: "#1D1D1F" }}
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
                    className="field w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1D1D1F" }}
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block font-semibold mb-1.5"
                    style={{ fontSize: 12, color: "#1D1D1F" }}
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
                    className="field w-full px-4 py-3 rounded-xl border text-[14px]"
                    style={{ borderColor: "rgba(0,0,0,0.12)", color: "#1D1D1F" }}
                  />
                </div>

                {/* Plan selector */}
                <div>
                  <label
                    className="block font-semibold mb-3"
                    style={{ fontSize: 12, color: "#1D1D1F" }}
                  >
                    Choose your plan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {planOptions.map((plan) => {
                      const selected = selectedPlan === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlan(plan.id)}
                          className="plan-opt rounded-xl p-3 text-left border"
                          style={{
                            borderColor: selected ? NAVY : "rgba(0,0,0,0.10)",
                            background: selected ? NAVY : "#fff",
                            boxShadow: selected ? "0 2px 12px rgba(10,37,64,0.14)" : "none",
                          }}
                        >
                          <p
                            className="text-[12px] font-bold mb-0.5"
                            style={{ color: selected ? "#fff" : "#1D1D1F" }}
                          >
                            {plan.name}
                          </p>
                          <p
                            className="text-[12px] font-semibold mb-1"
                            style={{ color: selected ? "rgba(255,255,255,0.6)" : NAVY }}
                          >
                            {plan.price}
                          </p>
                          <p
                            className="text-[11px] leading-tight"
                            style={{ color: selected ? "rgba(255,255,255,0.42)" : "#86868B" }}
                          >
                            {plan.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="submit-btn w-full py-4 rounded-full font-semibold text-white"
                    style={{
                      fontSize: 15,
                      backgroundColor: NAVY,
                      boxShadow: "0 4px 16px rgba(10,37,64,0.20)",
                    }}
                  >
                    Start my 30-day free trial
                  </button>
                  <p className="text-center mt-3" style={{ fontSize: 12, color: "#86868B" }}>
                    Cancel before day 30 and you won&apos;t be charged.
                  </p>
                </div>
              </form>

              <p className="text-center mt-6" style={{ fontSize: 12, color: "#86868B" }}>
                By signing up you agree to our{" "}
                <Link href="#" className="underline hover:text-gray-600" style={{ textUnderlineOffset: "2px" }}>
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline hover:text-gray-600" style={{ textUnderlineOffset: "2px" }}>
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
