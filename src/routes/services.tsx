import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/PageShell";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";
import { Home, Utensils, Bus, BookMarked, ClipboardCheck, Dumbbell, Award, Briefcase } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Student Services — Hostel, Meals & Mock Tests | JY Defence Academy" },
      { name: "description", content: "Hostel, subsidised meals, free study materials, mock tests, NCC training and placement guidance — everything an aspirant needs." },
      { property: "og:title", content: "Student Services — JY Defence Academy" },
      { property: "og:description", content: "Hostel, meals, study materials, mock tests and NCC training." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Home, t: "Hostel Accommodation", d: "Safe, clean separate hostels for boys (and girls where available) within walking distance of the campus." },
  { icon: Utensils, t: "Subsidised Meals", d: "Three nutritious meals a day designed for the calorie demands of active cadets." },
  { icon: BookMarked, t: "Study Materials", d: "Complete notes, solved question banks and previous-year papers — all included, all free." },
  { icon: ClipboardCheck, t: "Mock Tests", d: "Weekly written mocks, full-length simulations and SSB/GTO practice rounds." },
  { icon: Dumbbell, t: "Physical Training", d: "Daily drills, running, push-ups, sports and self-defence — meet every PET/PST benchmark." },
  { icon: Award, t: "NCC Certification", d: "Active support for earning NCC ‘B’ and ‘C’ certificates — a real edge in SSB and AFCAT." },
  { icon: Briefcase, t: "Career Guidance", d: "One-on-one counselling on exam selection, application timelines and interview readiness." },
  { icon: Bus, t: "Local Transport", d: "Guidance on shared transport and shuttle options around Madhurawada." },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="◢ STUDENT LIFE"
        title="Everything An Aspirant Needs."
        subtitle="Coaching is only one piece. We provide the full ecosystem — roof, food, materials, mentors — so you can focus on the mission."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <StaggerItem key={s.t} className="h-full">
                <div className="group relative h-full overflow-hidden border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-elevated">
                  <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 transition duration-500 group-hover:bg-accent/10" />
                  <s.icon className="relative h-9 w-9 text-accent transition group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="relative mt-5 font-display text-lg tracking-wider">{s.t}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden bg-olive-deep py-16 text-primary-foreground">
        <div className="absolute inset-0 bg-tactical-grid opacity-25" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-scan" />
        </div>
        <Reveal className="relative mx-auto max-w-5xl px-4 text-center lg:px-8">
          <p className="font-display text-xs tracking-[0.3em] text-gold">◢ FEE PROMISE</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Tuition: <span className="text-gold">₹0</span>. Always.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/80">
            You pay only for hostel, meals and a one-time nominal registration. No surprise charges, no premium tiers — every cadet gets the same training.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
