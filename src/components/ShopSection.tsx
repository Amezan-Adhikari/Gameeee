import { shopItems } from "@/data/gambul";
import { IconChip } from "./Icons";
import { Section, SectionHeader } from "./Section";

export function ShopSection() {
  return (
    <Section id="shop">
      <div className="flex flex-col gap-10">
        <SectionHeader
          kicker="GP shop"
          title="Cosmetics built for flexing across every table."
          subtitle="Spend your Gambul Points (GP) on dealer skins, table themes, emotes, and collectible gear. Everything is cosmetic and perfectly balanced."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {shopItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-slate-950/70 p-6"
            >
              <div className="space-y-3">
                <p className="text-xl font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  <IconChip className="h-4 w-4" />
                  {item.price} GP
                </span>
                <button className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-sm text-white/80">
          Earn GP through gameplay, daily challenges, and teammate streak bonuses. No real money required—only
          skill, luck, and teamwork.
        </div>
      </div>
    </Section>
  );
}
