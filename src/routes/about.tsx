import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/PageShell";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { CountUp } from "../components/motion/CountUp";
import { ShieldCheck, Heart, Target, Compass } from "lucide-react";
import founderRao from "../assets/founder-rao.jpg";
import founderMounika from "../assets/founder-mounika.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About JY Defence Academy — Veteran-Led Coaching Since 2001" },
      { name: "description", content: "Founded by ex-Army officer Jagan Mohan Rao and educator Mounika, JY Defence Academy has trained 25+ years of India's defence aspirants." },
      { property: "og:title", content: "About JY Defence Academy" },
      { property: "og:description", content: "Veteran-led defence coaching since 2001, Visakhapatnam." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="◢ ABOUT US"
        title="Two Decades of Discipline."
        subtitle="JY Defence Academy was born from a single belief — that India's bravest aspirants should never be priced out of their calling."
      />

      {/* Stats strip */}
      <section className="border-b border-border bg-olive-deep py-10 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8">
          {[
            { v: 25, suffix: "+", l: "Years Active" },
            { v: 1679, suffix: "+", l: "Reviews" },
            { v: 137, suffix: "K+", l: "YouTube Subs" },
            { v: 0, prefix: "₹", l: "Tuition" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08} className="corner-brackets px-3 py-2">
              <CountUp to={s.v} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} className="font-display text-3xl text-gold md:text-4xl" />
              <div className="mt-1 text-[11px] uppercase tracking-widest text-primary-foreground/60">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-5 lg:px-8">
          <Reveal className="space-y-5 leading-relaxed text-muted-foreground lg:col-span-3">
            <p className="text-lg text-foreground">
              Founded in 2001 by ex-Army officer <strong>Jagan Mohan Rao</strong> and educator <strong>Mounika</strong>, JY Defence Academy began as a single classroom in Madhurawada with a radical idea: charge nothing for coaching. Charge only for what cannot be given freely — a roof, a meal.
            </p>
            <p>
              Twenty-five years later, that idea has trained thousands of cadets, with more than 1,679 verified reviews and a 4.9-star rating. Our students wear the uniform of the Indian Army, Air Force, Navy, paramilitary forces, and Railways. Our faculty are retired officers, NCC instructors, and subject specialists who have walked the path themselves.
            </p>
            <p>We don't sell shortcuts. We build soldiers — academically, physically, and mentally.</p>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="border-l-2 border-accent pl-5">
              <div className="font-display text-xs tracking-[0.3em] text-accent">RECOGNITION</div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Best Defence Academy 2025–26 (Radio City AP Icon Award)",
                  "4.9/5 from 1,679+ Justdial reviews",
                  "137K+ YouTube subscribers",
                  "Swachh Bharat community partner",
                ].map((r) => (
                  <li key={r} className="flex gap-3">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-accent" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative overflow-hidden bg-sand py-20 lg:py-28">
        <div className="absolute inset-0 bg-tactical-grid-fine opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <div className="font-display text-xs tracking-[0.3em] text-accent">◢ CORE VALUES</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">What We Stand For.</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Heart, t: "Access", d: "Free coaching, always. Talent should never be gated by money." },
              { icon: Target, t: "Discipline", d: "Daily drills, structured study, no excuses. The uniform demands it." },
              { icon: Compass, t: "Integrity", d: "Transparent fees, honest mentorship, no false promises of selection." },
              { icon: ShieldCheck, t: "Service", d: "Coaching is service. Our reward is every cadet in uniform." },
            ].map((v) => (
              <StaggerItem key={v.t}>
                <div className="group relative h-full overflow-hidden border border-border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-elevated">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/0 transition group-hover:bg-accent/10" />
                  <v.icon className="relative h-8 w-8 text-accent transition group-hover:scale-110" />
                  <h3 className="relative mt-5 font-display text-lg tracking-wider">{v.t}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Reveal>
            <div className="font-display text-xs tracking-[0.3em] text-accent">◢ THE FOUNDERS</div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">Built By Those Who Served.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              { img: founderRao, n: "Jagan Mohan Rao", r: "Founder · Managing Partner", b: "A retired Indian Army officer with decades of operational and training experience. He brings the rigour of the parade ground into every classroom — no shortcuts, no compromises." },
              { img: founderMounika, n: "Mounika", r: "Co-Founder · Education Lead", b: "An educator and operations specialist who designs the academic curriculum, oversees student welfare, and ensures the academy runs with a soldier's precision." },
            ].map((f, i) => (
              <Reveal key={f.n} delay={i * 0.15}>
                <article className="group">
                  <div className="stencil-frame overflow-hidden rounded-sm shadow-elevated">
                    <img
                      src={f.img}
                      alt={f.n}
                      loading="lazy"
                      width={768}
                      height={896}
                      className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-2xl tracking-wider">{f.n}</div>
                    <div className="mt-1 font-display text-xs uppercase tracking-[0.25em] text-accent">{f.r}</div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{f.b}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
