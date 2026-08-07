import {
  Rocket, Globe2, Award, Star, Zap, Target, Factory, Wallet, Bot, Wrench,
  Users, ShieldCheck, CloudCog, HeartPulse, ShoppingCart, Truck, Building2,
  GraduationCap, Briefcase, Pill, BarChart3, Phone, Mail, MessageCircle,
} from 'lucide-react';

const MAP = {
  Rocket, Globe2, Award, Star, Zap, Target, Factory, Wallet, Bot, Wrench,
  Users, ShieldCheck, CloudCog, HeartPulse, ShoppingCart, Truck, Building2,
  GraduationCap, Briefcase, Pill, BarChart3, Phone, Mail, MessageCircle,
};

// Resolves a curated icon by name string, e.g. <Icon name="Rocket" />
export default function Icon({ name, size = 22, strokeWidth = 1.8, className = '' }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} />;
}
