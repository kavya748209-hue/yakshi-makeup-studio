import { motion } from "motion/react";
import { useRef, useState } from "react";

interface Service {
  emoji: string;
  name: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    emoji: "👰",
    name: "Bridal Makeup",
    description:
      "Flawless bridal transformations for your big day. Timeless looks crafted with premium techniques.",
    price: "₹8,000 onwards",
  },
  {
    emoji: "✨",
    name: "HD Makeup",
    description:
      "High-definition finish for photos and events. Camera-perfect glow that lasts all day.",
    price: "₹4,000 onwards",
  },
  {
    emoji: "💨",
    name: "Airbrush Makeup",
    description:
      "Flawless airbrush finish, lasts all day. Lightweight feel with a second-skin natural look.",
    price: "₹5,000 onwards",
  },
  {
    emoji: "💍",
    name: "Engagement Makeup",
    description:
      "Look stunning at your engagement ceremony. Elegant and romantic looks for this special milestone.",
    price: "₹4,500 onwards",
  },
  {
    emoji: "🌟",
    name: "Reception Makeup",
    description:
      "Glamorous reception look to dazzle all night. Bold, beautiful, and party-ready till dawn.",
    price: "₹5,500 onwards",
  },
  {
    emoji: "💅",
    name: "Nail Art",
    description:
      "Custom nail art designs for every occasion. Intricate 3D designs, gel art, and bridal sets.",
    price: "₹500 onwards",
  },
  {
    emoji: "🎉",
    name: "Party Makeup",
    description:
      "Perfect glam for parties and celebrations. Bold or subtle, we create the look you vision.",
    price: "₹2,500 onwards",
  },
  {
    emoji: "🎓",
    name: "Academy Training",
    description:
      "Professional makeup courses for aspiring artists. Hands-on training with industry expertise.",
    price: "₹15,000 onwards",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`services.item.${index + 1}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        className="card-premium p-7 h-full flex flex-col gap-4 cursor-pointer relative overflow-hidden"
        style={{
          transform: hovered
            ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : "perspective(900px) rotateX(0deg) rotateY(0deg)",
          transition: hovered ? "transform 0.1s" : "transform 0.5s ease-out",
          boxShadow: hovered
            ? "0 0 35px rgba(139,94,60,0.35), 0 0 80px rgba(139,94,60,0.12), 0 20px 60px rgba(107,63,31,0.12)"
            : "0 4px 24px rgba(107,63,31,0.08)",
          borderColor: hovered ? "rgba(139,94,60,0.6)" : "rgba(139,94,60,0.3)",
        }}
      >
        {/* Shimmer highlight */}
        <div className="absolute inset-0 pointer-events-none rounded-[20px] overflow-hidden">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, transparent 40%, rgba(139,94,60,0.09) 55%, transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s",
            }}
          />
        </div>

        {/* Icon circle */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,94,60,0.18), rgba(196,149,106,0.10))",
            border: "1px solid rgba(139,94,60,0.35)",
            boxShadow: hovered
              ? "0 0 22px rgba(139,94,60,0.45), 0 0 45px rgba(139,94,60,0.18)"
              : "0 0 10px rgba(139,94,60,0.15)",
            transition: "box-shadow 0.3s",
          }}
        >
          <span role="img" aria-hidden="true">
            {service.emoji}
          </span>
        </div>

        {/* Name */}
        <h3
          className="font-display text-xl leading-tight"
          style={{ color: "#6b3f1f" }}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          className="font-body text-sm leading-relaxed flex-1"
          style={{ color: "#8b5e3c" }}
        >
          {service.description}
        </p>

        <div className="section-divider" />

        {/* Price */}
        <p
          className="font-accent text-sm gradient-text"
          style={{ letterSpacing: "1px" }}
        >
          {service.price}
        </p>

        {/* Book CTA */}
        <button
          type="button"
          className="btn-outline-premium w-full text-center text-xs mt-1"
          data-ocid={`services.book_button.${index + 1}`}
          onClick={() =>
            window.open(
              `https://wa.me/919561548151?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(service.name)}`,
              "_blank",
            )
          }
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative section-padding section-bg-warm overflow-hidden"
      data-ocid="services.section"
    >
      {/* Ambient blobs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,94,60,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translateY(-30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,149,106,0.08) 0%, transparent 65%)",
          filter: "blur(70px)",
          transform: "translateY(20%)",
        }}
      />

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14 gold-line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="font-accent text-xs uppercase tracking-[3px] mb-3"
            style={{ color: "#8b5e3c", letterSpacing: "3px" }}
          >
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight gradient-text">
            Our Services
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: "#8b5e3c" }}
          >
            Expert beauty services tailored for your special moments
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="divider-gold w-24" />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#8b5e3c",
                boxShadow: "0 0 12px rgba(139,94,60,0.9)",
              }}
            />
            <div className="divider-gold w-24" />
          </div>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, i) => (
            <ServiceCard key={service.name} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="font-accent text-sm uppercase tracking-widest mb-6"
            style={{ color: "#8b5e3c", letterSpacing: "2px" }}
          >
            All packages customizable — Contact for personalized quotes
          </p>
          <button
            type="button"
            className="btn-premium"
            data-ocid="services.cta_button"
            onClick={() =>
              window.open(
                "https://wa.me/919561548151?text=Hi%2C%20I%20would%20like%20a%20personalized%20quote",
                "_blank",
              )
            }
          >
            Get a Free Quote
          </button>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
