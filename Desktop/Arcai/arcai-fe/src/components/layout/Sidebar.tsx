"use client";

import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Voice", href: "/voice" },
  { label: "Images", href: "/images" },
  { label: "Video", href: "/video" },
  { label: "Text", href: "/text" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-gray-50 border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-colors"
      >
        {collapsed ? "→" : "←"}
      </button>

      {/* Nav Links */}
      <nav className="p-3 flex flex-col gap-1 mt-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-black rounded-md transition-colors"
          >
            <span className="w-5 h-5 bg-gray-300 rounded" />
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}