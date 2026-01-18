import { primaryGames, luckGames } from "@/data/gambul";
import { Section, SectionHeader } from "./Section";

export function GameSection() {
  return (
    <Section id="games">
      <div className="flex flex-col gap-10">
        <SectionHeader
          kicker="Game library"
          title="Every classic table, plus modern luck experiences."
          subtitle="Queue into legendary casino games or dive into multiplayer luck modes designed for instant adrenaline and shared jackpots."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {primaryGames.map((game) => (
            <article
              key={game.name}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{game.name}</h3>
                <span className="rounded-full border border-emerald-400/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-emerald-300">
                  GP live
                </span>
              </div>
              <p className="text-sm text-white/70">{game.description}</p>
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="grid gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white">Cool multiplayer luck games</h3>
            <p className="mt-2 text-sm text-white/70">
              Custom-built modes that combine team coordination, probability boosts, and shared GP pools.
            </p>
          </div>
          <div className="grid gap-3 text-sm text-white/80">
            {luckGames.map((game) => (
              <div key={game.name} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                <p className="font-semibold text-white">{game.name}</p>
                <p className="text-xs text-white/70">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
