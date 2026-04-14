import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Camera, Crown, Heart, Palette, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import type { Mesh } from "three";

// ─── 3D Background Orbs ───────────────────────────────────────────────────────
function FloatingOrb({
  position,
  color,
  speed,
  distort,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });
  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1, 48, 48]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.22}
        />
      </Sphere>
    </Float>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4af37" />
      <pointLight position={[-5, -5, 3]} intensity={0.8} color="#b76e79" />
      <FloatingOrb
        position={[-4, 2, -2]}
        color="#d4af37"
        speed={0.8}
        distort={0.5}
      />
      <FloatingOrb
        position={[4, -2, -3]}
        color="#b76e79"
        speed={1.2}
        distort={0.4}
      />
      <FloatingOrb
        position={[0, 3, -4]}
        color="#e8c84a"
        speed={0.6}
        distort={0.6}
      />
      <FloatingOrb
        position={[-3, -3, -2]}
        color="#c9a227"
        speed={1.0}
        distort={0.35}
      />
    </>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
  index: number;
}

function ServiceCard({ icon, name, description, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`services.item.${index + 1}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer h-full"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease-out",
        }}
      >
        {/* Card body — card-premium style */}
        <div
          className="relative flex flex-col gap-4 p-7 h-full rounded-2xl overflow-hidden"
          style={{
            background: "rgba(10,10,10,0.62)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: isHovered
              ? "1px solid rgba(212, 175, 55, 0.55)"
              : "1px solid rgba(212, 175, 55, 0.20)",
            boxShadow: isHovered
              ? "inset 0 1px 0 rgba(255,255,255,0.09), 0 0 28px rgba(212,175,55,0.22), 0 0 58px rgba(212,175,55,0.10), 0 20px 60px rgba(0,0,0,0.55)"
              : "inset 0 1px 0 rgba(255,255,255,0.055), 0 4px 24px rgba(0,0,0,0.40)",
            transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(135deg, transparent 35%, rgba(212,175,55,0.08) 50%, transparent 65%)",
                opacity: isHovered ? 1 : 0,
              }}
            />
          </div>

          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400"
            style={{
              background:
                "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(183,110,121,0.10))",
              border: "1px solid rgba(212,175,55,0.28)",
              boxShadow: isHovered
                ? "0 0 22px rgba(212,175,55,0.50), 0 0 45px rgba(212,175,55,0.20)"
                : "0 0 10px rgba(212,175,55,0.18)",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <span
              className="text-gold"
              style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.60))" }}
            >
              {icon}
            </span>
          </div>

          {/* Name */}
          <h3
            className="font-display text-xl leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #d4af37 0%, #e8c84a 50%, #b76e79 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: "rgba(230,220,210,0.72)" }}
          >
            {description}
          </p>

          {/* Divider */}
          <div className="divider-gold" />

          {/* Book Now button */}
          <button
            type="button"
            className="btn-outline-gold w-full text-center text-xs mt-1"
            data-ocid={`services.book_button.${index + 1}`}
            onClick={() =>
              window.open(
                `https://wa.me/918766367033?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(name)}`,
                "_blank",
              )
            }
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Services data ─────────────────────────────────────────────────────────────
const services: Array<{
  icon: React.ReactNode;
  name: string;
  description: string;
}> = [
  {
    icon: <Crown size={24} />,
    name: "Bridal Makeup",
    description:
      "A timeless bridal look crafted to make you glow on your special day. HD, airbrush & traditional techniques blended for perfection.",
  },
  {
    icon: <Sparkles size={24} />,
    name: "Pre-Bridal Package",
    description:
      "Complete 5-session pre-bridal package including deep facials, skin prep treatments & trial makeup for a radiant transformation.",
  },
  {
    icon: <Star size={24} />,
    name: "Party & Event Makeup",
    description:
      "Glamorous party looks, reception glam, and event-ready beauty for every occasion — from intimate gatherings to grand soirées.",
  },
  {
    icon: <Palette size={24} />,
    name: "Nail Art & Extensions",
    description:
      "Intricate nail designs, gel extensions, 3D nail art & bridal nail packages — curated for the modern Indian woman.",
  },
  {
    icon: <Camera size={24} />,
    name: "HD & Airbrush Makeup",
    description:
      "Camera-perfect finish with HD and airbrush techniques for photoshoots, music videos & professional portfolios.",
  },
  {
    icon: <Heart size={24} />,
    name: "Engagement Makeup",
    description:
      "Elegant engagement looks blending tradition with modern beauty aesthetics — where timeless grace meets contemporary style.",
  },
];

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        background: "#070707",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      {/* 3D Background Canvas — pointer-events-none, z-0, opacity on canvas not wrapper */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          style={{ opacity: 0.55 }}
        >
          <Scene3D />
        </Canvas>
      </div>

      {/* Enhanced ambient glow blobs */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translate(-20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(183,110,121,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translate(20%, 20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-ocid="services.section"
        >
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full glass-ultra"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gold text-xs tracking-widest uppercase font-mono">
              What We Offer
            </span>
          </motion.div>

          {/* Title */}
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #b8941f 0%, #d4af37 40%, #e8c84a 60%, #b76e79 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
              filter: "drop-shadow(0 0 20px rgba(212,175,55,0.15))",
            }}
          >
            Our Signature Services
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(210,195,175,0.72)" }}
          >
            Luxury beauty services crafted for your most precious moments —
            where artistry meets elegance.
          </p>

          {/* Gold divider */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="divider-gold w-24" />
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: "#d4af37",
                boxShadow:
                  "0 0 12px rgba(212,175,55,0.9), 0 0 24px rgba(212,175,55,0.4)",
              }}
            />
            <div className="divider-gold w-24" />
          </div>
        </motion.div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              icon={service.icon}
              name={service.name}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button
            type="button"
            className="btn-gold text-sm"
            data-ocid="services.cta_button"
            onClick={() =>
              window.open(
                "https://wa.me/918766367033?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services",
                "_blank",
              )
            }
          >
            Book a Free Consultation
          </button>
          <p
            className="mt-4 text-xs"
            style={{ color: "rgba(180,160,130,0.65)" }}
          >
            All services available in Delhi NCR · Home visits on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
