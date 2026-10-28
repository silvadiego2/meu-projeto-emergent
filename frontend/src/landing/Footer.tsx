import React from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ContactForm } from "./ContactForm";
import { Eyebrow, Reveal, SectionTitle } from "./shared";

// Firm WhatsApp number (digits only, with country code), e.g. 5571XXXXXXXXX
const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || "";
export const whatsappHref = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const Footer = () => {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <footer id="contact" data-testid="contact-section" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-32">
        <Reveal className="lg:col-span-5">
          <Eyebrow dark>{c.eyebrow}</Eyebrow>
          <SectionTitle dark>{c.title}</SectionTitle>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">{c.intro}</p>
          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4" data-testid="footer-address">
              <MapPin size={20} strokeWidth={1.5} className="mt-1 text-gold" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">{c.addressLabel}</p>
                <p className="mt-1 text-white/90">{c.address}</p>
              </div>
            </div>
            <a
              href={whatsappHref(t.hero.cta)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <MessageCircle size={18} strokeWidth={1.5} /> {c.whatsapp}
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="font-serif text-lg tracking-[0.12em] text-white/80">VRN</p>
          <p data-testid="footer-copyright">© {new Date().getFullYear()} Vieira e Rabelo Nogueira. {c.rights}</p>
        </div>
      </div>
    </footer>
  );
};
