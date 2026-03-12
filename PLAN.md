# Plan: Eliminar Identyz + Mejoras Visuales

## 1. Eliminar Identyz como satélite (autenticación es core)

**data.ts:**
- Eliminar el satélite `identyz` del array `satellites`
- Remover `'identyz'` de `satelliteIds` de votaciones y juntas
- Absorber conceptos clave de autenticación en los features core de cada planeta:
  - EVoters: ya tiene "Múltiples métodos de autenticación robusta" — enriquecer con "Clave Única, biometría facial y OCR"
  - EHolders: agregar feature de autenticación robusta
- Remover import `Fingerprint` si ya no se usa

## 2. Fondo oscuro "espacial" (Desktop)

Actualmente el fondo es `bg-gradient-to-br from-gray-50 via-white to-gray-100`. Para el sistema solar, un fondo oscuro hace que los planetas brillen más y refuerza la metáfora.

**PlanetarySystem.tsx:** Cambiar el fondo del contenedor a un gradiente oscuro (`from-[#0a0a1a] via-[#111127] to-[#0a0a1a]`)

**SolarSystemView.tsx:** Ajustar color del tagline a `text-gray-500`

**BackButton.tsx:** Ajustar para que se vea bien sobre fondo oscuro (dark glassmorphism)

**PlanetDetailView.tsx:** Panel inferior con glassmorphism oscuro en vez de `bg-white/90`

## 3. Mejora de órbitas y efectos

**OrbitRing.tsx:** Agregar segunda órbita interna tenue y mejorar el stroke con gradiente

**SolarSystemView.tsx:** Agregar un sutil efecto de "estrellas" al fondo con dots CSS

**CenterSun.tsx:** Agregar animación de pulso sutil al glow

**PlanetNode.tsx:** Mejorar el glow effect, agregar ring sutil externo

## 4. Panel info (Desktop) - Rediseño

**PlanetDetailView.tsx:**
- Panel inferior: glassmorphism oscuro (`bg-gray-900/80 backdrop-blur-xl`)
- Texto en blanco/gris claro
- Stats con fondo colored translúcido
- Features con iconos más visibles
- Sub-brands como pills más visibles
- Servicios Adicionales: pills compactos con hover tooltip, en vez de lista plana
- Borde superior coloreado con el color del planeta

## 5. Panel satélite - Mejora visual

**SatelliteDetailPanel.tsx:**
- Header con gradiente coloreado del satélite (sutil)
- Mejor separación visual entre secciones
- Cards para stats en vez de texto plano

## 6. Vista Mobile - Mejora visual

**MobileView.tsx:**
- Fondo oscuro consistente con desktop
- Cards con borde lateral coloreado (accent left border)
- Servicios Adicionales: mostrar solo nombres como pills compactos, expandibles al toque
- Mejor jerarquía tipográfica
- Bottom sheet del satélite: header con gradiente sutil

## Archivos a modificar:
1. `data.ts` — eliminar Identyz, ajustar features
2. `types.ts` — sin cambios
3. `PlanetarySystem.tsx` — fondo oscuro
4. `SolarSystemView.tsx` — ajustes de color, estrellas
5. `PlanetDetailView.tsx` — panel dark glass, servicios adicionales como pills
6. `CenterSun.tsx` — pulse glow
7. `PlanetNode.tsx` — mejor glow
8. `SatelliteNode.tsx` — ajustes para fondo oscuro
9. `SatelliteDetailPanel.tsx` — header coloreado
10. `BackButton.tsx` — dark glassmorphism
11. `MobileView.tsx` — fondo oscuro, cards mejoradas, pills
12. `index.css` — estrellas CSS, utilidades dark glass
