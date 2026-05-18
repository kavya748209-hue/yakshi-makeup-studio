import {
  Camera,
  Heart,
  PhoneCall,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const allTransformations = [
  {
    src: "/assets/snehal-bridal-1.png",
    caption: "Bridal Glam",
    category: "Bridal",
    desc: "Full HD bridal transformation with rose-gold eyes",
  },
  {
    src: "/assets/snehal-bridal-2.png",
    caption: "Royal Bride",
    category: "Bridal",
    desc: "Luxury gold & red bridal look for wedding day",
  },
  {
    src: "/assets/snehal-bridal-3.png",
    caption: "Traditional Elegance",
    category: "Bridal",
    desc: "Classic Indian bridal makeup with dewy base",
  },
  {
    src: "/assets/snehal-gallery-1.png",
    caption: "Glamour Eyes",
    category: "HD Makeup",
    desc: "Stunning eye artistry & airbrushed glow",
  },
  {
    src: "/assets/snehal-gallery-2.png",
    caption: "HD Airbrush Perfection",
    category: "HD Makeup",
    desc: "Camera-ready flawless matte finish",
  },
  {
    src: "/assets/snehal-gallery-3.png",
    caption: "Reception Grand Look",
    category: "Reception",
    desc: "Bold reception night look with smoky drama",
  },
  {
    src: "/assets/snehal-gallery-4.png",
    caption: "Engagement Radiance",
    category: "Engagement",
    desc: "Fresh & dewy engagement ceremony makeup",
  },
  {
    src: "/assets/snehal-gallery-5.png",
    caption: "Airbrush Masterpiece",
    category: "Airbrush",
    desc: "Professional airbrush for long-wear perfection",
  },
  {
    src: "/assets/snehal-hero.png",
    caption: "Signature Look",
    category: "HD Makeup",
    desc: "Snehal&apos;s signature premium HD technique",
  },
  {
    src: "/assets/photos/photo1.jpg",
    caption: "Gold Goddess",
    category: "Bridal",
    desc: "Golden hour bridal with shimmery highlights",
  },
  {
    src: "/assets/photos/photo2.jpg",
    caption: "Lehenga Bride",
    category: "Bridal",
    desc: "Coordinated look to complement lehenga ensemble",
  },
  {
    src: "/assets/photos/photo3.jpg",
    caption: "Statement Lip",
    category: "Engagement",
    desc: "Bold lip art for the pre-wedding photoshoot",
  },
];

const stats = [
  { val: "1000+", label: "Transformations", icon: TrendingUp },
  { val: "10+", label: "Years of Mastery", icon: Star },
  { val: "100%", label: "Client Satisfaction", icon: Heart },
  { val: "500+", label: "Brides Beautified", icon: Camera },
];

const filters = [
  "All",
  "Bridal",
  "HD Makeup",
  "Airbrush",
  "Engagement",
  "Reception",
];

const categoryColors: Record<string, string> = {
  Bridal: "#c9a84c",
  "HD Makeup": "#8b5e3c",
  Airbrush: "#c9a84c",
  Reception: "#8b5e3c",
  Engagement: "#c9a84c",
};

function FloatingOrbs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute rounded-full animate-float-slow"
        style={{
          width: 500,
          height: 500,
          top: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.11) 0%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />
      <div
        className="absolute rounded-full animate-float"
        style={{
          width: 350,
          height: 350,
          bottom: "-15%",
          right: "-8%",
          background:
            "radial-gradient(circle, rgba(232,168,124,0.09) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "-2s",
        }}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            background: `rgba(201,168,76,${0.3 + (i % 3) * 0.12})`,
            left: `${5 + ((i * 9) % 90)}%`,
            top: `${15 + ((i * 11) % 70)}%`,
            boxShadow: "0 0 6px rgba(201,168,76,0.3)",
          }}
          animate={{ y: [0, -14, 0], opacity: [0.25, 0.75, 0.25] }}
          transition={{
            duration: 2.5 + (i % 3),
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function TransformationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allTransformations
      : allTransformations.filter((t) => t.category === activeFilter);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#fdf8f3" }}
      data-ocid="transformations.page"
    >
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(160deg, #fdf8f3 0%, #f5e6d3 50%, #fdf8f3 100%)",
        }}
      >
        <FloatingOrbs />
        {/* Ring decoration */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 650,
            height: 650,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(201,168,76,0.09)",
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
              <Sparkles size={15} style={{ color: "#c9a84c" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase font-accent"
                style={{ color: "#8b5e3c" }}
              >
                Portfolio & Gallery
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
            Transformation
            <br />
            <span style={{ fontSize: "0.75em" }}>Gallery</span>
          </motion.h1>

          <motion.p
            className="text-lg font-body mb-10 max-w-xl mx-auto"
            style={{ color: "#8b5e3c" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Witness the Magic — Every Face, a Masterpiece
          </motion.p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="py-10 border-y"
        style={{
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(201,168,76,0.18)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  className="text-center flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  data-ocid={`transformations.stat.${i + 1}`}
                >
                  <Icon size={20} style={{ color: "#c9a84c" }} />
                  <p
                    className="text-3xl font-display font-bold"
                    style={{
                      color: "#c9a84c",
                      textShadow: "0 0 20px rgba(201,168,76,0.25)",
                    }}
                  >
                    {s.val}
                  </p>
                  <p className="text-sm font-body" style={{ color: "#8b5e3c" }}>
                    {s.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery with Filter ── */}
      <section className="section-padding section-bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Before & After
            </p>
            <h2 className="text-4xl md:text-5xl font-display italic gradient-text mb-5">
              Transformation Gallery
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 80 }} />
          </motion.div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            data-ocid="transformations.filter.tab"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 rounded-full text-xs font-accent font-semibold tracking-widest uppercase transition-smooth"
                style={{
                  background:
                    activeFilter === filter
                      ? "linear-gradient(135deg, #c9a84c, #d4af37)"
                      : "rgba(255,255,255,0.7)",
                  color: activeFilter === filter ? "#3d2817" : "#8b5e3c",
                  border:
                    activeFilter === filter
                      ? "1px solid rgba(201,168,76,0.6)"
                      : "1px solid rgba(201,168,76,0.25)",
                  boxShadow:
                    activeFilter === filter
                      ? "0 4px 20px rgba(201,168,76,0.35)"
                      : "none",
                  backdropFilter: "blur(12px)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                data-ocid={`transformations.filter.${filter.toLowerCase().replace(" ", "_")}`}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            style={{ gridAutoRows: "220px" }}
            data-ocid="transformations.gallery.list"
            layout
          >
            {filtered.map((item, i) => {
              const spanClass =
                i === 0
                  ? "row-span-2"
                  : i === 4
                    ? "col-span-2"
                    : i === 6
                      ? "row-span-2"
                      : "";
              const catColor = categoryColors[item.category] ?? "#c9a84c";
              return (
                <motion.div
                  key={`${item.src}-${i}`}
                  layout
                  className={`relative overflow-hidden rounded-2xl group cursor-pointer ${spanClass}`}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    border: "1.5px solid rgba(201,168,76,0.2)",
                    boxShadow: "0 4px 20px rgba(107,63,31,0.07)",
                  }}
                  data-ocid={`transformations.gallery.item.${i + 1}`}
                >
                  {/* Hover gold glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 50px ${catColor}30`,
                      borderRadius: "inherit",
                      zIndex: 2,
                    }}
                  />
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(63,37,17,0.80) 0%, rgba(63,37,17,0.2) 55%, transparent 100%)",
                      zIndex: 1,
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ zIndex: 3 }}
                  >
                    <div
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-accent font-semibold mb-1"
                      style={{
                        background: `${catColor}25`,
                        border: `1px solid ${catColor}50`,
                        color: "#fdf6ee",
                      }}
                    >
                      {item.category}
                    </div>
                    <p
                      className="text-sm font-display italic block"
                      style={{
                        color: "#fdf6ee",
                        textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                      }}
                    >
                      {item.caption}
                    </p>
                    <p
                      className="text-xs font-body"
                      style={{ color: "rgba(253,246,238,0.78)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div
              className="text-center py-20"
              data-ocid="transformations.gallery.empty_state"
            >
              <p
                className="font-display italic text-2xl"
                style={{ color: "#8b5e3c" }}
              >
                No results for this filter
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Booking CTA ── */}
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
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.09) 0%, transparent 70%)",
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
            <Sparkles
              size={50}
              className="mx-auto mb-5"
              style={{
                color: "#c9a84c",
                filter: "drop-shadow(0 0 16px rgba(201,168,76,0.45))",
              }}
            />
            <h2 className="text-4xl font-display italic gradient-text mb-4">
              Book Your Transformation
            </h2>
            <p className="font-body mb-8" style={{ color: "#8b5e3c" }}>
              Your dream look is just a call away. Let Snehal Pawar work her
              magic on your special day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919561548151"
                className="btn-premium flex items-center gap-2"
                data-ocid="transformations.cta.call_button"
              >
                <PhoneCall size={16} /> Call: 09561548151
              </a>
              <a
                href="https://wa.me/919561548151"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-premium"
                data-ocid="transformations.cta.whatsapp_button"
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
