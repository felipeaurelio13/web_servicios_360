import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { backButtonVariants, springSnappy } from './animations';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export function BackButton({ onClick, label = 'Volver' }: BackButtonProps) {
  return (
    <motion.button
      className="absolute top-4 left-4 z-30 flex items-center gap-2 px-4 py-2
        bg-white/10 backdrop-blur-sm rounded-full border border-white/20
        text-sm font-medium text-white hover:bg-white/15
        transition-colors"
      onClick={onClick}
      variants={backButtonVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ ...springSnappy, delay: 0.1 }}
      aria-label={label}
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </motion.button>
  );
}
