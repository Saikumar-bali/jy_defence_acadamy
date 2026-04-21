import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/PageShell";
import { Stagger, StaggerItem } from "../components/motion/Reveal";
import { Star } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — Veterans, Officers & Subject Specialists | JY Defence Academy" },
      { name: "description", content: "Meet the retired Army, NCC and academic specialists who train India's next generation of defence officers." },
      { property: "og:title", content: "Faculty — JY Defence Academy" },
      { property: "og:description", content: "Retired officers and subject specialists training future soldiers." },
    ],
  }),
  component: FacultyPage,
});

const faculty = [
  { n: "Col. (Retd.) V. Ramesh", r: "SSB & GTO Mentor", e: "32 yrs Indian Army · Selection Board veteran" },
  { n: "Sqn. Ldr. (Retd.) A. Patnaik", r: "AFCAT & Aviation Lead", e: "Indian Air Force pilot · 24 yrs service" },
  { n: "Subedar Major D. Naidu", r: "Physical Training Head", e: "Decorated PT instructor · NCC ‘C’ examiner" },
  { n: "Prof. K. Sridhar", r: "Mathematics & Physics", e: "M.Sc. Physics · 20 yrs coaching" },
  { n: "Mrs. L. Anitha", r: "English & Communication", e: "M.A. English Lit · interview coach" },
  { n: "Mr. P. Kishore", r: "GK & Current Affairs", e: "Civil services aspirant mentor · 15 yrs" },
];

function FacultyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="◢ THE INSTRUCTORS"
        title="Trained By Those Who've Served."
        subtitle="Our faculty are not lecturers. They are veterans, officers, and subject masters who walked the path before teaching it."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Stagger className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((f) => (
              <StaggerItem key={f.n} className="h-full">
                <article className="group relative h-full overflow-hidden bg-background p-8 transition hover:bg-sand hover:-translate-y-1">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold font-stencil text-2xl text-olive-deep shadow-gold transition group-hover:scale-110">
                      {f.n.split(" ").slice(-1)[0][0]}
                    </div>
                    <span className="absolute inset-0 rounded-full animate-pulse-ring opacity-0 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-lg tracking-wider">{f.n}</h3>
                  <div className="font-display text-xs uppercase tracking-[0.25em] text-accent">{f.r}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.e}</p>
                  <div className="mt-4 flex gap-1 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Our extended faculty includes additional retired Army & NCC officers and subject specialists across regional centres. Names, ranks and specialisations are illustrative — visit campus for a full introduction.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
