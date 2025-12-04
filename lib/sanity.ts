import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { 
  Palette, Cpu, Globe, PenTool, Linkedin, Instagram, Youtube, ShoppingCart, 
  Music, AtSign, Monitor, Camera, Layers, Code, Mail, MapPin, Send, 
  Clock, Activity, ArrowRight, Quote, Check, AlertTriangle, Download,
  Star, BookOpen, Volume2, Play, Pause, ChevronRight, Home, Plus, Minus,
  ShieldCheck, Share2, Calendar, Tag, Eye, EyeOff, MoveHorizontal
} from 'lucide-react';

// VOTRE PROJECT ID
export const PROJECT_ID = 'cdd60sbu';
export const DATASET = 'production';

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true, // true pour la production (plus rapide), false pour le développement (données fraîches)
  apiVersion: '2024-03-01', 
});

const builder = imageUrlBuilder(client);

// Helper pour générer les URLs d'images Sanity
export function urlFor(source: any) {
  if (!source) return undefined;
  return builder.image(source);
}

// Mappage des noms d'icônes (String stockée dans Sanity) vers les composants React Lucide
const ICON_MAP: Record<string, any> = {
  'Palette': Palette,
  'Cpu': Cpu,
  'Globe': Globe,
  'PenTool': PenTool,
  'Linkedin': Linkedin,
  'Instagram': Instagram,
  'Youtube': Youtube,
  'ShoppingCart': ShoppingCart,
  'Music': Music,
  'AtSign': AtSign,
  'Monitor': Monitor,
  'Camera': Camera,
  'Layers': Layers,
  'Code': Code,
  'Mail': Mail,
  'MapPin': MapPin,
  'Send': Send,
  'Clock': Clock,
  'Activity': Activity,
  'ArrowRight': ArrowRight,
  'Quote': Quote,
  'Check': Check,
  'AlertTriangle': AlertTriangle,
  'Download': Download,
  'Star': Star,
  'BookOpen': BookOpen,
  'Volume2': Volume2,
  'Play': Play,
  'Pause': Pause,
  'ChevronRight': ChevronRight,
  'Home': Home,
  'Plus': Plus,
  'Minus': Minus,
  'ShieldCheck': ShieldCheck,
  'Share2': Share2,
  'Calendar': Calendar,
  'Tag': Tag,
  'Eye': Eye,
  'EyeOff': EyeOff,
  'MoveHorizontal': MoveHorizontal
};

export function getIcon(iconName: string | undefined): any {
  if (!iconName) return Globe; // Fallback icon
  return ICON_MAP[iconName] || Globe;
}
