import Link from "next/link";

const NAVY = "#0A2540";

export default function Navbar() {
  return (
    <nav
      className="w-full border-b bg-white sticky top-0 z-50"
      style={{ borderColor: "#E8F0F8" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight"
          style={{ color: NAVY }}
        >
          Stackd
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/#features" className="hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="/examples/hairstylist" className="hover:text-gray-900 transition-colors">
            Examples
          </Link>
          <Link href="/pricing" className="hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link href="/#how-it-works" className="hover:text-gray-900 transition-colors">
            How it Works
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden md:inline text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: NAVY }}
          >
            Get started free
          </Link>
        </div>
      </div>
    </nav>
  );
}
