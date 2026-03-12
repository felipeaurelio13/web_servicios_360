import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Planet } from './types';
import { getCoreModulesForPlanet } from './data';
import { usePlanetarySystem } from './PlanetarySystemContext';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { springSmooth } from './animations';

interface PlanetInfoPanelProps {
  planet: Planet;
}

export function PlanetInfoPanel({ planet }: PlanetInfoPanelProps) {
  const { openSatellite } = usePlanetarySystem();
  const coreModules = getCoreModulesForPlanet(planet.id);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[1200px] mx-auto mt-3 bg-[#0a1226]/80 backdrop-blur-xl
        rounded-2xl shadow-2xl pointer-events-auto border border-white/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={springSmooth}
    >
      {/* Toggle bar — always visible */}
      <button
        className="w-full flex items-center justify-between px-6 py-3 cursor-pointer
          hover:bg-white/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})`,
            }}
          >
            <planet.icon className="w-4 h-4 text-white" />
          </div>
          <div className="flex items-baseline gap-3">
            <h2 className="text-lg font-bold text-white">
              {planet.brandName || planet.name}
            </h2>
            <span className="text-xs text-blue-400/80 font-medium hidden sm:inline">
              {planet.tagline}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Quick stats visible in collapsed state */}
          {!isExpanded && planet.stats.length > 0 && (
            <div className="hidden md:flex items-center gap-4 mr-4">
              {planet.stats.slice(0, 2).map((stat) => (
                <span key={stat.label} className="text-xs text-gray-400">
                  <span className="text-blue-400 font-semibold">{stat.value}</span>{' '}
                  {stat.label}
                </span>
              ))}
            </div>
          )}
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-white/50" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/50" />
          )}
        </div>
      </button>

      {/* Collapsible content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-white/5">
              <div className="flex flex-col md:flex-row gap-8 justify-between">
                {/* Left column: Stats and Features */}
                <div className="flex-1 space-y-5">
                  {/* Stats */}
                  <div className="flex gap-8">
                    {planet.stats.map((stat) => (
                      <div key={stat.label} className="text-left">
                        <div className="text-xl font-bold text-blue-500">
                          {stat.value}
                        </div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Key features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {planet.features.slice(0, 4).map((feature) => (
                      <div key={feature} className="flex items-start gap-2 text-sm text-gray-300">
                        <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-500" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-brands */}
                  {planet.subBrands.length > 0 && (
                    <div className="flex gap-2 pt-1">
                      {planet.subBrands.map((sb) => (
                        <span
                          key={sb.id}
                          className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {sb.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right column: Core platform modules */}
                {coreModules.length > 0 && (
                  <div className="w-full md:w-56 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-6">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Plataforma
                    </h4>
                    <div className="grid grid-cols-1 gap-y-2">
                      {coreModules.map((mod) => {
                        const ModIcon = mod.icon;
                        return (
                          <button
                            key={mod.id}
                            onClick={() => openSatellite(mod.id)}
                            className="flex items-center gap-2.5 text-sm text-gray-400
                              hover:text-white transition-all group text-left"
                          >
                            <div className="w-6 h-6 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                              <ModIcon className="w-3.5 h-3.5 shrink-0" style={{ color: mod.color }} />
                            </div>
                            <span className="text-xs font-medium">{mod.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
