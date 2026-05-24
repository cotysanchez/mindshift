# Instrucciones de Imágenes — MindShift Coach

Esta carpeta contiene las imágenes del sitio. Antes de entregar al cliente, reemplazar los placeholders por imágenes reales.

---

## Imágenes a Reemplazar

### 1. `coach-hero.webp` — Foto principal del coach (Hero)
- **Uso:** Sección Hero (index.html) — columna derecha desktop, imagen superior en mobile
- **Dimensiones recomendadas:** 800×1000px mínimo (relación 4:5)
- **Formato:** WebP para mejor compresión, JPEG como fallback
- **Especificaciones:**
  - Foto en blanco y negro (el CSS aplica `filter: grayscale(100%)`)
  - Fondo neutro (blanco, gris claro o negro) para mejor integración
  - Encuadre: de cuerpo entero o hasta la cintura, coach de pie
  - Alta resolución para pantallas Retina (mínimo 800px de ancho)
  - El CSS aplica `border-radius: 60% 40% 60% 40% / 40% 60% 40% 60%` en desktop
- **Placeholder actual:** `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800`

---

### 2. `coach-about.webp` — Foto secundaria del coach (Sobre el Coach)
- **Uso:** Sección "Sobre el Coach" (index.html) — columna izquierda
- **Dimensiones recomendadas:** 600×750px mínimo (relación 4:5)
- **Formato:** WebP
- **Especificaciones:**
  - Puede ser la misma foto o una diferente
  - En blanco y negro (CSS aplica `filter: grayscale(100%)`)
  - Encuadre más cercano (busto o hasta la cintura)
  - Expresión segura y profesional
- **Placeholder actual:** `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800`

---

### 3. `story-poster.webp` — Imagen de fondo de la sección video
- **Uso:** Sección "Storytelling/Video" (index.html) — imagen de fondo del player
- **Dimensiones recomendadas:** 1200×675px (relación 16:9)
- **Formato:** WebP
- **Especificaciones:**
  - Puede ser una foto de entrenamiento, competencia o el coach en acción
  - El CSS aplica overlay oscuro (`rgba(0,0,0,0.5)`) encima
  - No importa si tiene texto, el overlay lo oscurece
  - Si se agrega un video real, esta imagen pasa a ser el `poster` del `<video>`
- **Placeholder actual:** `https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200`

---

### 4. `favicon.png` — Favicon del sitio
- **Uso:** Ícono de la pestaña del navegador
- **Dimensiones:** 32×32px y/o 64×64px
- **Recomendación:** Usar la inicial "M" en color `#7B2FBE` sobre fondo negro
- **Agregar en el `<head>` de ambos HTML:**
  ```html
  <link rel="icon" type="image/png" href="assets/images/favicon.png">
  ```

---

### 5. `og-image.jpg` — Imagen Open Graph (redes sociales)
- **Uso:** Preview cuando se comparte el link en WhatsApp, Instagram, LinkedIn, etc.
- **Dimensiones:** 1200×630px (relación 1.91:1) — estándar Open Graph
- **Formato:** JPG (mejor compatibilidad)
- **Incluir:** Logo/nombre del coach + tagline + imagen del coach
- **Actualizar en el `<head>` de index.html:**
  ```html
  <meta property="og:image" content="https://csdigitalpro.com/demos/mindshiftcoach/assets/images/og-image.jpg">
  ```

---

## Optimización de Imágenes

Antes de subir al servidor, optimizar con:

### Herramientas online (gratuitas)
- **Squoosh** (squoosh.app) — convertir a WebP, ajustar calidad
- **TinyPNG** (tinypng.com) — comprimir PNG/JPEG sin pérdida visible
- **Convertio** (convertio.co) — convertir formatos

### Herramientas CLI (para desarrolladores)
```bash
# Instalar sharp-cli
npm install -g sharp-cli

# Convertir a WebP con calidad 85
sharp -i coach-hero.jpg -o coach-hero.webp --webp.quality 85

# Redimensionar y convertir
sharp -i coach-hero.jpg -o coach-hero.webp --resize 800 --webp.quality 85
```

---

## Notas Importantes

- **Permisos de imagen:** Asegurarse de tener derechos de uso comercial para todas las imágenes
- **Modelo en fotos:** Si el coach da su foto, verificar que consiente el uso web
- **Alt text:** Ya están configurados en el HTML (`alt="Coach deportivo mental"`)
- **Loading:** La imagen del hero usa `loading="eager"` (carga prioritaria); el resto usa `loading="lazy"`
- **WebP con fallback:** Para máxima compatibilidad, usar el tag `<picture>`:
  ```html
  <picture>
    <source srcset="assets/images/coach-hero.webp" type="image/webp">
    <img src="assets/images/coach-hero.jpg" alt="Coach deportivo mental">
  </picture>
  ```

---

*Documentación generada por CsDigitalPro — csdigitalpro.com*
