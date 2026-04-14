import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  initial: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "South Delhi",
    service: "Bridal Makeup",
    rating: 5,
    review:
      "Yakshi transformed me into the most beautiful version of myself on my wedding day. The makeup lasted all 12 hours and I got compliments throughout! Her attention to detail and understanding of Indian bridal aesthetics is unmatched. Truly a celebrity experience!",
    initial: "P",
    avatarColor: "from-rose-400 to-pink-600",
  },
  {
    name: "Ananya Kapoor",
    location: "Gurgaon",
    service: "Celebrity Event",
    rating: 5,
    review:
      "I've worked with many makeup artists, but Yakshi is on another level. She created the most stunning look for my film premiere. The airbrush technique was flawless on camera. Everyone kept asking who did my makeup!",
    initial: "A",
    avatarColor: "from-amber-400 to-orange-500",
  },
  {
    name: "Meera Patel",
    location: "Noida",
    service: "Bridal + Nail Art",
    rating: 5,
    review:
      "Got both bridal makeup and nail art done for my wedding. The intricate nail designs she created perfectly matched my lehenga. She has an incredible eye for detail. Highly recommend for brides who want perfection!",
    initial: "M",
    avatarColor: "from-purple-400 to-violet-600",
  },
  {
    name: "Deepika Srivastava",
    location: "Greater Noida",
    service: "Pre-Bridal Package",
    rating: 5,
    review:
      "Booked the complete pre-bridal package and it was worth every rupee! My skin glowed on the wedding day and the makeup lasted through all the ceremonies. Yakshi is truly talented and professional.",
    initial: "D",
    avatarColor: "from-teal-400 to-cyan-600",
  },
  {
    name: "Ritu Agarwal",
    location: "Delhi Cantt",
    service: "Party Makeup",
    rating: 5,
    review:
      "Had party makeup done for my sister's reception and I looked like a celebrity! The glow, the contour, everything was perfect. Yakshi truly deserves her reputation as a celebrity artist. Will definitely come back!",
    initial: "R",
    avatarColor: "from-pink-400 to-rose-600",
  },
];

// Floating particle
function Particle({
  x,
  y,
  size,
  delay,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background:
          "radial-gradient(circle, rgba(212,175,55,0.55) 0%, transparent 70%)",
        boxShadow: "0 0 8px rgba(212,175,55,0.3)",
      }}
      animate={{
        y: [0, -28, 0],
        opacity: [0.25, 0.75, 0.25],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 17 + 5) % 100,
  y: (i * 23 + 10) % 90,
  size: 4 + (i % 5) * 3,
  delay: i * 0.4,
}));

const cardVariants: Variants = {
  enter: (d: number) => ({ x: d > 0 ? 130 : -130, opacity: 0, scale: 0.94 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
  exit: (d: number) => ({
    x: d > 0 ? -130 : 130,
    opacity: 0,
    scale: 0.94,
    transition: { duration: 0.38, ease: "easeIn" as const },
  }),
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent((idx + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => {
      setDirection(1);
      return (c + 1) % testimonials.length;
    });
  }, []);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [startAuto]);

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
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #0d0a14 50%, #0a0a0a 100%)",
      }}
    >
      {/* Particle & ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {PARTICLES.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} size={p.size} delay={p.delay} />
        ))}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, #d4af37 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: 0.09,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, #b76e79 0%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.09,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="block text-xs uppercase tracking-[0.28em] mb-4 font-medium"
            style={{
              color: "#d4af37",
              textShadow: "0 0 16px rgba(212,175,55,0.5)",
            }}
          >
            Testimonials
          </motion.span>

          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #d4af37 0%, #f5e6a3 50%, #c9984a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 20px rgba(212,175,55,0.18))",
            }}
          >
            Client Love Stories
          </h2>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.62)" }}
          >
            What our brides and clients say about their experience
          </p>

          {/* Google Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-medium glass-ultra"
            style={{ color: "#d4af37" }}
          >
            <Star
              className="w-4 h-4 fill-current"
              style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.7))" }}
            />
            <span>4.9★ on Google</span>
            <span style={{ color: "rgba(212,175,55,0.4)" }}>|</span>
            <span>500+ Happy Clients</span>
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative min-h-[420px] flex items-center justify-center">
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
                {/* Testimonial Card */}
                <div
                  className="relative rounded-2xl p-8 md:p-10 glass-ultra"
                  style={{
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 40px rgba(212,175,55,0.12), 0 0 0 1px rgba(212,175,55,0.10), 0 24px 60px rgba(0,0,0,0.50)",
                    borderColor: "rgba(212,175,55,0.28)",
                  }}
                >
                  {/* Inner gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(212,175,55,0.10) 0%, transparent 55%, rgba(183,110,121,0.07) 100%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Quote icon */}
                    <Quote
                      className="w-12 h-12 mb-5"
                      style={{
                        color: "#d4af37",
                        opacity: 0.85,
                        filter: "drop-shadow(0 0 10px rgba(212,175,55,0.55))",
                      }}
                      strokeWidth={1.5}
                    />

                    {/* Review */}
                    <p
                      className="text-base md:text-lg leading-relaxed mb-8 italic"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      "{t.review}"
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {["★", "★★", "★★★", "★★★★", "★★★★★"]
                        .slice(0, t.rating)
                        .map((s) => (
                          <Star
                            key={s}
                            className="w-5 h-5 fill-current"
                            style={{
                              color: "#d4af37",
                              filter:
                                "drop-shadow(0 0 5px rgba(212,175,55,0.65))",
                            }}
                          />
                        ))}
                    </div>

                    {/* Client */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                        style={{
                          boxShadow:
                            "0 0 18px rgba(212,175,55,0.35), 0 0 40px rgba(212,175,55,0.12)",
                        }}
                      >
                        {t.initial}
                      </div>
                      <div>
                        <p
                          className="font-semibold text-base"
                          style={{
                            color: "#d4af37",
                            textShadow: "0 0 14px rgba(212,175,55,0.4)",
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "rgba(255,255,255,0.52)" }}
                        >
                          {t.location}
                        </p>
                        <span
                          className="inline-block text-xs px-2.5 py-0.5 rounded-full mt-1 font-medium glass-card"
                          style={{
                            color: "#d4af37",
                          }}
                        >
                          {t.service}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev */}
            <motion.button
              data-ocid="testimonials.pagination_prev"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 glass-ultra"
              style={{ color: "#d4af37" }}
              whileHover={{
                scale: 1.12,
                boxShadow:
                  "0 0 22px rgba(212,175,55,0.40), 0 0 50px rgba(212,175,55,0.15)",
              }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  type="button"
                  key={item.name}
                  data-ocid={`testimonials.item.${i + 1}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => handleDot(i)}
                  className="rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background:
                      i === current ? "#d4af37" : "rgba(212,175,55,0.28)",
                    boxShadow:
                      i === current
                        ? "0 0 12px rgba(212,175,55,0.65), 0 0 24px rgba(212,175,55,0.25)"
                        : "none",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <motion.button
              data-ocid="testimonials.pagination_next"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="w-12 h-12 rounded-full flex items-center justify-center focus:outline-none focus-visible:ring-2 glass-ultra"
              style={{ color: "#d4af37" }}
              whileHover={{
                scale: 1.12,
                boxShadow:
                  "0 0 22px rgba(212,175,55,0.40), 0 0 50px rgba(212,175,55,0.15)",
              }}
              whileTap={{ scale: 0.93 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-5 text-sm tabular-nums"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            {current + 1} / {testimonials.length}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
