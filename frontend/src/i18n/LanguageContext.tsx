import React, { createContext, useContext, useEffect, useState } from "react";
import { Dictionary, Lang, LANGS, translations } from "./translations";

interface LanguageState {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageState | null>(null);
const STORAGE_KEY = "vrn-lang";

const initialLang = (): Lang => {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  return saved && saved in translations ? saved : "pt";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = LANGS.find((l) => l.code === lang)?.html ?? "pt-BR";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageState => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
