import React from "react";
import { Plane, Anchor, Ship } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

const POLO_IMG =
  "https://images.unsplash.com/photo-1586528321409-9c7853d54ff1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";
const LOGISTICS_ICONS = [Plane, Anchor, Ship];

export const Advantages = () => {
  const { t } = useLanguage();
  const a = t.advantages;
  return (
    <section id="advantages" data-testid="advantages-section" className="scroll-mt-20 bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <SectionTitle>{a.title}</SectionTitle>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">{a.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="relative h-full overflow-hidden bg-navy p-10 lg:p-14" data-testid="polo-stats-card">
              <img src={POLO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 grayscale" />
              <div className="relative grid gap-10 sm:grid-cols-3">
                {a.stats.map((s, i) => (
                  <div key={i} className="border-t border-gold/60 pt-6" data-testid={`polo-stat-${i}`}>
                    <p className="font-serif text-4xl text-white lg:text-5xl">{s.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/60">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <div className="flex h-full flex-col justify-between border border-concrete-dark bg-sand p-10">
              <h3 className="font-serif text-2xl text-navy">{a.logisticsTitle}</h3>
              <p className="mt-6 text-sm text-ink-soft">{a.logisticsNote}</p>
            </div>
          </Reveal>
          {a.logistics.map((l, i) => {
            const Icon = LOGISTICS_ICONS[i];
            return (
              <Reveal key={i} delay={150 + i * 100} className="lg:col-span-4">
                <div className="group flex items-center justify-between border border-concrete-dark bg-sand p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg" data-testid={`logistics-card-${i}`}>
                  <div>
                    <Icon size={26} strokeWidth={1.4} className="text-bronze" />
                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-ink-soft">{l.name}</p>
                  </div>
                  <p className="font-serif text-4xl text-navy transition-colors duration-300 group-hover:text-bronze">{l.distance}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
  