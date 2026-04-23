import React, { useState } from "react";
import {
  Github,
  ArrowUpRight,
  FolderGit2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { projects } from "../data/mock";

export default function Projects() {
  const [active, setActive] = useState("All");
  const allTech = Array.from(
    new Set(projects.flatMap((p) => p.tech))
  );
  const filters = ["All", ...allTech];

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(active));

  return (
    <div className="relative">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-10">
        <div className="anim-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 text-xs font-mono">
            <FolderGit2 className="h-3.5 w-3.5" /> Selected work
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Projects &amp; <span className="grad-text">Research</span>
          </h1>
          <p className="mt-5 text-neutral-400 max-w-2xl text-lg">
            A collection of research-led and product-minded builds — with a
            focus on reliability, clarity, and real-world usefulness.
          </p>
        </div>

        {/* Filter pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border btn-transition ${
                active === f
                  ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-200"
                  : "border-white/10 text-neutral-300 hover:border-white/25 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-neutral-500 text-sm">
            No projects match this filter — try another tag.
          </div>
        )}
      </section>

      {/* More / GitHub CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-[0.3em]">
              More on GitHub
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Explore my code, experiments, and ongoing research.
            </h3>
          </div>
          <a
            href="https://github.com/sohanreddy-design"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-emerald-300 btn-transition"
          >
            <Github className="h-4 w-4" /> Visit GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const accent =
    project.accent === "amber"
      ? {
          ring: "hover:border-amber-400/40",
          chip: "bg-amber-400/10 text-amber-200 border-amber-400/20",
          glow: "from-amber-500/15",
          dot: "bg-amber-300",
        }
      : {
          ring: "hover:border-emerald-400/40",
          chip: "bg-emerald-400/10 text-emerald-200 border-emerald-400/20",
          glow: "from-emerald-500/15",
          dot: "bg-emerald-300",
        };

  return (
    <article
      className={`card-lift anim-fade-up group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7 ${accent.ring}`}
      style={{ animationDelay: `${0.08 * index}s` }}
    >
      {/* Decorative glow */}
      <div
        className={`absolute -top-16 -right-16 h-56 w-56 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${accent.glow} to-transparent pointer-events-none`}
      />

      <header className="relative flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}></span>
            {project.year} &middot; Research build
          </div>
          <h3 className="mt-2 text-xl md:text-[22px] font-semibold tracking-tight text-neutral-50 leading-snug">
            {project.title}
          </h3>
        </div>
        <div className="h-10 w-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-emerald-300 group-hover:border-emerald-400/40 btn-transition">
          <Sparkles className="h-4 w-4" />
        </div>
      </header>

      <p className="mt-4 text-neutral-300 text-[15px] leading-relaxed">
        {project.shortDescription}
      </p>

      <ul className="mt-4 space-y-2">
        {project.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-sm text-neutral-400"
          >
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400/80 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${accent.chip}`}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-emerald-300 btn-transition"
        >
          <Github className="h-4 w-4" />
          View on GitHub
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <span className="text-xs font-mono text-neutral-500 link-underline">
          #{project.id}
        </span>
      </div>
    </article>
  );
}
