import { IconBolt, IconChip, IconCrown, IconSpark } from "./Icons";

export function Hero() {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 p-10 text-white shadow-[0_0_80px_rgba(16,185,129,0.2)] md:p-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_55%)]" />
      <div className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-emerald-300">
          <span className="rounded-full border border-emerald-400/40 px-3 py-1">Serverless-ready</span>
          <span className="rounded-full border border-emerald-400/40 px-3 py-1">Multiplayer core</span>
          <span className="rounded-full border border-emerald-400/40 px-3 py-1">GP economy</span>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Gambul — the immersive, multiplayer gambling arena built for Netlify.
          </h1>
          <p className="max-w-2xl text-base text-white/70 md:text-lg">
            Stake your Gambul Points (GP) across poker, blackjack, roulette, crash, toss, and bold new luck
            games. Jump into squad tables, chase dynamic jackpots, and trade cosmetics in the in-game shop.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Instant table", icon: IconBolt },
            { label: "GP wallets", icon: IconChip },
            { label: "VIP tiers", icon: IconCrown },
            { label: "Cosmetic drops", icon: IconSpark },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
            >
              <item.icon className="h-5 w-5 text-emerald-300" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(16,185,129,0.3)]">
            Launch multiplayer lobby
          </button>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80">
            Explore GP shop
          </button>
        </div>
      </div>
    </header>
  );
}
