import { Sparkles } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

interface CelebrityCard {
  image: string;
  label: string;
  sublabel: string;
  accentColor: string;
}

const celebrityCards: CelebrityCard[] = [
  {
    image:
      "/assets/screenshot_2026-04-14_221249-019d8ce8-94b6-749d-b230-4091a5c4d8a0.png",
    label: "Bollywood Celebrity Makeover",
    sublabel: "Bridal & Film Industry",
    accentColor: "rgba(212,175,55,0.5)",
  },
  {
    image:
      "/assets/screenshot_2026-04-14_221303-019d8ce8-a5b9-70dd-a36e-e0deafef0c3d.png",
    label: "Award Night Glamour Look",
    sublabel: "Red Carpet Excellence",
    accentColor: "rgba(183,110,121,0.5)",
  },
  {
    image:
      "/assets/screenshot_2026-04-14_221313-019d8ce8-94aa-729d-adde-cbb9d7694b6d.png",
    label: "Luxury Event Styling",
    sublabel: "Premium Event Artistry",
    accentColor: "rgba(232,200,74,0.4)",
  },
];

const celebWorksHighlights = [
  "Collaborated with top Bollywood A-listers for blockbuster film promotions",
  "Styled celebrities for national award ceremonies & red carpet events",
  "Featured in Vogue India, Femina, and leading beauty publications",
  "Exclusive artist at luxury weddings with A-list guest lists",
  "Brand ambassador makeup for major Indian beauty & fashion brands",
];

function TiltCard({ card, index }: { card: CelebrityCard; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cardInView = useInView(ref, { once: true, margin: "-80px" });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 16;
    setTilt({ x, y });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  const isGold = card.accentColor.includes("212,175");
  const isRose = card.accentColor.includes("183,110");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ perspective: 1000 }}
      data-ocid={`celebrity.card.${index + 1}`}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer card-premium"
        style={{
          border: `1px solid ${hovered ? card.accentColor : card.accentColor.replace(/0\.\d+\)$/, "0.25)")}`,
          boxShadow: hovered
            ? `0 0 40px ${card.accentColor}, 0 0 80px ${card.accentColor.replace(/0\.\d+\)$/, "0.18)")}, inset 0 1px 0 rgba(255,255,255,0.09)`
            : `0 0 22px ${card.accentColor.replace(/0\.\d+\)$/, "0.12)")}, 0 0 50px ${card.accentColor.replace(/0\.\d+\)$/, "0.06)")}`,
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <motion.img
            src={card.image}
            alt={card.label}
            className="w-full h-full object-cover"
            style={{
              filter: hovered
                ? `drop-shadow(0 0 16px ${isGold ? "rgba(212,175,55,0.4)" : isRose ? "rgba(183,110,121,0.4)" : "rgba(232,200,74,0.35)"})`
                : "none",
              transition: "filter 0.4s ease",
            }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement;
              el.style.display = "none";
              const parent = el.parentElement;
              if (parent) {
                parent.style.background =
                  "linear-gradient(135deg, #1a1a1a, #111)";
              }
            }}
          />
          {/* Dark gradient overlay — deeper */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.25) 50%, transparent 100%)",
            }}
          />
          {/* Hover shimmer */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, transparent 35%, rgba(212,175,55,0.10) 50%, transparent 65%)",
              opacity: hovered ? 1 : 0,
            }}
          />
          {/* Sparkle corner badge with glow */}
          <div
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full glass-ultra"
            style={{
              boxShadow:
                "0 0 14px rgba(212,175,55,0.45), 0 0 30px rgba(212,175,55,0.18)",
            }}
          >
            <Sparkles
              size={12}
              className="text-gold"
              style={{ filter: "drop-shadow(0 0 5px rgba(212,175,55,0.8))" }}
            />
          </div>
        </div>

        {/* Caption */}
        <div className="p-5" style={{ backdropFilter: "blur(8px)" }}>
          <h3 className="text-sm font-display gold-gradient-text mb-1 leading-tight">
            {card.label}
          </h3>
          <p className="text-xs text-muted-foreground font-mono tracking-wide">
            {card.sublabel}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CelebritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="celebrities"
      ref={sectionRef}
      className="relative section-padding bg-dark-primary overflow-hidden"
      data-ocid="celebrity.section"
    >
      {/* Enhanced ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(183,110,121,0.07) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="divider-gold w-full absolute top-0 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-3 font-mono"
            style={{ textShadow: "0 0 12px rgba(183,110,121,0.5)" }}
          >
            Bollywood &amp; Beyond
          </p>
          <h2 className="text-5xl md:text-6xl font-display gradient-text leading-tight mb-4">
            Celebrity Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Trusted by India's biggest names. From award nights to blockbuster
            shoots, Yakshi's artistry defines the gold standard of celebrity
            glamour.
          </p>
          <div
            className="mt-6 mx-auto w-24 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #b76e79, transparent)",
              boxShadow: "0 0 8px rgba(183,110,121,0.35)",
            }}
          />
        </motion.div>

        {/* 3D tilt photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {celebrityCards.map((card, i) => (
            <TiltCard key={card.label} card={card} index={i} />
          ))}
        </div>

        {/* Highlights glass card — glass-ultra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass-ultra rounded-2xl p-8 md:p-10"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 40px rgba(212,175,55,0.10), 0 0 80px rgba(212,175,55,0.04)",
          }}
          data-ocid="celebrity.highlights"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles
              size={20}
              className="text-gold"
              style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.7))" }}
            />
            <h3 className="text-xl font-display gold-gradient-text">
              Celebrity Collaborations
            </h3>
          </div>
          <ul className="space-y-4">
            {celebWorksHighlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-start gap-3 text-foreground/80 text-sm leading-relaxed"
                data-ocid={`celebrity.highlight.${i + 1}`}
              >
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                  style={{
                    boxShadow:
                      "0 0 8px rgba(212,175,55,0.7), 0 0 16px rgba(212,175,55,0.3)",
                  }}
                />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Decorative quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 pt-8 border-t text-center"
            style={{ borderColor: "rgba(212,175,55,0.22)" }}
          >
            <p
              className="text-lg font-display gold-gradient-text italic"
              style={{ textShadow: "0 0 30px rgba(212,175,55,0.20)" }}
            >
              "Where artistry meets stardom — one brushstroke at a time."
            </p>
            <cite className="mt-2 block text-xs font-mono text-muted-foreground tracking-widest uppercase not-italic">
              — Yakshi, Celebrity Makeup Artist
            </cite>
          </motion.blockquote>
        </motion.div>
      </div>

      <div className="divider-gold w-full absolute bottom-0 left-0" />
    </section>
  );
}
