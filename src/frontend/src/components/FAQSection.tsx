import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How far in advance should I book bridal makeup?",
    answer:
      "We recommend booking at least 3-4 months in advance for wedding season (October-February). For other months, 4-6 weeks notice is usually sufficient. Contact us early to secure your date!",
  },
  {
    question: "Do you offer a bridal trial session?",
    answer:
      "Absolutely! We strongly recommend a bridal trial 2-4 weeks before the wedding. This helps us perfect your look and gives you peace of mind on the big day.",
  },
  {
    question: "What is included in the bridal package?",
    answer:
      "Bridal packages include pre-bridal consultation, trial session, wedding day makeup, touch-up kit, and post-application guidance. Each package is customized to your needs.",
  },
  {
    question: "Do you travel outside Amravati?",
    answer:
      "Yes! We travel across Maharashtra for weddings. Travel charges apply based on distance. Please contact us for out-of-city bookings.",
  },
  {
    question: "What are the academy course durations?",
    answer:
      "We offer short-term weekend courses (1-2 months), full professional diploma courses (3-6 months), and advanced certification programs. All include hands-on practice.",
  },
  {
    question: "Which makeup products do you use?",
    answer:
      "We use premium international and Indian brands including MAC, Kryolan, Charlotte Tilbury, Bobbi Brown, and Huda Beauty — all skin-tested and long-lasting.",
  },
  {
    question: "Do you provide airbrush makeup?",
    answer:
      "Yes! Our airbrush makeup uses professional-grade equipment for a flawless, lightweight finish that lasts 12-16 hours and photographs beautifully.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Simply call/WhatsApp us at 09561548151 or fill out the contact form on our website. We'll get back to you within 24 hours to confirm your appointment.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      data-ocid="faq.section"
      className="relative section-padding section-bg-cream overflow-hidden"
    >
      {/* Ambient orbs */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[800px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(139,94,60,0.07) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />
      </div>
      <div
        className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,149,106,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center gold-line"
        >
          <p
            className="font-accent text-xs uppercase tracking-[3px] mb-3"
            style={{ color: "#8b5e3c", letterSpacing: "3px" }}
          >
            Got Questions?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl gradient-text leading-tight mb-5">
            Frequently Asked Questions
          </h2>
          <p
            className="font-body text-lg max-w-xl mx-auto"
            style={{ color: "#8b5e3c" }}
          >
            Everything you need to know before booking with us
          </p>
          <div className="mx-auto mt-8 flex items-center gap-3 justify-center">
            <div
              className="h-px w-16"
              style={{
                background: "linear-gradient(to right, transparent, #8b5e3c)",
              }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "#8b5e3c",
                boxShadow: "0 0 10px rgba(139,94,60,0.8)",
              }}
            />
            <div
              className="h-px w-16"
              style={{
                background: "linear-gradient(to left, transparent, #8b5e3c)",
              }}
            />
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3"
          data-ocid="faq.list"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemKey = faq.question
              .slice(0, 30)
              .replace(/\s+/g, "-")
              .toLowerCase();

            return (
              <motion.div
                key={itemKey}
                variants={itemVariants}
                data-ocid={`faq.item.${index + 1}`}
                className="relative card-premium overflow-hidden"
                style={{
                  borderColor: isOpen
                    ? "rgba(139,94,60,0.55)"
                    : "rgba(139,94,60,0.25)",
                  background: isOpen
                    ? "rgba(255,255,255,0.90)"
                    : "rgba(255,255,255,0.65)",
                  boxShadow: isOpen
                    ? "0 0 32px rgba(139,94,60,0.18), 0 0 60px rgba(139,94,60,0.06), 0 8px 30px rgba(107,63,31,0.08)"
                    : "0 4px 16px rgba(107,63,31,0.06)",
                  transition:
                    "border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
              >
                {/* Gold left accent */}
                <motion.span
                  aria-hidden="true"
                  animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full origin-top"
                  style={{
                    background: "linear-gradient(to bottom, #8b5e3c, #6b3f1f)",
                    boxShadow: "-2px 0 12px rgba(139,94,60,0.50)",
                  }}
                />

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  data-ocid={`faq.toggle.${index + 1}`}
                  className="relative flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2"
                  style={
                    {
                      focusRingColor: "rgba(201,168,76,0.50)",
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="pl-3 font-display text-base md:text-lg font-semibold leading-snug transition-colors duration-300"
                    style={{
                      color: isOpen ? "#6b3f1f" : "#3d2817",
                    }}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    className="mt-0.5 flex-shrink-0 rounded-full border p-1.5 transition-all duration-300"
                    style={{
                      borderColor: isOpen
                        ? "rgba(139,94,60,0.65)"
                        : "rgba(139,94,60,0.30)",
                      color: isOpen ? "#6b3f1f" : "#8b5e3c",
                      background: isOpen
                        ? "rgba(139,94,60,0.12)"
                        : "transparent",
                      boxShadow: isOpen
                        ? "0 0 10px rgba(139,94,60,0.30)"
                        : "none",
                    }}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-10">
                        <div
                          className="h-px w-full mb-4"
                          style={{
                            background:
                              "linear-gradient(to right, rgba(139,94,60,0.5), rgba(139,94,60,0.2), transparent)",
                          }}
                        />
                        <p
                          className="font-body text-base leading-relaxed"
                          style={{ color: "#5a3a22" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-base" style={{ color: "#8b5e3c" }}>
            Still have questions?{" "}
            <a
              href="https://wa.me/919561548151"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 transition-colors duration-200"
              style={{
                color: "#8b5e3c",
                textDecorationColor: "rgba(139,94,60,0.5)",
              }}
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
