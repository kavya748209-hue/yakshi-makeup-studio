import {
  Award,
  BookOpen,
  Brush,
  CheckCircle2,
  Clock,
  GraduationCap,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function FloatingOrbs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Large ambient orbs */}
      <div
        className="absolute rounded-full animate-float-slow"
        style={{
          width: 480,
          height: 480,
          top: "-15%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(139,94,60,0.12) 0%, rgba(107,63,31,0.06) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full animate-float"
        style={{
          width: 360,
          height: 360,
          bottom: "-10%",
          left: "-8%",
          background:
            "radial-gradient(circle, rgba(232,168,124,0.10) 0%, rgba(139,94,60,0.05) 40%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "-3s",
        }}
      />
      {/* Floating sparkle dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`orb-pos-${8 + ((i * 8) % 88)}-${10 + ((i * 13) % 80)}`}
          className="absolute rounded-full"
          style={{
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            background: `rgba(139,94,60,${0.3 + (i % 4) * 0.1})`,
            left: `${8 + ((i * 8) % 88)}%`,
            top: `${10 + ((i * 13) % 80)}%`,
            boxShadow: "0 0 8px rgba(139,94,60,0.4)",
          }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function GoldParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth;
    let w = canvas.width;
    canvas.height = canvas.offsetHeight;
    let h = canvas.height;
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
      op: Math.random() * 0.5 + 0.12,
    }));
    let raf: number;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,94,60,${p.op})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => {
      canvas.width = canvas.offsetWidth;
      w = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      h = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const courses = [
  {
    icon: Brush,
    title: "Foundation Course",
    subtitle: "Begin Your Journey",
    duration: "1 Month",
    fee: "\u20b98,000",
    popular: false,
    curriculum: [
      "Skincare prep & base application",
      "Eye makeup fundamentals",
      "Contouring & highlighting basics",
      "Day & party looks",
      "Makeup tools & hygiene",
    ],
    color: "#8b5e3c",
  },
  {
    icon: GraduationCap,
    title: "Professional Diploma",
    subtitle: "Complete Career Training",
    duration: "3 Months",
    fee: "\u20b925,000",
    popular: true,
    curriculum: [
      "HD & airbrush techniques",
      "Bridal look creation A\u2013Z",
      "Regional bridal styles",
      "Portfolio & client management",
      "Live model practice sessions",
    ],
    color: "#8b5e3c",
  },
  {
    icon: Sparkles,
    title: "Bridal Specialist",
    subtitle: "Intensive Bridal Training",
    duration: "2 Months",
    fee: "\u20b918,000",
    popular: false,
    curriculum: [
      "Luxury bridal looks",
      "Saree & lehenga styling",
      "Pre-bridal skin treatments",
      "On-location bridal shoots",
      "Business launch support",
    ],
    color: "#8b5e3c",
  },
  {
    icon: BookOpen,
    title: "Advanced Master Class",
    subtitle: "For Working Professionals",
    duration: "1 Week",
    fee: "\u20b95,000",
    popular: false,
    curriculum: [
      "Advanced airbrush skills",
      "Film & TV makeup standards",
      "Long-wear formula mastery",
      "Speed bridal techniques",
      "Certificate of completion",
    ],
    color: "#8b5e3c",
  },
];

const whyJoin = [
  {
    icon: Award,
    title: "Certified Courses",
    desc: "Industry-recognised certificate upon completion, backed by 10+ years of professional experience.",
  },
  {
    icon: Users,
    title: "500+ Alumni",
    desc: "Join a thriving community of 500+ trained artists working across Maharashtra and beyond.",
  },
  {
    icon: CheckCircle2,
    title: "Hands-On Training",
    desc: "Every session is practical \u2014 you apply, practice, and master. No purely theoretical classes.",
  },
  {
    icon: GraduationCap,
    title: "Job Placement",
    desc: "Career guidance, portfolio building, and direct referrals to salons and production houses.",
  },
];

const studentReviews = [
  {
    name: "Prachi Deshmukh",
    location: "Amravati, Maharashtra",
    rating: 5,
    text: "Snehal madam ka teaching ek dam practical hai. Har technique pe focus tha. Ab main freelance artist hoon aur regular clients milte hain. Best decision ever!",
  },
  {
    name: "Isha Kulkarni",
    location: "Nagpur, Maharashtra",
    rating: 5,
    text: "Professional diploma course ne meri zindagi badal di. Portfolio shoot, real clients, certification \u2014 sab kuch ek jagah mila. Highly recommend to every aspiring artist!",
  },
  {
    name: "Tanvi Rathore",
    location: "Akola, Maharashtra",
    rating: 5,
    text: "Foundation course bilkul beginner-friendly tha. Madam har student ko personally dhyan deti hain. Bahut kuch seekha \u2014 now I run my own studio!",
  },
];

export default function AcademyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi! I'm ${formData.name}. I'm interested in the ${formData.course} course. My contact: ${formData.phone} / ${formData.email}`;
    window.open(
      `https://wa.me/919561548151?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#fdf8f3" }}
      data-ocid="academy.page"
    >
      {/* \u2500\u2500 Hero \u2500\u2500 */}
      <section
        className="relative overflow-hidden py-32"
        style={{
          background:
            "linear-gradient(160deg, #fdf8f3 0%, #f5e6d3 50%, #fdf8f3 100%)",
        }}
      >
        <GoldParticlesCanvas />
        <FloatingOrbs />
        {/* Decorative rings */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(139,94,60,0.10)",
            zIndex: 0,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: "1px solid rgba(139,94,60,0.06)",
            zIndex: 0,
          }}
        />
        <div
          className="max-w-4xl mx-auto px-4 text-center relative"
          style={{ zIndex: 2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 glass-ultra px-5 py-2.5 rounded-full">
              <GraduationCap size={15} style={{ color: "#8b5e3c" }} />
              <span
                className="text-xs tracking-[0.3em] uppercase font-accent"
                style={{ color: "#8b5e3c" }}
              >
                Professional Makeup Academy
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display italic gradient-text mb-4"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1.12 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Beauty & Makeup
            <br />
            <span style={{ fontSize: "0.75em" }}>Academy</span>
          </motion.h1>

          <motion.p
            className="text-lg font-body mb-3 max-w-2xl mx-auto"
            style={{ color: "#8b5e3c" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Learn from a Certified Professional \u2014 Transform Your Passion
            into a Career
          </motion.p>

          <motion.p
            className="text-sm font-body mb-10 tracking-wide"
            style={{ color: "#6b3f1f" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            500+ Students Trained \u00b7 10+ Years Teaching \u00b7 Certified
            Courses
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#enroll"
              className="btn-premium"
              data-ocid="academy.hero.enroll_button"
            >
              Enroll Now
            </a>
            <a
              href="#courses"
              className="btn-outline-premium"
              data-ocid="academy.hero.courses_button"
            >
              View Courses
            </a>
          </motion.div>
        </div>
      </section>

      {/* \u2500\u2500 Stats Bar \u2500\u2500 */}
      <section
        className="py-10 border-y"
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(139,94,60,0.18)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: "500+", label: "Students Trained" },
              { val: "10+", label: "Years Teaching" },
              { val: "4", label: "Professional Courses" },
              { val: "100%", label: "Placement Support" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`academy.stat.${i + 1}`}
              >
                <p
                  className="text-3xl font-display font-bold gradient-text"
                  style={{ WebkitTextFillColor: "unset", color: "#8b5e3c" }}
                >
                  {s.val}
                </p>
                <p
                  className="text-sm font-body mt-1"
                  style={{ color: "#8b5e3c" }}
                >
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Courses Grid \u2500\u2500 */}
      <section
        id="courses"
        className="section-padding section-bg-cream relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,94,60,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Our Programmes
            </p>
            <h2 className="text-4xl md:text-5xl font-display italic gradient-text mb-5">
              Professional Courses
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 80 }} />
          </motion.div>

          <div
            className="grid md:grid-cols-2 gap-7"
            data-ocid="academy.courses.list"
          >
            {courses.map((course, i) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.title}
                  className="card-premium rounded-2xl p-8 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  data-ocid={`academy.course.item.${i + 1}`}
                >
                  {/* Ambient top-corner glow */}
                  <div
                    className="absolute top-0 right-0 rounded-bl-full pointer-events-none"
                    style={{
                      width: 120,
                      height: 120,
                      background:
                        "radial-gradient(circle, rgba(139,94,60,0.10) 0%, transparent 70%)",
                    }}
                  />

                  {course.popular && (
                    <div
                      className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-accent font-bold tracking-widest"
                      style={{
                        background: "linear-gradient(135deg,#8b5e3c,#6b3f1f)",
                        color: "#fdf8f3",
                        boxShadow: "0 4px 16px rgba(139,94,60,0.4)",
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(139,94,60,0.10)",
                        border: `1px solid ${course.color}44`,
                        boxShadow: `0 0 20px ${course.color}22`,
                      }}
                    >
                      <Icon size={24} style={{ color: course.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl font-display italic"
                        style={{ color: "#3d2817" }}
                      >
                        {course.title}
                      </h3>
                      <p
                        className="text-sm font-body"
                        style={{ color: "#8b5e3c" }}
                      >
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-7">
                    {course.curriculum.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm font-body"
                        style={{ color: "#5a3825" }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: "#8b5e3c", flexShrink: 0 }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center justify-between pt-5"
                    style={{ borderTop: "1px solid rgba(139,94,60,0.18)" }}
                  >
                    <div className="flex items-center gap-2">
                      <Clock size={14} style={{ color: "#8b5e3c" }} />
                      <span
                        className="text-sm font-body"
                        style={{ color: "#8b5e3c" }}
                      >
                        {course.duration}
                      </span>
                    </div>
                    <span
                      className="text-2xl font-display font-bold"
                      style={{
                        color: "#8b5e3c",
                        textShadow: "0 0 16px rgba(139,94,60,0.3)",
                      }}
                    >
                      {course.fee}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Why Join \u2500\u2500 */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5e6d3 0%, #fdf8f3 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,94,60,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Advantages
            </p>
            <h2 className="text-4xl font-display italic gradient-text mb-5">
              Why Join Our Academy
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 70 }} />
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyJoin.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="glass-medium rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 8px 40px rgba(139,94,60,0.2)",
                  }}
                  data-ocid={`academy.why.item.${i + 1}`}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(139,94,60,0.12)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      boxShadow: "0 0 20px rgba(139,94,60,0.18)",
                    }}
                  >
                    <Icon size={22} style={{ color: "#8b5e3c" }} />
                  </div>
                  <h4
                    className="font-display italic text-base mb-2"
                    style={{ color: "#3d2817" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs font-body leading-relaxed"
                    style={{ color: "#8b5e3c" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Student Testimonials \u2500\u2500 */}
      <section className="section-padding section-bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.35em] uppercase font-accent mb-3 text-gold">
              Student Stories
            </p>
            <h2 className="text-4xl font-display italic gradient-text mb-5">
              What Our Students Say
            </h2>
            <div className="divider-gold mx-auto" style={{ width: 70 }} />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-7">
            {studentReviews.map((review, i) => (
              <motion.div
                key={review.name}
                className="card-premium rounded-2xl p-7"
                initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`academy.review.item.${i + 1}`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }, (_, si) => (
                    <Star
                      key={`star-${review.name}-${si}`}
                      size={14}
                      fill="#8b5e3c"
                      style={{ color: "#8b5e3c" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm font-body leading-relaxed mb-5"
                  style={{ color: "#5a3825" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div
                  className="pt-4"
                  style={{ borderTop: "1px solid rgba(139,94,60,0.18)" }}
                >
                  <p
                    className="font-display italic text-sm"
                    style={{ color: "#6b3f1f" }}
                  >
                    {review.name}
                  </p>
                  <p className="text-xs font-body" style={{ color: "#8b5e3c" }}>
                    {review.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 Enrollment Form \u2500\u2500 */}
      <section
        id="enroll"
        className="section-padding relative overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #f5e6d3 0%, #fdf8f3 60%, #f5e6d3 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,94,60,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-2xl mx-auto px-4 relative" style={{ zIndex: 1 }}>
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap
              size={48}
              className="mx-auto mb-5"
              style={{
                color: "#8b5e3c",
                filter: "drop-shadow(0 0 14px rgba(139,94,60,0.4))",
              }}
            />
            <h2 className="text-4xl font-display italic gradient-text mb-3">
              Enroll in Our Academy
            </h2>
            <p className="font-body" style={{ color: "#8b5e3c" }}>
              Fill in your details and we&apos;ll connect you via WhatsApp.
              Limited seats available.
            </p>
          </motion.div>

          <motion.div
            className="glass-ultra rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="text-center py-8"
                data-ocid="academy.form.success_state"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(139,94,60,0.15)",
                    border: "1px solid rgba(139,94,60,0.4)",
                  }}
                >
                  <CheckCircle2 size={32} style={{ color: "#8b5e3c" }} />
                </div>
                <h3 className="text-2xl font-display italic gradient-text mb-2">
                  Enrollment Initiated!
                </h3>
                <p className="font-body" style={{ color: "#8b5e3c" }}>
                  Your WhatsApp has opened. We&apos;ll confirm your seat
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="academy.enrollment.form"
              >
                <div>
                  <label
                    htmlFor="enroll-name"
                    className="block text-sm font-body mb-1.5"
                    style={{ color: "#6b3f1f" }}
                  >
                    Full Name *
                  </label>
                  <input
                    id="enroll-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-body transition-smooth"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      color: "#3d2817",
                      outline: "none",
                    }}
                    placeholder="Your full name"
                    data-ocid="academy.form.name_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="enroll-phone"
                    className="block text-sm font-body mb-1.5"
                    style={{ color: "#6b3f1f" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="enroll-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-body transition-smooth"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      color: "#3d2817",
                      outline: "none",
                    }}
                    placeholder="Your mobile number"
                    data-ocid="academy.form.phone_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="enroll-email"
                    className="block text-sm font-body mb-1.5"
                    style={{ color: "#6b3f1f" }}
                  >
                    Email (Optional)
                  </label>
                  <input
                    id="enroll-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-body transition-smooth"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      color: "#3d2817",
                      outline: "none",
                    }}
                    placeholder="your@email.com"
                    data-ocid="academy.form.email_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="enroll-course"
                    className="block text-sm font-body mb-1.5"
                    style={{ color: "#6b3f1f" }}
                  >
                    Course Interest *
                  </label>
                  <select
                    id="enroll-course"
                    required
                    value={formData.course}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, course: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm font-body transition-smooth"
                    style={{
                      background: "rgba(255,255,255,0.8)",
                      border: "1px solid rgba(139,94,60,0.3)",
                      color: formData.course ? "#3d2817" : "#8b5e3c",
                      outline: "none",
                    }}
                    data-ocid="academy.form.course_select"
                  >
                    <option value="" disabled>
                      Select a course
                    </option>
                    <option value="Foundation Course">
                      Foundation Course \u2014 \u20b98,000
                    </option>
                    <option value="Professional Diploma">
                      Professional Diploma \u2014 \u20b925,000
                    </option>
                    <option value="Bridal Specialist">
                      Bridal Specialist \u2014 \u20b918,000
                    </option>
                    <option value="Advanced Master Class">
                      Advanced Master Class \u2014 \u20b95,000
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn-premium w-full mt-2"
                  data-ocid="academy.form.submit_button"
                >
                  Enroll via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
