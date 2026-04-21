import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { PageShell } from "../components/PageShell";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { CountUp } from "../components/motion/CountUp";
import { Typewriter } from "../components/motion/Typewriter";
import { RadarHUD } from "../components/RadarHUD";
import {
  ArrowRight, Award, Shield, Users, BookOpen, Dumbbell, Star,
  Target, Crosshair, Plane, Anchor, Mountain, Zap,
} from "lucide-react";
import heroImg from "../assets/hero-cadets.jpg";
import trainingImg from "../assets/training.jpg";
import classroomImg from "../assets/classroom.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JY Defence Academy — Free NDA, CDS, AFCAT Coaching | Visakhapatnam" },
      { name: "description", content: "India's veteran-led defence coaching institute. Free tuition, hostel, study material. 25+ years, 4.9★ rating, 1,679+ reviews." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-olive-deep text-primary-foreground">
        <motion.div style={{ y: yImg }} className="absolute inset-0">
          <img
            src={heroImg}
            alt="Cadets in formation at dawn"
            className="h-full w-full scale-110 object-cover opacity-55"
            width={1920}
            height={1080}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-tactical-grid opacity-30" />
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 30px, rgba(0,0,0,0.18) 30px 31px)" }} />
        {/* scan line */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-scan" />
        </div>
        {/* radar */}
        <div className="pointer-events-none absolute -right-32 top-1/3 hidden w-[520px] opacity-50 lg:block">
          <RadarHUD />
        </div>

        <motion.div style={{ y: yText, opacity }} className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start border-l-2 border-gold pl-3 font-display text-xs tracking-[0.3em] text-gold"
          >
            <Shield className="h-3.5 w-3.5 animate-flicker" /> EST. 2001 · VISAKHAPATNAM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] tracking-wider text-shadow-hero md:text-7xl lg:text-[6.5rem]"
          >
            Train Like
            <br />
            <span className="text-gold">a {" "}
              <Typewriter words={["Soldier.", "Pilot.", "Sailor.", "Officer.", "Warrior."]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg"
          >
            India's veteran-led defence coaching academy.{" "}
            <strong className="text-gold">Zero tuition fees.</strong> Pay only for hostel & meals. Forge yourself for NDA, CDS, AFCAT, SSC and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/courses"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-gradient-gold px-7 py-4 font-display text-sm uppercase tracking-widest text-olive-deep shadow-gold transition hover:brightness-110"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Explore Courses</span>
              <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm border-2 border-gold/60 px-7 py-4 font-display text-sm uppercase tracking-widest text-gold transition hover:bg-gold hover:text-olive-deep"
            >
              <Crosshair className="h-4 w-4 transition group-hover:rotate-90" /> Apply Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-gold/25 pt-8 md:grid-cols-4"
          >
            {[
              { v: 25, suffix: "+", l: "Years Strong" },
              { v: 4.9, suffix: "★", l: "Justdial Rating", decimals: 1 },
              { v: 0, prefix: "₹", l: "Tuition Fees" },
              { v: 1679, suffix: "+", l: "Reviews" },
            ].map((s) => (
              <div key={s.l} className="corner-brackets py-2 px-3">
                <CountUp
                  to={s.v}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                  decimals={s.decimals ?? 0}
                  className="font-display text-3xl text-gold md:text-4xl"
                />
                <div className="mt-1 text-[11px] uppercase tracking-widest text-primary-foreground/60">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-gold/60">
            <div className="mx-auto mt-1.5 h-2 w-1 rounded-full bg-gold" />
          </div>
          <div className="mt-2 font-display text-[10px] tracking-[0.3em] text-gold/70">SCROLL</div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 stripe-divider" />
      </section>

      {/* MISSION BRIEF */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 bg-tactical-grid-fine opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="border-l-2 border-accent pl-3 font-display text-xs tracking-[0.3em] text-accent">
              ◢ MISSION BRIEF
            </div>
            <h2 className="mt-4 font-display text-3xl tracking-wide md:text-5xl">
              Forging India's Next Generation of <span className="text-accent">Defenders.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Founded by ex-Army officer Jagan Mohan Rao and educator Mounika, JY Defence Academy was built on a single conviction: a soldier's calling should never be limited by a coaching fee. For over two decades we have trained aspirants from every background — academic rigour, physical conditioning, and the discipline of the parade ground.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We don't promise selection. We promise preparation worthy of one.
            </p>
            <Link to="/about" className="group mt-8 inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest text-primary hover:text-accent">
              Read our story
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="stencil-frame overflow-hidden">
                <img
                  src={trainingImg}
                  alt="Physical training"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="aspect-[3/4] h-full w-full rounded-sm object-cover shadow-elevated transition duration-700 hover:scale-105"
                />
              </div>
              <div className="stencil-frame mt-12 overflow-hidden">
                <img
                  src={classroomImg}
                  alt="Classroom study"
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="aspect-[3/4] h-full w-full rounded-sm object-cover shadow-elevated transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WINGS */}
      <section className="relative overflow-hidden bg-olive-deep py-20 text-primary-foreground lg:py-28">
        <div className="absolute inset-0 bg-tactical-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <div className="font-display text-xs tracking-[0.3em] text-gold">◢ WINGS OF SERVICE</div>
            <h2 className="mt-3 font-display text-3xl tracking-wide md:text-5xl">Choose Your Battlefield.</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mountain, t: "Indian Army", d: "NDA · CDS · Agniveer" },
              { icon: Plane, t: "Air Force", d: "AFCAT · NDA Air · Agniveer" },
              { icon: Anchor, t: "Indian Navy", d: "NDA-NA · CDS · Agniveer" },
              { icon: Shield, t: "Paramilitary", d: "CRPF · BSF · CISF · ITBP" },
            ].map((w) => (
              <StaggerItem key={w.t}>
                <div className="group relative h-full border border-gold/20 bg-olive-deep/50 p-7 transition hover:border-gold hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <w.icon className="relative h-9 w-9 text-gold transition group-hover:scale-110" />
                  <h3 className="relative mt-5 font-display text-xl tracking-wider">{w.t}</h3>
                  <p className="relative mt-2 font-display text-xs uppercase tracking-[0.25em] text-gold/70">{w.d}</p>
                  <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-gold opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-sand py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal className="text-center">
            <div className="font-display text-xs tracking-[0.3em] text-accent">◢ FOUR PILLARS</div>
            <h2 className="mt-3 font-display text-3xl tracking-wide md:text-5xl">Built To Endure.</h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-px bg-border lg:grid-cols-4">
            {[
              { icon: BookOpen, t: "Academic Rigour", d: "Maths, Physics, GK, English — full syllabus, expert faculty, free study material." },
              { icon: Dumbbell, t: "Physical Forge", d: "Daily drills, running, push-ups, self-defence — meet every fitness benchmark." },
              { icon: Target, t: "SSB & GTO Prep", d: "Mock interviews, group tasks, psychological tests — walk in confident." },
              { icon: Award, t: "NCC Advantage", d: "Train for NCC ‘B’ and ‘C’ certificates — bonus marks, real edge." },
            ].map((p) => (
              <StaggerItem key={p.t} className="h-full">
                <div className="group relative h-full overflow-hidden bg-background p-8 transition hover:bg-olive-deep hover:text-primary-foreground">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/15" />
                  <p.icon className="relative h-9 w-9 text-accent transition group-hover:text-gold group-hover:scale-110" />
                  <h3 className="relative mt-5 font-display text-lg tracking-wider">{p.t}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground transition group-hover:text-primary-foreground/75">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-olive-deep py-20 text-primary-foreground lg:py-28">
        <div className="absolute inset-0 bg-tactical-grid-fine opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div className="border-l-2 border-gold pl-3 font-display text-xs tracking-[0.3em] text-gold">
                ◢ VOICES FROM THE GROUND
              </div>
              <h2 className="mt-4 font-display text-3xl tracking-wide md:text-5xl">
                Trusted by{" "}
                <CountUp to={1679} suffix="+" className="text-gold" /> Cadets.
              </h2>
            </Reveal>
            <div className="flex items-center gap-2 text-gold">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Star className="h-5 w-5 fill-gold" />
                </motion.div>
              ))}
              <CountUp to={4.9} decimals={1} className="ml-2 font-display text-2xl" />
            </div>
          </div>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { q: "Excellent coaching, no extra fees. Subsidized meals and a brotherhood I'll carry for life.", n: "Aravind K.", r: "NDA Aspirant" },
              { q: "Outstanding centre — well-structured materials and faculty who push you beyond what you thought possible.", n: "Priya S.", r: "AFCAT Selected" },
              { q: "From a small village to wearing the uniform. JY made the impossible feel like the inevitable.", n: "Ramesh T.", r: "Indian Army" },
            ].map((t) => (
              <StaggerItem key={t.n}>
                <figure className="group relative h-full border border-gold/20 bg-olive-deep/60 p-7 backdrop-blur transition hover:border-gold hover:-translate-y-1">
                  <Zap className="h-5 w-5 text-gold" />
                  <blockquote className="mt-4 leading-relaxed text-primary-foreground/90">"{t.q}"</blockquote>
                  <figcaption className="mt-6 border-t border-gold/15 pt-4">
                    <div className="font-display text-sm tracking-widest text-gold">{t.n}</div>
                    <div className="text-xs text-primary-foreground/60">{t.r}</div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="absolute inset-0 bg-tactical-grid-fine opacity-30" />
        <Reveal className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
          <div className="mx-auto inline-flex items-center justify-center">
            <div className="relative">
              <Users className="h-12 w-12 text-accent" />
              <span className="absolute inset-0 -m-2 rounded-full animate-pulse-ring" />
            </div>
          </div>
          <h2 className="mt-6 font-display text-3xl tracking-wide md:text-5xl">
            Your <span className="text-stroke-gold">Uniform</span> Awaits.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            Admissions open twice a year (May–June, Nov–Dec). Walk in for a free counselling session, or call us today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm bg-olive-deep px-7 py-4 font-display text-sm uppercase tracking-widest text-gold shadow-elevated transition hover:bg-primary"
            >
              <span className="absolute inset-0 -translate-x-full bg-gold/15 transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Visit Campus</span>
              <ArrowRight className="relative h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+917330600630"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-olive-deep px-7 py-4 font-display text-sm uppercase tracking-widest text-olive-deep transition hover:bg-olive-deep hover:text-gold"
            >
              Call +91 73306 00630
            </a>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
