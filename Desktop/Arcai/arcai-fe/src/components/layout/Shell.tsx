"use client";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      <main className="pt-14 pl-56 transition-all duration-300">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}