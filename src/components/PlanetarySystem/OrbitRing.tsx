import { motion } from 'framer-motion';
import { springGentle } from './animations';

interface OrbitRingProps {
  radius: number;
  color?: string;
  opacity?: number;
  dashed?: boolean;
}

export function OrbitRing({ radius, color = '#e85700', opacity = 0.08, dashed = false }: OrbitRingProps) {
  const size = radius * 2;
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{
        width: size,
        height: size,
        marginLeft: -radius,
        marginTop: -radius,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={springGentle}
    >
      <svg width={size} height={size} className="absolute inset-0">
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          fill="none"
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth={1.5}
          strokeDasharray={dashed ? '6 4' : undefined}
        />
      </svg>
    </motion.div>
  );
}
