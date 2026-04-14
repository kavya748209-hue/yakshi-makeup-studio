import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ChevronDown, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import { Component, Suspense, useEffect, useMemo, useRef } from "react";
import type { ErrorInfo, ReactNode } from "react";
import * as THREE from "three";

/* ─── Error Boundary ─── */
class CanvasErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback?: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Silently catch WebGL errors
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

/* ─── 3D Scene Components ─── */

function GoldenParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 80;

  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const speeds: number[] = [];
    const phases: number[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
        ),
      );
      speeds.push(0.3 + Math.random() * 0.7);
      phases.push(Math.random() * Math.PI * 2);
    }
    return { positions, speeds, phases };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    particles.positions.forEach((pos, idx) => {
      dummy.position.set(
        pos.x +
          Math.sin(t * particles.speeds[idx] * 0.3 + particles.phases[idx]) *
            0.5,
        pos.y +
          Math.cos(t * particles.speeds[idx] * 0.2 + particles.phases[idx]) *
            0.8,
        pos.z,
      );
      const scale =
        0.04 +
        Math.sin(t * particles.speeds[idx] + particles.phases[idx]) * 0.015;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(idx, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshStandardMaterial
        color="#d4af37"
        emissive="#d4af37"
        emissiveIntensity={2.0}
        roughness={0.1}
        metalness={0.9}
      />
    </instancedMesh>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5 + 1;
  });
  return (
    <mesh ref={ref} position={[4.5, 1, -2]}>
      <torusKnotGeometry args={[0.8, 0.2, 128, 32]} />
      <meshStandardMaterial
        color="#d4af37"
        emissive="#b8941f"
        emissiveIntensity={1.0}
        roughness={0.1}
        metalness={1}
        wireframe={false}
      />
    </mesh>
  );
}

function FloatingDiamond() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    ref.current.position.y =
      Math.cos(state.clock.elapsedTime * 0.4 + 1) * 0.6 - 1.5;
  });
  return (
    <mesh ref={ref} position={[-5, -1.5, -1.5]}>
      <octahedronGeometry args={[0.6, 0]} />
      <meshStandardMaterial
        color="#b76e79"
        emissive="#b76e79"
        emissiveIntensity={1.2}
        roughness={0.05}
        metalness={0.95}
      />
    </mesh>
  );
}

function FloatingRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 + 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.35 + 2) * 0.7 + 0.5;
  });
  return (
    <mesh ref={ref} position={[3, 0.5, -3]}>
      <torusGeometry args={[1.2, 0.08, 16, 60]} />
      <meshStandardMaterial
        color="#e8c84a"
        emissive="#d4af37"
        emissiveIntensity={1.0}
        roughness={0.05}
        metalness={1}
      />
    </mesh>
  );
}

interface PetalData {
  x: number;
  y: number;
  z: number;
  speed: number;
  drift: number;
  rotSpeed: number;
  phase: number;
  scale: number;
}

function RosePetals() {
  const petalCount = 18;
  const refs = useRef<THREE.Mesh[]>([]);
  const data = useMemo<PetalData[]>(
    () =>
      Array.from({ length: petalCount }, () => ({
        x: (Math.random() - 0.5) * 18,
        y: Math.random() * 14 + 4,
        z: (Math.random() - 0.5) * 6,
        speed: 0.3 + Math.random() * 0.5,
        drift: (Math.random() - 0.5) * 0.01,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        phase: Math.random() * Math.PI * 2,
        scale: 0.12 + Math.random() * 0.15,
      })),
    [],
  );

  useFrame((_, delta) => {
    refs.current.forEach((mesh, idx) => {
      if (!mesh) return;
      const d = data[idx];
      mesh.position.y -= d.speed * delta;
      mesh.position.x += d.drift;
      mesh.rotation.z += d.rotSpeed;
      mesh.rotation.x += d.rotSpeed * 0.5;
      if (mesh.position.y < -8) {
        mesh.position.y = 8;
        mesh.position.x = (Math.random() - 0.5) * 18;
      }
    });
  });

  return (
    <>
      {data.map((d, idx) => (
        <mesh
          key={`petal-${d.phase.toFixed(6)}`}
          ref={(el) => {
            if (el) refs.current[idx] = el;
          }}
          position={[d.x, d.y, d.z]}
          scale={[d.scale, d.scale * 0.7, 0.01]}
          rotation={[d.phase, d.phase * 0.5, 0]}
        >
          <planeGeometry args={[1, 1.4, 1, 1]} />
          <meshStandardMaterial
            color="#c2556d"
            emissive="#b76e79"
            emissiveIntensity={0.6}
            side={THREE.DoubleSide}
            transparent
            opacity={0.75}
            roughness={0.8}
          />
        </mesh>
      ))}
    </>
  );
}

function DistortOrb({
  position,
  color,
  emissive,
}: { position: [number, number, number]; color: string; emissive: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.1;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.7}
          distort={0.45}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function CameraParallax() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 1.5;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.8;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    camera.position.x += (target.current.x - camera.position.x) * 0.03;
    camera.position.y += (target.current.y - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#d4af37" />
      <pointLight position={[-5, -3, 3]} intensity={2.0} color="#b76e79" />
      <pointLight position={[0, 8, -4]} intensity={1.5} color="#e8c84a" />
      <CameraParallax />
      <GoldenParticles />
      <FloatingTorus />
      <FloatingDiamond />
      <FloatingRing />
      <RosePetals />
      <DistortOrb position={[-3.5, 2, -4]} color="#d4af37" emissive="#b8941f" />
      <DistortOrb position={[3, -2.5, -5]} color="#b76e79" emissive="#7a2d3d" />
      <Sparkles
        count={80}
        scale={[18, 14, 6]}
        size={2.5}
        speed={0.25}
        color="#d4af37"
        opacity={0.75}
      />
    </>
  );
}

/* ─── Text animation variants ─── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ─── Decorative ring component ─── */
function DecorativeRing({
  size,
  opacity,
  rotDuration,
}: { size: string; opacity: number; rotDuration: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-gold pointer-events-none"
      style={{
        width: size,
        height: size,
        opacity,
        boxShadow: `0 0 12px rgba(212,175,55,${opacity * 0.6})`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: rotDuration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  );
}

/* ─── Stat Badge ─── */
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="text-2xl font-bold gold-gradient-text font-display"
        style={{ textShadow: "0 0 20px rgba(212,175,55,0.4)" }}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

/* ─── Sparkle dot data ─── */
const SPARKLE_DOTS = [
  { top: "15%", left: "15%", animDuration: 2.0, animDelay: 0.0 },
  { top: "72%", left: "22%", animDuration: 2.4, animDelay: 0.3 },
  { top: "30%", left: "78%", animDuration: 2.8, animDelay: 0.6 },
  { top: "65%", left: "80%", animDuration: 2.2, animDelay: 0.9 },
  { top: "10%", left: "55%", animDuration: 2.6, animDelay: 1.2 },
  { top: "85%", left: "50%", animDuration: 2.3, animDelay: 1.5 },
];

/* ─── Main HeroSection ─── */
export default function HeroSection() {
  const handleScroll = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = () => {
    window.open(
      "https://wa.me/918766367033?text=Hi! I would like to book an appointment at Yakshi Makeup %26 Nail Studio.",
      "_blank",
    );
  };

  const handlePortfolio = () => {
    const gallery = document.getElementById("gallery");
    if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-dark-primary"
      data-ocid="hero.section"
    >
      {/* ── 3D Canvas Background — pointer-events-none CRITICAL ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <CanvasErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* ── Gradient overlay — reduced from /95 to /60 so content is visible ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Left-side dark panel so left text column stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a]/20" />
        {/* Bottom fade to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        {/* Subtle center gold glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 65% 50%, rgba(212,175,55,0.06) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Main content — z-10 sits above canvas (z-0) and overlay (z-[1]) ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtitle badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass-ultra text-gold"
                style={{ boxShadow: "0 0 18px rgba(212,175,55,0.20)" }}
              >
                <Star className="w-3 h-3 fill-current" />
                Delhi's Premier Celebrity Makeup Artist
              </span>
            </motion.div>

            {/* Main title */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-4"
              style={{
                fontFamily: '"Instrument Serif", "Playfair Display", serif',
              }}
            >
              <span className="block text-foreground/90">Yakshi</span>
              <span
                className="block gradient-text"
                style={{ textShadow: "0 0 30px rgba(212,175,55,0.25)" }}
              >
                Makeup &amp; Nail
              </span>
              <span className="block text-foreground/90">Studio</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-3 tracking-wide"
            >
              Bridal Makeup &amp; Nail Art in Delhi NCR
            </motion.p>

            {/* Celebrity trust badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-7"
            >
              <div className="flex">
                {(["s1", "s2", "s3", "s4", "s5"] as const).map((key) => (
                  <Star
                    key={key}
                    className="w-4 h-4 text-gold fill-current"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(212,175,55,0.7))",
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Trusted by{" "}
                <span className="text-gold font-semibold">
                  Bollywood Celebrities
                </span>{" "}
                &amp; Elite Brides
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                type="button"
                className="btn-gold flex items-center gap-2"
                onClick={handleBooking}
                data-ocid="hero.book_appointment_button"
              >
                <Phone className="w-4 h-4" />
                Book Appointment
              </button>
              <button
                type="button"
                className="btn-outline-gold"
                onClick={handlePortfolio}
                data-ocid="hero.view_portfolio_button"
              >
                View Portfolio
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-6 border-t border-gold/20"
            >
              <StatBadge value="500+" label="Brides" />
              <div className="h-8 w-px bg-gold/20" />
              <StatBadge value="100+" label="Celebrities" />
              <div className="h-8 w-px bg-gold/20" />
              <StatBadge value="5★" label="Rated" />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Portrait image ── */}
          <motion.div
            className="relative flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            data-ocid="hero.portrait_card"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <DecorativeRing size="380px" opacity={0.22} rotDuration={20} />
              <DecorativeRing size="440px" opacity={0.12} rotDuration={25} />
              <DecorativeRing size="500px" opacity={0.06} rotDuration={30} />
            </div>

            {/* Outer halo aura behind portrait */}
            <div
              className="absolute w-96 h-96 rounded-full pointer-events-none hero-glow-bg"
              style={{ zIndex: 0 }}
            />

            {/* Gold sparkle dots */}
            {SPARKLE_DOTS.map((dot) => (
              <motion.div
                key={`sparkle-${dot.top}-${dot.left}`}
                className="absolute w-2 h-2 rounded-full bg-gold pointer-events-none"
                style={{
                  top: dot.top,
                  left: dot.left,
                  boxShadow:
                    "0 0 12px rgba(212,175,55,0.9), 0 0 24px rgba(212,175,55,0.4)",
                }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: dot.animDuration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: dot.animDelay,
                }}
              />
            ))}

            {/* Portrait image with float animation */}
            <motion.div
              className="relative z-10"
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden animate-pulse-glow"
                style={{
                  width: "300px",
                  height: "400px",
                  border: "1.5px solid rgba(212,175,55,0.55)",
                  boxShadow:
                    "0 0 40px rgba(212,175,55,0.45), 0 0 90px rgba(212,175,55,0.20), 0 0 160px rgba(212,175,55,0.08), 0 25px 60px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src="/assets/hero-bride.png"
                  alt="Yakshi - Celebrity Makeup Artist"
                  className="w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(1.1)" }}
                />
                {/* Inner shimmer overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.10) 0%, transparent 50%, rgba(183,110,121,0.07) 100%)",
                  }}
                />
                {/* Top-edge inner highlight */}
                <div
                  className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                  style={{ background: "rgba(212,175,55,0.35)" }}
                />
              </div>

              {/* Floating badge: Celebrity Artist */}
              <motion.div
                className="absolute -top-3 -right-6 glass-ultra px-3 py-1.5 rounded-full text-xs font-semibold text-gold"
                style={{
                  boxShadow:
                    "0 0 22px rgba(212,175,55,0.38), 0 0 50px rgba(212,175,55,0.12)",
                }}
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                ✦ Celebrity Artist
              </motion.div>

              {/* Floating badge: 10+ Years */}
              <motion.div
                className="absolute -bottom-3 -left-6 glass-ultra px-3 py-1.5 rounded-full text-xs font-semibold text-rose-gold"
                style={{
                  boxShadow:
                    "0 0 22px rgba(183,110,121,0.35), 0 0 50px rgba(183,110,121,0.12)",
                }}
                animate={{ y: [3, -3, 3] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ✦ 10+ Years Exp
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gold/60 hover:text-gold transition-smooth cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onClick={handleScroll}
        aria-label="Scroll to next section"
        data-ocid="hero.scroll_down_button"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
