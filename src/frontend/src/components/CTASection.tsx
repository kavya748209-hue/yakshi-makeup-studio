import { Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { studioInfo } from "../data/content";

const SPARKLES = [
  { id: "s1", top: "10%", left: "5%", size: 18, delay: 0 },
  { id: "s2", top: "20%", right: "8%", size: 14, delay: 0.4 },
  { id: "s3", top: "70%", left: "3%", size: 12, delay: 0.8 },
  { id: "s4", top: "80%", right: "5%", size: 16, delay: 0.2 },
  { id: "s5", top: "45%", left: "50%", size: 10, delay: 1 },
  { id: "s6", top: "15%", left: "35%", size: 8, delay: 0.6 },
  { id: "s7", top: "65%", right: "20%", size: 12, delay: 0.3 },
] as const;

export default function CTASection() {
  return (
    <section
      id="book"
      data-ocid="cta.section"
      className="relative overflow-hidden section-padding"
      style={{
        background:
          "linear-gradient(135deg, #060606 0%, #111111 50%, #070707 100%)",
      }}
    >
      {/* Large ambient glow behind the whole section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(212,175,55,0.11) 0%, transparent 65%)",
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 20% 80%, rgba(183,110,121,0.09) 0%, transparent 60%)",
          animation: "pulse-glow 7s ease-in-out infinite reverse",
        }}
      />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 divider-gold" />

      {/* Floating sparkles — brighter */}
      {SPARKLES.map((pos, i) => (
        <motion.div
          key={pos.id}
          className="absolute pointer-events-none"
          style={{
            top: pos.top,
            left: "left" in pos ? pos.left : undefined,
            right: "right" in pos ? pos.right : undefined,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.4, 1.0, 0.4],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: pos.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Sparkles
            size={pos.size}
            style={{
              color: "rgba(212,175,55,0.75)",
              filter: "drop-shadow(0 0 6px rgba(212,175,55,0.6))",
            }}
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 font-body text-xs tracking-widest uppercase glass-ultra"
          style={{ color: "#d4af37" }}
        >
          <Sparkles
            size={12}
            style={{ filter: "drop-shadow(0 0 5px rgba(212,175,55,0.7))" }}
          />
          Limited Slots Available
          <Sparkles
            size={12}
            style={{ filter: "drop-shadow(0 0 5px rgba(212,175,55,0.7))" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-display italic mb-6"
          style={{ lineHeight: 1.1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="gradient-text">Ready for Your</span>
          <br />
          <span className="text-foreground">Glow Up?</span>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          className="divider-gold w-32 mx-auto mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        {/* Subtext */}
        <motion.p
          className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Book your luxury makeup experience today and join{" "}
          <span
            className="text-gold font-semibold"
            style={{ textShadow: "0 0 18px rgba(212,175,55,0.4)" }}
          >
            500+ brides
          </span>{" "}
          who trusted Yakshi for their most precious moments.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <motion.a
            href={studioInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.book_button"
            className="btn-gold text-base px-10 py-4 rounded-xl flex items-center gap-3 min-w-[260px] justify-center"
            style={{
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow:
                "0 0 30px rgba(212,175,55,0.60), 0 0 65px rgba(212,175,55,0.28), 0 4px 20px rgba(0,0,0,0.35)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 45px rgba(212,175,55,0.75), 0 0 90px rgba(212,175,55,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles size={18} />
            Book Appointment Now
          </motion.a>

          <motion.a
            href={studioInfo.phoneLink}
            data-ocid="cta.call_button"
            className="btn-outline-gold text-base px-10 py-4 rounded-xl flex items-center gap-3 min-w-[260px] justify-center"
            style={{ textDecoration: "none", fontSize: "0.95rem" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={18} />
            Call Us: 08766367033
          </motion.a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="mt-10 text-sm text-muted-foreground font-body tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ✦ Trusted by celebrities &amp; brides across Delhi NCR ✦ Home service
          available ✦
        </motion.p>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  );
}
