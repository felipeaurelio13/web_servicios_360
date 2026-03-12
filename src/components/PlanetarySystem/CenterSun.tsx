import { motion } from 'framer-motion';
import { centerElementVariants, springSmooth } from './animations';

export function CenterSun() {
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
          className="w-36 h-36 rounded-full bg-gradient-to-br from-[#e85700] to-[#c44a00]
            flex items-center justify-center text-white
            border border-white/15"
          style={{ boxShadow: '0 0 80px rgba(232,87,0,0.55), 0 0 140px rgba(232,87,0,0.18)' }}
        >
          <div className="text-center">
            <div className="text-xl font-bold tracking-tight">EVoting</div>
            <div className="text-[10px] text-white/70 mt-0.5">Servicios 360°</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
