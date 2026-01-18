export function Footer() {
  return (
    <footer className="rounded-3xl border border-white/10 bg-slate-950/70 p-8 text-sm text-white/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Gambul</p>
          <p className="mt-2 max-w-md">
            Multiplayer casino entertainment powered by GP. Designed for Netlify-ready serverless hosting.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
          <span className="rounded-full border border-white/10 px-3 py-2">Fair play</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Live squads</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Cosmetic shop</span>
        </div>
      </div>
    </footer>
  );
}
