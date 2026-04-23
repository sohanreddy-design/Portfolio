import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-400/20">
            <Sparkles className="h-4 w-4 text-emerald-300" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-mono text-neutral-400">portfolio</div>
            <div className="text-[15px] font-semibold tracking-tight text-neutral-100">
              Sohan<span className="text-emerald-400">.</span>
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg btn-transition ${
                  isActive
                    ? "text-emerald-300 bg-emerald-400/5"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
          <a
            href="mailto:reddysohan18@gmail.com"
            className="ml-3 inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white text-neutral-900 hover:bg-emerald-300 btn-transition"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-neutral-200 hover:bg-white/5 btn-transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0b]/95 backdrop-blur-xl">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm font-medium btn-transition ${
                    isActive
                      ? "text-emerald-300 bg-emerald-400/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="mailto:reddysohan18@gmail.com"
              className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-lg bg-white text-neutral-900 hover:bg-emerald-300 btn-transition"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
