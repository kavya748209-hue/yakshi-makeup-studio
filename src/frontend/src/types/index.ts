export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  occasion: string;
  avatar?: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "bridal" | "celebrity" | "nails" | "party";
  caption?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChoosePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
}

export interface CelebrityWork {
  id: string;
  title: string;
  description: string;
  image: string;
}
