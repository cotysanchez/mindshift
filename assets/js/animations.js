/**
 * animations.js — MindShift Coach
 * Intersection Observer, counter animation, word reveal, parallax
 * Vanilla JS ES6+ — sin dependencias externas
 */

'use strict';

/* =============================================
   1. INTERSECTION OBSERVER — Scroll reveal
   Todos los elementos con .animate-on-scroll
   ============================================= */

const scrollRevealInit = () => {
  const elements = document.querySelectorAll(
    '.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-fade'
  );

  if (!elements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Dejar de observar una vez que ya apareció (para mejor performance)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
};


/* =============================================
   2. COUNTER ANIMATION — Estadísticas del coach
   Leer data-target en el elemento HTML
   Ejemplo: <span class="stat-number" data-target="150">0</span>
   ============================================= */

/**
 * Easing cuadrático para el counter (ease-out)
 * @param {number} t - progreso normalizado [0, 1]
 * @returns {number} - valor con easing aplicado
 */
const easeOutQuad = (t) => t * (2 - t);

/**
 * Anima un elemento de contador de 0 a su data-target
 * @param {HTMLElement} el - elemento con data-target
 * @param {number} duration - duración en ms
 */
const animateCounter = (el, duration = 2000) => {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  if (isNaN(target)) return;

  const startTime = performance.now();

  const update = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);
    const current = Math.floor(easedProgress * target);

    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // Asegurar el valor final exacto
      el.textContent = target + suffix;
    }
  };

  requestAnimationFrame(update);
};

const countersInit = () => {
  const counterElements = document.querySelectorAll('.stat-number[data-target]');
  if (!counterElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, observerOptions);

  counterElements.forEach((el) => observer.observe(el));
};


/* =============================================
   3. WORD-BY-WORD REVEAL — Sección manifiesto
   Separar el texto en spans por palabra y animar con stagger
   ============================================= */

const wordRevealInit = () => {
  const container = document.querySelector('.manifesto-text');
  if (!container) return;

  // Guardar el HTML original para procesar spans de acento
  // Procesar palabra por palabra preservando el span .accent
  const processNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Dividir texto en palabras, preservando espacios
      const words = node.textContent.split(/(\s+)/);
      const fragment = document.createDocumentFragment();

      words.forEach((word) => {
        if (word.trim() === '') {
          // Es un espacio — añadir como texto
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement('span');
          span.classList.add('word');
          span.textContent = word;
          fragment.appendChild(span);
        }
      });

      return fragment;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      // Si es el span .accent, procesar sus hijos también
      const clone = node.cloneNode(false);
      node.childNodes.forEach((child) => {
        clone.appendChild(processNode(child));
      });
      return clone;
    }

    return node.cloneNode(true);
  };

  // Reconstruir el contenido con los spans de palabra
  const fragment = document.createDocumentFragment();
  container.childNodes.forEach((node) => {
    fragment.appendChild(processNode(node));
  });

  container.innerHTML = '';
  container.appendChild(fragment);

  // Asignar delays escalonados
  const wordSpans = container.querySelectorAll('.word');
  wordSpans.forEach((span, i) => {
    span.style.transitionDelay = `${i * 0.05}s`;
  });

  // Observar el contenedor
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wordSpans.forEach((span) => span.classList.add('revealed'));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(container);
};


/* =============================================
   4. PARALLAX — Imagen hero (solo desktop)
   Solo activo en window.innerWidth > 1024
   ============================================= */

const parallaxInit = () => {
  // Solo en desktop
  if (window.innerWidth <= 1024) return;

  const heroImg = document.querySelector('.hero-img');
  if (!heroImg) return;

  const MAX_OFFSET = 30; // px máximos de desplazamiento

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const heroHeight = heroImg.closest('.hero')?.offsetHeight || window.innerHeight;

    // Solo aplicar mientras el hero es visible
    if (scrollY > heroHeight) return;

    const progress = scrollY / heroHeight; // 0 a 1
    const offset = progress * MAX_OFFSET;

    heroImg.style.transform = `translateY(${offset}px)`;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};


/* =============================================
   5. STAGGER — Cards de grid (método, testimonios, programas)
   Asignar delays automáticamente a los hijos directos de grids
   ============================================= */

const staggerGridsInit = () => {
  const grids = document.querySelectorAll('.method-grid, .testimonials-grid, .programs-grid');

  grids.forEach((grid) => {
    const cards = grid.querySelectorAll(':scope > *');

    cards.forEach((card, i) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${i * 0.15}s`;
    });
  });
};


/* =============================================
   6. INICIALIZACIÓN
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  // Primero: stagger (añade clases antes del observer)
  staggerGridsInit();

  // Luego: observers
  scrollRevealInit();
  countersInit();
  wordRevealInit();
  parallaxInit();
});
