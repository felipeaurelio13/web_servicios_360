# Web Servicios 360

Catalogo interactivo de servicios EVoting con una metafora visual de sistema planetario.

La app muestra plataformas principales (planetas), modulos transversales y add-ons (satelites), con navegacion animada para desktop y una experiencia adaptada a mobile.

## Instalacion y uso local

```bash
npm install
npm run dev
```

La app quedara disponible en la URL que entregue Vite (normalmente `http://localhost:5173`).


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
