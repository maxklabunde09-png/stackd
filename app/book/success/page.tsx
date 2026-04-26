import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-sans" style={{ background: "#FBFBFD" }}>
      <div className="text-center max-w-sm">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7"
          style={{
            background: "linear-gradient(160deg, #0A2540, #0E3A66)",
            boxShadow: "0 8px 24px rgba(10,37,64,0.22)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M7 14.5l5 5 9-10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="font-bold mb-3 tracking-tight" style={{ fontSize: 28, color: "#1D1D1F" }}>
          You&apos;re booked!
        </h1>
        <p className="leading-relaxed mb-8" style={{ fontSize: 17, color: "#6E6E73" }}>
          A confirmation is on its way.
        </p>
        <Link
          href="/"
          className="inline-block font-semibold px-6 py-3 rounded-full text-white transition-opacity hover:opacity-80"
          style={{ fontSize: 14, background: "#0A2540" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
