import { loungeFeatures, stats } from "@/data/gambul";
import { IconGlobe } from "./Icons";
import { Section, SectionHeader } from "./Section";

export function LoungeSection() {
  return (
    <Section id="lounge">
      <div className="flex flex-col gap-10">
        <SectionHeader
          kicker="Multiplayer lounge"
          title="Built for squads, rivals, and streamer-scale lobbies."
          subtitle="Gambul runs on serverless-friendly multiplayer orchestration. Build rooms, invite spectators, and keep gameplay synchronized on Netlify-ready infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center gap-3">
              <IconGlobe className="h-10 w-10 text-emerald-300" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/50">Realtime stack</p>
                <h3 className="text-2xl font-semibold text-white">Gambul Pulse</h3>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Sync tables using serverless queues, edge persistence, and player presence snapshots. Perfect for
              Netlify deployments without dedicated servers.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {loungeFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                  <p className="mt-2 text-xs text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-slate-950/80 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
