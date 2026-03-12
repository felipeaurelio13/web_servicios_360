import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { ViewLevel } from './types';

interface PlanetarySystemContextValue {
  focusedPlanetId: string | null;
  activeSatelliteId: string | null;
  focusOnPlanet: (planetId: string) => void;
  unfocusPlanet: () => void;
  openSatellite: (satelliteId: string) => void;
  closeSatellite: () => void;
  // Backward-compat aliases (used by SatelliteDetailPanel etc.)
  viewLevel: ViewLevel;
  activePlanetId: string | null;
  navigateToPlanet: (planetId: string) => void;
  navigateToSatellite: (satelliteId: string) => void;
  navigateBack: () => void;
  navigateToSolarSystem: () => void;
}

const PlanetarySystemContext = createContext<PlanetarySystemContextValue | null>(null);

export function PlanetarySystemProvider({ children }: { children: ReactNode }) {
  const [focusedPlanetId, setFocusedPlanetId] = useState<string | null>(null);
  const [activeSatelliteId, setActiveSatelliteId] = useState<string | null>(null);

  const focusOnPlanet = useCallback((id: string) => {
    setActiveSatelliteId(null);
    setFocusedPlanetId(id);
  }, []);

  const unfocusPlanet = useCallback(() => {
    setFocusedPlanetId(null);
    setActiveSatelliteId(null);
  }, []);

  const openSatellite = useCallback((id: string) => {
    setActiveSatelliteId(id);
  }, []);

  const closeSatellite = useCallback(() => {
    setActiveSatelliteId(null);
  }, []);

  const navigateBack = useCallback(() => {
    if (activeSatelliteId) {
      setActiveSatelliteId(null);
    } else {
      setFocusedPlanetId(null);
    }
  }, [activeSatelliteId]);

  const viewLevel: ViewLevel = activeSatelliteId
    ? 'satellite-detail'
    : focusedPlanetId
    ? 'planet-detail'
    : 'solar-system';

  return (
    <PlanetarySystemContext.Provider
      value={{
        focusedPlanetId,
        activeSatelliteId,
        focusOnPlanet,
        unfocusPlanet,
        openSatellite,
        closeSatellite,
        viewLevel,
        activePlanetId: focusedPlanetId,
        navigateToPlanet: focusOnPlanet,
        navigateToSatellite: openSatellite,
        navigateBack,
        navigateToSolarSystem: unfocusPlanet,
      }}
    >
      {children}
    </PlanetarySystemContext.Provider>
  );
}

export function usePlanetarySystem() {
  const ctx = useContext(PlanetarySystemContext);
  if (!ctx) throw new Error('usePlanetarySystem must be used within PlanetarySystemProvider');
  return ctx;
}
