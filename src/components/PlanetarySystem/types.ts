import { LucideIcon } from 'lucide-react';

export type SatellitePriority = 'critical' | 'high' | 'medium' | 'specific';
export type SatelliteType = 'technical' | 'human' | 'mixed' | 'logistic';
export type ViewLevel = 'solar-system' | 'planet-detail' | 'satellite-detail';

export interface ServiceSlide {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface SubBrand {
  id: string;
  name: string;
  description: string;
}

export interface Planet {
  id: string;
  name: string;
  brandName: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  colorSecondary: string;
  features: string[];
  stats: { label: string; value: string }[];
  subBrands: SubBrand[];
  satelliteIds: string[];
  coreModuleIds: string[];
  slides: ServiceSlide[];
  targetAudience: string[];
  modalities: string[];
}

export interface Satellite {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  priority: SatellitePriority;
  type: SatelliteType;
  planetIds: string[];
  features: string[];
  stats?: { label: string; value: string }[];
  images?: { url: string; caption?: string }[];
}

export interface NavigationState {
  viewLevel: ViewLevel;
  activePlanetId: string | null;
  activeSatelliteId: string | null;
}
