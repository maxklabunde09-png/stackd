import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 font-sans" style={{ background: "#FBFBFD" }}>
      <div className="text-center max-w-sm">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-7"
          style={{ background: "#F5F5F7", border: "1px solid rgba(0,0,0,0.06)" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M6 6l10 10M16 6L6 16" stroke="#86868B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h1 className="font-bold mb-3 tracking-tight" style={{ fontSize: 28, color: "#1D1D1F" }}>
          Booking cancelled
        </h1>
        <p className="leading-relaxed mb-8" style={{ fontSize: 17, color: "#6E6E73" }}>
          No charge was made.
        </p>
        <Link
          href="/"
          className="inline-block font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
          style={{ fontSize: 14, background: "#F5F5F7", color: "#1D1D1F", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
