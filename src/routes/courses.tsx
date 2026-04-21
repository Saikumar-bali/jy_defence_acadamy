import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/PageShell";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { ArrowRight, Clock, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — NDA, CDS, AFCAT, SSC, Paramilitary | JY Defence Academy" },
      { name: "description", content: "Free coaching for NDA, CDS, AFCAT, SSC GD/CGL, Paramilitary, Railways and more. Academic + physical + SSB preparation under one roof." },
      { property: "og:title", content: "Courses — JY Defence Academy" },
      { property: "og:description", content: "Free coaching for NDA, CDS, AFCAT, SSC, paramilitary and more." },
    ],
  }),
  component: CoursesPage,
});

const courses = [
  { code: "NDA / NA", t: "NDA & Naval Academy", d: "Rigorous 18–24 month programme covering Maths, Physics, Chemistry, GK, English plus SSB/GTO practice and physical training.", el: "10+2 Science · 16½–19½ yrs", dur: "18–24 months" },
  { code: "CDS", t: "Combined Defence Services", d: "Full coverage of English, GK and elementary Maths with officer-grade interview prep for OTA, IMA, AFA and INA aspirants.", el: "Graduate · 19–25 yrs", dur: "6–12 months" },
  { code: "AFCAT", t: "Air Force Common Admission Test", d: "Reasoning, numerical ability, GK, English plus EKT for technical branches. Aviation-focused mentorship.", el: "Graduate · 20–24 yrs", dur: "6–9 months" },
  { code: "MNS", t: "Military Nursing Service", d: "Biology-heavy academic prep with interview & medical fitness coaching for women aspirants.", el: "10+2 Bio · 17–25 yrs", dur: "8–12 months" },
  { code: "SSC GD", t: "SSC GD Constable & CGL", d: "Reasoning, GK, English, Maths plus full PET/PST conditioning for paramilitary recruitment.", el: "10th pass · 17–21 yrs", dur: "3–6 months" },
  { code: "CAPF", t: "CRPF · BSF · CISF · ITBP", d: "Written exam preparation paired with rigorous physical drills tailored to paramilitary standards.", el: "10+2 / Graduate", dur: "6 months" },
  { code: "AGNI", t: "Agniveer (Army · Navy · Air)", d: "Compact, intensive coaching for the Agnipath scheme with daily PT and category-wise written prep.", el: "10th / 12th · 17½–21 yrs", dur: "3–6 months" },
  { code: "RRB", t: "Railway Recruitment", d: "Maths, reasoning, GK and general science for RRB NTPC, Group D and ALP technical posts.", el: "10th / 12th pass", dur: "4–6 months" },
];

function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="◢ OUR PROGRAMMES"
        title="Eight Paths. One Calling."
        subtitle="From NDA to Railways — academic depth, physical conditioning and interview mastery, all under one disciplined roof."
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Stagger className="grid gap-px bg-border md:grid-cols-2">
            {courses.map((c) => (
              <StaggerItem key={c.code} className="h-full">
                <article className="group relative h-full overflow-hidden bg-background p-8 transition hover:bg-olive-deep hover:text-primary-foreground">
                  {/* corner sweep */}
                  <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/15" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <div className="font-stencil text-3xl text-accent transition group-hover:text-gold">{c.code}</div>
                      <h3 className="mt-2 font-display text-xl tracking-wider">{c.t}</h3>
                    </div>
                    <GraduationCap className="h-6 w-6 text-muted-foreground transition group-hover:text-gold group-hover:rotate-6" />
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground transition group-hover:text-primary-foreground/80">
                    {c.d}
                  </p>
                  <div className="relative mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/60 pt-4 font-display text-xs uppercase tracking-widest transition group-hover:border-gold/25">
                    <span className="text-foreground/70 transition group-hover:text-gold">{c.el}</span>
                    <span className="flex items-center gap-1 text-muted-foreground transition group-hover:text-primary-foreground/70">
                      <Clock className="h-3 w-3" /> {c.dur}
                    </span>
                  </div>
                  <ArrowRight className="absolute bottom-6 right-6 h-4 w-4 -translate-x-2 text-gold opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand py-20">
        <div className="absolute inset-0 bg-tactical-grid-fine opacity-20" />
        <Reveal className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl">Not Sure Which Path Fits?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Talk to our admissions team. We'll match your eligibility, age and goals to the right programme — no obligation.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-olive-deep px-7 py-4 font-display text-sm uppercase tracking-widest text-gold shadow-elevated transition hover:bg-primary"
          >
            Free Counselling <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
