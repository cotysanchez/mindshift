/**
 * main.js — MindShift Coach
 * Lógica principal: typewriter, navbar, hamburger menu, smooth scroll, active nav
 * Vanilla JS ES6+ — sin dependencias externas
 */

'use strict';

/* =============================================
   1. TYPEWRITER EFFECT
   ============================================= */

const typewriterInit = () => {
  const target = document.getElementById('typewriter-text');
  const cursor = document.querySelector('.cursor');

  if (!target) return;

  const phrases = [
    'lidera tu vida',
    'domina tu juego',
    'sé imparable',
    'define tu legado',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPausing = false;

  const WRITE_SPEED = 80;    // ms por caracter al escribir
  const DELETE_SPEED = 40;   // ms por caracter al borrar
  const PAUSE_AFTER = 2500;  // ms de pausa antes de borrar

  const type = () => {
    const currentPhrase = phrases[phraseIndex];

    if (isPausing) return;

    if (!isDeleting) {
      // Escribiendo
      target.textContent = currentPhrase.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentPhrase.length) {
        // Termina de escribir → pausa
        isPausing = true;
        setTimeout(() => {
          isPausing = false;
          isDeleting = true;
          scheduleNext();
        }, PAUSE_AFTER);
        return;
      }
    } else {
      // Borrando
      target.textContent = currentPhrase.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    scheduleNext();
  };

  const scheduleNext = () => {
    const delay = isDeleting ? DELETE_SPEED : WRITE_SPEED;
    setTimeout(type, delay);
  };

  // Iniciar con delay para que el resto de la página cargue
  setTimeout(type, 1200);
};


/* =============================================
   2. NAVBAR — EFECTO SCROLL
   ============================================= */

const navbarScrollInit = () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Aplicar inmediatamente al cargar (por si la página recargó con scroll)
  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });
};


/* =============================================
   3. HAMBURGER MENU MOBILE
   ============================================= */

const hamburgerInit = () => {
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  const overlay = document.querySelector('.nav-overlay');
  const mobileLinks = document.querySelectorAll('.nav-mobile-menu a');

  if (!hamburger || !mobileMenu) return;

  const openMenu = () => {
    hamburger.classList.add('active');
    mobileMenu.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    if (hamburger.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  hamburger.addEventListener('click', toggleMenu);

  // Cerrar al clickear el overlay
  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  // Cerrar al clickear cualquier link del menú
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.classList.contains('active')) {
      closeMenu();
    }
  });
};


/* =============================================
   4. SMOOTH SCROLL
   ============================================= */

const smoothScrollInit = () => {
  const NAV_OFFSET = 80; // Compensar navbar fija

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');

      // Ignorar links que solo tienen "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const targetPosition = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    });
  });
};


/* =============================================
   5. ACTIVE NAV LINK — detectar sección visible
   ============================================= */

const activeNavInit = () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px', // Activar cuando la sección ocupa la zona central
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
};


/* =============================================
   6. PLAY BUTTON — Sección storytelling
   ============================================= */

const playButtonInit = () => {
  const playBtn = document.querySelector('.play-btn');
  if (!playBtn) return;

  playBtn.addEventListener('click', () => {
    // Si hay un video real, pausar/reproducir aquí
    // Por ahora: feedback visual
    playBtn.classList.toggle('clicked');

    // Quitar la clase 'clicked' después de 400ms para efecto de rebote
    setTimeout(() => {
      if (playBtn.classList.contains('clicked')) {
        playBtn.classList.remove('clicked');
      }
    }, 400);
  });
};


/* =============================================
   7. PULSE ANIMATION — CTA buttons
   Aplicar clase después de 1s para no interferir con animación de entrada
   ============================================= */

const pulseButtonsInit = () => {
  const ctaButtons = document.querySelectorAll('.btn-cta-main');

  ctaButtons.forEach((btn) => {
    setTimeout(() => {
      btn.classList.add('pulse-animation');
    }, 2000);
  });
};


/* =============================================
   8. INICIALIZACIÓN
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  typewriterInit();
  navbarScrollInit();
  hamburgerInit();
  smoothScrollInit();
  activeNavInit();
  playButtonInit();
  pulseButtonsInit();
});
