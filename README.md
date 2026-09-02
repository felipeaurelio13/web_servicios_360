# Web Servicios 360

Catalogo interactivo de servicios EVoting con una metafora visual de sistema planetario.

La app muestra plataformas principales (planetas), modulos transversales y add-ons (satelites), con navegacion animada para desktop y una experiencia adaptada a mobile.

## Instalacion y uso local

```bash
npm install
npm run dev
```

La app quedara disponible en la URL que entregue Vite (normalmente `http://localhost:5173`).

## Deploy en GitHub Pages

El proyecto incluye el workflow [`deploy.yml`](/Users/felipelorca/Desktop/Proyectos/PAUSADOS/web_servicios_360/.github/workflows/deploy.yml) para publicar el contenido de `dist/` en GitHub Pages usando GitHub Actions.

Configuracion esperada en GitHub:

- En `Settings > Pages`, usar `Build and deployment: GitHub Actions`.
- Hacer push a la rama `main`.

La configuracion de Vite usa `base: './'` para que los assets funcionen correctamente cuando el sitio se publica dentro de la ruta del repositorio.


## Donde editar contenido de negocio

Toda la data del catalogo vive en:

- `src/components/PlanetarySystem/data.ts`

Ahi se definen:

- `planets`: servicios principales
- `satellites`: modulos y add-ons
- helpers de consulta (`getPlanetById`, `getSatelliteById`, etc.)

Para agregar o modificar servicios, ese archivo es el lugar principal.

## Notas

- El documento de referencia funcional esta en `SERVICIOS_360.md`.
