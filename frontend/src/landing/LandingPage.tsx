import React from "react";
import { MessageCircle } from "lucide-react";
import { Toaster } from "../components/ui/sonner";
import { LanguageProvider, useLanguage } from "../i18n/LanguageContext";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Advantages } from "./Advantages";
import { Roadmap } from "./Roadmap";
import { Expertise } from "./Expertise";
import { Team } from "./Team";
import { Footer, whatsappHref } from "./Footer";

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  return (
    <a
      href={whatsappHref(t.hero.cta)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contact.whatsapp}
      data-testid="whatsapp-float-btn"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition-transform duration-300 hover:-translate-y-1"
    >
      <MessageCircle size={24} strokeWidth={1.6} />
    </a>
  );
};

export default function LandingPage() {
  return (
    <LanguageProvider>
      <div className="bg-sand font-sans text-ink antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Advantages />
          <Roadmap />
          <Expertise />
          <Team />
        </main>
        <Footer />
        <WhatsAppFloat />
        <Toaster position="top-center" richColors />
      </div>
    </LanguageProvider>
  );
}
