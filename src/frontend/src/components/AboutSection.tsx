import { Award, Camera, Star, Users } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const credentials = [
  { label: "Trusted by 100+ Celebrities", icon: Star },
  { label: "Featured in Vogue India", icon: Camera },
  { label: "Award-Winning Artist", icon: Award },
  { label: "8+ Years Experience", icon: Users },
];

const stats = [
  { value: "500+", label: "Brides" },
  { value: "100+", label: "Celebrities" },
  { value: "8+", label: "Years" },
  { value: "50K+", label: "Instagram Followers" },
];

function StatCounter({
  value,
  label,
  delay,
}: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center group"
      data-ocid={`about.stat.${label.toLowerCase().replace(/\s+/g, "_")}`}
    >
      <div className="relative inline-block">
        <motion.span
          className="block text-4xl md:text-5xl font-display font-bold gold-gradient-text"
          style={{ textShadow: "0 0 28px rgba(212,175,55,0.25)" }}
          initial={{ scale: 0.5 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + 0.2,
            type: "spring",
            stiffness: 150,
          }}
        >
          {value}
        </motion.span>
        <motion.div
          className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
      <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground font-mono">
        {label}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding bg-dark-secondary overflow-hidden"
      data-ocid="about.section"
    >
      {/* Enhanced decorative ambient orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(183,110,121,0.09) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(30%, 30%)",
        }}
      />

      {/* Gold divider top */}
      <div className="divider-gold w-full absolute top-0 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] text-gold mb-3 font-mono"
            style={{ textShadow: "0 0 14px rgba(212,175,55,0.5)" }}
          >
            The Artist
          </p>
          <h2
            className="text-5xl md:text-6xl font-display gold-gradient-text leading-tight mb-4"
            style={{ filter: "drop-shadow(0 0 20px rgba(212,175,55,0.15))" }}
          >
            About Yakshi
          </h2>
          <p className="text-lg text-muted-foreground tracking-wide">
            Celebrity Makeup Artist &amp; Beauty Expert
          </p>
          <div
            className="mt-6 mx-auto w-24 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #d4af37, transparent)",
              boxShadow: "0 0 10px rgba(212,175,55,0.35)",
            }}
          />
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text + credentials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-foreground/85 text-base leading-relaxed mb-5">
              Yakshi is Delhi NCR's most sought-after celebrity makeup artist,
              with over 8 years of experience transforming brides and
              celebrities into visions of perfection. Her artistry has graced
              the most prestigious stages and events across India.
            </p>
            <p className="text-foreground/75 text-base leading-relaxed mb-10">
              Specializing in bridal makeup, nail art, and luxury beauty
              transformations, Yakshi brings a unique blend of traditional
              Indian beauty techniques with modern international trends. Her
              work has been featured in leading fashion magazines and she is
              trusted by Bollywood celebrities for their most important moments.
            </p>

            {/* Credential badges — glass-ultra + hover glow */}
            <div className="flex flex-wrap gap-3">
              {credentials.map(({ label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow:
                      "0 0 22px rgba(212,175,55,0.35), 0 0 50px rgba(212,175,55,0.12)",
                  }}
                  className="glass-ultra flex items-center gap-2 px-4 py-2 rounded-full cursor-default"
                  data-ocid={`about.credential.${i + 1}`}
                >
                  <Icon
                    size={14}
                    className="text-gold shrink-0"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(212,175,55,0.7))",
                    }}
                  />
                  <span className="text-xs font-mono tracking-wide text-gold-light whitespace-nowrap">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel — decorative 3D orbit element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative w-64 h-64 md:w-72 md:h-72"
            >
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-gold/30 animate-spin-slow"
                style={{ boxShadow: "0 0 12px rgba(212,175,55,0.15)" }}
              />
              <div
                className="absolute inset-4 rounded-full border"
                style={{
                  borderColor: "rgba(183,110,121,0.22)",
                  boxShadow: "0 0 8px rgba(183,110,121,0.12)",
                  animation: "spin-slow 14s linear infinite reverse",
                }}
              />

              {/* Center portrait */}
              <div
                className="absolute inset-8 rounded-full glass-ultra flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 30px rgba(212,175,55,0.35), 0 0 70px rgba(212,175,55,0.15), 0 0 120px rgba(212,175,55,0.06)",
                }}
              >
                <img
                  src="/assets/hero-bride.png"
                  alt="Sakshi — Celebrity Makeup Artist"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center top" }}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = "none";
                    const fallback =
                      img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.opacity = "1";
                  }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center text-4xl font-display text-gold select-none pointer-events-none"
                  style={{ opacity: 0, transition: "opacity 0.3s" }}
                >
                  ✦
                </div>
              </div>

              {/* Floating accent dots */}
              {[0, 72, 144, 216, 288].map((deg) => (
                <motion.div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-gold"
                  style={{
                    top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                    boxShadow:
                      "0 0 10px rgba(212,175,55,0.9), 0 0 20px rgba(212,175,55,0.4)",
                  }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2.5,
                    delay: (deg / 72) * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}
            </motion.div>

            {/* Vertical label accent */}
            <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div
                className="h-16 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #d4af37, transparent)",
                  boxShadow: "0 0 6px rgba(212,175,55,0.35)",
                }}
              />
              <span
                className="text-xs font-mono text-gold tracking-widest"
                style={{ writingMode: "vertical-rl" }}
              >
                DELHI NCR
              </span>
              <div
                className="h-16 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #d4af37, transparent)",
                  boxShadow: "0 0 6px rgba(212,175,55,0.35)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row — glass-ultra + stronger gold glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="glass-ultra rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 35px rgba(212,175,55,0.15), 0 0 80px rgba(212,175,55,0.06), 0 0 0 1px rgba(212,175,55,0.08)",
          }}
          data-ocid="about.stats"
        >
          {stats.map((s, i) => (
            <StatCounter
              key={s.label}
              value={s.value}
              label={s.label}
              delay={0.7 + i * 0.1}
            />
          ))}
        </motion.div>
      </div>

      {/* Gold divider bottom */}
      <div className="divider-gold w-full absolute bottom-0 left-0" />
    </section>
  );
}
