# MindShift Coach — Sitio Web Demo

> Sitio web demo de alto rendimiento para un servicio de coaching deportivo mental. Desarrollado por **CsDigitalPro** como demostración de capacidades de diseño y desarrollo web premium.

**Demo en vivo:** [csdigitalpro.com/demos/mindshiftcoach/](https://csdigitalpro.com/demos/mindshiftcoach/)

---

## Descripción del Proyecto

Sitio web demo desarrollado para **MindShift Coach**, servicio de coaching deportivo mental. Proyecto realizado por CsDigitalPro como demostración de capacidades de diseño y desarrollo web. El diseño sigue un estilo oscuro, minimalista e impactante inspirado en referencias de nivel Awwwards / Apple.

---

## Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| **HTML5 semántico** | Estructura accesible y semánticamente correcta |
| **CSS3** | Custom Properties, Flexbox, Grid, Animations, `clamp()` |
| **JavaScript ES6+ vanilla** | Intersection Observer API, typewriter, counter animation |
| **Google Fonts: Inter** | Pesos 300, 400, 500, 600, 700, 800, 900 |
| ❌ Sin frameworks | Vanilla JS puro — sin React, Vue, jQuery ni librerías |
| 📱 Mobile First | Breakpoints: 375px → 480px → 768px → 1024px → 1440px |

---

## Páginas

| Archivo | Descripción |
|--------|-------------|
| `index.html` | One Page principal con todas las secciones |
| `programas.html` | Grilla de talleres, bootcamps y mentoring 1:1 |

---

## Funcionalidades Implementadas

- ✅ Navbar fija con efecto **glassmorphism** al hacer scroll
- ✅ **Hamburger menu** animado para mobile con overlay y bloqueo de scroll
- ✅ Efecto **typewriter** con cursor parpadeante en el hero
- ✅ Animaciones de entrada con **Intersection Observer** (scroll reveal)
- ✅ **Word-by-word reveal** en la sección manifiesto
- ✅ **Counter animation** en estadísticas del coach (0 → valor final)
- ✅ **Parallax sutil** en la imagen del hero (solo desktop ≥ 1024px)
- ✅ Hover effects en cards con transición de borde y box-shadow
- ✅ **Pulse animation** en botones CTA principales
- ✅ Smooth scroll con compensación de navbar fixed
- ✅ Active link detection en la navegación
- ✅ Grid responsive en todos los listados

---

## Estructura de Archivos

```
mindshiftcoach/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD para GitHub Pages
├── assets/
│   ├── css/
│   │   ├── reset.css           # CSS Reset / Normalización
│   │   ├── variables.css       # Variables CSS (colores, tipografía, espaciados)
│   │   ├── animations.css      # Keyframes y clases de animación
│   │   └── main.css            # Estilos principales (todos los componentes)
│   ├── js/
│   │   ├── main.js             # Lógica principal (typewriter, navbar, scroll)
│   │   └── animations.js       # Intersection Observer, counters, parallax
│   └── images/
│       └── README-images.md    # Instrucciones de imágenes para el cliente
├── index.html                  # One Page principal
├── programas.html              # Página de programas y precios
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Este archivo
```

---

## Instrucciones de Despliegue en Hostinger

### Opción 1 — FTP Manual
1. Comprimir la carpeta `mindshiftcoach/` en un .zip
2. Ingresar al **hPanel** de Hostinger → **File Manager**
3. Navegar a `public_html/demos/`
4. Subir y descomprimir el .zip
5. El sitio quedará en: `public_html/demos/mindshiftcoach/`
6. Accesible en: **csdigitalpro.com/demos/mindshiftcoach/**

### Opción 2 — FTP con FileZilla
```
Host: ftp.csdigitalpro.com
Usuario: tu-usuario-ftp@csdigitalpro.com
Contraseña: (ver panel Hostinger → Hosting → FTP Accounts)
Puerto: 21
Ruta remota: /public_html/demos/mindshiftcoach/
```

### Opción 3 — GitHub Pages (Automático)
El archivo `.github/workflows/deploy.yml` despliega automáticamente a GitHub Pages en cada push a `main`.

> ⚠️ **No requiere configuración de servidor ni base de datos.** Es un sitio 100% estático.

---

## Personalización para el Cliente Real

Reemplazar los siguientes elementos antes de entregar al cliente:

- [ ] **Foto del coach:** `assets/images/coach-hero.webp` y `coach-about.webp` (B&N, alta resolución, fondo neutro)
- [ ] **Nombre del coach:** buscar `Marcos Delgado` y reemplazar por el nombre real
- [ ] **Número de WhatsApp:** buscar `+54 9 XXX XXXX` en ambos footers
- [ ] **Link de agendamiento:** reemplazar `href="#contacto"` en los CTA por link de Calendly o wa.me
- [ ] **Video del coach:** sección storytelling → reemplazar imagen poster por `<video>` o iframe YouTube
- [ ] **Precios:** revisar USD 47, USD 197, USD 347, USD 897 si difieren del cliente real
- [ ] **Redes sociales:** links de Instagram, LinkedIn y TikTok en el footer
- [ ] **Email:** `info@mindshiftcoach.com` → email real del cliente
- [ ] **Meta tags OG:** actualizar `og:url`, `og:image` con URL y imagen real
- [ ] **Favicon:** agregar `<link rel="icon">` con favicon del cliente

---

## Repositorio Git

### Clonar el repositorio
```bash
git clone https://github.com/cotysanchez/mindshiftcoach.git
cd mindshiftcoach
```

### Flujo de trabajo habitual
```bash
git status
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

### Inicialización desde cero
```bash
git init
git add .
git commit -m "feat: initial commit — MindShift Coach demo site"
git branch -M main
git remote add origin https://github.com/cotysanchez/mindshiftcoach.git
git push -u origin main
```

### Convención de Commits

| Prefijo | Uso |
|---------|-----|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de bug |
| `style:` | Cambios de estilos o CSS |
| `content:` | Actualización de textos o imágenes |
| `docs:` | Cambios en README u otra documentación |
| `refactor:` | Mejoras de código sin cambiar funcionalidad |

---

## Créditos

Desarrollado con ❤️ por **[CsDigitalPro](https://csdigitalpro.com)**  
*Web Design · Meta Ads Management · Digital Strategy*

---

*© 2025 MindShift Coach. Demo desarrollado por CsDigitalPro.*
