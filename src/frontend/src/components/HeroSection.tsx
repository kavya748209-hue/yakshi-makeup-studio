import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import {
  Component,
  Fragment,
  Suspense,
  useEffect,
  useMemo,
  useRef,
} from "react";
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
  componentDidCatch(_error: Error, _info: ErrorInfo) {}
  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}

/* ─── Golden Particles ─── */
function GoldenParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 120;
  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const speeds: number[] = [];
    const phases: number[] = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10,
        ),
      );
      speeds.push(0.25 + Math.random() * 0.6);
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
            0.6,
        pos.y +
          Math.cos(t * particles.speeds[idx] * 0.2 + particles.phases[idx]) *
            0.9,
        pos.z,
      );
      const scale =
        0.035 +
        Math.sin(t * particles.speeds[idx] + particles.phases[idx]) * 0.012;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(idx, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#8b5e3c"
        emissive="#6b3f1f"
        emissiveIntensity={0.8}
        roughness={0.15}
        metalness={0.9}
      />
    </instancedMesh>
  );
}

/* ─── Floating Torus Rings ─── */
function TorusRing({
  position,
  scale,
  phase,
}: { position: [number, number, number]; scale: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.15 + phase;
    ref.current.rotation.y = t * 0.22 + phase * 0.5;
    ref.current.position.y = position[1] + Math.sin(t * 0.4 + phase) * 0.6;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1.2, 0.04, 16, 80]} />
      <meshStandardMaterial
        color="#8b5e3c"
        emissive="#6b3f1f"
        emissiveIntensity={0.5}
        roughness={0.05}
        metalness={1}
        wireframe={false}
      />
    </mesh>
  );
}

/* ─── Petal Data ─── */
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
  const petalCount = 20;
  const refs = useRef<THREE.Mesh[]>([]);
  const data = useMemo<PetalData[]>(
    () =>
      Array.from({ length: petalCount }, () => ({
        x: (Math.random() - 0.5) * 20,
        y: Math.random() * 16 + 4,
        z: (Math.random() - 0.5) * 8,
        speed: 0.25 + Math.random() * 0.45,
        drift: (Math.random() - 0.5) * 0.008,
        rotSpeed: (Math.random() - 0.5) * 0.018,
        phase: Math.random() * Math.PI * 2,
        scale: 0.1 + Math.random() * 0.13,
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
      if (mesh.position.y < -9) {
        mesh.position.y = 9;
        mesh.position.x = (Math.random() - 0.5) * 20;
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
            color="#c4956a"
            emissive="#8b5e3c"
            emissiveIntensity={0.35}
            side={THREE.DoubleSide}
            transparent
            opacity={0.55}
            roughness={0.85}
          />
        </mesh>
      ))}
    </>
  );
}

/* ─── Distort Orb ─── */
function DistortOrb({
  position,
  color,
  emissive,
}: { position: [number, number, number]; color: string; emissive: string }) {
  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh position={position}>
        <sphereGeometry args={[0.85, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.4}
          distort={0.4}
          speed={1.4}
          roughness={0.15}
          metalness={0.7}
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

/* ─── Camera Parallax ─── */
function CameraParallax() {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 1.2;
      target.current.y = -(e.clientY / window.innerHeight - 0.5) * 0.7;
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

/* ─── 3D Scene ─── */
function Scene() {
  return (
    <>
      {/* Warm cream-toned ambient + gold point lights */}
      <ambientLight intensity={2.0} color="#fff8ee" />
      <pointLight position={[6, 6, 4]} intensity={2.5} color="#8b5e3c" />
      <pointLight position={[-6, -3, 4]} intensity={1.8} color="#e8c4a0" />
      <pointLight position={[0, 10, -4]} intensity={1.2} color="#fdf8f3" />
      <CameraParallax />
      <GoldenParticles />
      <TorusRing position={[5, 1, -3]} scale={1.1} phase={0} />
      <TorusRing position={[-5, -1, -4]} scale={0.8} phase={1.2} />
      <TorusRing position={[3, 3, -5]} scale={0.6} phase={2.4} />
      <RosePetals />
      <DistortOrb position={[-4, 2, -5]} color="#e8c4a0" emissive="#8b5e3c" />
      <DistortOrb position={[4, -2.5, -6]} color="#8b5e3c" emissive="#6b3f1f" />
      <Sparkles
        count={80}
        scale={[20, 16, 8]}
        size={1.5}
        speed={0.15}
        color="#8b5e3c"
        opacity={0.45}
      />
    </>
  );
}

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.25 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" as const },
  },
};

/* ─── Sparkle dots data ─── */
const SPARKLE_DOTS = [
  { top: "12%", left: "10%", dur: 2.0, delay: 0.0 },
  { top: "70%", left: "18%", dur: 2.5, delay: 0.4 },
  { top: "28%", left: "82%", dur: 2.8, delay: 0.7 },
  { top: "62%", left: "85%", dur: 2.2, delay: 1.0 },
  { top: "8%", left: "58%", dur: 2.6, delay: 1.3 },
  { top: "88%", left: "52%", dur: 2.4, delay: 1.6 },
];

/* ─── Main HeroSection ─── */
export default function HeroSection() {
  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const handleBooking = () => {
    window.open(
      "https://wa.me/919561548151?text=Hi%20Snehal%20Pawar%2C%20I%20would%20like%20to%20book%20an%20appointment.",
      "_blank",
    );
  };
  const handlePortfolio = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-ocid="hero.section"
      style={{
        background:
          "linear-gradient(160deg, #fdf8f3 0%, #f5e6d3 45%, #fdf8f3 100%)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Subtle warm radial glow behind portrait ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 72% 50%, rgba(139,94,60,0.13) 0%, rgba(181,132,90,0.07) 40%, transparent 70%)",
          zIndex: 1,
        }}
      />
      {/* ── Top-left ambient warm blush ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-8%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(196,149,106,0.18) 0%, transparent 65%)",
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />

      {/* ── 3D Canvas — absolutely behind content ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        <CanvasErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 9], fov: 58 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      {/* ── Bottom section fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 120,
          background: "linear-gradient(to top, #fdf8f3 0%, transparent 100%)",
          zIndex: 3,
        }}
      />

      {/* ── Main content — z-10 above canvas ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-24"
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-10">
          {/* ── LEFT: Text content ── */}
          <motion.div
            className="flex-1 max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow label */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontSize: "0.68rem",
                  fontFamily: "var(--font-accent)",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8b5e3c",
                  background: "rgba(255,255,255,0.72)",
                  border: "1px solid rgba(139,94,60,0.35)",
                  boxShadow:
                    "0 2px 20px rgba(139,94,60,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <span style={{ color: "#8b5e3c" }}>✦</span>
                Award-Winning Makeup Artist
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
                  color: "#3d2817",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Makeup by
              </span>
              <span
                className="gradient-text"
                style={{
                  display: "block",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  filter: "drop-shadow(0 2px 16px rgba(139,94,60,0.22))",
                }}
              >
                Snehal Pawar
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                  color: "#6b3f1f",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  marginTop: "0.1rem",
                }}
              >
                &amp; Academy
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.05rem",
                color: "#8b5e3c",
                marginBottom: "0.6rem",
                letterSpacing: "0.03em",
              }}
            >
              Bridal Makeup &amp; Beauty Academy — Amravati, Maharashtra
            </motion.p>

            {/* Sub description */}
            <motion.p
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "#b5845a",
                marginBottom: "1.75rem",
                lineHeight: 1.7,
              }}
            >
              Transforming bridal dreams into timeless art. Expert in HD,
              airbrush, and luxury bridal looks with over a decade of perfecting
              beauty.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: "2rem",
              }}
            >
              <button
                type="button"
                className="btn-premium"
                onClick={handleBooking}
                data-ocid="hero.book_appointment_button"
              >
                Book Your Bridal Look
              </button>
              <button
                type="button"
                className="btn-outline-premium"
                onClick={handlePortfolio}
                data-ocid="hero.view_gallery_button"
              >
                View Gallery
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(139,94,60,0.22)",
              }}
            >
              {[
                { val: "500+", label: "Brides" },
                { val: "12+", label: "Years" },
                { val: "100+", label: "Students" },
              ].map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && (
                    <div
                      style={{
                        width: 1,
                        height: 32,
                        background: "rgba(139,94,60,0.3)",
                        margin: "0 20px",
                      }}
                    />
                  )}
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#8b5e3c",
                        textShadow: "0 0 18px rgba(139,94,60,0.35)",
                        lineHeight: 1.1,
                      }}
                    >
                      {stat.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#8b5e3c",
                        marginTop: 2,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Portrait image ── */}
          <motion.div
            style={{
              position: "relative",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            data-ocid="hero.portrait_card"
          >
            {/* Rotating decorative rings */}
            {[
              { size: 380, opacity: 0.2, dur: 22 },
              { size: 450, opacity: 0.1, dur: 28 },
              { size: 520, opacity: 0.055, dur: 35 },
            ].map(({ size, opacity, dur }) => (
              <motion.div
                key={size}
                style={{
                  position: "absolute",
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  border: `1px solid rgba(139,94,60,${opacity * 2.5})`,

                  pointerEvents: "none",
                  boxShadow: `0 0 14px rgba(139,94,60,${opacity * 0.6})`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: dur,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}

            {/* Back glow halo */}
            <div
              style={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,94,60,0.22) 0%, rgba(181,132,90,0.10) 40%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />

            {/* Gold sparkle dots */}
            {SPARKLE_DOTS.map((dot) => (
              <motion.div
                key={`sparkle-${dot.top}-${dot.left}`}
                style={{
                  position: "absolute",
                  top: dot.top,
                  left: dot.left,
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "rgba(139,94,60,0.9)",
                  boxShadow:
                    "0 0 10px rgba(139,94,60,0.8), 0 0 22px rgba(139,94,60,0.35)",
                  pointerEvents: "none",
                }}
                animate={{ scale: [1, 1.9, 1], opacity: [0.55, 1, 0.55] }}
                transition={{
                  duration: dot.dur,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: dot.delay,
                }}
              />
            ))}

            {/* Portrait with float animation */}
            <motion.div
              style={{ position: "relative", zIndex: 10 }}
              animate={{ y: [-9, 9, -9] }}
              transition={{
                duration: 6.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Glass frame */}
              <div
                style={{
                  width: 300,
                  height: 400,
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1.5px solid rgba(139,94,60,0.5)",
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.6) inset, 0 0 40px rgba(139,94,60,0.35), 0 0 80px rgba(139,94,60,0.15), 0 30px 70px rgba(107,63,31,0.25)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(2px)",
                  position: "relative",
                }}
              >
                <img
                  src="/assets/snehal-hero.png"
                  alt="Snehal Pawar - Bridal Makeup Artist"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.04) saturate(1.08) brightness(1.02)",
                  }}
                />
                {/* Warm shimmer overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(139,94,60,0.08) 0%, transparent 45%, rgba(196,149,106,0.06) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Top edge inner highlight */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "rgba(139,94,60,0.45)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Badge — top right */}
              <motion.div
                style={{
                  position: "absolute",
                  top: -12,
                  right: -24,
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-accent)",
                  letterSpacing: "0.12em",
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(139,94,60,0.45)",
                  color: "#8b5e3c",
                  boxShadow:
                    "0 4px 20px rgba(139,94,60,0.25), inset 0 1px 0 rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                }}
                animate={{ y: [-3, 4, -3] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                ✦ Bridal Expert
              </motion.div>

              {/* Badge — bottom left */}
              <motion.div
                style={{
                  position: "absolute",
                  bottom: -12,
                  left: -24,
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: "0.7rem",
                  fontFamily: "var(--font-accent)",
                  letterSpacing: "0.12em",
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(139,94,60,0.4)",
                  color: "#8b5e3c",
                  boxShadow:
                    "0 4px 20px rgba(139,94,60,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
                  backdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                }}
                animate={{ y: [4, -3, 4] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                ✦ 12+ Years Exp
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        type="button"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(139,94,60,0.65)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        onClick={handleScroll}
        aria-label="Scroll to next section"
        data-ocid="hero.scroll_down_button"
        whileHover={{ color: "rgba(139,94,60,1)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          Scroll to explore
        </span>
        <ChevronDown style={{ width: 18, height: 18 }} />
      </motion.button>
    </section>
  );
}
