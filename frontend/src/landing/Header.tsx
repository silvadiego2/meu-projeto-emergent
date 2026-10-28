import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LANGS } from "../i18n/translations";
import { scrollToId } from "./shared";

const NAV_IDS = ["about", "advantages", "services", "team", "contact"] as const;

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center text-xs font-semibold tracking-[0.15em]" data-testid="language-switcher">
      {LANGS.map((l, i) => (
        <React.Fragment key={l.code}>
          {i > 0 && <span className="px-2 text-ink-soft/40">|</span>}
          <button
            type="button"
            onClick={() => setLang(l.code)}
            data-testid={`lang-${l.code}-btn`}
            aria-pressed={lang === l.code}
            className={`transition-colors duration-300 ${lang === l.code ? "text-bronze" : "text-ink-soft hover:text-navy"}`}
          >
            {l.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow] duration-500 ${scrolled ? "border-concrete-dark/60 bg-sand/90 shadow-sm" : "border-transparent bg-sand/80"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button type="button" onClick={() => go("top")} data-testid="logo-link" className="group flex items-baseline gap-3">
          <span className="font-serif text-3xl font-semibold tracking-[0.12em] text-navy">VRN</span>
          <span className="hidden h-4 w-px bg-gold sm:block" />
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-ink-soft sm:block">Vieira e Rabelo Nogueira</span>
        </button>

        <nav className="hidden items-center gap-9 lg:flex" data-testid="desktop-nav">
          {NAV_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              data-testid={`nav-${id}-link`}
              className="relative text-sm font-medium text-ink transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300 hover:text-bronze hover:after:w-full"
            >
              {t.nav[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          <button type="button" className="text-navy lg:hidden" onClick={() => setOpen((o) => !o)} data-testid="mobile-menu-toggle" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-concrete-dark/60 bg-sand px-6 py-4 lg:hidden" data-testid="mobile-nav">
          {NAV_IDS.map((id) => (
            <button key={id} type="button" onClick={() => go(id)} data-testid={`mobile-nav-${id}-link`} className="block w-full py-3 text-left font-serif text-lg text-navy">
              {t.nav[id]}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
