import { Award, Quote, Sparkles, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";

const GOLD = "#c9a84c";
const BROWN = "#6b3f1f";
const WARM = "#8b5e3c";

interface CelebCard {
  image: string;
  name: string;
  occasion: string;
  delay: number;
}

const celebCards: CelebCard[] = [
  {
    image: "/assets/snehal-bridal-1.png",
    name: "Priya Sharma",
    occasion: "Bollywood Premiere",
    delay: 0,
  },
  {
    image: "/assets/snehal-bridal-2.png",
    name: "Kavya Deshmukh",
    occasion: "Maharashtra Awards Night",
    delay: 0.12,
  },
  {
    image: "/assets/snehal-bridal-3.png",
    name: "Anita Kulkarni",
    occasion: "Fashion Week Mumbai",
    delay: 0.24,
  },
  {
    image: "/assets/snehal-gallery-1.png",
    name: "Riya Patil",
    occasion: "Celebrity Wedding",
    delay: 0.36,
  },
  {
    image: "/assets/snehal-gallery-2.png",
    name: "Meera Joshi",
    occasion: "Brand Launch Event",
    delay: 0.48,
  },
];

const badges = [
  {
    Icon: Trophy,
    title: "Featured in Fashion Week 2023",
    sub: "Mumbai & Pune",
  },
  {
    Icon: Award,
    title: "Official Makeup Partner",
    sub: "Maharashtra Wedding Expo",
  },
  { Icon: Star, title: "Best Bridal Artist Award", sub: "Amravati 2022" },
  { Icon: Sparkles, title: "500+ Happy Brides", sub: "Across Maharashtra" },
];

export default function CelebritySection() {
  return (
    <section
      id="celebrities"
      className="relative section-padding overflow-hidden section-bg-warm"
      data-ocid="celebrity.section"
    >
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(232,168,124,0.10) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      <div className="section-divider w-full absolute top-0 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.38em] mb-3 font-accent"
            style={{ color: GOLD }}
          >
            Bollywood &amp; Beyond
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 gold-gradient-text leading-tight">
            Celebrity Clientele &amp; Recognition
          </h2>
          <div className="section-divider w-28 mx-auto mb-5" />
          <p
            className="text-base md:text-lg max-w-2xl mx-auto font-body"
            style={{ color: WARM }}
          >
            Trusted by Bollywood celebrities, fashion icons, and public figures
            across Maharashtra
          </p>
        </motion.div>

        {/* Celebrity cards row */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex gap-6 flex-wrap justify-center md:justify-start">
            {celebCards.map((card, i) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: card.delay }}
                className="glass-ultra rounded-2xl overflow-hidden flex-shrink-0 group"
                style={{
                  width: "190px",
                  border: "1.5px solid rgba(201,168,76,0.30)",
                  boxShadow: "0 4px 24px rgba(107,63,31,0.08)",
                  animation: `float ${5 + i * 0.7}s ease-in-out infinite`,
                  animationDelay: `${i * 0.4}s`,
                }}
                data-ocid={`celebrity.card.${i + 1}`}
              >
                <div className="relative p-5 flex justify-center">
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden"
                    style={{
                      border: "2.5px solid rgba(201,168,76,0.50)",
                      boxShadow:
                        "0 0 22px rgba(201,168,76,0.30), 0 0 50px rgba(201,168,76,0.10)",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>
                  <Sparkles
                    size={12}
                    className="absolute top-3 right-4"
                    style={{
                      color: GOLD,
                      filter: "drop-shadow(0 0 4px rgba(201,168,76,0.8))",
                    }}
                  />
                </div>
                <div className="px-4 pb-5 text-center">
                  <p
                    className="font-display text-sm font-semibold"
                    style={{ color: BROWN }}
                  >
                    {card.name}
                  </p>
                  <p className="text-xs mt-1 font-body" style={{ color: WARM }}>
                    {card.occasion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          data-ocid="celebrity.badges"
        >
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="card-premium p-5 text-center"
              data-ocid={`celebrity.badge.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.20), rgba(201,168,76,0.06))",
                  border: "1.5px solid rgba(201,168,76,0.40)",
                  boxShadow: "0 0 18px rgba(201,168,76,0.22)",
                }}
              >
                <badge.Icon
                  size={20}
                  style={{
                    color: GOLD,
                    filter: "drop-shadow(0 0 6px rgba(201,168,76,0.7))",
                  }}
                />
              </div>
              <p
                className="font-display text-sm font-semibold leading-snug mb-1"
                style={{ color: BROWN }}
              >
                {badge.title}
              </p>
              <p className="text-xs font-body" style={{ color: WARM }}>
                {badge.sub}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Celebrity Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-ultra rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            border: "1.5px solid rgba(201,168,76,0.35)",
            boxShadow:
              "0 0 50px rgba(201,168,76,0.12), 0 8px 40px rgba(107,63,31,0.08)",
          }}
          data-ocid="celebrity.quote"
        >
          <Quote
            size={64}
            className="absolute top-6 left-8"
            style={{ color: GOLD, opacity: 0.15 }}
          />
          <Quote
            size={64}
            className="absolute bottom-6 right-8 rotate-180"
            style={{ color: GOLD, opacity: 0.15 }}
          />
          <p
            className="font-display text-xl md:text-2xl italic leading-relaxed mb-4 relative z-10"
            style={{ color: BROWN }}
          >
            “Snehal’s artistry is simply extraordinary. She understood exactly
            the look I wanted and brought it to life perfectly. She is the best
            makeup artist I’ve worked with across Maharashtra!”
          </p>
          <div className="section-divider w-20 mx-auto mb-4" />
          <cite
            className="font-accent text-xs tracking-widest uppercase not-italic"
            style={{ color: GOLD }}
          >
            — Priya Sharma, Bollywood Actress
          </cite>
        </motion.div>
      </div>

      <div className="section-divider w-full absolute bottom-0 left-0" />
    </section>
  );
}
