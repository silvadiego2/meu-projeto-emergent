import React from "react";
import { Briefcase, Landmark, Users, Scale, Building2, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

const ICONS = [Briefcase, Landmark, Users, Scale, Building2, ShieldCheck];

export const Expertise = () => {
  const { t } = useLanguage();
  const e = t.expertise;
  return (
    <section id="services" data-testid="services-section" className="scroll-mt-20 bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{e.eyebrow}</Eyebrow>
            <SectionTitle>{e.title}</SectionTitle>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5">
            <p className="text-base leading-relaxed text-ink-soft md:text-lg">{e.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-concrete-dark md:grid-cols-2 lg:grid-cols-3">
          {e.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={i} delay={i * 80} className="bg-sand">
                <div className="group relative h-full p-10 transition-colors duration-300 hover:bg-white" data-testid={`service-card-${i}`}>
                  <span className="absolute left-0 top-0 h-px w-0 bg-gold transition-[width] duration-500 group-hover:w-full" />
                  <div className="flex items-start justify-between">
                    <Icon size={28} strokeWidth={1.4} className="text-bronze" />
                    <span className="font-serif text-sm text-ink-soft/50">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-10 font-serif text-2xl text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
