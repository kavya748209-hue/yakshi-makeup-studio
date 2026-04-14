import type {
  CelebrityWork,
  FAQ,
  GalleryImage,
  Service,
  Testimonial,
  WhyChoosePoint,
} from "../types";

export const studioInfo = {
  name: "Yakshi Makeup & Nail Studio",
  shortName: "Yakshi",
  tagline: "Where Artistry Meets Luxury",
  subTagline: "Bridal Makeup & Nail Art in Delhi NCR",
  description:
    "Delhi NCR's most sought-after luxury bridal makeup and nail art studio. Trusted by brides, celebrities, and discerning clients who demand nothing but perfection.",
  address: "Delhi NCR, India",
  phone: "08766367033",
  phoneLink: "tel:+918766367033",
  instagram: "yakshimakeover",
  instagramUrl: "https://instagram.com/yakshimakeover",
  whatsappUrl: "https://wa.me/918766367033",
  email: "book@yakshimakeupart.com",
  experience: "8+ Years",
  clientsServed: "2000+",
  bridesBeautified: "500+",
  awardsWon: "12+",
};

export const services: Service[] = [
  {
    id: "bridal-complete",
    title: "Bridal Complete Package",
    description:
      "The ultimate bridal transformation — from mehndi to reception, every look crafted to perfection with luxury products and expert artistry.",
    price: "₹15,000 onwards",
    duration: "4–6 hours",
    icon: "👰",
    features: [
      "Pre-bridal skin consultation",
      "HD airbrush foundation",
      "Customised eye artistry",
      "Luxury lash application",
      "Draping & blouse pinning",
      "Touch-up kit included",
    ],
    popular: true,
  },
  {
    id: "engagement-makeup",
    title: "Engagement & Sangeet",
    description:
      "Radiant, photogenic looks designed for your pre-wedding celebrations that last through the night.",
    price: "₹8,000 onwards",
    duration: "2–3 hours",
    icon: "💍",
    features: [
      "Long-lasting formulas",
      "Shimmer & glow finish",
      "Customised eye look",
      "Contouring & highlight",
    ],
  },
  {
    id: "nail-art-luxury",
    title: "Luxury Nail Art",
    description:
      "Premium gel extensions, 3D nail art, ombre, and bridal nail designs that complement your overall look.",
    price: "₹2,500 onwards",
    duration: "1.5–3 hours",
    icon: "💅",
    features: [
      "Gel extensions & overlays",
      "3D embellishments",
      "Bridal nail sets",
      "Ombre & chrome effects",
    ],
  },
  {
    id: "party-glam",
    title: "Party & Event Glam",
    description:
      "Elevate your look for cocktail parties, corporate events, festive celebrations, and red carpet moments.",
    price: "₹4,000 onwards",
    duration: "1.5–2 hours",
    icon: "✨",
    features: [
      "Customised look planning",
      "Smokey eye mastery",
      "Bold lip options",
      "Long-wearing finish",
    ],
  },
  {
    id: "airbrush-makeup",
    title: "HD Airbrush Makeup",
    description:
      "Flawless, camera-ready finish using professional airbrush technology. Ideal for shoots, films, and television.",
    price: "₹6,000 onwards",
    duration: "2 hours",
    icon: "🎨",
    features: [
      "Silicone-based formula",
      "16-hour hold",
      "Sweat & humidity resistant",
      "Perfect for photography",
    ],
  },
  {
    id: "celebrity-style",
    title: "Celebrity Style Makeup",
    description:
      "Signature looks inspired by Bollywood's finest. Recreate your favourite celebrity look with professional artistry.",
    price: "₹10,000 onwards",
    duration: "3 hours",
    icon: "⭐",
    features: [
      "Bollywood-inspired looks",
      "Premium luxury brands",
      "HD perfecting techniques",
      "Brow sculpting",
    ],
  },
  {
    id: "mehendi-bride",
    title: "Mehendi & Haldi Look",
    description:
      "Traditional yet contemporary looks designed for your Mehendi and Haldi ceremonies.",
    price: "₹5,000 onwards",
    duration: "2 hours",
    icon: "🌸",
    features: [
      "Natural dewy finish",
      "Floral accents",
      "Pastel eye art",
      "Skin-friendly products",
    ],
  },
  {
    id: "nail-care",
    title: "Nail Care & Spa",
    description:
      "Indulgent manicure and pedicure treatments using luxury products for perfectly groomed hands and feet.",
    price: "₹1,200 onwards",
    duration: "1–2 hours",
    icon: "🌺",
    features: [
      "Paraffin treatment",
      "Cuticle care",
      "Gel polish application",
      "Hand & foot massage",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Noida, Delhi NCR",
    rating: 5,
    review:
      "Yakshi made me look absolutely breathtaking on my wedding day! Her attention to detail is unparalleled — every glance in the mirror made me feel like a queen. My guests couldn't stop complimenting my look throughout the entire day.",
    occasion: "Bridal Makeup",
    date: "November 2024",
  },
  {
    id: "t2",
    name: "Anjali Gupta",
    location: "Gurgaon, Haryana",
    rating: 5,
    review:
      "I've been to many makeup artists but Yakshi is on another level entirely. My nail art for the wedding was exquisite — 3D floral designs with real gold leaf. I received so many compliments and everyone kept asking who did my nails!",
    occasion: "Bridal Nails & Makeup",
    date: "December 2024",
  },
  {
    id: "t3",
    name: "Neha Malhotra",
    location: "South Delhi",
    rating: 5,
    review:
      "Professional, punctual, and incredibly talented. Yakshi understood exactly what I wanted for my Sangeet and turned it into reality — even better than I imagined! The HD airbrush makeup lasted through 6 hours of dancing.",
    occasion: "Sangeet & Engagement",
    date: "January 2025",
  },
  {
    id: "t4",
    name: "Ritu Agarwal",
    location: "Faridabad",
    rating: 5,
    review:
      "Yakshi is a true artist in every sense. I booked her for my daughter's wedding and she transformed her into an absolute goddess. The bridal look was perfect — traditional yet modern. Worth every rupee and more.",
    occasion: "Bridal Complete Package",
    date: "February 2025",
  },
  {
    id: "t5",
    name: "Simran Kapoor",
    location: "Dwarka, Delhi",
    rating: 5,
    review:
      "I saw Yakshi's work on Instagram and decided to book her for my reception. Best decision ever! She created a stunning editorial look that photographed beautifully. I felt like a celebrity walking my own red carpet.",
    occasion: "Reception Makeup",
    date: "March 2025",
  },
];

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "How far in advance should I book for bridal makeup?",
    answer:
      "We recommend booking at least 3–6 months in advance for bridal packages, especially for peak wedding seasons (October–March). Popular dates fill up quickly. For party or event makeup, 2–4 weeks' notice is ideal. Early bookings receive a special complimentary pre-bridal skin consultation.",
  },
  {
    id: "f2",
    question: "Do you offer a trial makeup session before the wedding?",
    answer:
      "Absolutely! A bridal trial is strongly recommended and included in our premium bridal packages. During the trial, we finalise your look, test products on your skin, and ensure you're 100% happy. This session typically takes 2–3 hours and is conducted 2–4 weeks before your wedding.",
  },
  {
    id: "f3",
    question: "What makeup brands do you use?",
    answer:
      "We exclusively use premium luxury brands including MAC, Charlotte Tilbury, NARS, Armani Beauty, Huda Beauty, and Pat McGrath for makeup. For nails, we use OPI, Gelish, and CND Shellac. All products are carefully selected for Indian skin tones and climate conditions.",
  },
  {
    id: "f4",
    question: "Do you provide at-home or venue makeup services?",
    answer:
      "Yes! We offer doorstep bridal and party makeup services across Delhi NCR including Gurgaon, Noida, Faridabad, and Ghaziabad. A travel surcharge applies based on distance. Contact us for a custom quote for your venue.",
  },
  {
    id: "f5",
    question: "How long does bridal makeup typically last?",
    answer:
      "Our bridal looks are designed to last 12–16+ hours using professional long-wearing techniques including airbrush application, setting sprays, and waterproof products. We also provide a personalised touch-up kit to keep you fresh throughout the day.",
  },
  {
    id: "f6",
    question: "Can you accommodate large bridal parties?",
    answer:
      "Yes, we handle complete bridal parties including the bride, bridesmaids, mother of bride, and family members. Our team of trained artists ensures everyone looks their best with timely, coordinated service. Please book in advance for large groups.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/hero-bride.png",
    alt: "Stunning bridal look",
    category: "bridal",
    caption: "Royal Bridal Transformation",
  },
  {
    id: "g2",
    src: "/assets/nail-art-1.png",
    alt: "Luxury nail art",
    category: "nails",
    caption: "Bridal Nail Artistry",
  },
  {
    id: "g3",
    src: "/assets/celebrity-1.png",
    alt: "Celebrity makeup",
    category: "celebrity",
    caption: "Celebrity Editorial Look",
  },
  {
    id: "g4",
    src: "/assets/bridal-gold.png",
    alt: "Golden bridal look",
    category: "bridal",
    caption: "Gold Glamour Bridal",
  },
  {
    id: "g5",
    src: "/assets/nail-art-2.png",
    alt: "Nail art design",
    category: "nails",
    caption: "3D Nail Embellishments",
  },
  {
    id: "g6",
    src: "/assets/bridal-lehenga.png",
    alt: "Bridal lehenga look",
    category: "bridal",
    caption: "Traditional Bridal Grandeur",
  },
  {
    id: "g7",
    src: "/assets/nail-art-3.png",
    alt: "Premium nail design",
    category: "nails",
    caption: "Luxury Gel Art",
  },
  {
    id: "g8",
    src: "/assets/celebrity-2.png",
    alt: "Celebrity collaboration",
    category: "celebrity",
    caption: "Bollywood Glam",
  },
  {
    id: "g9",
    src: "/assets/bridal-lipstick.png",
    alt: "Bridal lip art",
    category: "bridal",
    caption: "Perfect Bridal Lips",
  },
  {
    id: "g10",
    src: "/assets/celebrity-3.png",
    alt: "Star collaboration",
    category: "celebrity",
    caption: "Red Carpet Ready",
  },
];

export const whyChooseUs: WhyChoosePoint[] = [
  {
    id: "w1",
    title: "Celebrity-Trusted Artistry",
    description:
      "Our work has graced Bollywood sets, TV productions, and red carpet events. When celebrities want perfection, they choose Yakshi.",
    icon: "⭐",
    stat: "50+ Celebs",
  },
  {
    id: "w2",
    title: "Premium Luxury Products",
    description:
      "We use only the world's finest makeup brands — MAC, Charlotte Tilbury, NARS, and Armani — curated for Indian skin tones.",
    icon: "💎",
    stat: "20+ Luxury Brands",
  },
  {
    id: "w3",
    title: "8+ Years of Mastery",
    description:
      "With over 8 years of professional experience and 2000+ happy clients, we bring unmatched expertise to every look.",
    icon: "🏆",
    stat: "2000+ Clients",
  },
  {
    id: "w4",
    title: "Personalised Perfection",
    description:
      "Every face tells a unique story. We tailor every look to your features, skin tone, and personal style for results that are unmistakably you.",
    icon: "✨",
    stat: "100% Custom",
  },
];

export const celebrityWorks: CelebrityWork[] = [
  {
    id: "c1",
    title: "Bollywood Film Productions",
    description:
      "Trusted makeup artist for multiple Bollywood productions and music video shoots in Delhi NCR.",
    image: "/assets/celebrity-1.png",
  },
  {
    id: "c2",
    title: "Television & Digital Stars",
    description:
      "Go-to artist for popular TV personalities and digital influencers for their on-screen and social media appearances.",
    image: "/assets/celebrity-2.png",
  },
  {
    id: "c3",
    title: "Fashion Week & Runways",
    description:
      "Backstage artistry for Delhi fashion shows and designer runway presentations.",
    image: "/assets/celebrity-3.png",
  },
];
