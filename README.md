# Landing

## Descripción

Landing es un sitio web estático para una página de presentación moderna construida con Flowbite y Tailwind CSS, junto con soporte de Vite para desarrollo y empaquetado.

El repositorio contiene:
- `index.html`: la página principal del landing.
- `js/file01.js`: lógica de interacción y conexión con elementos de la interfaz.
- `js/functions.js`: funciones utilitarias para consumir APIs y procesar respuestas.
- `src/`: carpeta con un ejemplo de aplicación Vite/JavaScript que puede ser usada como referencia o punto de partida.
- `public/`: archivos públicos estáticos que se sirven tal cual.

## Tecnologías

- Vite
- JavaScript moderno (ES Modules)
- Flowbite
- Tailwind CSS
- Fetch API

## Estructura de archivos

- `index.html`: entrada principal del sitio. Usa Flowbite desde CDN y carga `./js/file01.js`.
- `js/file01.js`: construye el contenido dinámico del landing y arranca la interacción de UI.
- `js/functions.js`: exporta las funciones `fetchProducts(url)` y `fetchCategories(url)` para cargar datos remotos.
- `src/main.js`: ejemplo de inicialización de app Vite con contador, no está actualmente referenciado desde `index.html`.
- `src/counter.js`: módulo que crea un contador clicable.
- `src/style.css`: estilos de ejemplo para la app Vite.
- `package.json`: scripts de desarrollo y dependencias.

## Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir la URL que Vite muestra en la terminal, normalmente `http://localhost:5173`.

## Scripts disponibles

- `npm run dev`: inicia el servidor Vite en modo desarrollo.
- `npm run build`: genera la versión optimizada para producción.
- `npm run preview`: sirve localmente la carpeta `dist` generada.

## Dependencias

- `flowbite`: componentes UI basados en Tailwind CSS.
- `vite`: herramienta de construcción y servidor de desarrollo.

## Notas

- `index.html` carga Flowbite y Tailwind CSS desde CDN.
- El script `js/functions.js` maneja las respuestas de la API y devuelve un objeto con `success` y `body`.
- Si deseas usar el código en `src/`, asegúrate de ajustar `index.html` o `vite.config.js` para que apunte al archivo correcto.

## Mejora sugerida

Para completar la documentación, puedes agregar ejemplos de uso de las funciones de fetch y describir las APIs esperadas para `fetchProducts` y `fetchCategories`.