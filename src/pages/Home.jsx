import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Cpu,
  Code2,
  MessageSquareText,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Github,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/mock";
import ProfileAvatar from "../components/ProfileAvatar";

const iconMap = { Brain, Cpu, Code2, MessageSquareText };

export default function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-20 md:pt-16 md:pb-28 grid md:grid-cols-[1.1fr_0.9fr] items-center gap-12">
          <div className="anim-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 text-xs font-mono">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              Open to research & SWE roles
            </div>

            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02]">
              Hi, I&apos;m{" "}
              <span className="grad-text">{profile.firstName}</span>.
              <br />
              <span className="text-neutral-300">I build</span>{" "}
              <span className="text-white">intelligent</span>{" "}
              <span className="text-neutral-300">systems.</span>
            </h1>

            <p className="mt-6 text-neutral-400 text-lg max-w-xl leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-emerald-300 btn-transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-neutral-100 text-sm font-medium hover:bg-white/5 hover:border-emerald-400/40 btn-transition"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={`mailto:${profile.details.emailPersonal}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-neutral-100 text-sm font-medium hover:bg-white/5 hover:border-emerald-400/40 btn-transition"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-semibold tracking-tight text-white">
                    {s.value}
                  </div>
                  <div className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avatar block */}
          <div className="relative flex justify-center md:justify-end anim-fade-up delay-200">
            <div className="relative">
              <ProfileAvatar size={280} />
              {/* Floating chips */}
              <div className="absolute -left-6 top-10 anim-float hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur text-xs font-mono text-neutral-200">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" /> AI / ML
              </div>
              <div
                className="absolute -right-4 bottom-8 anim-float hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur text-xs font-mono text-neutral-200"
                style={{ animationDelay: "1.2s" }}
              >
                <Code2 className="h-3.5 w-3.5 text-cyan-300" /> Full-stack
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade separator */}
        <div className="hr-grad" />
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10">
          <div className="anim-fade-up">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-[0.3em]">
              01 &middot; About
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              A few words
              <br />
              <span className="text-neutral-400">about me</span>
            </h2>
          </div>
          <div className="space-y-4 text-neutral-300 leading-relaxed text-[17px] anim-fade-up delay-100">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="pt-6 grid sm:grid-cols-2 gap-3">
              <DetailRow
                icon={<GraduationCap className="h-4 w-4" />}
                label="University"
                value={profile.details.university}
              />
              <DetailRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value={profile.details.location}
              />
              <DetailRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={profile.details.phone}
              />
              <DetailRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={profile.details.emailPersonal}
                href={`mailto:${profile.details.emailPersonal}`}
              />
              <DetailRow
                icon={<Mail className="h-4 w-4" />}
                label="College Email"
                value={profile.details.emailCollege}
                href={`mailto:${profile.details.emailCollege}`}
                full
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div className="anim-fade-up">
            <div className="text-xs font-mono text-emerald-300 uppercase tracking-[0.3em]">
              02 &middot; Research Interests
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
              Fields I&apos;m exploring
            </h2>
          </div>
          <p className="text-neutral-400 max-w-md text-sm">
            Where I spend my curiosity — from learning algorithms to
            human-centered interfaces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profile.research.map((r, i) => {
            const Icon = iconMap[r.icon] || Brain;
            return (
              <div
                key={r.label}
                className={`card-lift anim-fade-up group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-5 hover:border-emerald-400/40 hover:bg-white/[0.04]`}
                style={{ animationDelay: `${0.08 * i}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">
                    0{i + 1}
                  </span>
                </div>
                <div className="mt-5 text-base font-medium text-neutral-100">
                  {r.label}
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  Focus area
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="anim-fade-up">
          <div className="text-xs font-mono text-emerald-300 uppercase tracking-[0.3em]">
            03 &middot; Skills
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            Tools I work with
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {profile.skills.map((s, i) => (
            <div
              key={s.name}
              className="card-lift anim-fade-up group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-emerald-400/40 hover:bg-emerald-400/[0.06]"
              style={{ animationDelay: `${0.05 * i}s` }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:shadow-[0_0_10px_#10b981]"></span>
              <span className="text-sm text-neutral-100 font-medium">
                {s.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 pl-1">
                {s.level}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent p-10 md:p-14">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none"
          />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-xs font-mono text-emerald-300 uppercase tracking-[0.3em]">
                Let&apos;s build together
              </div>
              <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
                Have an idea, internship, or research collaboration in mind?
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-neutral-900 text-sm font-medium hover:bg-emerald-300 btn-transition"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${profile.details.emailPersonal}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-neutral-100 text-sm font-medium hover:bg-white/5 hover:border-emerald-400/40 btn-transition"
              >
                <Mail className="h-4 w-4" /> Say hello
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailRow({ icon, label, value, href, full }) {
  const content = (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] hover:border-emerald-400/30 hover:bg-white/[0.04] btn-transition ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <div className="h-8 w-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
          {label}
        </div>
        <div className="text-sm text-neutral-100 truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
