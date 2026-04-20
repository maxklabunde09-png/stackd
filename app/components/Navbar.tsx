import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight" style={{ color: "#0A2540" }}>
          Stackd
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/#features" className="hover:text-gray-900 transition-colors">Features</Link>
          <Link href="/#examples" className="hover:text-gray-900 transition-colors">Examples</Link>
          <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
        </div>
        <Link
          href="/#pricing"
          className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#0A2540" }}
        >
          Get started free
        </Link>
      </div>
    </nav>
  );
}
