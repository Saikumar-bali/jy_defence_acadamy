import { ReactNode } from "react";
import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Ticker } from "./Ticker";
import { RadarHUD } from "./RadarHUD";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <Ticker />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-olive-deep text-primary-foreground">
      <div className="absolute inset-0 bg-tactical-grid-fine opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-25" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 22px, rgba(255,255,255,0.18) 22px 23px)",
        }}
      />
      {/* radar accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 hidden w-[420px] opacity-50 md:block">
        <RadarHUD />
      </div>
      {/* scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/70 to-transparent animate-scan" style={{ animationDuration: "5s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block border-l-2 border-gold pl-3 font-display text-xs tracking-[0.3em] text-gold"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl tracking-wider md:text-6xl text-shadow-hero"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="stripe-divider" />
    </section>
  );
}
