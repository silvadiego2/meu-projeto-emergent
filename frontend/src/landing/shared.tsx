import React, { useEffect, useRef, useState } from "react";

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] ${dark ? "text-gold" : "text-bronze"}`}>
    <span className={`h-px w-10 ${dark ? "bg-gold" : "bg-bronze"}`} />
    {children}
  </p>
);

export const SectionTitle = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <h2 className={`mt-5 font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-navy"}`}>
    {children}
  </h2>
);

export const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
};
