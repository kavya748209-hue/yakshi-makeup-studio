import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const images = [
  {
    src: "/assets/hero-bride.png",
    title: "Kundan Bridal Look",
    category: "bridal",
  },
  {
    src: "/assets/nail-art-1.png",
    title: "Dark Red Bow Nails",
    category: "nail",
  },
  {
    src: "/assets/celebrity-1.png",
    title: "Diamond Gala Look",
    category: "celebrity",
  },
  {
    src: "/assets/bridal-gold.png",
    title: "Gold Floral Bridal",
    category: "bridal",
  },
  {
    src: "/assets/nail-art-2.png",
    title: "Pink Glitter Nails",
    category: "nail",
  },
  {
    src: "/assets/bridal-lehenga.png",
    title: "Red Lehenga Bride",
    category: "bridal",
  },
  {
    src: "/assets/nail-art-3.png",
    title: "Red Rhinestone Nails",
    category: "nail",
  },
  {
    src: "/assets/celebrity-2.png",
    title: "Smoky Eye Updo",
    category: "celebrity",
  },
  {
    src: "/assets/bridal-lipstick.png",
    title: "Bridal Lipstick Artistry",
    category: "bridal",
  },
  {
    src: "/assets/celebrity-3.png",
    title: "Purple Sequin Gown",
    category: "celebrity",
  },
];

type Filter = "all" | "bridal" | "celebrity" | "nail";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Bridal", value: "bridal" },
  { label: "Celebrity", value: "celebrity" },
  { label: "Nail Art", value: "nail" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filtered = images.filter(
    (img) => activeFilter === "all" || img.category === activeFilter,
  );

  const handleImgError = (idx: number) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }));
  };

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)",
      }}
    >
      {/* Enhanced ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 45% at 50% 0%, rgba(212,175,55,0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(183,110,121,0.07) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-3"
            style={{
              color: "#d4af37",
              textShadow: "0 0 16px rgba(212,175,55,0.5)",
            }}
          >
            Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              background:
                "linear-gradient(135deg, #d4af37 0%, #f0d060 40%, #b8922e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212,175,55,0.18))",
            }}
          >
            Our Portfolio
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(212,175,55,0.65)" }}
          >
            A glimpse into our world of luxury beauty transformations
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
          data-ocid="gallery.filter.tabs"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              data-ocid={`gallery.filter.tab.${f.value}`}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border"
              style={{
                background:
                  activeFilter === f.value
                    ? "linear-gradient(135deg, #d4af37, #b8922e)"
                    : "rgba(255,255,255,0.04)",
                color:
                  activeFilter === f.value ? "#0a0a0a" : "rgba(212,175,55,0.8)",
                borderColor:
                  activeFilter === f.value
                    ? "#d4af37"
                    : "rgba(212,175,55,0.22)",
                boxShadow:
                  activeFilter === f.value
                    ? "0 0 22px rgba(212,175,55,0.45), 0 0 50px rgba(212,175,55,0.15)"
                    : "0 0 8px rgba(212,175,55,0.08)",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            data-ocid="gallery.list"
          >
            {filtered.map((img, i) => {
              const globalIdx = images.findIndex((im) => im.src === img.src);
              return (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    aspectRatio: "4/3",
                    boxShadow:
                      "0 0 0 1px rgba(212,175,55,0.12), 0 8px 30px rgba(0,0,0,0.4)",
                    transition: "box-shadow 0.4s ease",
                  }}
                  onClick={() => openLightbox(globalIdx)}
                  data-ocid={`gallery.item.${i + 1}`}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 0 1.5px rgba(212,175,55,0.55), 0 0 28px rgba(212,175,55,0.22), 0 0 55px rgba(212,175,55,0.09)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 0 0 1px rgba(212,175,55,0.12), 0 8px 30px rgba(0,0,0,0.4)";
                  }}
                >
                  {/* Image or fallback */}
                  {imgErrors[globalIdx] ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: "rgba(212,175,55,0.05)" }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: "rgba(212,175,55,0.4)" }}
                      >
                        {img.title}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={img.src}
                      alt={img.title}
                      onError={() => handleImgError(globalIdx)}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                      style={{ display: "block" }}
                    />
                  )}

                  {/* Bottom label overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-4 py-3 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                    }}
                  >
                    <p
                      className="text-sm font-medium tracking-wide"
                      style={{ color: "#f5e6a3" }}
                    >
                      {img.title}
                    </p>
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(212,175,55,0.88)",
                        boxShadow:
                          "0 0 16px rgba(212,175,55,0.65), 0 0 32px rgba(212,175,55,0.25)",
                      }}
                    >
                      <ZoomIn size={14} color="#0a0a0a" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0,0,0,0.94)",
              backdropFilter: "blur(16px)",
            }}
            onClick={closeLightbox}
            data-ocid="gallery.dialog"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden glass-ultra"
              style={{
                boxShadow:
                  "0 0 60px rgba(212,175,55,0.35), 0 0 120px rgba(212,175,55,0.12), 0 0 0 1px rgba(212,175,55,0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {imgErrors[lightboxIndex] ? (
                <div
                  className="w-full aspect-video flex items-center justify-center"
                  style={{ background: "#111" }}
                >
                  <span style={{ color: "rgba(212,175,55,0.5)" }}>
                    {images[lightboxIndex]?.title}
                  </span>
                </div>
              ) : (
                <img
                  src={images[lightboxIndex]?.src}
                  alt={images[lightboxIndex]?.title}
                  onError={() => handleImgError(lightboxIndex)}
                  className="w-full max-h-[80vh] object-contain"
                  style={{ background: "#0a0a0a" }}
                />
              )}

              {/* Title bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-base font-medium"
                  style={{ color: "#f5e6a3" }}
                >
                  {images[lightboxIndex]?.title}
                </p>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={closeLightbox}
                data-ocid="gallery.close_button"
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Close lightbox"
                style={{
                  background: "rgba(212,175,55,0.9)",
                  boxShadow:
                    "0 0 18px rgba(212,175,55,0.55), 0 0 36px rgba(212,175,55,0.20)",
                }}
              >
                <X size={16} color="#0a0a0a" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
