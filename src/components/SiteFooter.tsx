import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-olive-deep text-primary-foreground">
      <div className="stripe-divider" />
      <div className="absolute inset-0 bg-tactical-grid-fine opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="JY Defence Academy" className="h-12 w-12 rounded-sm object-cover ring-1 ring-gold/60 shadow-gold" />
            <div>
              <div className="font-display text-lg tracking-widest text-gold">JY DEFENCE</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">Train Like a Soldier</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
            Free coaching for India's brave aspirants. Founded by veterans, fueled by discipline.
          </p>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-gold">EXPLORE</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {[
              { to: "/about", l: "About Us" },
              { to: "/courses", l: "Courses" },
              { to: "/faculty", l: "Faculty" },
              { to: "/services", l: "Student Services" },
              { to: "/faqs", l: "FAQs" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="group inline-flex items-center gap-2 hover:text-gold">
                  <span className="h-px w-3 bg-gold/40 transition-all group-hover:w-6 group-hover:bg-gold" />
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-gold">CONTACT</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Street D3, Gandhi Nagar, Madhurawada, Visakhapatnam – 530048</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href="tel:+917330600630" className="hover:text-gold">+91 73306 00630</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href="mailto:jyacademy40@gmail.com" className="hover:text-gold">jyacademy40@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm tracking-widest text-gold">FOLLOW</h4>
          <div className="mt-4 flex gap-3">
            {[
              { icon: Instagram, href: "https://www.instagram.com/jy_defence_academy_official/", label: "Instagram" },
              { icon: Youtube, href: "#", label: "YouTube" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="rounded-sm border border-gold/40 p-2 transition hover:bg-gold hover:text-olive-deep hover:scale-110"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-foreground/50">137K+ YouTube · 39K+ Instagram</p>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} JY Defence Academy. All rights reserved.</p>
          <p className="font-display tracking-[0.3em] text-gold/70">SERVICE · DISCIPLINE · HONOUR</p>
        </div>
      </div>
    </footer>
  );
}
