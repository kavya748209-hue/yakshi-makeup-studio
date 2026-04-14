import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I book an appointment with Yakshi Makeup Studio?",
    answer:
      "You can book by calling or WhatsApp-ing us at 08766367033. We recommend booking at least 4–6 weeks in advance for bridal makeup and 1–2 weeks for party/event makeup. We'll confirm your appointment within 24 hours.",
  },
  {
    question: "Do you offer a bridal trial session?",
    answer:
      "Yes! We strongly recommend a bridal trial 1–2 months before your wedding day. This allows us to perfect your look, understand your preferences, and ensure everything is flawless on the big day. Trial sessions are available at our studio.",
  },
  {
    question: "What makeup brands do you use?",
    answer:
      "We exclusively use premium international brands including MAC, NARS, Charlotte Tilbury, Huda Beauty, Giorgio Armani, Dior, and top Indian luxury brands. All products are skin-tested and safe for sensitive skin.",
  },
  {
    question: "Do you travel to the client's location?",
    answer:
      "Yes, we provide home/venue service across Delhi NCR including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Travel charges may apply based on distance. Please call us to discuss your requirements.",
  },
  {
    question: "How long does bridal makeup take?",
    answer:
      "Bridal makeup typically takes 2–3 hours for the complete look including base, eyes, lips, and finishing. Pre-bridal prep and elaborate looks may take longer. We always recommend starting early on the wedding day.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Appointments can be rescheduled up to 48 hours before with no charge. Cancellations within 24 hours may incur a cancellation fee. Bridal bookings require a 30% advance payment which is non-refundable upon cancellation.",
  },
  {
    question: "Do you customize looks for different skin tones and types?",
    answer:
      "Absolutely! Yakshi specializes in customizing every look for the client's unique skin tone, undertone, and skin type. Whether you have dry, oily, or sensitive skin, we prep and create makeup that lasts and enhances your natural beauty.",
  },
  {
    question: "Can I see your work with celebrities?",
    answer:
      "Yes! Check our gallery and Instagram @yakshimakeover to see celebrity work, editorial looks, and before/after transformations. We've worked with Bollywood celebrities, models, and prominent personalities across Delhi NCR.",
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
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "oklch(0.06 0 0)" }}
    >
      {/* Enhanced ambient glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[600px] w-[800px] rounded-full"
          style={{
            background: "oklch(0.68 0.16 90 / 0.06)",
            filter: "blur(160px)",
          }}
        />
      </div>

      {/* Top-right gold blob */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Decorative borders with enhanced glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #d4af37 50%, transparent)",
          opacity: 0.45,
          boxShadow: "0 0 10px rgba(212,175,55,0.25)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #d4af37 50%, transparent)",
          opacity: 0.28,
          boxShadow: "0 0 8px rgba(212,175,55,0.15)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{
              color: "#d4af37",
              textShadow: "0 0 16px rgba(212,175,55,0.5)",
            }}
          >
            Got Questions?
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #d4af37 0%, #f5e09a 50%, #b8962e 100%)",
              }}
            >
              Frequently Asked
            </span>
            <br />
            <span className="text-foreground/90">Questions</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to know before booking
          </p>
          {/* Gold divider */}
          <div className="mx-auto mt-8 flex items-center gap-3 justify-center">
            <div
              className="h-px w-16"
              style={{
                background: "linear-gradient(to right, transparent, #d4af37)",
                boxShadow: "0 0 6px rgba(212,175,55,0.3)",
              }}
            />
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{
                background: "#d4af37",
                boxShadow:
                  "0 0 10px rgba(212,175,55,0.8), 0 0 20px rgba(212,175,55,0.3)",
              }}
            />
            <div
              className="h-px w-16"
              style={{
                background: "linear-gradient(to left, transparent, #d4af37)",
                boxShadow: "0 0 6px rgba(212,175,55,0.3)",
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
            const bgColor =
              index % 2 === 0 ? "oklch(0.09 0 0)" : "oklch(0.08 0 0)";
            const itemKey = faq.question
              .slice(0, 30)
              .replace(/\s+/g, "-")
              .toLowerCase();

            return (
              <motion.div
                key={itemKey}
                variants={itemVariants}
                data-ocid={`faq.item.${index + 1}`}
                className="relative rounded-xl border transition-all duration-300"
                style={{
                  borderColor: isOpen
                    ? "rgba(212,175,55,0.55)"
                    : "oklch(0.18 0 0)",
                  background: isOpen ? "oklch(0.10 0 0)" : bgColor,
                  boxShadow: isOpen
                    ? "0 0 32px rgba(212,175,55,0.16), 0 0 60px rgba(212,175,55,0.06)"
                    : "none",
                }}
              >
                {/* Gold left accent bar with enhanced glow */}
                <motion.span
                  aria-hidden="true"
                  animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full origin-top"
                  style={{
                    background: "linear-gradient(to bottom, #d4af37, #b8962e)",
                    boxShadow: "-3px 0 12px rgba(212,175,55,0.55)",
                  }}
                />

                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  data-ocid={`faq.toggle.${index + 1}`}
                  className="relative flex w-full items-start justify-between gap-4 px-6 py-5 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/50"
                >
                  <span
                    className="pl-3 text-base md:text-lg font-semibold leading-snug transition-colors duration-300"
                    style={{
                      color: isOpen ? "#d4af37" : "oklch(0.85 0 0)",
                      textShadow: isOpen
                        ? "0 0 20px rgba(212,175,55,0.3)"
                        : "none",
                    }}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mt-0.5 flex-shrink-0 rounded-full border p-1 transition-colors duration-300"
                    style={{
                      borderColor: isOpen
                        ? "rgba(212,175,55,0.65)"
                        : "oklch(0.25 0 0)",
                      color: isOpen ? "#d4af37" : "oklch(0.55 0 0)",
                      background: isOpen
                        ? "rgba(212,175,55,0.12)"
                        : "transparent",
                      boxShadow: isOpen
                        ? "0 0 10px rgba(212,175,55,0.3)"
                        : "none",
                    }}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
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
                              "linear-gradient(to right, #d4af3760, #d4af3728, transparent)",
                            boxShadow: "0 0 6px rgba(212,175,55,0.15)",
                          }}
                        />
                        <p className="text-muted-foreground text-base leading-relaxed">
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
          className="mt-14 text-center"
        >
          <p className="text-muted-foreground text-base">
            Still have questions?{" "}
            <a
              href="https://wa.me/918766367033"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 transition-colors duration-200"
              style={{ color: "#d4af37", textDecorationColor: "#d4af3777" }}
            >
              Chat with us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
