import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";

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
          "linear-gradient(135deg, #6b3f1f 0%, #8b5e3c 50%, #6b3f1f 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(139,94,60,0.18) 0%, transparent 65%)",
          animation: "pulse-glow 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 20% 80%, rgba(196,149,106,0.15) 0%, transparent 60%)",
          animation: "pulse-glow 7s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,94,60,0.8), rgba(181,132,90,1), rgba(139,94,60,0.8), transparent)",
          boxShadow: "0 0 18px rgba(139,94,60,0.55)",
        }}
      />

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
            y: [0, -12, 0],
            opacity: [0.5, 1.0, 0.5],
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
              color: "rgba(181,132,90,0.90)",
              filter: "drop-shadow(0 0 8px rgba(139,94,60,0.70))",
            }}
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-body text-xs tracking-widest uppercase"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(181,132,90,0.50)",
            color: "rgba(253,248,243,0.95)",
            boxShadow: "0 0 20px rgba(139,94,60,0.22)",
          }}
        >
          <Sparkles
            size={12}
            style={{ filter: "drop-shadow(0 0 5px rgba(181,132,90,0.8))" }}
          />
          Limited Slots Available
          <Sparkles
            size={12}
            style={{ filter: "drop-shadow(0 0 5px rgba(181,132,90,0.8))" }}
          />
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-display italic mb-6"
          style={{ lineHeight: 1.1, color: "#fdf8f3" }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span
            style={{
              background:
                "linear-gradient(135deg, #b5845a 0%, #8b5e3c 40%, #6b3f1f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 22px rgba(139,94,60,0.35))",
            }}
          >
            Ready for Your
          </span>
          <br />
          <span style={{ color: "#fdf8f3" }}>Dream Look?</span>
        </motion.h2>

        <motion.div
          className="h-px w-32 mx-auto mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(181,132,90,0.9), transparent)",
            boxShadow: "0 0 10px rgba(139,94,60,0.45)",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        <motion.p
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(253,248,243,0.80)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Book your bridal consultation today and take the first step towards
          your perfect wedding day transformation. Join{" "}
          <span
            style={{
              color: "#fdf8f3",
              fontWeight: 600,
              textShadow: "0 0 18px rgba(139,94,60,0.45)",
            }}
          >
            500+ brides
          </span>{" "}
          who trusted Snehal Pawar for their most precious moments.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <motion.a
            href="tel:09561548151"
            data-ocid="cta.book_button"
            className="flex items-center gap-3 px-10 py-4 rounded-xl font-accent font-semibold tracking-widest uppercase text-sm min-w-[260px] justify-center"
            style={{
              background:
                "linear-gradient(135deg, #b5845a 0%, #8b5e3c 50%, #b5845a 100%)",
              backgroundSize: "200% auto",
              color: "#3d2817",
              boxShadow:
                "0 0 30px rgba(139,94,60,0.65), 0 0 65px rgba(139,94,60,0.28), 0 4px 20px rgba(0,0,0,0.15)",
              textDecoration: "none",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 45px rgba(139,94,60,0.80), 0 0 90px rgba(139,94,60,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone size={18} />
            Book Now — 09561548151
          </motion.a>

          <motion.a
            href="https://wa.me/919561548151"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="cta.whatsapp_button"
            className="flex items-center gap-3 px-10 py-4 rounded-xl font-body font-semibold text-sm min-w-[260px] justify-center"
            style={{
              background: "linear-gradient(135deg, #25d366, #1ea952)",
              color: "#fff",
              boxShadow: "0 4px 25px rgba(37,211,102,0.40)",
              textDecoration: "none",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 35px rgba(37,211,102,0.60)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-10 text-sm font-body tracking-wide"
          style={{ color: "rgba(253,248,243,0.55)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          ✦ Trusted by 500+ brides across Maharashtra ✦ Home service available ✦
          Academy Certified ✦
        </motion.p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,94,60,0.8), rgba(181,132,90,1), rgba(139,94,60,0.8), transparent)",
          boxShadow: "0 0 18px rgba(139,94,60,0.55)",
        }}
      />
    </section>
  );
}
