import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "../components/PageShell";
import { Reveal } from "../components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Admissions, Fees & Eligibility | JY Defence Academy" },
      { name: "description", content: "Answers on free coaching, eligibility, admissions, hostel, study material and selection rates at JY Defence Academy." },
      { property: "og:title", content: "FAQs — JY Defence Academy" },
      { property: "og:description", content: "Common questions on admissions, fees, eligibility and student life." },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  { q: "Do you really offer free coaching?", a: "Yes. We charge no tuition fee. Students pay only for lodging, meals and a one-time nominal registration fee." },
  { q: "Which exams do you prepare students for?", a: "NDA, CDS, AFCAT, MNS, SSC GD/CGL, RRB, Paramilitary (CRPF/BSF/CISF/ITBP), Agniveer (Army/Navy/Air) and more — with custom batches." },
  { q: "What are the eligibility requirements?", a: "Each exam has its own criteria. NDA: 10+2 Science, 16½–19½ years. CDS/AFCAT: graduate, ~20–25 years. SSC GD: 10th pass, 17–21 years. Visit the Courses page for details." },
  { q: "How do I apply?", a: "Call us at +91 73306 00630 or visit the campus in Madhurawada. Admissions open twice a year — typically May–June and November–December — before major exam cycles." },
  { q: "Do you provide study materials?", a: "Yes. Comprehensive notes, solved question banks and practice tests are issued to all students at no extra cost." },
  { q: "Is hostel accommodation available?", a: "Yes. Safe, clean hostels with structured meals are available on or near campus at student-friendly rates." },
  { q: "What is the success rate?", a: "Across 25+ years, hundreds of our cadets have been selected into the Indian Army, Air Force, Navy, paramilitary forces and Railways. We do not promise selection — we guarantee preparation." },
  { q: "Are girls admitted?", a: "Absolutely. We actively encourage women aspirants for MNS, AFCAT, CDS and other open programmes, with separate hostel arrangements where available." },
];

function FaqsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="◢ FREQUENTLY ASKED"
        title="Straight Answers."
        subtitle="Everything you need to know before you walk through our gates."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.04} y={12}>
                <AccordionItem value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-display text-base tracking-wider hover:text-accent">
                    <span className="flex items-center gap-3">
                      <span className="font-stencil text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>
    </PageShell>
  );
}
