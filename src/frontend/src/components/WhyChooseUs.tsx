import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Crown, Heart, MessageCircle, Sparkles, Star } from "lucide-react";
import { motion, useInView } from "motion/react";
import { Component, Suspense, useRef, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";
import type * as THREE from "three";

/* ── Error Boundary ─────────────────────────────────────────────── */
class CanvasErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(_error: Error, _info: ErrorInfo) {}
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

/* ── 3D Background Gems ─────────────────────────────────────────── */
function Diamond({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * speed * 0.4;
    }
  });
  return (
    <Float floatIntensity={1.2} speed={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.9}
          roughness={0.1}
          emissive="#b8941f"
          emissiveIntensity={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function Pyramid({
  position,
  scale,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
    }
  });
  return (
    <Float floatIntensity={1} speed={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <coneGeometry args={[1, 2, 4]} />
        <meshStandardMaterial
          color="#b76e79"
          metalness={0.8}
          roughness={0.15}
          emissive="#b76e79"
          emissiveIntensity={0.3}
          transparent
          opacity={0.45}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.4} color="#d4af37" />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4af37" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#b76e79" />
      <Diamond position={[-4, 2, -3]} scale={0.45} speed={0.4} />
      <Diamond position={[4.5, -2, -4]} scale={0.6} speed={0.25} />
      <Diamond position={[0, 3.5, -5]} scale={0.35} speed={0.55} />
      <Diamond position={[-5, -1, -6]} scale={0.5} speed={0.3} />
      <Diamond position={[3, 1.5, -3.5]} scale={0.28} speed={0.6} />
      <Pyramid position={[-2, -3, -4]} scale={0.5} speed={0.3} />
      <Pyramid position={[2.5, 3, -5]} scale={0.4} speed={0.4} />
      <Pyramid position={[-3.5, 1, -3]} scale={0.3} speed={0.5} />
    </>
  );
}

/* ── Feature card data ──────────────────────────────────────────── */
const features = [
  {
    Icon: Star,
    title: "Expert Artistry",
    desc: "8+ years of professional experience with advanced techniques in bridal, HD & airbrush makeup",
    number: "01",
  },
  {
    Icon: Sparkles,
    title: "Premium Products Only",
    desc: "We use only MAC, NARS, Charlotte Tilbury and top-tier brands for flawless, long-lasting results",
    number: "02",
  },
  {
    Icon: Crown,
    title: "Celebrity Trusted",
    desc: "Trusted by 100+ Bollywood celebrities, models & film industry professionals for their big events",
    number: "03",
  },
  {
    Icon: Heart,
    title: "Personalized Experience",
    desc: "Every look is uniquely crafted to match your features, outfit, and occasion for a truly custom result",
    number: "04",
  },
];

/* ── Tilt Card ──────────────────────────────────────────────────── */
interface TiltCardProps {
  feature: (typeof features)[0];
  index: number;
  inView: boolean;
}

function TiltCard({ feature, index, inView }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { Icon } = feature;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ x, y });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`why-choose.card.${index + 1}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setHovered(false);
        }}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.03 : 1})`,
          background: "rgba(10,10,10,0.62)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: hovered
            ? "1px solid rgba(212,175,55,0.55)"
            : "1px solid rgba(212,175,55,0.22)",
          boxShadow: hovered
            ? "inset 0 1px 0 rgba(255,255,255,0.09), 0 0 30px rgba(212,175,55,0.28), 0 0 65px rgba(212,175,55,0.12), 0 20px 60px rgba(0,0,0,0.60)"
            : "inset 0 1px 0 rgba(255,255,255,0.055), 0 4px 30px rgba(0,0,0,0.45)",
          transition:
            "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1)",
        }}
        className="relative h-full rounded-2xl p-8 cursor-default overflow-hidden"
      >
        {/* shimmer overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Gold number badge */}
        <span
          className="absolute top-5 right-5 font-mono text-xs font-bold tracking-widest select-none"
          style={{
            color: hovered ? "rgba(212,175,55,0.75)" : "rgba(212,175,55,0.45)",
            textShadow: hovered ? "0 0 12px rgba(212,175,55,0.5)" : "none",
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
        >
          {feature.number}
        </span>

        {/* Icon circle */}
        <div
          className="mb-6 inline-flex items-center justify-center rounded-full w-14 h-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))",
            border: "1px solid rgba(212,175,55,0.38)",
            boxShadow: hovered
              ? "0 0 26px rgba(212,175,55,0.55), 0 0 55px rgba(212,175,55,0.22)"
              : "0 0 14px rgba(212,175,55,0.22)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Icon
            size={24}
            style={{
              color: "#d4af37",
              filter: hovered
                ? "drop-shadow(0 0 8px rgba(212,175,55,0.85))"
                : "drop-shadow(0 0 5px rgba(212,175,55,0.60))",
            }}
            strokeWidth={1.5}
          />
        </div>

        {/* Text */}
        <h3 className="font-display text-xl mb-3 text-foreground">
          {feature.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(240,230,210,0.68)" }}
        >
          {feature.desc}
        </p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.65), transparent)",
            boxShadow: hovered ? "0 0 8px rgba(212,175,55,0.3)" : "none",
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.3s ease, box-shadow 0.3s ease",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ── Stats ──────────────────────────────────────────────────────── */
const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "100+", label: "Celebrity Clients" },
  { value: "1500+", label: "Brides Styled" },
];

/* ── Section ────────────────────────────────────────────────────── */
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative section-padding overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #0e0a06 50%, #0a0a0a 100%)",
      }}
    >
      {/* R3F background — pointer-events-none, z-0, opacity on Canvas not wrapper */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <CanvasErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ opacity: 0.55 }}
          >
            <Suspense fallback={null}>
              <BackgroundScene />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* Enhanced ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(183,110,121,0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] mb-4 font-mono"
            style={{
              color: "#d4af37",
              textShadow: "0 0 16px rgba(212,175,55,0.45)",
            }}
          >
            Our Promise to You
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-6"
          >
            <span className="gold-gradient-text">Why Choose</span>{" "}
            <span className="text-foreground italic">Yakshi</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-gold mx-auto mb-6"
            style={{ maxWidth: "200px" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(240,230,210,0.65)" }}
          >
            Experience luxury beauty artistry trusted by celebrities and elite
            brides across Delhi&nbsp;NCR
          </motion.p>
        </div>

        {/* 2×2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {features.map((feature, i) => (
            <TiltCard
              key={feature.number}
              feature={feature}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Stats row — glass-ultra */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center py-7 rounded-xl glass-ultra"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 22px rgba(212,175,55,0.10), 0 0 50px rgba(212,175,55,0.05)",
              }}
              data-ocid={`why-choose.stat.${idx + 1}`}
            >
              <div
                className="gold-gradient-text font-display text-3xl sm:text-4xl font-bold mb-1"
                style={{ textShadow: "0 0 24px rgba(212,175,55,0.3)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(212,175,55,0.60)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-center"
          data-ocid="why-choose.cta"
        >
          <a
            href="https://wa.me/918766367033?text=Hi%20Yakshi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3"
            data-ocid="why-choose.book_button"
          >
            <MessageCircle size={18} strokeWidth={2} />
            Book Your Appointment
          </a>
          <p
            className="mt-4 text-xs"
            style={{ color: "rgba(212,175,55,0.48)" }}
          >
            Trusted by celebrities · Delhi NCR's finest bridal studio
          </p>
        </motion.div>
      </div>
    </section>
  );
}
