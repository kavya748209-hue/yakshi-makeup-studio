import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const GOLD = "#c9a84c";
const BROWN = "#6b3f1f";

const images = [
  {
    src: "/assets/snehal-hero.png",
    title: "Kundan Bridal Look",
    category: "bridal",
  },
  {
    src: "/assets/snehal-gallery-1.png",
    title: "Classic Bridal Elegance",
    category: "bridal",
  },
  {
    src: "/assets/snehal-bridal-1.png",
    title: "Diamond Gala Look",
    category: "hd",
  },
  {
    src: "/assets/snehal-gallery-4.png",
    title: "Gold Floral Bridal",
    category: "bridal",
  },
  {
    src: "/assets/snehal-gallery-2.png",
    title: "Radiant Bridal Glam",
    category: "bridal",
  },
  {
    src: "/assets/snehal-gallery-5.png",
    title: "Red Lehenga Bride",
    category: "bridal",
  },
  {
    src: "/assets/snehal-gallery-3.png",
    title: "Festive Party Look",
    category: "academy",
  },
  {
    src: "/assets/snehal-bridal-2.png",
    title: "Smoky Eye Glam",
    category: "hd",
  },
  {
    src: "/assets/snehal-about.png",
    title: "Bridal Portrait Artistry",
    category: "bridal",
  },
  {
    src: "/assets/snehal-bridal-3.png",
    title: "Premium Bridal Styling",
    category: "nail",
  },
];

type Filter = "all" | "bridal" | "hd" | "nail" | "academy";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Bridal", value: "bridal" },
  { label: "HD Makeup", value: "hd" },
  { label: "Nail Art", value: "nail" },
  { label: "Academy", value: "academy" },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filtered = images.filter(
    (img) => activeFilter === "all" || img.category === activeFilter,
  );

  const handleImgError = (idx: number) =>
    setImgErrors((prev) => ({ ...prev, [idx]: true }));

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section
      id="gallery"
      className="relative section-padding overflow-hidden section-bg-beige"
    >
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p
            className="text-xs uppercase tracking-[0.4em] mb-3 font-accent"
            style={{ color: GOLD }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 leading-tight gold-gradient-text">
            Portfolio Gallery
          </h2>
          <div className="section-divider w-24 mx-auto mb-5" />
          <p className="text-base md:text-lg max-w-xl mx-auto text-warm-brown">
            A glimpse into our world of luxury beauty transformations across
            Amravati &amp; Maharashtra
          </p>
        </motion.div>

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
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border font-body"
              style={{
                background:
                  activeFilter === f.value
                    ? `linear-gradient(135deg, ${GOLD}, #d4af37)`
                    : "rgba(255,255,255,0.65)",
                color: activeFilter === f.value ? "#fff" : BROWN,
                borderColor:
                  activeFilter === f.value ? GOLD : "rgba(201,168,76,0.30)",
                boxShadow:
                  activeFilter === f.value
                    ? "0 4px 20px rgba(201,168,76,0.45), 0 0 30px rgba(201,168,76,0.18)"
                    : "0 2px 10px rgba(139,94,60,0.06)",
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-ocid="gallery.list"
            className="columns-1 sm:columns-2 lg:columns-3 gap-5"
            style={{ columnGap: "20px" }}
          >
            {filtered.map((img, i) => {
              const globalIdx = images.findIndex((im) => im.src === img.src);
              if (imgErrors[globalIdx]) return null;
              return (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer mb-5 break-inside-avoid"
                  style={{
                    border: "1.5px solid rgba(201,168,76,0.18)",
                    boxShadow: "0 4px 24px rgba(107,63,31,0.08)",
                    transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                  }}
                  onClick={() => openLightbox(globalIdx)}
                  data-ocid={`gallery.item.${i + 1}`}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 0 28px rgba(201,168,76,0.40), 0 0 60px rgba(201,168,76,0.15), 0 8px 30px rgba(107,63,31,0.12)";
                    el.style.borderColor = "rgba(201,168,76,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow = "0 4px 24px rgba(107,63,31,0.08)";
                    el.style.borderColor = "rgba(201,168,76,0.18)";
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    onError={() => handleImgError(globalIdx)}
                    className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                    style={{ display: "block" }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(201,168,76,0.65) 0%, rgba(201,168,76,0.20) 40%, transparent 70%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p
                      className="text-sm font-semibold tracking-wide"
                      style={{ color: "#fff" }}
                    >
                      {img.title}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "rgba(255,255,255,0.78)" }}
                    >
                      View
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        boxShadow: "0 0 16px rgba(201,168,76,0.50)",
                      }}
                    >
                      <ZoomIn size={16} style={{ color: BROWN }} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(61,40,23,0.85)",
              backdropFilter: "blur(20px)",
            }}
            onClick={closeLightbox}
            data-ocid="gallery.dialog"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
              style={{
                background: "rgba(253,248,243,0.97)",
                border: "1.5px solid rgba(201,168,76,0.45)",
                boxShadow:
                  "0 0 60px rgba(201,168,76,0.35), 0 0 120px rgba(201,168,76,0.12)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]?.src}
                alt={images[lightboxIndex]?.title}
                onError={() => handleImgError(lightboxIndex)}
                className="w-full max-h-[80vh] object-contain"
                style={{ background: "#fdf8f3" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-3"
                style={{
                  background:
                    "linear-gradient(0deg, rgba(61,40,23,0.82) 0%, transparent 100%)",
                }}
              >
                <p
                  className="text-base font-medium"
                  style={{ color: "#f5e6d3" }}
                >
                  {images[lightboxIndex]?.title}
                </p>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                data-ocid="gallery.close_button"
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Close lightbox"
                style={{
                  background: "rgba(201,168,76,0.92)",
                  boxShadow: "0 0 18px rgba(201,168,76,0.55)",
                }}
              >
                <X size={16} style={{ color: BROWN }} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
