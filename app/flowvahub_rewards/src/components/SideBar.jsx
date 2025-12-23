import React from "react";
import {
  Home,
  Compass,
  Library,
  Layers,
  CreditCard,
  Gift,
  Settings
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Discover", icon: Compass },
  { label: "Library", icon: Library },
  { label: "Tech Stack", icon: Layers },
  { label: "Subscriptions", icon: CreditCard },
  { label: "Rewards Hub", icon: Gift },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 text-purple-800 flex flex-col justify-between fixed bg-white shadow-md">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="px-6 py-6">
          <img
            src="/logo/flowvahub_logo.svg"
            alt="Flowvahub Logo"
            className="w-40"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1 px-4">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base transition
                ${
                  label === "Rewards Hub"
                    ? "bg-purple-300 text-purple-800 font-semibold"
                    : "hover:bg-purple-300 hover:text-purple-600 text-black cursor-pointer"
                }
              `}
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Profile */}
      <div className="px-4 py-6 border-t border-zinc-300 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-black">
          C
        </div>
        <div className="text-sm">
          <p className="font-semibold text-black">John</p>
          <p className="text-zinc-400 text-xs truncate">
            johndoe@gmail.com
          </p>
        </div>
      </div>
    </aside>
  );
}
