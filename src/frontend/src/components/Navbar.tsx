import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { studioInfo } from "../data/content";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b" : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                background: "rgba(8,8,8,0.92)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                borderBottomColor: "rgba(212,175,55,0.22)",
                boxShadow:
                  "0 4px 30px rgba(0,0,0,0.55), 0 1px 0 rgba(212,175,55,0.15)",
              }
            : {}
        }
        data-ocid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex flex-col leading-none text-left"
              data-ocid="navbar.logo_link"
            >
              <span
                className="font-display text-2xl md:text-3xl font-bold gradient-text tracking-wide"
                style={{ textShadow: "0 0 30px rgba(212,175,55,0.20)" }}
              >
                {studioInfo.shortName}
              </span>
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-body font-light mt-0.5"
                style={{ color: "rgba(212,175,55,0.72)" }}
              >
                Makeup &amp; Nail Studio
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-body font-medium tracking-widest uppercase transition-colors duration-300 relative group"
                    style={{ color: "rgba(245,240,232,0.72)" }}
                    data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                  >
                    <span className="hover:text-[#d4af37] transition-colors duration-300">
                      {link.label}
                    </span>
                    {/* Underline with glow */}
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{
                        background: "#d4af37",
                        boxShadow: "0 0 8px rgba(212,175,55,0.6)",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => window.open(studioInfo.whatsappUrl, "_blank")}
                className="btn-gold text-xs py-2.5 px-5 rounded-md"
                data-ocid="navbar.book_now_button"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              style={{
                color: "#d4af37",
                filter: "drop-shadow(0 0 6px rgba(212,175,55,0.5))",
              }}
              aria-label="Toggle mobile menu"
              data-ocid="navbar.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] pt-16"
            style={{
              background: "rgba(5,5,5,0.97)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
            data-ocid="navbar.mobile_menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pb-20">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="font-display text-3xl font-semibold transition-colors"
                  style={{ color: "rgba(245,240,232,0.88)" }}
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                onClick={() => window.open(studioInfo.whatsappUrl, "_blank")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="btn-gold mt-4"
                data-ocid="navbar.mobile_book_button"
              >
                Book Appointment
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
