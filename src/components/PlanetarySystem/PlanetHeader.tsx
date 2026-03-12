import { motion } from 'framer-motion';
import { Planet } from './types';
import { centerElementVariants, springSmooth } from './animations';

interface PlanetHeaderProps {
  planet: Planet;
}

export function PlanetHeader({ planet }: PlanetHeaderProps) {
  const Icon = planet.icon;

  return (
    <div className="absolute inset-0 z-10 grid place-items-center pointer-events-none">
      <motion.div
        variants={centerElementVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={springSmooth}
        className="pointer-events-auto"
      >
        <div
          className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-white
            shadow-lg border border-white/10"
          style={{
            background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})`,
            boxShadow: `0 0 50px ${planet.color}30`,
          }}
        >
          <Icon className="w-8 h-8 mb-1" />
          <span className="text-sm font-bold">{planet.brandName}</span>
          <span className="text-[10px] text-white/70">{planet.name}</span>
        </div>
      </motion.div>
    </div>
  );
}
