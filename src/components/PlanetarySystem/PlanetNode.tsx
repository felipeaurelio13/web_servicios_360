import { motion } from 'framer-motion';
import { Planet } from './types';
import { getSatellitesForPlanet } from './data';
import { planetNodeVariants } from './animations';

interface PlanetNodeProps {
  planet: Planet;
  index: number;
  total: number;
  radius: number;
  onClick: () => void;
}

export function PlanetNode({ planet, index, total, radius, onClick }: PlanetNodeProps) {
  const angle = ((index * (360 / total)) - 90) * (Math.PI / 180);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const Icon = planet.icon;
  const satelliteCount = getSatellitesForPlanet(planet.id).length;

  return (
    <motion.div
      className="absolute z-20"
      style={{
        left: `calc(50% + ${x}px - 56px)`,
        top: `calc(50% + ${y}px - 56px)`,
        width: 112,
        height: 112,
      }}
      variants={planetNodeVariants(index * 0.06)}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.button
        className="w-full h-full rounded-full flex flex-col items-center justify-center text-white cursor-pointer
          shadow-lg border border-white/10 relative"
        style={{
          background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})`,
          boxShadow: `0 0 30px ${planet.color}30`,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        aria-label={`Explorar ${planet.name}`}
      >
        <Icon className="w-7 h-7 mb-1" />
        <span className="text-xs font-bold leading-tight">{planet.brandName}</span>
        <span className="text-[9px] text-white/60 mt-0.5">{planet.name}</span>

        {/* Satellite count badge */}
        <div
          className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white text-[10px] font-bold
            flex items-center justify-center shadow-md"
          style={{ color: planet.color }}
        >
          {satelliteCount}
        </div>
      </motion.button>
    </motion.div>
  );
}
