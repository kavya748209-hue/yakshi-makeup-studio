import {
  Camera,
  CheckCircle2,
  Crown,
  Gem,
  Heart,
  PhoneCall,
  Sparkles,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

function FloatingOrbs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute rounded-full animate-float"
        style={{
          width: 500,
          height: 500,
          top: "-20%",
          right: "-12%",
          background:
            "radial-gradient(circle, rgba(139,94,60,0.13) 0%, rgba(180,140,100,0.06) 40%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute rounded-full animate-float-slow"
        style={{
          width: 350,
          height: 350,
          bottom: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.10) 0%, rgba(139,94,60,0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "-4s",
        }}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + (i % 3) * 1.5,
            height: 4 + (i % 3) * 1.5,
            background: `rgba(139,94,60,${0.25 + (i % 4) * 0.1})`,
            left: `${6 + ((i * 7) % 90)}%`,
            top: `${15 + ((i * 11) % 75)}%`,
            boxShadow: "0 0 6px rgba(139,94,60,0.35)",
          }}
          animate={{ y: [0, -16, 0], opacity: [0.25, 0.8, 0.25] }}
          transition={{
            duration: 2.5 + (i % 3),
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GoldParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    const pts = Array.from({ length: 60 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.28,
      dy: -Math.random() * 0.38 - 0.1,
      op: Math.random() * 0.45 + 0.1,
    }));
    let raf: number;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,94,60,${p.op})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

type PackageTier = {
  icon: React.ComponentType<{ size: number; style?: React.CSSProperties }>;
  tier: string;
  price: string;
  popular: boolean;
  badge?: string;
  includes: string[];
  color: string;
};

const packages: PackageTier[] = [
  {
    icon: Star,
    tier: "Essential Bridal",
    price: "₹12,000",
    popular: false,
    includes: [
      "Pre-bridal trial session",
      "Wedding day full makeup",
      "HD foundation base",
      "Touch-up kit provided",
      "1 event (wedding only)",
    ],
    color: "#8b7a6b",
  },
  {
    icon: Gem,
    tier: "Premium Bridal",
    price: "₹22,000",
    popular: true,
    badge: "Most Popular",
    includes: [
      "Trial + consultation session",
      "Wedding + engagement makeup",
      "Mehendi event look included",
      "Premium luxury products used",
      "Photoshoot ready look",
      "Hair styling for 1 event",
    ],
    color: "#8b5e3c",
  },
  {
    icon: Crown,
    tier: "Luxury Complete",
    price: "₹35,000",
    popular: false,
    includes: [
      "All 5 events covered",
      "Pre-bridal skin treatment",
      "Hairdo for all events",
      "Airport pickup & drop",
      "Luxury international product kit",
      "Dedicated artist full weekend",
      "WhatsApp support all week",
    ],
    color: "#8b5e3c",
  },
];

const included = [
  {
    icon: Heart,
    title: "Personal Consultation",
    desc: "We understand your skin tone, outfit, and vision before touch 1.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    desc: "MAC, Charlotte Tilbury, Huda Beauty, Kryolan — international brands only.",
  },
  {
    icon: Camera,
    title: "Photo-Ready Finish",
    desc: "HD airbrush technique for flawless camera-ready results all day long.",
  },
  {
    icon: CheckCircle2,
    title: "Touch-Up Support",
    desc: "On-call artist available for quick touch-ups between ceremonies.",
  },
];

const gallery = [
  { src: "/assets/snehal-bridal-1.png", label: "Wedding Look" },
  { src: "/assets/snehal-bridal-2.png", label: "Royal Bridal" },
  { src: "/assets/snehal-bridal-3.png", label: "Elegant Bride" },
  { src: "/assets/bridal-gold.png", label: "Gold Glam" },
  { src: "/assets/bridal-lehenga.png", label: "Lehenga Look" },
  { src: "/assets/bridal-lipstick.png", label: "Lip Art" },
];

export default function BridalPackagesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#fdf8f3" }}
      data-ocid="packages.page"
    >
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(160deg, #fdf8f3 0%, #f5e6d3 50%, #ede0d0 100%)",
        }}
      >
        <GoldParticlesCanvas />
        <FloatingOrbs />
        {/* Decorative rings */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 700,
            height: 700,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(139,94,60,0.08)",
            zIndex: 0,
          }}
        />
        <div
          className="max-w-3xl mx-auto px-4 text-center relative"
          style={{ zIndex: 2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 glass-ultra px-5 py-2.5 rounded-full">
              <Crown size={15} style={{ color: "#8b5e3c" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase font-accent"
                style={{ color: "#8b5e3c" }}
              >
                Makeup by Snehal Pawar
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display italic gradient-text mb-4"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.12 }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Bridal Packages
          </motion.h1>

          <motion.p
            className="text-lg font-body mb-10 max-w-xl mx-auto"
            style={{ color: "#8b5e3c" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            From Engagement to Reception — Every Moment, Perfectly Crafted
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="tel:+919561548151"
              className="btn-premium"
              data-ocid="packages.hero.call_button"
            >
              Book Your Package
            </a>
            <a
              href="https://wa.me/919561548151"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium"
              data-ocid="packages.hero.whatsapp_button"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Package Cards ── */}
      <section className="section-padding section-bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,94,60,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Choose Your Celebration
            </p>
            <h2 className="text-4xl md:text-5xl font-display italic gradient-text mb-5">
              Wedding Packages
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 80 }} />
          </motion.div>

          <div
            className="grid md:grid-cols-3 gap-7"
            data-ocid="packages.packages.list"
          >
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.tier}
                  className="card-premium rounded-2xl p-8 flex flex-col relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  data-ocid={`packages.package.item.${i + 1}`}
                  style={
                    pkg.popular
                      ? {
                          outline: "2.5px solid rgba(139,94,60,0.6)",
                          outlineOffset: "0px",
                          boxShadow:
                            "0 0 40px rgba(139,94,60,0.18), 0 20px 60px rgba(107,63,31,0.10)",
                        }
                      : {}
                  }
                >
                  {/* Corner glow */}
                  <div
                    className="absolute top-0 right-0 pointer-events-none"
                    style={{
                      width: 150,
                      height: 150,
                      background: `radial-gradient(circle at top right, ${pkg.color}18 0%, transparent 70%)`,
                      borderRadius: "0 20px 0 0",
                    }}
                  />

                  {pkg.popular && (
                    <div
                      className="absolute top-0 left-0 right-0 text-center py-2 text-xs font-accent font-bold tracking-widest uppercase rounded-t-2xl"
                      style={{
                        background: "linear-gradient(135deg,#8b5e3c,#6b3f1f)",
                        color: "#fdf6ee",
                      }}
                    >
                      ✦ Most Popular ✦
                    </div>
                  )}

                  <div
                    className={`flex flex-col flex-1 ${pkg.popular ? "mt-7" : ""}`}
                  >
                    <div className="mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                        style={{
                          background: `${pkg.color}18`,
                          border: `1px solid ${pkg.color}44`,
                          boxShadow: `0 0 20px ${pkg.color}22`,
                        }}
                      >
                        <Icon size={24} style={{ color: pkg.color }} />
                      </div>
                      <h3
                        className="text-2xl font-display italic"
                        style={{ color: "#3d2817" }}
                      >
                        {pkg.tier}
                      </h3>
                    </div>

                    <ul className="space-y-3 flex-1 mb-7">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm font-body"
                          style={{ color: "#5a3825" }}
                        >
                          <CheckCircle2
                            size={14}
                            style={{
                              color: "#8b5e3c",
                              flexShrink: 0,
                              marginTop: 2,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div
                      className="pt-5"
                      style={{ borderTop: "1px solid rgba(139,94,60,0.2)" }}
                    >
                      <p
                        className="text-3xl font-display font-bold"
                        style={{
                          color: "#8b5e3c",
                          textShadow: "0 0 20px rgba(139,94,60,0.3)",
                        }}
                      >
                        {pkg.price}
                      </p>
                      <p
                        className="text-xs font-body mt-1"
                        style={{ color: "#8b5e3c" }}
                      >
                        All-inclusive
                      </p>
                      <a
                        href="https://wa.me/919561548151"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-premium w-full text-center block mt-4 text-sm py-3"
                        data-ocid={`packages.package.book_button.${i + 1}`}
                      >
                        Book This Package
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5e6d3 0%, #fdf8f3 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,94,60,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Every Package Includes
            </p>
            <h2 className="text-4xl font-display italic gradient-text mb-5">
              What's Included
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 70 }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="glass-medium rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  data-ocid={`packages.included.item.${i + 1}`}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(139,94,60,0.12)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      boxShadow: "0 0 18px rgba(139,94,60,0.18)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#8b5e3c" }} />
                  </div>
                  <h4
                    className="font-display italic text-base mb-2"
                    style={{ color: "#3d2817" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs font-body leading-relaxed"
                    style={{ color: "#8b5e3c" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Bridal Photo Gallery ── */}
      <section className="section-padding section-bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Our Bridal Work
            </p>
            <h2 className="text-4xl font-display italic gradient-text mb-5">
              Bridal Portfolio
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 70 }} />
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-5"
            data-ocid="packages.gallery.list"
          >
            {gallery.map((item, i) => (
              <motion.div
                key={item.src}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{
                  height: i === 0 || i === 3 ? 340 : 240,
                  border: "1.5px solid rgba(139,94,60,0.2)",
                  boxShadow: "0 4px 20px rgba(107,63,31,0.07)",
                }}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                data-ocid={`packages.gallery.item.${i + 1}`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(107,63,31,0.75) 0%, rgba(107,63,31,0.2) 50%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 40px rgba(139,94,60,0.2)",
                    borderRadius: "inherit",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p
                    className="text-sm font-display italic"
                    style={{
                      color: "#fdf6ee",
                      textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                    }}
                  >
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f5e6d3 0%, #fdf8f3 60%, #f5e6d3 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,94,60,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="max-w-xl mx-auto px-4 text-center relative"
          style={{ zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Crown
              size={50}
              className="mx-auto mb-5"
              style={{
                color: "#8b5e3c",
                filter: "drop-shadow(0 0 16px rgba(139,94,60,0.45))",
              }}
            />
            <h2 className="text-4xl font-display italic gradient-text mb-4">
              Book Your Bridal Look
            </h2>
            <p className="font-body mb-8" style={{ color: "#8b5e3c" }}>
              Slots fill quickly — especially for peak wedding season (Oct–Mar).
              Secure your date today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919561548151"
                className="btn-premium flex items-center gap-2"
                data-ocid="packages.cta.call_button"
              >
                <PhoneCall size={16} /> Call: 09561548151
              </a>
              <a
                href="https://wa.me/919561548151"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-premium"
                data-ocid="packages.cta.whatsapp_button"
              >
                WhatsApp Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
