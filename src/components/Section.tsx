import { ReactNode } from "react";

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_60px_rgba(15,23,42,0.15)] backdrop-blur-md md:p-12"
    >
      {children}
    </section>
  );
}

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
        {kicker}
      </span>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm text-white/70 md:text-base">{subtitle}</p>
    </div>
  );
}
