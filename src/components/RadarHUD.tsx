/**
 * Radar HUD — animated SVG radar sweep for hero/decoration use.
 * Pure SVG + CSS, no JS.
 */
export function RadarHUD({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
          <defs>
            <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sweep" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="98" fill="url(#radarFill)" stroke="var(--gold)" strokeOpacity="0.45" />
          <circle cx="100" cy="100" r="72" fill="none" stroke="var(--gold)" strokeOpacity="0.25" />
          <circle cx="100" cy="100" r="44" fill="none" stroke="var(--gold)" strokeOpacity="0.25" />
          <circle cx="100" cy="100" r="18" fill="none" stroke="var(--gold)" strokeOpacity="0.35" />
          <line x1="2" y1="100" x2="198" y2="100" stroke="var(--gold)" strokeOpacity="0.18" />
          <line x1="100" y1="2" x2="100" y2="198" stroke="var(--gold)" strokeOpacity="0.18" />
          <line x1="29" y1="29" x2="171" y2="171" stroke="var(--gold)" strokeOpacity="0.12" />
          <line x1="171" y1="29" x2="29" y2="171" stroke="var(--gold)" strokeOpacity="0.12" />
        </svg>
        {/* sweep wedge */}
        <div className="absolute inset-0 origin-center animate-radar">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <path d="M100,100 L100,2 A98,98 0 0,1 196,114 Z" fill="url(#sweep)" />
          </svg>
        </div>
        {/* blips */}
        {[
          { x: "62%", y: "32%" },
          { x: "30%", y: "58%" },
          { x: "72%", y: "70%" },
        ].map((b, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold animate-radar-pulse"
            style={{ left: b.x, top: b.y, animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>
    </div>
  );
}
