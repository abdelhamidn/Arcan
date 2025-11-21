export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-semibold text-lg">YourApp</div>

        {/* Nav Items */}
        <div className="flex items-center gap-4">
          <button className="px-3 py-1.5 text-sm text-gray-600 hover:text-black transition-colors">
            Docs
          </button>
          <button className="px-3 py-1.5 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}