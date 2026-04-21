"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#0A2540";
const LIGHT_BLUE = "#E8F4FD";

const businessTypes = [
  "Hairstylist",
  "Personal Trainer",
  "Interview Coach",
  "Other",
];

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
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
        .field:focus {
          outline: none;
          border-color: #0A2540;
          box-shadow: 0 0 0 3px rgba(10,37,64,0.08);
        }
        .submit-btn {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .submit-btn:hover { opacity: 0.9; transform: scale(1.02); }
      `}</style>

      <div
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: LIGHT_BLUE }}
      >
        {/* Top bar */}
        <header className="py-5 px-6 flex items-center justify-between max-w-6xl mx-auto w-full">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight"
            style={{ color: NAVY }}
          >
            Stackd
          </Link>
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="#"
              className="font-semibold hover:underline"
              style={{ color: NAVY }}
            >
              Log in
            </Link>
          </p>
        </header>

        {/* Main */}
        <main className="flex-1 flex items-center justify-center px-6 py-16">
          {submitted ? (
            /* ── Success state ── */
            <div className="fade-in text-center max-w-md mx-auto">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
                style={{ background: NAVY }}
              >
                ✓
              </div>
              <h1
                className="text-3xl font-extrabold mb-4 tracking-tight"
                style={{ color: NAVY }}
              >
                You&apos;re on the list.
              </h1>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&apos;ll be in touch soon with everything you need to get
                started. Keep an eye on{" "}
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
              className="fade-in w-full max-w-md bg-white rounded-2xl p-8 md:p-10"
              style={{ boxShadow: "0 24px 56px rgba(10,37,64,0.12)" }}
            >
              <div className="mb-8">
                <h1
                  className="text-2xl font-extrabold tracking-tight mb-2"
                  style={{ color: NAVY }}
                >
                  Create your free account
                </h1>
                <p className="text-sm text-gray-500">
                  Be one of the first businesses on Stackd.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      style={{
                        borderColor: "#C8DFF0",
                        color: NAVY,
                      }}
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
                      style={{
                        borderColor: "#C8DFF0",
                        color: NAVY,
                      }}
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
                    style={{
                      borderColor: "#C8DFF0",
                      color: NAVY,
                    }}
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
                    style={{
                      borderColor: "#C8DFF0",
                      color: NAVY,
                    }}
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
                    style={{
                      borderColor: "#C8DFF0",
                      color: NAVY,
                    }}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="submit-btn w-full py-4 rounded-xl text-sm font-extrabold text-white"
                    style={{
                      backgroundColor: NAVY,
                      boxShadow: `0 6px 20px rgba(10,37,64,0.24)`,
                    }}
                  >
                    Create my free account
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Free forever. No credit card required.
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
