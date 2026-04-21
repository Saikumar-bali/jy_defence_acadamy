import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell, PageHero } from "../components/PageShell";
import { Reveal } from "../components/motion/Reveal";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visit JY Defence Academy in Visakhapatnam" },
      { name: "description", content: "Visit our campus in Madhurawada, Visakhapatnam. Call +91 73306 00630 or email jyacademy40@gmail.com for admissions." },
      { property: "og:title", content: "Contact — JY Defence Academy" },
      { property: "og:description", content: "Address, phone, email and admissions inquiry form." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message received. We'll be in touch within 24 hours.");
  };

  return (
    <PageShell>
      <Toaster />
      <PageHero
        eyebrow="◢ GET IN TOUCH"
        title="Walk In. Call. Or Write."
        subtitle="Our admissions desk is open six days a week. Come visit the campus — meet the faculty, see the hostel, ask anything."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          {/* Info */}
          <Reveal>
            <h2 className="font-display text-2xl tracking-wider md:text-3xl">Campus & Admissions Desk</h2>
            <ul className="mt-8 space-y-6">
              {[
                { icon: MapPin, t: "Address", d: "Street No. D3, Gandhi Nagar, Madhurawada,\nVisakhapatnam – 530048, Andhra Pradesh" },
                { icon: Phone, t: "Phone", d: "+91 73306 00630\n+91 82772 14974", href: "tel:+917330600630" },
                { icon: Mail, t: "Email", d: "jyacademy40@gmail.com", href: "mailto:jyacademy40@gmail.com" },
                { icon: Clock, t: "Hours", d: "Mon–Sat · 8:00 AM – 7:00 PM\nSunday · By appointment" },
              ].map((i) => (
                <li key={i.t} className="group flex gap-4 border-b border-border pb-6">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-olive-deep transition group-hover:bg-primary">
                    <i.icon className="h-5 w-5 text-gold transition group-hover:scale-110" />
                  </div>
                  <div>
                    <div className="font-display text-xs uppercase tracking-[0.25em] text-accent">{i.t}</div>
                    {i.href ? (
                      <a href={i.href} className="mt-1 block whitespace-pre-line text-foreground hover:text-accent">{i.d}</a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-foreground">{i.d}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="stencil-frame mt-8 overflow-hidden rounded-sm border border-border shadow-sm">
              <iframe
                title="JY Defence Academy location"
                src="https://maps.google.com/maps?q=Gandhi%20Nagar%20Madhurawada%20Visakhapatnam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="lg:pl-6">
              <div className="relative overflow-hidden rounded-sm border border-border bg-card p-8 shadow-elevated">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold" />
                <h2 className="font-display text-2xl tracking-wider md:text-3xl">Admissions Inquiry</h2>
                <p className="mt-2 text-sm text-muted-foreground">We respond within 24 hours on working days.</p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-10 flex flex-col items-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle2 className="h-14 w-14 text-accent" />
                      </motion.div>
                      <h3 className="mt-4 font-display text-xl">Message Received</h3>
                      <p className="mt-2 text-sm text-muted-foreground">A counsellor will reach out shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="mt-8 grid gap-4"
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full Name" name="name" required />
                        <Field label="Phone" name="phone" type="tel" required />
                      </div>
                      <Field label="Email" name="email" type="email" />
                      <div>
                        <label className="mb-2 block font-display text-xs uppercase tracking-widest text-foreground/80">Interested Course</label>
                        <select
                          name="course"
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select a programme</option>
                          <option>NDA / NA</option>
                          <option>CDS</option>
                          <option>AFCAT</option>
                          <option>MNS</option>
                          <option>SSC GD / CGL</option>
                          <option>CAPF (CRPF/BSF/CISF)</option>
                          <option>Agniveer</option>
                          <option>RRB / Railways</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block font-display text-xs uppercase tracking-widest text-foreground/80">Message</label>
                        <textarea
                          name="message"
                          rows={4}
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                          placeholder="Tell us about your goals, age, qualifications…"
                        />
                      </div>
                      <button
                        type="submit"
                        className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-olive-deep px-6 py-4 font-display text-sm uppercase tracking-widest text-gold shadow-elevated transition hover:bg-primary"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gold/15 transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">Send Inquiry</span>
                        <Send className="relative h-4 w-4 transition group-hover:translate-x-1" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block font-display text-xs uppercase tracking-widest text-foreground/80">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
