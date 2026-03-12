import { motion, useTransform, type MotionValue } from 'framer-motion';
import { Satellite } from './types';
import { isSharedSatellite, getPlanetsForSatellite } from './data';
import { SharedBadge } from './SharedBadge';
import { satelliteNodeVariants } from './animations';

interface SatelliteNodeProps {
  satellite: Satellite;
  index: number;
  total: number;
  radius: number;
  currentPlanetId: string;
  parentRotation: MotionValue<number>;
  onClick: () => void;
}

export function SatelliteNode({
  satellite,
  index,
  total,
  radius,
  currentPlanetId,
  parentRotation,
  onClick,
}: SatelliteNodeProps) {
  const angle = ((index * (360 / total)) - 90) * (Math.PI / 180);
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const Icon = satellite.icon;
  const shared = isSharedSatellite(satellite);
  const connectedPlanets = getPlanetsForSatellite(satellite.id);

  const counterRotation = useTransform(parentRotation, (r) => -r);

  // Build conic-gradient for shared satellites
  const sharedBorderStyle = shared
    ? {
        background: `conic-gradient(${connectedPlanets
          .map((p, i) => {
            const start = (i / connectedPlanets.length) * 360;
            const end = ((i + 1) / connectedPlanets.length) * 360;
            return `${p.color} ${start}deg ${end}deg`;
          })
          .join(', ')})`,
      }
    : {};

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px - 36px)`,
        top: `calc(50% + ${y}px - 36px)`,
        width: 72,
        height: 72,
      }}
      variants={satelliteNodeVariants}
    >
      <motion.button
        className="relative w-full h-full flex items-center justify-center"
        style={{ rotate: counterRotation }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        aria-label={`Ver ${satellite.name}: ${satellite.subtitle}`}
      >
        {/* Shared satellite outer ring */}
        {shared && (
          <div
            className="absolute inset-0 rounded-full p-[2px]"
            style={sharedBorderStyle}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </div>
        )}

        {/* Inner content */}
        <div
          className="absolute rounded-full flex flex-col items-center justify-center
            shadow-md border transition-shadow hover:shadow-lg"
          style={{
            backgroundColor: 'white',
            borderColor: shared ? 'transparent' : `${satellite.color}30`,
            inset: shared ? 3 : 0,
          }}
        >
          <Icon className="w-5 h-5 mb-0.5" style={{ color: satellite.color }} />
          <span className="text-[8px] font-semibold leading-tight text-center px-1 text-gray-700">
            {satellite.name}
          </span>
          <SharedBadge satellite={satellite} currentPlanetId={currentPlanetId} />
        </div>
      </motion.button>
    </motion.div>
  );
}
