import { getPlanetsForSatellite } from './data';
import { Satellite } from './types';

interface SharedBadgeProps {
  satellite: Satellite;
  currentPlanetId: string;
}

export function SharedBadge({ satellite, currentPlanetId }: SharedBadgeProps) {
  const connectedPlanets = getPlanetsForSatellite(satellite.id).filter(
    (p) => p.id !== currentPlanetId
  );

  if (connectedPlanets.length === 0) return null;

  return (
    <div className="flex gap-0.5 mt-1 justify-center">
      {connectedPlanets.map((planet) => (
        <div
          key={planet.id}
          className="w-2 h-2 rounded-full border border-white"
          style={{ backgroundColor: planet.color }}
          title={`También en: ${planet.name}`}
        />
      ))}
    </div>
  );
}
