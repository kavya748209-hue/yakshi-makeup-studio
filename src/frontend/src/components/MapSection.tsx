import { Clock, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType } from "react";
import { studioInfo } from "../data/content";

interface ContactItem {
  icon: ComponentType<{ size: number; style?: React.CSSProperties }>;
  label: string;
  value: string;
  href: string | undefined;
  color: string;
}

const contactDetails: ContactItem[] = [
  {
    icon: MapPin,
    label: "Address",
    value: "Delhi NCR (Home Service Available)",
    href: undefined,
    color: "#d4af37",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 8766367033",
    href: studioInfo.phoneLink,
    color: "#d4af37",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yakshimakeover",
    href: studioInfo.instagramUrl,
    color: "#b76e79",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Sun: 9:00 AM – 8:00 PM",
    href: undefined,
    color: "#d4af37",
  },
];

function ContactCard({ item, idx }: { item: ContactItem; idx: number }) {
  const Icon = item.icon;
  const inner = (
    <div
      className="card-premium p-4 flex items-start gap-4 rounded-xl"
      data-ocid={`map.contact.item.${idx + 1}`}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle, ${item.color}25, ${item.color}12)`,
          border: `1px solid ${item.color}55`,
          boxShadow: `0 0 14px ${item.color}25`,
        }}
      >
        <Icon
          size={18}
          style={{
            color: item.color,
            filter: `drop-shadow(0 0 5px ${item.color}70)`,
          }}
        />
      </div>
      <div className="min-w-0">
        <p className="text-xs tracking-widest uppercase text-muted-foreground font-body mb-1">
          {item.label}
        </p>
        <p
          className="font-body text-sm font-medium truncate"
          style={{ color: item.color }}
        >
          {item.value}
        </p>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-[1.02] transition-smooth"
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
      className="bg-dark-primary section-padding relative overflow-hidden"
    >
      {/* Enhanced background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
          filter: "blur(120px)",
        }}
      />
      {/* Rose-gold blob */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(183,110,121,0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
          transform: "translate(20%, 20%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm tracking-[0.3em] uppercase text-rose-gold mb-3 font-body"
            style={{ textShadow: "0 0 14px rgba(183,110,121,0.5)" }}
          >
            Find Us
          </p>
          <h2
            className="text-4xl md:text-5xl font-display italic gradient-text mb-4"
            style={{ lineHeight: 1.2 }}
          >
            Visit Our Studio
          </h2>
          <div className="divider-gold w-24 mx-auto mb-5" />
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Delhi NCR |{" "}
            <span
              className="text-gold font-medium"
              style={{ textShadow: "0 0 14px rgba(212,175,55,0.35)" }}
            >
              Available for Home Service Across NCR
            </span>
          </p>
        </motion.div>

        {/* Map + Contact layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Map embed */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                height: "400px",
                border: "1.5px solid rgba(212,175,55,0.38)",
                boxShadow:
                  "0 0 35px rgba(212,175,55,0.22), 0 0 80px rgba(212,175,55,0.10), 0 0 0 1px rgba(212,175,55,0.06)",
              }}
            >
              <iframe
                title="Yakshi Makeup Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510984937!2d76.76357485!3d28.6427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(30%) invert(90%) hue-rotate(180deg)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {contactDetails.map((item, idx) => (
              <ContactCard key={item.label} item={item} idx={idx} />
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href={studioInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="map.whatsapp_button"
              className="btn-gold flex items-center justify-center gap-3 mt-2 rounded-xl"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              WhatsApp Us Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
