import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { studioInfo } from "../data/content";

export default function FloatingButtons() {
  const [igHovered, setIgHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  return (
    <>
      {/* Instagram — Left, vertically centered */}
      <div
        className="fixed z-[60]"
        style={{ left: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
      >
        {/* Pulsing ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none animate-ring-pulse"
          style={{
            background:
              "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
            opacity: 0.5,
          }}
        />
        <motion.a
          href={studioInfo.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          data-ocid="floating.instagram_button"
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
            boxShadow: igHovered
              ? "0 0 30px rgba(253,29,29,0.70), 0 0 60px rgba(183,110,121,0.35), 0 0 100px rgba(253,29,29,0.15)"
              : "0 0 18px rgba(183,110,121,0.50), 0 0 40px rgba(183,110,121,0.20), 0 4px 15px rgba(0,0,0,0.4)",
            transition: "box-shadow 0.3s ease",
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.93 }}
          onHoverStart={() => setIgHovered(true)}
          onHoverEnd={() => setIgHovered(false)}
        >
          <FaInstagram size={22} />

          {/* Tooltip */}
          <AnimatePresence>
            {igHovered && (
              <motion.span
                className="absolute left-16 whitespace-nowrap text-xs font-body tracking-wider px-3 py-1.5 rounded-lg pointer-events-none glass-ultra"
                style={{ color: "#d4af37" }}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
              >
                Instagram
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </div>

      {/* WhatsApp — Right, vertically centered */}
      <div
        className="fixed z-[60]"
        style={{ right: "1.5rem", top: "50%", transform: "translateY(-50%)" }}
      >
        {/* Pulsing ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none animate-ring-pulse"
          style={{
            background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
            opacity: 0.5,
          }}
        />
        <motion.a
          href={studioInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          data-ocid="floating.whatsapp_button"
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white"
          style={{
            background: "linear-gradient(135deg, #128C7E 0%, #25D366 100%)",
            boxShadow: waHovered
              ? "0 0 30px rgba(37,211,102,0.70), 0 0 60px rgba(18,140,126,0.35), 0 0 100px rgba(37,211,102,0.15)"
              : "0 0 18px rgba(37,211,102,0.50), 0 0 40px rgba(37,211,102,0.20), 0 4px 15px rgba(0,0,0,0.4)",
            transition: "box-shadow 0.3s ease",
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.93 }}
          onHoverStart={() => setWaHovered(true)}
          onHoverEnd={() => setWaHovered(false)}
        >
          <FaWhatsapp size={24} />

          {/* Tooltip */}
          <AnimatePresence>
            {waHovered && (
              <motion.span
                className="absolute right-16 whitespace-nowrap text-xs font-body tracking-wider px-3 py-1.5 rounded-lg pointer-events-none glass-ultra"
                style={{ color: "#25D366" }}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
              >
                WhatsApp
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </div>
    </>
  );
}
