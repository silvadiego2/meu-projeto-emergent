import React from "react";
import { UserRound } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

const initials = (name: string) =>
  name.split(" ").filter((w) => w.length > 2).map((w) => w[0]).slice(0, 2).join("");

export const Team = () => {
  const { t } = useLanguage();
  const tm = t.team;
  return (
    <section id="team" data-testid="team-section" className="scroll-mt-20 bg-concrete py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <Eyebrow>{tm.eyebrow}</Eyebrow>
          <SectionTitle>{tm.title}</SectionTitle>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">{tm.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {tm.partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 150}>
              <article className="group grid border border-concrete-dark bg-sand sm:grid-cols-5" data-testid={`partner-card-${i}`}>
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-navy sm:col-span-2" data-testid={`partner-photo-slot-${i}`}>
                  <span className="font-serif text-6xl tracking-widest text-white/15">{initials(p.name)}</span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gold/80">
                    <UserRound size={12} /> {tm.photo}
                  </span>
                  <span className="absolute inset-3 border border-gold/30 transition-[inset] duration-500 group-hover:inset-5" />
                </div>
                <div className="flex flex-col justify-end p-8 sm:col-span-3 lg:p-10">
                  <span className="h-px w-12 bg-gold" />
                  <h3 className="mt-6 font-serif text-2xl leading-snug text-navy lg:text-3xl" data-testid={`partner-name-${i}`}>{p.name}</h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-bronze">{p.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
