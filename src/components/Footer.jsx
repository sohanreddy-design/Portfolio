import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { profile } from "../data/mock";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Portfolio
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {profile.name}
              <span className="text-emerald-400">.</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 max-w-sm">
              {profile.tagline}
            </p>
          </div>

          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${profile.details.emailPersonal}`}
                  className="text-neutral-300 hover:text-emerald-300 btn-transition inline-flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" /> {profile.details.emailPersonal}
                </a>
              </li>
              <li className="text-neutral-400">
                <span className="font-mono text-neutral-500">tel</span>{" "}
                {profile.details.phone}
              </li>
              <li className="text-neutral-400">
                <span className="font-mono text-neutral-500">loc</span>{" "}
                {profile.details.location}
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Follow
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-sm text-neutral-200 hover:border-emerald-400/40 hover:text-emerald-200 btn-transition"
              >
                <Github className="h-4 w-4" /> GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-sm text-neutral-200 hover:border-emerald-400/40 hover:text-emerald-200 btn-transition"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={profile.socials.email}
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 text-sm text-neutral-200 hover:border-emerald-400/40 hover:text-emerald-200 btn-transition"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="hr-grad my-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="font-mono">
            &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 anim-pulse-glow" />
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
