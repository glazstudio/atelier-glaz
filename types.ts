import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; 
  tags: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  projects: Project[];
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; 
  date: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string; 
  content: string;
}

// New Types
export interface StackItem {
  name: string;
  category: 'Hardware' | 'Software' | 'IA' | 'Web';
  description: string;
  icon?: LucideIcon;
}

export interface PricingPack {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface AudioTrack {
  id: string;
  title: string;
  duration: string;
  genre: string;
  url: string; // URL to mp3 file
}

export interface NowItem {
  category: string;
  content: string;
  details?: string;
  link?: string;
}

export interface NowData {
  lastUpdated: string;
  location: string;
  status: string;
  availability: 'available' | 'busy' | 'unavailable';
  items: NowItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GardenNote {
  id: string;
  title: string;
  status: 'seed' | 'budding' | 'flower';
  lastUpdated: string;
  tags: string[];
  content: string;
}