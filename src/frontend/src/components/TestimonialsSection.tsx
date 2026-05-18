import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  review: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Bridal — Amravati",
    service: "Bridal Makeup",
    review:
      "Snehal Didi made me look absolutely stunning on my wedding day! Every photo turned out perfect. She truly understands Indian bridal makeup.",
    initial: "P",
  },
  {
    name: "Kavya Deshmukh",
    location: "Academy Student — Nagpur",
    service: "Academy Training",
    review:
      "I attended her makeup academy and it completely changed my career. Best investment I ever made! The hands-on training is exceptional.",
    initial: "K",
  },
  {
    name: "Riya Patel",
    location: "Engagement Makeup — Akola",
    service: "Engagement Makeup",
    review:
      "For my engagement, she created the most beautiful look. All my relatives were asking who did my makeup! Snehal Didi is truly talented.",
    initial: "R",
  },
  {
    name: "Anjali Kulkarni",
    location: "Reception — Amravati",
    service: "Reception Makeup",
    review:
      "Professional, punctual and absolutely talented. My reception look was better than I imagined. Will always recommend Snehal!",
    initial: "A",
  },
  {
    name: "Neha Joshi",
    location: "Bridal — Wardha",
    service: "Bridal Makeup",
    review:
      "Celebrity-level makeup at an affordable price. I felt like a queen on my big day! The airbrush finish lasted all night without a touch-up.",
    initial: "N",
  },
  {
    name: "Pooja Mahajan",
    location: "Nail Art — Pune",
    service: "Nail Art",
    review:
      "The nail art she did for my wedding was extraordinary. All my bridesmaids were jealous! Intricate designs perfectly matched my lehenga.",
    initial: "P",
  },
];

const AVATAR_COLORS = [
  "#c9a84c",
  "#e8a87c",
  "#b5845a",
  "#d4af37",
  "#c9a84c",
  "#e8c878",
];

const cardVariants: Variants = {
  enter: (d: number) => ({ x: d > 0 ? 140 : -140, opacity: 0, scale: 0.94 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
  exit: (d: number) => ({
    x: d > 0 ? -140 : 140,
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.38, ease: "easeIn" as const },
  }),
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent((idx + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4500);
  }, [next]);

  useEffect(() => {
    if (!paused) startAuto();
    else if (autoRef.current) clearInterval(autoRef.current);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [paused, startAuto]);

  const handlePrev = () => {
    goTo(current - 1, -1);
    startAuto();
  };
  const handleNext = () => {
    goTo(current + 1, 1);
    startAuto();
  };
  const handleDot = (i: number) => {
    goTo(i, i > current ? 1 : -1);
    startAuto();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative section-padding section-bg-beige overflow-hidden"
      data-ocid="testimonials.section"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translateX(-50%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.10) 0%, transparent 65%)",
          filter: "blur(70px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Large decorative quote */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 font-display text-[220px] leading-none pointer-events-none select-none"
        style={{
          color: "rgba(201,168,76,0.06)",
          fontWeight: 700,
        }}
        aria-hidden="true"
      >
        ❝
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 gold-line"
        >
          <p
            className="font-accent text-xs uppercase tracking-[3px] mb-3"
            style={{ color: "#c9a84c", letterSpacing: "3px" }}
          >
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gradient-text leading-tight mb-5">
            What Our Brides Say
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: "#8b5e3c" }}
          >
            Real stories from real brides — hearts full of joy and faces full of
            glow
          </p>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full glass-ultra"
          >
            <span className="text-sm gradient-text font-accent">★★★★★</span>
            <span className="font-body text-sm" style={{ color: "#6b3f1f" }}>
              4.9 on Google
            </span>
            <span style={{ color: "rgba(201,168,76,0.4)" }}>|</span>
            <span className="font-body text-sm" style={{ color: "#6b3f1f" }}>
              500+ Happy Clients
            </span>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative min-h-[380px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full max-w-3xl mx-auto"
              >
                {/* Card */}
                <div
                  className="card-premium relative rounded-3xl p-8 md:p-10 overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.80)",
                    boxShadow:
                      "0 0 50px rgba(201,168,76,0.15), 0 20px 60px rgba(107,63,31,0.10), inset 0 1px 0 rgba(255,255,255,1)",
                    borderColor: "rgba(201,168,76,0.35)",
                  }}
                >
                  {/* Background quote decoration */}
                  <div
                    className="absolute top-4 right-6 font-display text-8xl leading-none pointer-events-none select-none"
                    style={{
                      color: "rgba(201,168,76,0.10)",
                      fontWeight: 700,
                    }}
                    aria-hidden="true"
                  >
                    ❞
                  </div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                        <span
                          key={k}
                          className="text-lg"
                          style={{
                            color: "#d4af37",
                            filter:
                              "drop-shadow(0 0 5px rgba(212,175,55,0.65))",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Review */}
                    <p
                      className="font-body text-base md:text-lg leading-relaxed mb-8 italic"
                      style={{ color: "#5a3a22" }}
                    >
                      &ldquo;{t.review}&rdquo;
                    </p>

                    {/* Client info */}
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-display"
                        style={{
                          background:
                            AVATAR_COLORS[current % AVATAR_COLORS.length],
                          boxShadow: "0 0 18px rgba(201,168,76,0.35)",
                          color: "#3d2817",
                        }}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <p
                          className="font-display text-lg font-semibold"
                          style={{ color: "#3d2817" }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="font-accent text-xs uppercase tracking-wider mt-0.5"
                          style={{ color: "#c9a84c" }}
                        >
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              type="button"
              data-ocid="testimonials.pagination_prev"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center glass-ultra transition-smooth"
              style={{ color: "#c9a84c" }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 22px rgba(201,168,76,0.40)",
              }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  type="button"
                  key={item.name}
                  data-ocid={`testimonials.item.${i + 1}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => handleDot(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background:
                      i === current ? "#c9a84c" : "rgba(201,168,76,0.28)",
                    boxShadow:
                      i === current ? "0 0 12px rgba(201,168,76,0.65)" : "none",
                  }}
                />
              ))}
            </div>

            <motion.button
              type="button"
              data-ocid="testimonials.pagination_next"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center glass-ultra transition-smooth"
              style={{ color: "#c9a84c" }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 22px rgba(201,168,76,0.40)",
              }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          <p
            className="text-center mt-4 text-sm tabular-nums font-body"
            style={{ color: "rgba(107,63,31,0.45)" }}
          >
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
