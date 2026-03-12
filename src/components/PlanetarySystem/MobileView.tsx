import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, Link2, X } from 'lucide-react';
import { planets, getSatellitesForPlanet, getCoreModulesForPlanet, getPlanetsForSatellite, isSharedSatellite } from './data';
import { Planet, Satellite } from './types';
import { ImageGallery } from './ImageGallery';

const typeLabels: Record<string, string> = {
  technical: 'Técnico',
  human: 'Humano',
  mixed: 'Mixto',
  logistic: 'Logístico',
};

export function MobileView() {
  const [expandedPlanetId, setExpandedPlanetId] = useState<string | null>(null);
  const [activeSatellite, setActiveSatellite] = useState<Satellite | null>(null);

  const togglePlanet = (id: string) => {
    setExpandedPlanetId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#e85700] mb-1">EVoting</h2>
        <p className="text-base text-gray-400">Servicios 360°</p>
        <p className="text-xs text-gray-500 mt-1">La democracia del futuro, hoy</p>
      </div>

      {/* Planet cards */}
      <div className="space-y-4">
        {planets.map((planet) => (
          <MobilePlanetCard
            key={planet.id}
            planet={planet}
            isExpanded={expandedPlanetId === planet.id}
            onToggle={() => togglePlanet(planet.id)}
            onSatelliteClick={setActiveSatellite}
          />
        ))}
      </div>

      {/* Satellite bottom sheet */}
      <AnimatePresence>
        {activeSatellite && (
          <MobileSatelliteSheet
            satellite={activeSatellite}
            onClose={() => setActiveSatellite(null)}
            onPlanetClick={(planetId) => {
              setActiveSatellite(null);
              setExpandedPlanetId(planetId);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Planet Card ────────────────────────────────────

interface MobilePlanetCardProps {
  planet: Planet;
  isExpanded: boolean;
  onToggle: () => void;
  onSatelliteClick: (satellite: Satellite) => void;
}

function MobilePlanetCard({ planet, isExpanded, onToggle, onSatelliteClick }: MobilePlanetCardProps) {
  const Icon = planet.icon;
  const sats = getSatellitesForPlanet(planet.id);
  const coreModules = getCoreModulesForPlanet(planet.id);

  return (
    <div className="bg-[#0b1535] rounded-2xl border border-white/10 overflow-hidden">
      <button
        className="w-full flex items-center gap-3 p-4 text-left"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
          style={{ background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})` }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: planet.color }}>
              {planet.brandName}
            </span>
            <span className="text-xs text-gray-400">{planet.name}</span>
          </div>
          <p className="text-xs text-gray-500 truncate">{planet.tagline}</p>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4">
              {/* Stats */}
              <div className="flex gap-3">
                {planet.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center flex-1 py-2 rounded-lg"
                    style={{ backgroundColor: `${planet.color}12` }}
                  >
                    <div className="text-sm font-bold" style={{ color: planet.color }}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed">{planet.description}</p>

              {/* Features */}
              <div className="grid grid-cols-1 gap-1">
                {planet.features.slice(0, 4).map((f) => (
                  <div key={f} className="flex items-start gap-1.5 text-[11px] text-gray-400">
                    <Check className="w-3 h-3 mt-0.5 shrink-0" style={{ color: planet.color }} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Sub-brands */}
              {planet.subBrands.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {planet.subBrands.map((sb) => (
                    <span
                      key={sb.id}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: `${planet.color}10`, color: planet.color }}
                    >
                      {sb.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Core Modules */}
              {coreModules.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">Módulos de Plataforma</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {coreModules.map((mod) => {
                      const ModIcon = mod.icon;
                      const shared = isSharedSatellite(mod);
                      return (
                        <button
                          key={mod.id}
                          onClick={() => onSatelliteClick(mod)}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-colors"
                        >
                          <ModIcon className="w-4 h-4 shrink-0" style={{ color: mod.color }} />
                          <div className="min-w-0">
                            <div className="text-[11px] font-semibold text-gray-200 truncate">
                              {mod.name}
                            </div>
                            {shared && (
                              <div className="flex gap-0.5 mt-0.5">
                                {getPlanetsForSatellite(mod.id)
                                  .filter((p) => p.id !== planet.id)
                                  .map((p) => (
                                    <div
                                      key={p.id}
                                      className="w-1.5 h-1.5 rounded-full"
                                      style={{ backgroundColor: p.color }}
                                    />
                                  ))}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Servicios Adicionales */}
              {sats.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">Servicios Adicionales</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {sats.map((sat) => {
                      const SatIcon = sat.icon;
                      const shared = isSharedSatellite(sat);
                    return (
                      <button
                        key={sat.id}
                        onClick={() => onSatelliteClick(sat)}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-left transition-colors"
                      >
                        <SatIcon className="w-4 h-4 shrink-0" style={{ color: sat.color }} />
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-gray-200 truncate">
                            {sat.name}
                          </div>
                          {shared && (
                            <div className="flex gap-0.5 mt-0.5">
                              {getPlanetsForSatellite(sat.id)
                                .filter((p) => p.id !== planet.id)
                                .map((p) => (
                                  <div
                                    key={p.id}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: p.color }}
                                  />
                                ))}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Satellite Bottom Sheet ────────────────────────

interface MobileSatelliteSheetProps {
  satellite: Satellite;
  onClose: () => void;
  onPlanetClick: (planetId: string) => void;
}

function MobileSatelliteSheet({ satellite, onClose, onPlanetClick }: MobileSatelliteSheetProps) {
  const Icon = satellite.icon;
  const connectedPlanets = getPlanetsForSatellite(satellite.id);

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/40 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-x-0 bottom-0 bg-[#0b1535] rounded-t-2xl shadow-2xl z-50
          max-h-[80vh] overflow-y-auto border-t border-white/10"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        role="dialog"
        aria-modal="true"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </div>

        <div className="px-5 pb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${satellite.color}15` }}
              >
                <Icon className="w-5 h-5" style={{ color: satellite.color }} />
              </div>
              <div>
                <h3 className="font-bold" style={{ color: satellite.color }}>
                  {satellite.name}
                </h3>
                <p className="text-xs text-gray-400">{satellite.subtitle}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10" aria-label="Cerrar">
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-3">
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: `${satellite.color}10`, color: satellite.color }}
            >
              {typeLabels[satellite.type]}
            </span>
          </div>

          {/* Images */}
          {satellite.images && satellite.images.length > 0 && (
            <div className="mb-4">
              <ImageGallery images={satellite.images} color={satellite.color} compact />
            </div>
          )}

          {/* Description */}
          <p className="text-sm text-gray-300 mb-4">{satellite.description}</p>

          {/* Stats */}
          {satellite.stats && (
            <div className="flex gap-3 mb-4">
              {satellite.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center flex-1 py-2 rounded-lg"
                    style={{ backgroundColor: `${satellite.color}12` }}
                >
                  <div className="text-lg font-bold" style={{ color: satellite.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Features */}
          <div className="space-y-1.5 mb-4">
            {satellite.features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-gray-300">
                <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: satellite.color }} />
                <span>{f}</span>
              </div>
            ))}
          </div>

          {/* Connected planets */}
          {connectedPlanets.length > 1 && (
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-1">
                <Link2 className="w-3 h-3" /> Disponible en
              </h4>
              <div className="flex gap-2">
                {connectedPlanets.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onPlanetClick(p.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: `${p.color}10`, color: p.color }}
                  >
                    <p.icon className="w-3 h-3" />
                    {p.brandName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
