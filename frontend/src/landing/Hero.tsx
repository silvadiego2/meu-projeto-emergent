import React from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { scrollToId } from "./shared";

const HERO_IMG =
  "https://images.unsplash.com/photo-1498262257252-c282316270bc?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=2000";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="top" data-testid="hero-section" className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-20">
      <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-3xl animate-[heroIn_1s_ease-out_both]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold" data-testid="hero-eyebrow">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl" data-testid="hero-title">
            {t.hero.title}
          </h1>
          <div className="mt-8 h-px w-24 bg-gold" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 md:text-lg" data-testid="hero-subtitle">
            {t.hero.subtitle}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              data-testid="hero-cta-btn"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition-colors duration-300 hover:bg-gold-light"
            >
              {t.hero.cta}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("roadmap")}
              data-testid="hero-secondary-btn"
              className="inline-flex items-center justify-center border border-white/25 px-8 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              {t.hero.secondary}
            </button>
          </div>
        </div>
        <p className="mt-20 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
          <MapPin size={14} className="text-gold" /> {t.hero.location}
        </p>
      </div>
    </section>
  );
};
