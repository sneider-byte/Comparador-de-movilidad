# AutoSphere - Enciclopedia y Catálogo Global de Vehículos

**AutoSphere** es una aplicación web responsiva e interactiva desarrollada como una enciclopedia global del sector automotor. Permite explorar, clasificar, filtrar, detallar fichas técnicas y comparar lado a lado una amplia gama de vehículos estructurados taxonómicamente (desde automóviles deportivos y motocicletas hasta camiones de carga, tractocamiones y maquinaria pesada).

##  Características Principales

* **Estructura Semántica y Diseño Minimalista (Dark Mode):** Interfaz moderna inspirada en la industria automotriz de alta gama, desarrollada con un layout de panel de control (*dashboard*) y barra lateral fija.
* **Taxonomía Completa (Categorías de la A a la J):** Cobertura exhaustiva de clases vehiculares organizadas por subcategorías específicas.
* **Sistema de Búsqueda y Filtros Dinámicos:** Búsqueda en tiempo real por marca, modelo o país, combinada con filtros cruzados de categoría, subcategoría, disponibilidad de origen (ej. Colombia) y tipo de combustible.
* **Fichas Técnicas de Ingeniería:** Vista individual detallada que se adapta de manera inteligente según el tipo de vehículo (agregando métricas específicas como profundidad de excavación para maquinaria, PBV para camiones o autonomía para motos).
* **Comparador Lado a Lado:** Módulo interactivo para contrastar hasta 4 vehículos de manera simultánea en una matriz de especificaciones técnicas.
* **Diseño Responsivo (Mobile-First):** Menú lateral deslizante adaptable mediante media queries para dispositivos móviles y tabletas.

##  Tecnologías Utilizadas

* **HTML5:** Estructuración semántica de la interfaz (`<aside>`, `<header>`, `<main>`, `<section>`, `<article>`).
* **CSS3:** Estilos avanzados, uso intensivo de **Flexbox** y **CSS Grid**, variables CSS (`:root`), efectos interactivos de transición (*hover*) y diseño adaptable (*Media Queries*).
* **JavaScript (Vanilla):** Manejo dinámico del DOM, renderizado basado en bases de datos JSON estructuradas, filtrado en tiempo real sin recargas de página y gestión de estados para el comparador.

## Estructura de Archivos del Proyecto

```text
 Proyecto-AutoSphere/
│
├──  index.html      # Estructura principal y contenedores semánticos HTML5
├──  styles.css      # Estilos visuales, grid, flexbox y diseño responsivo
└──  script.js       # Lógica, taxonomía, base de datos y funciones interactivas