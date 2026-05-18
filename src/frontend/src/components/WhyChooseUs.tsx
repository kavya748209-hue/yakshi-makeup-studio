import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  MapPin,
  Star,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { Component, Suspense, useRef, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";
import type * as THREE from "three";

const GOLD = "#8b5e3c";
const BROWN = "#6b3f1f";
const WARM = "#8b5e3c";

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

function GoldGem({
  position,
  scale,
  speed,
}: { position: [number, number, number]; scale: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * speed * 0.35;
    }
  });
  return (
    <Float floatIntensity={1.0} speed={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#8b5e3c"
          metalness={0.95}
          roughness={0.05}
          emissive="#6b3f1f"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function BackgroundScene() {
  return (
    <>
      <ambientLight intensity={0.6} color="#e8d5a0" />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#8b5e3c" />
      <pointLight position={[-5, -3, 3]} intensity={0.8} color="#e8a87c" />
      <GoldGem position={[-4, 2, -3]} scale={0.38} speed={0.35} />
      <GoldGem position={[4.5, -2, -4]} scale={0.5} speed={0.22} />
      <GoldGem position={[0, 3.5, -5]} scale={0.3} speed={0.48} />
      <GoldGem position={[-5, -1, -6]} scale={0.42} speed={0.28} />
      <GoldGem position={[3, 1.5, -3.5]} scale={0.24} speed={0.55} />
    </>
  );
}

const features = [
  {
    Icon: Star,
    title: "12+ Years Experience",
    desc: "Over a decade of expertise in bridal and beauty artistry across Amravati & Maharashtra",
    number: "01",
  },
  {
    Icon: Award,
    title: "Premium Products Only",
    desc: "We use only top international and premium Indian brands for flawless, long-lasting results",
    number: "02",
  },
  {
    Icon: BookOpen,
    title: "Certified & Trained",
    desc: "Internationally certified with continuous professional development in the latest trends",
    number: "03",
  },
  {
    Icon: GraduationCap,
    title: "100+ Students Trained",
    desc: "Empowering the next generation of beauty artists through our professional academy",
    number: "04",
  },
  {
    Icon: MapPin,
    title: "Travel Across Maharashtra",
    desc: "Available for destination weddings and events across Maharashtra and beyond",
    number: "05",
  },
  {
    Icon: Heart,
    title: "Personalized Consultation",
    desc: "Free pre-bridal consultation to plan your perfect look tailored just for you",
    number: "06",
  },
];

const stats = [
  { value: "500+", label: "Brides" },
  { value: "12+", label: "Years" },
  { value: "100+", label: "Students" },
  { value: "50+", label: "Celebrity Looks" },
];

function FeatureCard({
  feature,
  index,
}: { feature: (typeof features)[0]; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { Icon } = feature;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setTilt({ x, y });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      data-ocid={`why-choose.card.${index + 1}`}
      style={{ perspective: 1000 }}
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
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.03 : 1}) translateY(${hovered ? -6 : 0}px)`,
          background: hovered
            ? "rgba(255,255,255,0.88)"
            : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: hovered
            ? "1.5px solid rgba(139,94,60,0.60)"
            : "1.5px solid rgba(139,94,60,0.25)",
          boxShadow: hovered
            ? "0 0 30px rgba(139,94,60,0.40), 0 0 70px rgba(139,94,60,0.14), 0 20px 60px rgba(107,63,31,0.12)"
            : "0 4px 24px rgba(107,63,31,0.07)",
          transition:
            "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.5s cubic-bezier(0.23,1,0.32,1), background 0.3s ease",
          borderRadius: "20px",
        }}
        className="relative h-full p-7 cursor-default overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-[20px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,94,60,0.08) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        <span
          className="absolute top-5 right-5 font-accent text-xs font-bold tracking-widest select-none"
          style={{
            color: hovered ? "rgba(139,94,60,0.85)" : "rgba(139,94,60,0.45)",
            transition: "color 0.3s ease",
          }}
        >
          {feature.number}
        </span>
        <div
          className="mb-5 inline-flex items-center justify-center rounded-full w-14 h-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(139,94,60,0.22), rgba(139,94,60,0.07))",
            border: "1.5px solid rgba(139,94,60,0.42)",
            boxShadow: hovered
              ? "0 0 26px rgba(139,94,60,0.55), 0 0 55px rgba(139,94,60,0.20)"
              : "0 0 14px rgba(139,94,60,0.22)",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <Icon
            size={22}
            style={{
              color: GOLD,
              filter: hovered
                ? "drop-shadow(0 0 8px rgba(139,94,60,0.85))"
                : "drop-shadow(0 0 5px rgba(139,94,60,0.55))",
            }}
            strokeWidth={1.5}
          />
        </div>
        <h3
          className="font-display text-lg mb-2 leading-tight"
          style={{ color: BROWN }}
        >
          {feature.title}
        </h3>
        <p
          className="text-sm leading-relaxed font-body"
          style={{ color: WARM }}
        >
          {feature.desc}
        </p>
        <div
          className="absolute bottom-0 left-0 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139,94,60,0.65), transparent)",
            opacity: hovered ? 1 : 0.25,
            transition: "opacity 0.3s ease",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative section-padding overflow-hidden section-bg-cream"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0, opacity: 0.18 }}
      >
        <CanvasErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Suspense fallback={null}>
              <BackgroundScene />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,94,60,0.10) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.08) 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] mb-3 font-accent"
            style={{ color: GOLD }}
          >
            Our Promise to You
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl mb-4 gold-gradient-text leading-tight"
          >
            Why Choose Snehal Pawar?
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-divider mx-auto mb-5"
            style={{ maxWidth: "200px" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg max-w-2xl mx-auto font-body"
            style={{ color: WARM }}
          >
            Experience luxury beauty artistry trusted by brides and celebrities
            across Amravati &amp; Maharashtra
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((feature, i) => (
            <FeatureCard key={feature.number} feature={feature} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center py-7 rounded-xl glass-ultra"
              style={{
                border: "1.5px solid rgba(139,94,60,0.35)",
                boxShadow:
                  "0 0 24px rgba(139,94,60,0.12), 0 4px 20px rgba(107,63,31,0.06)",
              }}
              data-ocid={`why-choose.stat.${idx + 1}`}
            >
              <div className="font-display text-3xl sm:text-4xl font-bold mb-1 gold-gradient-text">
                {stat.value}
              </div>
              <div
                className="text-xs uppercase tracking-widest font-accent"
                style={{ color: WARM }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
