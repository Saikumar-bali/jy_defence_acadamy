import { Radio } from "lucide-react";

const items = [
  "NDA WRITTEN BATCH · STARTING SOON",
  "CDS II MOCK SERIES LIVE",
  "AFCAT GROUND CLASSES · DAILY 6AM",
  "AGNIVEER ARMY · NEW BATCH",
  "FREE COUNSELLING · WALK-INS WELCOME",
  "SSB / GTO PRACTICE · WEEKLY",
  "NCC ‘B’ & ‘C’ TRAINING ACTIVE",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-olive-deep/95 text-gold">
      <div className="absolute left-0 top-0 z-10 flex h-full items-center gap-2 bg-gradient-gold px-4 text-olive-deep">
        <Radio className="h-3.5 w-3.5 animate-flicker" />
        <span className="font-display text-[10px] tracking-[0.3em]">LIVE</span>
      </div>
      <div className="flex animate-ticker whitespace-nowrap py-2 pl-28">
        {row.map((t, i) => (
          <span key={i} className="mx-8 font-display text-[11px] tracking-[0.3em]">
            ◆ {t}
          </span>
        ))}
      </div>
    </div>
  );
}
