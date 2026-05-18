import type {
  CelebrityWork,
  FAQ,
  GalleryImage,
  Service,
  Testimonial,
  WhyChoosePoint,
} from "../types";

export const studioInfo = {
  name: "Makeup by Snehal Pawar and Academy",
  shortName: "Snehal Pawar",
  subtitle: "Beauty and Bridal Salon",
  tagline: "Where Beauty Meets Perfection",
  subTagline: "Premium Bridal Makeup & Beauty Academy in Amravati",
  description:
    "Amravati's most trusted beauty and bridal salon. Snehal Pawar brings 10+ years of expertise in bridal makeup, HD airbrush, and professional academy training to every client.",
  address:
    "Kondeshwar Vidyut Colony, Near Radhey Radhey Milk Dairy, Sai Nagar, Amravati, Maharashtra 444607",
  addressShort: "Sai Nagar, Amravati, Maharashtra",
  phone: "09561548151",
  phoneLink: "tel:+919561548151",
  instagram: "snehal_pawar_academy",
  instagramUrl: "https://instagram.com/snehal_pawar_academy",
  whatsappUrl: "https://wa.me/919561548151",
  email: "info@snehalpawaracademy.com",
  experience: "10+ Years",
  clientsServed: "1000+",
  bridesBeautified: "500+",
  studentsTrainedTag: "500+ Students Trained",
  awardsWon: "15+",
};

export const services: Service[] = [
  {
    id: "bridal-complete",
    title: "Bridal Complete Package",
    description:
      "The ultimate bridal transformation — from mehndi to reception, every look crafted to perfection with luxury products and expert artistry.",
    price: "₹12,000 onwards",
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
    price: "₹6,000 onwards",
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
    id: "hd-airbrush",
    title: "HD Airbrush Makeup",
    description:
      "Flawless, camera-ready finish using professional airbrush technology. Ideal for shoots, films, and special occasions.",
    price: "₹5,000 onwards",
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
    id: "party-glam",
    title: "Party & Event Glam",
    description:
      "Elevate your look for cocktail parties, corporate events, festive celebrations, and special occasions.",
    price: "₹3,500 onwards",
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
    id: "mehendi-haldi",
    title: "Mehendi & Haldi Look",
    description:
      "Traditional yet contemporary looks designed for your Mehendi and Haldi ceremonies.",
    price: "₹4,000 onwards",
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
    id: "reception-look",
    title: "Reception Grand Look",
    description:
      "Glamorous reception looks that photograph beautifully and last the entire evening celebration.",
    price: "₹8,000 onwards",
    duration: "3 hours",
    icon: "💎",
    features: [
      "Bold statement look",
      "Premium luxury brands",
      "HD perfecting techniques",
      "Brow sculpting included",
    ],
  },
  {
    id: "nail-art",
    title: "Nail Art & Extensions",
    description:
      "Premium gel extensions, 3D nail art, ombre, and bridal nail designs that complement your overall look.",
    price: "₹2,000 onwards",
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
    id: "academy-course",
    title: "Academy Training Course",
    description:
      "Professional makeup artistry courses for aspiring makeup artists. Learn from the best in a structured curriculum.",
    price: "₹15,000 onwards",
    duration: "1–3 months",
    icon: "🎓",
    features: [
      "Bridal makeup mastery",
      "HD & airbrush techniques",
      "Certificate on completion",
      "Job placement support",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Pooja Deshmukh",
    location: "Amravati, Maharashtra",
    rating: 5,
    review:
      "Snehal didi ne mera bridal look itna sundar banaya ki main khud ko dekh ke dang rah gayi! Sab mehmaan tarif karte rahe puri shadi mein. Unka kaam sach mein kabil-e-tarif hai!",
    occasion: "Bridal Makeup",
    date: "February 2025",
  },
  {
    id: "t2",
    name: "Sapna Rathod",
    location: "Nagpur, Maharashtra",
    rating: 5,
    review:
      "Meri engagement ke liye Snehal ji se makeup karwaya tha — bilkul wahi look mila jo main chahti thi! HD airbrush itna smooth tha aur 8 ghante tak perfectly tika. Bohot professional aur caring artist hain.",
    occasion: "Engagement Makeup",
    date: "January 2025",
  },
  {
    id: "t3",
    name: "Kavita Sharma",
    location: "Akola, Maharashtra",
    rating: 5,
    review:
      "Maine unki academy se 3 mahine ka course kiya — ek dum professional training mili. Aaj main khud freelance makeup artist hoon. Snehal madam ka teaching style bohot practical aur encouraging hai!",
    occasion: "Academy Course",
    date: "December 2024",
  },
  {
    id: "t4",
    name: "Priya Kulkarni",
    location: "Yavatmal, Maharashtra",
    rating: 5,
    review:
      "Reception ke liye book kiya tha — meri saas ne boli ke beti ek celebrity lag rahi hai! Snehal ji ki attention to detail aur luxury products ka combination unbelievable hai. Poori family ne unse book kiya.",
    occasion: "Reception Makeup",
    date: "March 2025",
  },
  {
    id: "t5",
    name: "Ankita Wankhede",
    location: "Amravati, Maharashtra",
    rating: 5,
    review:
      "Nail art ke saath bridal package liya — dono kaam ek dum incredible tha! 3D floral nail design dekh ke sab pooch rahe the kaun ne kiya. Snehal madam sach mein bahut talented hain, highly recommend!",
    occasion: "Bridal + Nail Package",
    date: "November 2024",
  },
];

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "How far in advance should I book for bridal makeup?",
    answer:
      "We recommend booking at least 3–6 months in advance for bridal packages, especially for peak wedding seasons (October–March). Popular dates fill up quickly. For party or event makeup, 2–4 weeks' notice is ideal. Early bookings receive a complimentary pre-bridal skin consultation.",
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
      "We use only premium luxury brands including MAC, Charlotte Tilbury, NARS, Armani Beauty, Huda Beauty, and Kryolan for makeup. For nails, we use OPI, Gelish, and CND Shellac. All products are carefully selected for Indian skin tones and Maharashtra's climate.",
  },
  {
    id: "f4",
    question: "Do you provide at-home or venue makeup services?",
    answer:
      "Yes! We offer doorstep bridal and party makeup services across Amravati and nearby areas including Nagpur, Akola, and Yavatmal. A travel surcharge applies based on distance. Contact us for a custom quote for your venue.",
  },
  {
    id: "f5",
    question: "What courses does the Academy offer?",
    answer:
      "Our Academy offers professional courses in bridal makeup, HD airbrush, nail art, and party makeup. Courses range from 1 month to 3 months with hands-on training, luxury product practice, and a recognised certificate. We also offer placement support to graduates.",
  },
  {
    id: "f6",
    question: "Can you accommodate large bridal parties?",
    answer:
      "Yes, we handle complete bridal parties including the bride, bridesmaids, mother of bride, and family members. Our trained team ensures everyone looks their best with timely, coordinated service. Please book in advance for large groups of 5 or more.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/assets/snehal-hero.png",
    alt: "Snehal Pawar bridal look",
    category: "bridal",
    caption: "Royal Bridal Transformation",
  },
  {
    id: "g2",
    src: "/assets/snehal-bridal-1.png",
    alt: "Premium bridal makeup",
    category: "bridal",
    caption: "Bridal Elegance",
  },
  {
    id: "g3",
    src: "/assets/snehal-gallery-1.png",
    alt: "Stunning eye makeup",
    category: "party",
    caption: "Glamour Eye Artistry",
  },
  {
    id: "g4",
    src: "/assets/snehal-bridal-2.png",
    alt: "Golden bridal look",
    category: "bridal",
    caption: "Gold Glamour Bridal",
  },
  {
    id: "g5",
    src: "/assets/snehal-gallery-2.png",
    alt: "HD airbrush makeup",
    category: "party",
    caption: "HD Airbrush Perfection",
  },
  {
    id: "g6",
    src: "/assets/snehal-bridal-3.png",
    alt: "Traditional bridal look",
    category: "bridal",
    caption: "Traditional Bridal Grandeur",
  },
  {
    id: "g7",
    src: "/assets/snehal-gallery-3.png",
    alt: "Reception look",
    category: "party",
    caption: "Reception Glamour",
  },
  {
    id: "g8",
    src: "/assets/snehal-gallery-4.png",
    alt: "Engagement makeup",
    category: "bridal",
    caption: "Engagement Radiance",
  },
  {
    id: "g9",
    src: "/assets/snehal-about.png",
    alt: "Snehal Pawar at work",
    category: "celebrity",
    caption: "Snehal Pawar — Master Artist",
  },
  {
    id: "g10",
    src: "/assets/snehal-gallery-5.png",
    alt: "Salon services",
    category: "party",
    caption: "Salon Excellence",
  },
];

export const whyChooseUs: WhyChoosePoint[] = [
  {
    id: "w1",
    title: "10+ Years of Excellence",
    description:
      "With over a decade of professional experience and 1000+ happy clients, Snehal brings unmatched expertise and passion to every look.",
    icon: "⭐",
    stat: "10+ Years",
  },
  {
    id: "w2",
    title: "Premium Luxury Products",
    description:
      "We use only the world's finest makeup brands — MAC, Charlotte Tilbury, NARS, Armani, and Kryolan — curated for Indian skin tones.",
    icon: "💎",
    stat: "20+ Luxury Brands",
  },
  {
    id: "w3",
    title: "Certified Beauty Academy",
    description:
      "Our Academy has trained 500+ students who are now successful makeup artists. Professional curriculum with placement support.",
    icon: "🎓",
    stat: "500+ Students",
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
    title: "Celebrity & Film Productions",
    description:
      "Trusted makeup artist for regional Marathi and Bollywood productions, music videos, and entertainment industry shoots.",
    image: "/assets/snehal-bridal-1.png",
  },
  {
    id: "c2",
    title: "Television & Digital Stars",
    description:
      "Go-to artist for popular TV personalities, digital influencers, and social media stars for their on-screen appearances.",
    image: "/assets/snehal-bridal-2.png",
  },
  {
    id: "c3",
    title: "Fashion Shows & Events",
    description:
      "Backstage artistry for regional fashion shows, beauty pageants, and high-profile events across Maharashtra.",
    image: "/assets/snehal-bridal-3.png",
  },
];
