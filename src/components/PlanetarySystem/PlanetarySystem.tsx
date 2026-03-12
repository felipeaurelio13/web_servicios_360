import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { PlanetarySystemProvider, usePlanetarySystem } from './PlanetarySystemContext';
import { SolarSystemView } from './SolarSystemView';
import { PlanetInfoPanel } from './PlanetDetailView';
import { SatelliteDetailPanel } from './SatelliteDetailPanel';
import { MobileView } from './MobileView';
import { getPlanetById, getSatelliteById } from './data';
import { useIsMobile } from '../../hooks/useIsMobile';
import { springSnappy } from './animations';

function PlanetarySystemContent() {
  const isMobile = useIsMobile();
  const { focusedPlanetId, activeSatelliteId } = usePlanetarySystem();

  if (isMobile) {
    return <MobileView />;
  }

  const focusedPlanet = focusedPlanetId ? getPlanetById(focusedPlanetId) : null;
  const activeSatellite = activeSatelliteId ? getSatelliteById(activeSatelliteId) : null;

  return (
    <div className="relative min-h-screen flex w-full overflow-hidden bg-gradient-to-b from-[#030914] to-[#0a1226]">
      {/* Main container taking full width, dynamically padding right when panel opens */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center py-6"
        initial={false}
        animate={{ paddingRight: activeSatellite ? 440 : 0 }}
        transition={springSnappy}
      >
        {/* Fixed-size canvas: clips the zoom so it's contained */}
        <div className="relative w-full max-w-[1200px] h-[700px] overflow-hidden">
          <SolarSystemView />
        </div>

        {/* Planet info panel — BELOW the canvas, never overlaps satellites */}
        <AnimatePresence>
          {focusedPlanet && !activeSatellite && (
            <PlanetInfoPanel key={`panel-${focusedPlanet.id}`} planet={focusedPlanet} />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Satellite detail drawer — fixed overlay */}
      <AnimatePresence>
        {activeSatellite && (
          <SatelliteDetailPanel
            key={`sat-${activeSatellite.id}`}
            satellite={activeSatellite}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export function PlanetarySystem() {
  return (
    <MotionConfig reducedMotion="never">
      <PlanetarySystemProvider>
        <PlanetarySystemContent />
      </PlanetarySystemProvider>
    </MotionConfig>
  );
}
