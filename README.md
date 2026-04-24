# React + Vite Enterprise Templete

Una plantilla de alto rendimiento configurada con las herramientas más modernas del ecosistema React para escalar proyectos rápidamente.

## Stack Tecnológico
- **Core:** React 19 + TypeScript + Vite
- **Estilos:**
  - [Taildwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) (Motor de alto rendimiento)
  - [Radix UI Themes](https://www.radix-ui.com/themes/docs/overview/getting-started) (Componentes accesibles)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest) (Type-safe routing)
- **Estado & Data Fetching:**
  - [Zustand](https://zustand-demo.pmnd.rs/) (Estado global ligero)
  - [TanStack React Query v5](https://tanstack.com/query/latest) (Gestión de estado asíncrono)
- **UI & Gráficos:**
  - [Lucide React](https://lucide.dev/) (Iconos)
  - [Recharts](https://recharts.org/) (Visualización de datos)
  - `clsx` + `taildwind-merge` (Utilidad `cn` para gestión de clases)

## Instalación y Uso
1. **Clonar el respositorio:**
   ```bash
   git clone <tu-url-repo>
   cd <nombre-carpeta>
2. **Instalar dependencias:**
   ```bash
   npm install
3. **Iniciar entorno de desarrollo:**
   ```bash
   npm run dev

## Estructura principal
- `/src/store`: Configuración de Zustand (incluye `useThemeStore`).
- `/src/lib`: Utilidades como el método `cn` para concatenación de clases.
- `/src/components`: Componentes reutilizables:
- `/src/soutes`: Configuración de rutas para TanStack Router.

## Dark Mode
El modo oscuro está integrado mediante **Zuntand** y persiste en `localStorage`. Se sincroniza automáticamente con las variables de **Tailwind v4** y la apariencia de **Radix UI Themes**.

### Algunos consejos extra para tu repo:
1. **Color Scheme**: En el `useLayoutEffect`, agregué `root.style.colorScheme`. Esto ayuda a que las barras de desplazamiento nativas del navegador también cambien a modo oscuro.
2. **Radix + Taildwind**: Recuerda que Radix UI tiene sus propios tokens. Al usar `Theme appearance={isDarkMode ? "dark": "light"}`, te aseguras de que los componentes de Radix se adapten perfectamente a tu store de Zustand.
3. **Optimización**: Asegúrate de que tu archivo `index.css` (o donde importes Taildwind v4) tenga los `@theme` necesarios si planeas exteneder la paleta de colores.
