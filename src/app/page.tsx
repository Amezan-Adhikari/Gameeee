import { Footer } from "@/components/Footer";
import { GameSection } from "@/components/GameSection";
import { Hero } from "@/components/Hero";
import { LoungeSection } from "@/components/LoungeSection";
import { ShopSection } from "@/components/ShopSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 md:px-10">
          <nav className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950">
                <span className="text-lg font-bold">G</span>
              </div>
              <div>
                <p className="text-lg font-semibold">Gambul</p>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">GP Lounge</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <a href="#games" className="transition hover:text-white">
                Games
              </a>
              <a href="#lounge" className="transition hover:text-white">
                Multiplayer
              </a>
              <a href="#shop" className="transition hover:text-white">
                Shop
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Netlify serverless ready
            </div>
          </nav>

          <Hero />
          <GameSection />
          <LoungeSection />
          <ShopSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
