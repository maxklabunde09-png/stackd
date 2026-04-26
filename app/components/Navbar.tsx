import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50 border-b"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-[52px] flex items-center justify-between">
        <Link
          href="/"
          className="text-[17px] font-bold tracking-tight"
          style={{ color: "#1D1D1F" }}
        >
          Stackd
        </Link>

        <div
          className="hidden md:flex items-center gap-7"
          style={{ fontSize: 14, color: "#6E6E73" }}
        >
          <Link href="/#features" className="hover:text-gray-900 transition-colors duration-150">
            Features
          </Link>
          <Link href="/#examples" className="hover:text-gray-900 transition-colors duration-150">
            Examples
          </Link>
          <Link href="/pricing" className="hover:text-gray-900 transition-colors duration-150">
            Pricing
          </Link>
          <Link href="/#how-it-works" className="hover:text-gray-900 transition-colors duration-150">
            How it Works
          </Link>
        </div>

        <Link
          href="/signup"
          className="text-[13px] font-semibold text-white px-5 py-2 rounded-full transition-opacity duration-150 hover:opacity-80"
          style={{ backgroundColor: "#0A2540" }}
        >
          Get started free
        </Link>
      </div>
    </nav>
  );
}
