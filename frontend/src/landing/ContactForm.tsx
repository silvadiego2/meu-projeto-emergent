import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMPTY = { name: "", email: "", message: "" };
const fieldClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/35 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-0";

export const ContactForm = () => {
  const { t, lang } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);

  const update = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${API}/contact`, { ...form, language: lang });
      toast.success(c.success);
      setForm(EMPTY);
    } catch {
      toast.error(c.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-8" data-testid="contact-form">
      <div className="grid gap-8 sm:grid-cols-2">
        <input required value={form.name} onChange={update("name")} placeholder={c.name} aria-label={c.name} className={fieldClass} data-testid="contact-name-input" />
        <input required type="email" value={form.email} onChange={update("email")} placeholder={c.email} aria-label={c.email} className={fieldClass} data-testid="contact-email-input" />
      </div>
      <textarea required rows={4} value={form.message} onChange={update("message")} placeholder={c.message} aria-label={c.message} className={`${fieldClass} resize-none`} data-testid="contact-message-input" />
      <button
        type="submit"
        disabled={sending}
        data-testid="contact-submit-btn"
        className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-navy transition-colors duration-300 hover:bg-gold-light disabled:opacity-60"
      >
        {sending ? c.sending : c.send}
        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  );
};
