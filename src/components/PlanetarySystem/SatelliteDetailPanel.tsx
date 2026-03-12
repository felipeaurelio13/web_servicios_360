import { motion } from 'framer-motion';
import { X, Check, Link2 } from 'lucide-react';
import { useEffect } from 'react';
import { Satellite } from './types';
import { getPlanetsForSatellite } from './data';
import { usePlanetarySystem } from './PlanetarySystemContext';
import { panelSlideVariants, springSnappy } from './animations';
import { ImageGallery } from './ImageGallery';

interface SatelliteDetailPanelProps {
  satellite: Satellite;
}

const typeLabels: Record<string, string> = {
  technical: 'Módulo Técnico',
  human: 'Servicio Humano',
  mixed: 'Técnico + Humano',
  logistic: 'Servicio Logístico',
};

const priorityLabels: Record<string, string> = {
  critical: 'Crítico',
  high: 'Alta prioridad',
  medium: 'Complementario',
  specific: 'Específico',
};

export function SatelliteDetailPanel({ satellite }: SatelliteDetailPanelProps) {
  const { navigateBack, navigateToPlanet } = usePlanetarySystem();
  const connectedPlanets = getPlanetsForSatellite(satellite.id);
  const Icon = satellite.icon;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigateBack();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [navigateBack]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/30 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={navigateBack}
      />

      {/* Panel */}
      <motion.div
        className="fixed right-0 top-0 h-full w-[440px] max-w-[90vw] bg-[#07101f] shadow-2xl z-50
          overflow-y-auto border-l border-white/8"
        variants={panelSlideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={springSnappy}
        role="dialog"
        aria-modal="true"
        aria-label={`${satellite.name} detalles`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#07101f]/97 backdrop-blur-sm border-b border-white/8 px-6 py-4 z-10">
          <button
            onClick={navigateBack}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10"
            aria-label="Cerrar panel"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${satellite.color}18` }}
            >
              <Icon className="w-6 h-6" style={{ color: satellite.color }} />
            </div>
            <div>
              <h2 className="text-lg font-bold" style={{ color: satellite.color }}>
                {satellite.name}
              </h2>
              <p className="text-sm text-gray-400">{satellite.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 space-y-6">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: `${satellite.color}10`, color: satellite.color }}
            >
              {typeLabels[satellite.type]}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium">
              {priorityLabels[satellite.priority]}
            </span>
          </div>

          {/* Images */}
          {satellite.images && satellite.images.length > 0 && (
            <ImageGallery images={satellite.images} color={satellite.color} />
          )}

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed">{satellite.description}</p>

          {/* Stats */}
          {satellite.stats && satellite.stats.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {satellite.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-3 rounded-xl"
                  style={{ backgroundColor: `${satellite.color}10` }}
                >
                  <div className="text-xl font-bold" style={{ color: satellite.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3">Características</h3>
            <div className="space-y-2">
              {satellite.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: satellite.color }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected planets */}
          <div>
            <h3 className="text-sm font-semibold text-gray-200 mb-3 flex items-center gap-1.5">
              <Link2 className="w-4 h-4" />
              Disponible en
            </h3>
            <div className="space-y-2">
              {connectedPlanets.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => navigateToPlanet(planet.id)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-left"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})`,
                    }}
                  >
                    <planet.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-medium" style={{ color: planet.color }}>
                      {planet.name}
                    </span>
                    <span className="text-xs text-gray-400 block">{planet.brandName}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
