import React from "react";
import { Factory, Route, Globe2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

const ICONS = [Factory, Route, Globe2];

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" data-testid="about-section" className="scroll-mt-20 bg-sand py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <Eyebrow>{t.about.eyebrow}</Eyebrow>
          <SectionTitle>{t.about.title}</SectionTitle>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <p className="border-l-2 border-gold pl-6 font-serif text-xl italic leading-relaxed text-ink md:text-2xl" data-testid="about-lead">
              {t.about.lead}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px bg-concrete-dark/70 sm:grid-cols-3">
            {t.about.pillars.map((p, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={i} delay={150 + i * 100} className="bg-sand">
                  <div className="h-full p-6" data-testid={`about-pillar-${i}`}>
                    <Icon size={22} strokeWidth={1.5} className="text-bronze" />
                    <h3 className="mt-5 font-serif text-lg text-navy">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
