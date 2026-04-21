import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/faculty", label: "Faculty" },
  { to: "/services", label: "Services" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gold/40 bg-olive-deep/95 shadow-elevated backdrop-blur"
          : "border-gold/20 bg-olive-deep/80 backdrop-blur"
      } text-primary-foreground`}
    >
      {/* tactical strip */}
      <div className="h-[3px] w-full bg-gradient-gold" />
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 lg:px-8 transition-all duration-300 ${scrolled ? "h-14" : "h-20"}`}>
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src={logo}
              alt="JY Defence Academy logo"
              className={`rounded-sm object-cover ring-1 ring-gold/60 shadow-gold transition-all duration-300 ${scrolled ? "h-9 w-9" : "h-12 w-12"}`}
            />
            <span className="pointer-events-none absolute inset-0 rounded-sm animate-pulse-ring" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-base tracking-widest text-gold">JY DEFENCE</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/70">Academy · Vizag</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative px-3 py-2 font-display text-xs uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "px-3 py-2 font-display text-xs uppercase tracking-widest text-gold" }}
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
        </nav>

        <a
          href="tel:+917330600630"
          className="hidden md:inline-flex items-center gap-2 rounded-sm bg-gradient-gold px-4 py-2 font-display text-xs uppercase tracking-widest text-olive-deep shadow-gold transition hover:brightness-110 hover:translate-y-[-1px]"
        >
          <Phone className="h-3.5 w-3.5" /> 73306 00630
        </a>

        <button
          aria-label="Toggle menu"
          className="p-2 text-gold lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gold/20 bg-olive-deep lg:hidden"
          >
            <nav className="flex flex-col px-4 py-3">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-gold/10 py-3 font-display text-sm uppercase tracking-widest text-primary-foreground/85 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="tel:+917330600630"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-gold px-4 py-3 font-display text-xs uppercase tracking-widest text-olive-deep"
              >
                <Phone className="h-4 w-4" /> Call +91 73306 00630
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
