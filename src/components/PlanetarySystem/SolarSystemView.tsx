import { motion, AnimatePresence } from 'framer-motion';
import {
  planets,
  satellites,
  getSatellitesForPlanet,
  getPlanetsForSatellite,
  isSharedSatellite,
} from './data';
import { usePlanetarySystem } from './PlanetarySystemContext';
import { CenterSun } from './CenterSun';
import { BackButton } from './BackButton';
import { springSmooth, springSnappy } from './animations';

const PLANET_R = 215;   // orbit radius of planets around sun
const ZOOM = 1.5;       // zoom scale when a planet is focused
const CANVAS = 770;

// Dynamic satellite orbit radius based on count
function getSatOrbitRadius(total: number) {
  const base = 130;
  const perSat = 8;
  return base + Math.max(0, total - 3) * perSat;
  // 3 sats → 130px, 6 sats → 154px, 9 sats → 178px
}

// Static star field — fixed positions so no Math.random() on each render
const STARS: readonly { x: number; y: number; r: number; o: number }[] = [
  { x: 42, y: 28, r: 0.8, o: 0.5 }, { x: 128, y: 14, r: 0.6, o: 0.4 },
  { x: 200, y: 75, r: 1.0, o: 0.55 }, { x: 68, y: 140, r: 0.7, o: 0.45 },
  { x: 338, y: 20, r: 0.8, o: 0.5 }, { x: 495, y: 42, r: 0.7, o: 0.4 },
  { x: 612, y: 16, r: 1.1, o: 0.55 }, { x: 675, y: 93, r: 0.6, o: 0.35 },
  { x: 155, y: 202, r: 0.8, o: 0.5 }, { x: 590, y: 176, r: 1.0, o: 0.6 },
  { x: 36, y: 285, r: 0.7, o: 0.4 }, { x: 692, y: 228, r: 0.9, o: 0.5 },
  { x: 108, y: 382, r: 0.6, o: 0.35 }, { x: 658, y: 338, r: 1.2, o: 0.65 },
  { x: 20, y: 448, r: 0.8, o: 0.45 }, { x: 166, y: 510, r: 0.7, o: 0.4 },
  { x: 633, y: 476, r: 0.9, o: 0.5 }, { x: 70, y: 575, r: 1.0, o: 0.55 },
  { x: 546, y: 565, r: 0.6, o: 0.4 }, { x: 316, y: 628, r: 0.8, o: 0.45 },
  { x: 186, y: 662, r: 1.1, o: 0.6 }, { x: 490, y: 656, r: 0.7, o: 0.35 },
  { x: 653, y: 619, r: 0.9, o: 0.5 }, { x: 78, y: 696, r: 0.6, o: 0.4 },
  { x: 412, y: 40, r: 0.8, o: 0.45 }, { x: 263, y: 112, r: 0.7, o: 0.4 },
  { x: 443, y: 128, r: 1.0, o: 0.55 }, { x: 580, y: 86, r: 0.6, o: 0.35 },
  { x: 24, y: 173, r: 0.9, o: 0.5 }, { x: 392, y: 190, r: 0.7, o: 0.4 },
  { x: 686, y: 153, r: 1.1, o: 0.6 }, { x: 136, y: 296, r: 0.8, o: 0.45 },
  { x: 478, y: 263, r: 0.6, o: 0.35 }, { x: 568, y: 393, r: 0.7, o: 0.4 },
  { x: 46, y: 360, r: 0.9, o: 0.5 }, { x: 703, y: 400, r: 0.8, o: 0.45 },
  { x: 223, y: 446, r: 0.6, o: 0.35 }, { x: 456, y: 486, r: 1.1, o: 0.6 },
  { x: 623, y: 533, r: 0.7, o: 0.4 }, { x: 140, y: 586, r: 0.9, o: 0.5 },
  { x: 350, y: 566, r: 0.8, o: 0.45 }, { x: 703, y: 578, r: 0.6, o: 0.4 },
  { x: 266, y: 678, r: 1.0, o: 0.55 }, { x: 501, y: 20, r: 0.6, o: 0.35 },
  { x: 190, y: 60, r: 0.7, o: 0.4 }, { x: 334, y: 86, r: 1.0, o: 0.55 },
  { x: 726, y: 320, r: 0.9, o: 0.5 }, { x: 16, y: 528, r: 1.1, o: 0.6 },
  { x: 610, y: 280, r: 0.7, o: 0.4 }, { x: 530, y: 704, r: 0.8, o: 0.45 },
  { x: 756, y: 450, r: 1.0, o: 0.5 }, { x: 760, y: 188, r: 0.7, o: 0.4 },
  { x: 730, y: 90, r: 0.8, o: 0.45 }, { x: 4, y: 680, r: 0.9, o: 0.4 },
];

function getPlanetPos(index: number) {
  // Balanced angles for a 3-planet system
  const angles = [-150, -30, 90];
  const angleDeg = angles[index];
  const rad = angleDeg * (Math.PI / 180);
  return {
    x: Math.cos(rad) * PLANET_R,
    y: Math.sin(rad) * PLANET_R,
    angleDeg,
  };
}

function getSatPos(
  px: number,
  py: number,
  pAngleDeg: number,
  idx: number,
  total: number,
) {
  // Full 360° distribution — evenly spaced around the planet
  const step = 360 / total;
  // Start opposite the sun (outward), offset by half-step for visual balance
  const angleDeg = pAngleDeg + 180 + idx * step;
  const radius = getSatOrbitRadius(total);
  const rad = angleDeg * (Math.PI / 180);
  return { x: px + Math.cos(rad) * radius, y: py + Math.sin(rad) * radius };
}

// Precompute which planet index pairs share at least one satellite (core or addon)
const sharedPairs = (() => {
  const result: { i: number; j: number; count: number }[] = [];
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      const count = satellites.filter(
        (s) =>
          s.planetIds.includes(planets[i].id) &&
          s.planetIds.includes(planets[j].id),
      ).length;
      if (count > 0) result.push({ i, j, count });
    }
  }
  return result;
})();

export function SolarSystemView() {
  const { focusedPlanetId, focusOnPlanet, unfocusPlanet, openSatellite } =
    usePlanetarySystem();

  const focusedIdx = planets.findIndex((p) => p.id === focusedPlanetId);
  const focusPos = focusedIdx >= 0 ? getPlanetPos(focusedIdx) : null;
  // No vertical offset hack — panel lives outside canvas now
  const zoomX = focusPos ? -focusPos.x * ZOOM : 0;
  const zoomY = focusPos ? -focusPos.y * ZOOM : 0;

  return (
    <>
      {/* Static starfield — not zoomable, pure atmosphere */}
      <svg
        className="absolute inset-0 pointer-events-none z-0"
        width="100%"
        height="100%"
        style={{ overflow: 'visible' }}
      >
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" fillOpacity={s.o} />
        ))}
      </svg>

      {/* Backdrop: click anywhere on canvas to unfocus */}
      {focusedPlanetId && (
        <div
          className="absolute inset-0 z-0"
          onClick={unfocusPlanet}
          aria-label="Deseleccionar planeta"
        />
      )}

      {/* ── Zoomable canvas ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: focusedPlanetId ? ZOOM : 1, x: zoomX, y: zoomY }}
        transition={springSmooth}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        {/* ── SVG: dashed connection lines between planets that share modules ── */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={CANVAS}
          height={CANVAS}
          style={{ overflow: 'visible' }}
        >
          <defs>
            {sharedPairs.map(({ i, j }) => {
              const p1 = planets[i];
              const p2 = planets[j];
              const pos1 = getPlanetPos(i);
              const pos2 = getPlanetPos(j);
              return (
                <linearGradient
                  key={`grad-${i}-${j}`}
                  id={`solar-grad-${i}-${j}`}
                  x1={CANVAS / 2 + pos1.x}
                  y1={CANVAS / 2 + pos1.y}
                  x2={CANVAS / 2 + pos2.x}
                  y2={CANVAS / 2 + pos2.y}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={p1.color} />
                  <stop offset="100%" stopColor={p2.color} />
                </linearGradient>
              );
            })}
          </defs>
          {sharedPairs.map(({ i, j, count }) => {
            const pos1 = getPlanetPos(i);
            const pos2 = getPlanetPos(j);
            const isActive =
              focusedPlanetId === planets[i].id ||
              focusedPlanetId === planets[j].id;
            return (
              <line
                key={`conn-${i}-${j}`}
                x1={CANVAS / 2 + pos1.x}
                y1={CANVAS / 2 + pos1.y}
                x2={CANVAS / 2 + pos2.x}
                y2={CANVAS / 2 + pos2.y}
                stroke={`url(#solar-grad-${i}-${j})`}
                strokeWidth={count >= 4 ? 1.5 : 1}
                strokeOpacity={
                  focusedPlanetId ? (isActive ? 0.45 : 0.04) : 0.22
                }
                strokeDasharray="5 4"
              />
            );
          })}
        </svg>

        {/* Outer decorative orbit ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: `calc(50% - ${PLANET_R + 28}px)`,
            top: `calc(50% - ${PLANET_R + 28}px)`,
            width: (PLANET_R + 28) * 2,
            height: (PLANET_R + 28) * 2,
            border: '1px dashed rgba(255,255,255,0.07)',
            borderRadius: '50%',
          }}
        />

        {/* Sun */}
        <CenterSun />

        {/* ── Planet clusters (planet + its addon satellites) ── */}
        {planets.map((planet, pIdx) => {
          const pos = getPlanetPos(pIdx);
          const sats = getSatellitesForPlanet(planet.id);
          const isFocused = focusedPlanetId === planet.id;
          const isDimmed = !!focusedPlanetId && !isFocused;
          const Icon = planet.icon;
          const orbitR = getSatOrbitRadius(sats.length);

          return (
            <div key={planet.id}>
              {/* Per-planet orbital hint ring */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: `calc(50% + ${pos.x}px - ${orbitR}px)`,
                  top: `calc(50% + ${pos.y}px - ${orbitR}px)`,
                  width: orbitR * 2,
                  height: orbitR * 2,
                  border: `1px dashed ${planet.color}`,
                  borderRadius: '50%',
                  opacity: isDimmed ? 0 : isFocused ? 0.4 : 0.18,
                  transition: 'opacity 0.4s',
                }}
              />

              {/* Satellite pill nodes */}
              {sats.map((sat, si) => {
                const sp = getSatPos(pos.x, pos.y, pos.angleDeg, si, sats.length);
                const SatIcon = sat.icon;
                const shared = isSharedSatellite(sat);
                const connPlanets = shared ? getPlanetsForSatellite(sat.id) : [];

                return (
                  <div
                    key={sat.id}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${sp.x}px)`,
                      top: `calc(50% + ${sp.y}px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 15,
                    }}
                  >
                    <motion.div
                      animate={{
                        opacity: isDimmed ? 0.12 : isFocused ? 1 : 0.55,
                        scale: isDimmed ? 0.55 : 1,
                      }}
                      transition={springSmooth}
                    >
                      {/* Unified pill: icon + label as one clickable element */}
                      <motion.button
                        className="relative flex items-center rounded-full shrink-0 overflow-hidden"
                        style={{
                          background: 'rgba(8, 14, 36, 0.9)',
                          backdropFilter: 'blur(6px)',
                          border: shared ? 'none' : `1.5px solid ${sat.color}60`,
                          boxShadow: `0 0 12px ${sat.color}40, inset 0 1px 0 rgba(255,255,255,0.06)`,
                          height: 32,
                          paddingLeft: 8,
                          paddingRight: isFocused ? 12 : 8,
                        }}
                        animate={{
                          width: isFocused ? 'auto' : 32,
                          paddingRight: isFocused ? 12 : 8,
                        }}
                        transition={springSnappy}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openSatellite(sat.id);
                        }}
                        title={sat.name}
                        aria-label={sat.name}
                      >
                        {/* Shared satellite conic gradient ring */}
                        {shared && (
                          <div
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: `conic-gradient(${connPlanets
                                .map((p, ci) => {
                                  const s2 = (ci / connPlanets.length) * 360;
                                  const e2 = ((ci + 1) / connPlanets.length) * 360;
                                  return `${p.color} ${s2}deg ${e2}deg`;
                                })
                                .join(', ')})`,
                              opacity: 0.5,
                            }}
                          />
                          )}
                        {/* Inner background for shared pills */}
                        {shared && (
                          <div
                            className="absolute rounded-full bg-[#070f22]"
                            style={{ inset: 2 }}
                          />
                        )}

                        {/* Icon */}
                        <SatIcon
                          className="relative z-10 shrink-0"
                          style={{ width: 14, height: 14, color: sat.color }}
                        />

                        {/* Label — shown when planet is focused */}
                        <AnimatePresence>
                          {isFocused && (
                            <motion.span
                              className="relative z-10 text-[10px] font-semibold text-white whitespace-nowrap ml-1.5"
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: 'auto' }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ delay: 0.05 + si * 0.03, duration: 0.2 }}
                              style={{ overflow: 'hidden', maxWidth: 150 }}
                            >
                              {sat.name}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.div>
                  </div>
                );
              })}

              {/* Planet node */}
              <motion.div
                className="absolute"
                style={{
                  left: `calc(50% + ${pos.x}px - 56px)`,
                  top: `calc(50% + ${pos.y}px - 56px)`,
                  width: 112,
                  height: 112,
                  zIndex: 20,
                }}
                animate={{ opacity: isDimmed ? 0.3 : 1 }}
                transition={springSmooth}
              >
                <motion.button
                  className="w-full h-full rounded-full flex flex-col items-center justify-center
                    text-white cursor-pointer shadow-lg border border-white/10 relative"
                  style={{
                    background: `linear-gradient(135deg, ${planet.color}, ${planet.colorSecondary})`,
                    boxShadow: `0 0 ${isFocused ? 65 : 35}px ${planet.color}${
                      isFocused ? '66' : '40'
                    }`,
                  }}
                  whileHover={{ scale: isDimmed ? 1 : 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    isFocused ? unfocusPlanet() : focusOnPlanet(planet.id);
                  }}
                  aria-label={`Explorar ${planet.name}`}
                >
                  <Icon className="w-7 h-7 mb-1" />
                  <span className="text-xs font-bold leading-tight">
                    {planet.brandName}
                  </span>
                  <span className="text-[9px] text-white/60 mt-0.5">
                    {planet.name}
                  </span>

                  {/* Satellite count badge (visible only when unfocused) */}
                  <AnimatePresence>
                    {!focusedPlanetId && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white
                          text-[10px] font-bold flex items-center justify-center shadow-md"
                        style={{ color: planet.color }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        {sats.length}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Back button (fixed — NOT inside zoomable canvas) */}
      <AnimatePresence>
        {focusedPlanetId && <BackButton key="back" onClick={unfocusPlanet} />}
      </AnimatePresence>

      {/* Tagline (visible only when nothing is focused) */}
      <AnimatePresence>
        {!focusedPlanetId && (
          <motion.p
            key="tagline"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/35
              whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            La democracia del futuro, hoy
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
