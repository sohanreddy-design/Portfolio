import React from "react";
import { User } from "lucide-react";
import { profile } from "../data/mock";

// Circular profile avatar with animated gradient glow border.
// Uses initials fallback (no external images to avoid broken links).
export default function ProfileAvatar({ size = 220 }) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-label="Profile"
    >
      {/* Rotating gradient ring */}
      <div
        className="absolute inset-0 rounded-full anim-spin-slow"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(16,185,129,0.0) 0deg, rgba(16,185,129,0.9) 90deg, rgba(34,211,238,0.9) 180deg, rgba(16,185,129,0.0) 270deg, rgba(16,185,129,0.0) 360deg)",
          padding: 2,
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
        }}
      />
      {/* Outer soft glow */}
      <div className="absolute inset-[-10px] rounded-full anim-pulse-glow pointer-events-none" />

      {/* Inner avatar circle */}
      <div
        className="relative rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 flex items-center justify-center"
        style={{ width: size - 16, height: size - 16 }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* Initials */}
        <div className="relative flex flex-col items-center gap-1">
          <User className="h-7 w-7 text-emerald-300/70" />
          <div className="text-4xl font-semibold tracking-tight font-display text-neutral-100">
            {initials}
          </div>
          <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.25em]">
            profile
          </div>
        </div>
      </div>
    </div>
  );
}
