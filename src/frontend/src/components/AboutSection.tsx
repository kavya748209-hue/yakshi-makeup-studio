import { CheckCircle2 } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  "Expert in Bridal HD Makeup",
  "Certified Airbrush Artist",
  "Celebrity Makeup Experience",
  "Academy Founder & Trainer",
];

const celebrities = [
  {
    photo: "/assets/celebrity-1.png",
    name: "Priyanka Singh",
    event: "Film Premiere, Mumbai",
  },
  {
    photo: "/assets/celebrity-2.png",
    name: "Ananya Rathod",
    event: "Award Night, Nagpur",
  },
  {
    photo: "/assets/celebrity-3.png",
    name: "Riya Kapoor",
    event: "Fashion Show, Pune",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative section-padding section-bg-beige overflow-hidden"
      data-ocid="about.section"
    >
      {/* Ambient orbs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
          filter: "blur(100px)",
          transform: "translate(-40%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 gold-line"
        >
          <p
            className="font-accent text-xs uppercase tracking-[3px] text-gold mb-4"
            style={{ letterSpacing: "3px" }}
          >
            The Artist
          </p>
          <h2 className="font-display text-5xl md:text-6xl gradient-text leading-tight mb-4">
            About Snehal Pawar
          </h2>
          <p className="font-body text-lg" style={{ color: "#8b5e3c" }}>
            Master Bridal Artist &amp; Academy Founder · Amravati
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Outer glass frame */}
              <div
                className="glass-ultra p-3 rounded-3xl glow-gold"
                style={{
                  boxShadow:
                    "0 0 40px rgba(201,168,76,0.25), 0 0 100px rgba(201,168,76,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
                }}
              >
                {/* Photo */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "3/4", width: 300 }}
                >
                  <img
                    src="/assets/snehal-about.png"
                    alt="Snehal Pawar — Bridal Makeup Artist"
                    className="w-full h-full object-cover object-center glow-img"
                    style={{ borderRadius: "1rem" }}
                  />
                  {/* Shimmer overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 60%, rgba(201,168,76,0.12) 80%, transparent 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Certified badge */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-ultra px-5 py-2 rounded-full border border-gold/50 glow-gold"
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="font-accent text-xs uppercase tracking-widest gradient-text">
                  ✦ Certified Artist ✦
                </span>
              </motion.div>

              {/* Floating corner accents */}
              <div
                className="absolute -top-2 -left-2 w-6 h-6 rounded-full"
                style={{
                  background: "#c9a84c",
                  boxShadow: "0 0 14px rgba(201,168,76,0.8)",
                }}
              />
              <div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                style={{
                  background: "#e8a87c",
                  boxShadow: "0 0 10px rgba(232,168,124,0.8)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {/* Eyebrow */}
            <p
              className="font-accent text-xs uppercase mb-3"
              style={{ color: "#c9a84c", letterSpacing: "3px" }}
            >
              Meet Your Artist
            </p>

            {/* Heading */}
            <h3
              className="font-display text-3xl md:text-4xl mb-5 leading-snug"
              style={{ color: "#3d2817" }}
            >
              Transforming Beauty,
              <br />
              <span className="gradient-text">Creating Memories</span>
            </h3>

            {/* Bio */}
            <p
              className="font-body text-base leading-[1.8] mb-4"
              style={{ color: "#5a3a22" }}
            >
              With over 12 years of expertise in bridal and beauty artistry,
              Snehal Pawar has transformed hundreds of brides across
              Maharashtra. Her passion for flawless makeup and eye for detail
              has earned her recognition working alongside celebrities and
              leading fashion houses.
            </p>
            <p
              className="font-body text-base leading-[1.8] mb-8"
              style={{ color: "#5a3a22" }}
            >
              From intimate family ceremonies to grand destination weddings, she
              brings a personalized touch to every bridal transformation. Based
              in Amravati, her Academy has trained 500+ aspiring artists across
              Maharashtra.
            </p>

            {/* Skills list */}
            <ul className="space-y-3 mb-8">
              {skills.map((skill, i) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0"
                    style={{
                      color: "#c9a84c",
                      filter: "drop-shadow(0 0 5px rgba(201,168,76,0.6))",
                    }}
                  />
                  <span
                    className="font-body text-sm"
                    style={{ color: "#5a3a22" }}
                  >
                    {skill}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/919561548151?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-premium"
              data-ocid="about.read_more_button"
            >
              Book a Consultation
            </a>
          </motion.div>
        </div>

        {/* Celebrity Work subsection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div
            className="glass-ultra rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(245,230,211,0.75)",
              boxShadow:
                "0 0 50px rgba(201,168,76,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
              borderColor: "rgba(201,168,76,0.35)",
            }}
          >
            <div className="text-center mb-8">
              <p
                className="font-accent text-xs uppercase tracking-[3px] mb-2"
                style={{ color: "#c9a84c" }}
              >
                Portfolio
              </p>
              <h3
                className="font-display text-3xl md:text-4xl"
                style={{ color: "#3d2817" }}
              >
                Celebrity Work &amp;{" "}
                <span className="gradient-text">Recognition</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {celebrities.map((celeb, i) => (
                <motion.div
                  key={celeb.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.65 + i * 0.12 }}
                  className="card-premium p-5 flex flex-col items-center text-center group"
                  data-ocid={`about.celebrity.${i + 1}`}
                >
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden mb-4 glow-gold"
                    style={{
                      border: "2px solid rgba(201,168,76,0.45)",
                    }}
                  >
                    <img
                      src={celeb.photo}
                      alt={celeb.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p
                    className="font-display text-lg font-semibold mb-1"
                    style={{ color: "#3d2817" }}
                  >
                    {celeb.name}
                  </p>
                  <p
                    className="font-accent text-xs uppercase tracking-wider"
                    style={{ color: "#c9a84c" }}
                  >
                    {celeb.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
