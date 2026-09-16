# 🌿 TRAZIA — Landing Page Premium Dark Mode

> **"Every origin has a story."**  
> Landing page corporativa de alta gama diseñada con el sistema **Dark Luxury B2B**, inspirada en la arquitectura visual de CryptoLink y adaptada integralmente para **TRAZIA (Comercializadora TRAZIA)**, empresa líder en comercio internacional y exportación de café especial de origen.

---

## 🎯 Identidad y Propuesta de Valor

- **Marca:** TRAZIA (Comercializadora TRAZIA S.A.S.)
- **Tagline:** *Every origin has a story.*
- **Propuesta de Valor:** Comercialización y exportación internacional de café especial de alta puntuación SCA, conectando directamente a caficultores andinos con tostadores globales mediante una trazabilidad transparente, justa y verificable.
- **Sector:** Agro-exportación / B2B / Specialty Coffee & Global Trade
- **Tipo de Web:** Corporativa B2B de Alta Gama

---

## 🎨 Paleta de Colores Corporativa

| Token | Color | HEX / Valor | Propósito |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | Negro Puro | `#000000` | Fondo principal inmersivo |
| `--bg-secondary`| Gris Obsidiana | `#09090B` | Fondo de navbar y secciones |
| `--primary-500`| Verde Profundo Botánico | `#1B4D3E` | Acento primario, confianza y origen |
| `--gold-500`   | Dorado Suave de Cosecha | `#D4AF37` | Acento secundario, lujo y alta puntuación SCA |
| `--text-primary`| Blanco Puro | `#FFFFFF` | Títulos y jerarquía H1/H2 |
| `--text-secondary`| Zinc Suave | `#E4E4E7` | Descripciones y subtítulos |
| `--text-tertiary`| Zinc Medio | `#A1A1AA` | Metadatos y etiquetas secundarias |

---

## 📸 Inventario de Imágenes Integradas

Todas las imágenes se ubican dentro de la carpeta `images/` y cumplen con la estética **Dark Luxury** (#1B4D3E y #D4AF37):

1. **`images/logo.png`**: Emblema corporativo minimalista de origen y hoja geométrica dorada y verde con tipografía de lujo.
2. **`images/hero_visual.png`**: Composición 3D hero con granos de café dorados luminosos flotando y líneas holográficas de trazabilidad.
3. **`images/service_1.png`**: *Abastecimiento Directo en Finca* — Fincas andinas de altura al amanecer con cerezas maduras.
4. **`images/service_2.png`**: *Laboratorio Q-Grader & Catación* — Mesa de cata profesional con protocolo sensorial SCA.
5. **`images/service_3.png`**: *Trazabilidad Digital Integral* — Red digital 3D conectando fincas de origen con puertos mundiales.
6. **`images/service_4.png`**: *Logística & Exportación Global* — Buque portacontenedores de alta mar con iluminación nocturna.
7. **`images/service_5.png`**: *Microlotes & Procesos Exóticos* — Granos verdes de café especial en sacos de yute.
8. **`images/service_6.png`**: *Sostenibilidad & Comercio Ético* — Manos de caficultor sosteniendo cerezas recién cosechadas.
9. **`images/about_image.png`**: *Historia y Filosofía* — Fotografía de origen y tradición cafetera.

---

## ⚡ Características Técnicas y Efectos

- **3D Flip Cards:** Grid de 6 tarjetas de servicio con efecto tridimensional de 180° en hover (desktop) y soporte táctil suave (tap en mobile).
- **Glassmorphism:** Tarjetas con `backdrop-filter: blur(24px) saturate(180%)`, bordes translúcidos dorados y sombras de profundidad.
- **Sistema de Partículas:** 50 partículas flotantes animadas en JavaScript puro con trayectorias no lineales y resplandor sutil.
- **Navbar Inteligente:** Barra flotante con desenfoque dinámico (`.navbar.scrolled`) al desplazarse por la página.
- **Métricas B2B con Contadores:** Conteo progresivo suave mediante `IntersectionObserver` y función de suavizado cúbico (`easeOut`).
- **Explorador Interactivo de Lotes (SCA Showcase):** Selector de pestañas dinámico que permite consultar en vivo detalles de lotes, puntuación SCA, humedad, perfil sensorial y hash de certificado.
- **Formulario B2B de Muestras:** Formulario estilizado con selectores de proceso y volumen, y respuesta visual en pantalla.
- **100% Responsive:** Breakpoints adaptados para monitores ultrapanorámicos, portátiles, tablets y móviles con menú hamburguesa.

---

## 🚀 Cómo Visualizar o Publicar la Web

1. Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari).
2. O inicia un servidor local rápido con Python:
   ```bash
   cd trazia
   python -m http.server 8000
   ```
   Luego visita `http://localhost:8000` en tu navegador.

---

© 2026 TRAZIA (Comercializadora TRAZIA S.A.S.). Todos los derechos reservados.
