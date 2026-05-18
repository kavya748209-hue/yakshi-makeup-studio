import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const GOLD = "#8b5e3c";
const WARM = "#8b5e3c";

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  delay?: number;
  ocid: string;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  delay = 0,
  ocid,
}: ContactCardProps) {
  const inner = (
    <motion.div
      data-ocid={ocid}
      className="flex items-start gap-4 rounded-2xl p-4 glass-ultra transition-all duration-300"
      style={{
        border: "1.5px solid rgba(139,94,60,0.25)",
        boxShadow: "0 2px 16px rgba(107,63,31,0.08)",
      }}
      whileHover={{
        y: -3,
        boxShadow:
          "0 8px 32px rgba(139,94,60,0.28), 0 0 50px rgba(139,94,60,0.10)",
        borderColor: "rgba(139,94,60,0.55)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,94,60,0.20), rgba(139,94,60,0.06))",
          border: "1.5px solid rgba(139,94,60,0.42)",
          boxShadow: "0 0 16px rgba(139,94,60,0.24)",
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p
          className="text-xs tracking-widest uppercase font-accent mb-1"
          style={{ color: GOLD }}
        >
          {label}
        </p>
        <p
          className="font-body text-sm font-semibold leading-snug"
          style={{ color: WARM }}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export default function MapSection() {
  return (
    <section
      id="contact"
      data-ocid="map.section"
      className="relative overflow-hidden section-padding section-bg-beige"
    >
      <div
        className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,94,60,0.10) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,149,106,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs tracking-[0.38em] uppercase font-accent mb-3"
            style={{ color: GOLD }}
          >
            Visit Us
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl mb-4 gold-gradient-text leading-tight">
            Find Us in{" "}
            <span
              style={{
                WebkitTextFillColor: "#6b3f1f",
                backgroundImage: "none",
                color: "#6b3f1f",
              }}
            >
              Amravati
            </span>
          </h2>
          <motion.div
            className="mx-auto h-px section-divider mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p
            className="font-body text-base max-w-xl mx-auto"
            style={{ color: WARM }}
          >
            Kondeshwar Vidyut Colony · Sai Nagar · Amravati
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <ContactCard
              icon={
                <MapPin
                  size={18}
                  style={{
                    color: GOLD,
                    filter: "drop-shadow(0 0 5px rgba(139,94,60,0.6))",
                  }}
                />
              }
              label="Address"
              value="Kondeshwar Vidyut Colony, Near Radhey Radhey Milk Dairy, Sai Nagar, Amravati, Maharashtra 444607"
              delay={0.1}
              ocid="map.contact.address"
            />
            <ContactCard
              icon={
                <Phone
                  size={18}
                  style={{
                    color: GOLD,
                    filter: "drop-shadow(0 0 5px rgba(139,94,60,0.6))",
                  }}
                />
              }
              label="Call Us"
              value="+91 95615 48151"
              href="tel:+919561548151"
              delay={0.2}
              ocid="map.contact.phone"
            />
            <ContactCard
              icon={
                <Clock
                  size={18}
                  style={{
                    color: GOLD,
                    filter: "drop-shadow(0 0 5px rgba(139,94,60,0.6))",
                  }}
                />
              }
              label="Working Hours"
              value="Monday – Sunday: 9:00 AM – 8:00 PM"
              delay={0.3}
              ocid="map.contact.hours"
            />
            <motion.a
              href="https://wa.me/919561548151"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="map.whatsapp_button"
              className="flex items-center justify-center gap-3 py-3 px-6 rounded-xl font-body font-semibold text-sm tracking-wide"
              style={{
                background: "linear-gradient(135deg, #25d366, #1ea952)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(37,211,102,0.30)",
                textDecoration: "none",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 28px rgba(37,211,102,0.50)",
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <MessageCircle size={18} />
              WhatsApp Us Now
            </motion.a>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "380px",
                border: "2px solid rgba(139,94,60,0.40)",
                boxShadow:
                  "0 4px 40px rgba(107,63,31,0.10), 0 0 60px rgba(139,94,60,0.10)",
              }}
            >
              <iframe
                title="Makeup by Snehal Pawar Academy — Amravati"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59663.51596095788!2d77.73050564179689!3d20.937501799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7295d5f3ad58d%3A0x81c1862b41a8df3e!2sAmravati%2C%20Maharashtra%20444601!5e0!3m2!1sen!2sin!4v1716000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
