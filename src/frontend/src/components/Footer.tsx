import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { studioInfo } from "../data/content";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Bridal Makeup",
  "Nail Art",
  "HD Airbrush",
  "Pre-Bridal",
  "Party Makeup",
  "Engagement Look",
];

const socialLinks = [
  {
    href: studioInfo.instagramUrl,
    Icon: FaInstagram,
    label: "Instagram",
    color: "#E1306C",
  },
  {
    href: studioInfo.whatsappUrl,
    Icon: FaWhatsapp,
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    href: "https://facebook.com/yakshimakeover",
    Icon: FaFacebookF,
    label: "Facebook",
    color: "#1877F2",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "yakshi",
  )}`;

  return (
    <footer
      data-ocid="footer.section"
      className="relative overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Gold top border with enhanced glow */}
      <div
        className="divider-gold"
        style={{ boxShadow: "0 0 12px rgba(212,175,55,0.28)" }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(212,175,55,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 relative z-10">
        {/* 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl font-display italic gold-gradient-text mb-3"
              style={{ textShadow: "0 0 24px rgba(212,175,55,0.20)" }}
              data-ocid="footer.logo"
            >
              Yakshi
            </h2>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4 font-body">
              {studioInfo.subTagline}
            </p>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
              Delhi NCR's most celebrated luxury bridal makeup &amp; nail art
              studio, trusted by brides and celebrities alike.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, Icon, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid={`footer.social.${label.toLowerCase()}`}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth glass-card"
                  whileHover={{
                    scale: 1.15,
                    boxShadow: `0 0 20px ${color}70, 0 0 40px ${color}30`,
                  }}
                >
                  <Icon size={15} style={{ color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm tracking-[0.25em] uppercase text-gold font-body font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" data-ocid="footer.quicklinks.list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-muted-foreground text-sm font-body transition-smooth hover:text-gold flex items-center gap-2 group"
                    data-ocid={`footer.quicklinks.${label.toLowerCase()}`}
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-smooth"
                      style={{ boxShadow: "0 0 6px rgba(212,175,55,0.8)" }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm tracking-[0.25em] uppercase text-gold font-body font-semibold mb-5">
              Our Services
            </h3>
            <ul className="space-y-3" data-ocid="footer.services.list">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground text-sm font-body transition-smooth hover:text-gold flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-smooth"
                      style={{ boxShadow: "0 0 6px rgba(212,175,55,0.8)" }}
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-sm tracking-[0.25em] uppercase text-gold font-body font-semibold mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4" data-ocid="footer.contact.list">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 flex-shrink-0 text-gold"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(212,175,55,0.6))",
                  }}
                />
                <span className="text-muted-foreground text-sm font-body leading-snug">
                  Delhi NCR, India
                  <br />
                  <span className="text-rose-gold text-xs">
                    Home service available
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={15}
                  className="flex-shrink-0 text-gold"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(212,175,55,0.6))",
                  }}
                />
                <a
                  href={studioInfo.phoneLink}
                  className="text-muted-foreground text-sm font-body hover:text-gold transition-smooth"
                  data-ocid="footer.contact.phone"
                >
                  +91 8766367033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram
                  size={14}
                  className="flex-shrink-0"
                  style={{
                    color: "#E1306C",
                    filter: "drop-shadow(0 0 4px #E1306C80)",
                  }}
                />
                <a
                  href={studioInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm font-body hover:text-gold transition-smooth"
                  data-ocid="footer.contact.instagram"
                >
                  @yakshimakeover
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={14}
                  className="flex-shrink-0 text-gold"
                  style={{
                    filter: "drop-shadow(0 0 4px rgba(212,175,55,0.6))",
                  }}
                />
                <span className="text-muted-foreground text-sm font-body break-all">
                  {studioInfo.email}
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-muted-foreground text-xs font-body text-center sm:text-left"
            data-ocid="footer.copyright"
          >
            © {year} Yakshi Makeup &amp; Nail Studio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs font-body text-center">
            Made with ❤️ in Delhi NCR
          </p>
          <p className="text-muted-foreground text-xs font-body text-center sm:text-right">
            Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-smooth"
              style={{ textShadow: "0 0 12px rgba(212,175,55,0.3)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
