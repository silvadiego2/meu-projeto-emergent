import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

export const Roadmap = () => {
  const { t } = useLanguage();
  const r = t.roadmap;
  return (
    <section id="roadmap" data-testid="roadmap-section" className="scroll-mt-20 bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <Eyebrow dark>{r.eyebrow}</Eyebrow>
          <SectionTitle dark>{r.title}</SectionTitle>
          <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg">{r.intro}</p>
        </Reveal>

        <ol className="relative mt-20 grid gap-12 border-l border-white/15 pl-8 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-0">
          {r.steps.map((s, i) => (
            <Reveal key={i} delay={i * 120}>
              <li className="group relative lg:pt-12" data-testid={`roadmap-step-${i + 1}`}>
                <span className="absolute -left-[37px] top-1 h-3 w-3 rotate-45 border border-gold bg-navy transition-colors duration-300 group-hover:bg-gold lg:-top-[7px] lg:left-0" />
                <p className="font-serif text-5xl text-gold/80">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
