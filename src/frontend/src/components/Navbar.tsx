import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { studioInfo } from "../data/content";

const navLinks = [
  { label: "Home", href: "/", isPage: true },
  { label: "About", href: "#about", isPage: false },
  { label: "Services", href: "#services", isPage: false },
  { label: "Gallery", href: "#gallery", isPage: false },
  { label: "Academy", href: "/academy", isPage: true },
  { label: "Packages", href: "/packages", isPage: true },
  { label: "Contact", href: "#contact", isPage: false },
];

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export default function Navbar({ currentPage = "/", onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string, isPage: boolean) => {
    setMobileOpen(false);
    if (isPage) {
      window.history.pushState({}, "", href);
      onNavigate?.(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (currentPage !== "/") {
        window.history.pushState({}, "", "/");
        onNavigate?.("/");
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
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
                background: "rgba(253,246,238,0.95)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                borderBottomColor: "rgba(139,94,60,0.22)",
                boxShadow:
                  "0 4px 30px rgba(139,94,60,0.12), 0 1px 0 rgba(201,168,76,0.15)",
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col leading-none text-left"
              data-ocid="navbar.logo_link"
            >
              <span
                className="font-display text-xl md:text-2xl font-bold gradient-text tracking-wide leading-tight"
                style={{ textShadow: "0 0 20px rgba(139,94,60,0.15)" }}
              >
                Makeup by Snehal Pawar
              </span>
              <span
                className="text-[9px] tracking-[0.25em] uppercase font-body font-medium mt-0.5"
                style={{ color: "rgba(139,94,60,0.72)" }}
              >
                Beauty &amp; Bridal Salon
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href, link.isPage)}
                    className="text-sm font-body font-medium tracking-wider uppercase transition-colors duration-300 relative group"
                    style={{
                      color: scrolled
                        ? "rgba(60,30,10,0.82)"
                        : "rgba(60,30,10,0.75)",
                    }}
                    data-ocid={`navbar.${link.label.toLowerCase()}_link`}
                  >
                    <span className="hover:text-[#8b5e3c] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{
                        background: "#8b5e3c",
                        boxShadow: "0 0 8px rgba(139,94,60,0.5)",
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs py-2.5 px-5 rounded-md"
                data-ocid="navbar.book_now_button"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-smooth"
              style={{
                color: "#8b5e3c",
                background: mobileOpen ? "rgba(139,94,60,0.1)" : "transparent",
              }}
              aria-label="Toggle mobile menu"
              data-ocid="navbar.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — slide down panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-[55] overflow-hidden"
            style={{
              background: "rgba(253,246,238,0.98)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              borderBottom: "1px solid rgba(139,94,60,0.2)",
              boxShadow: "0 8px 40px rgba(139,94,60,0.15)",
            }}
            data-ocid="navbar.mobile_menu"
          >
            <div className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href, link.isPage)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="text-left py-3.5 px-4 rounded-xl font-body text-base font-semibold transition-smooth hover:bg-[rgba(139,94,60,0.08)] active:bg-[rgba(139,94,60,0.15)] border-b border-[rgba(139,94,60,0.08)] last:border-0"
                  style={{ color: "rgba(60,30,10,0.85)" }}
                  data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={studioInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="btn-gold mt-4 text-center"
                onClick={() => setMobileOpen(false)}
                data-ocid="navbar.mobile_book_button"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
