import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: { url: string; caption?: string }[];
  color: string;
  compact?: boolean;
}

export function ImageGallery({ images, color, compact = false }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  const hasMultiple = images.length > 1;

  return (
    <div className="space-y-2">
      {/* Main image */}
      <div className={`relative rounded-xl overflow-hidden bg-white/5 ${compact ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex].url}
            alt={images[activeIndex].caption || ''}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>

        {/* Caption overlay */}
        {images[activeIndex].caption && (
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
            <p className={`text-white/90 font-medium ${compact ? 'text-[10px]' : 'text-xs'}`}>
              {images[activeIndex].caption}
            </p>
          </div>
        )}

        {/* Navigation arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70
                flex items-center justify-center transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-black/70
                flex items-center justify-center transition-colors"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails / dots */}
      {hasMultiple && (
        <div className="flex justify-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all ${
                i === activeIndex ? 'w-5 h-1.5' : 'w-1.5 h-1.5 opacity-40 hover:opacity-70'
              }`}
              style={{ backgroundColor: i === activeIndex ? color : '#fff' }}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
