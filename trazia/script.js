/**
 * TRAZIA - Rediseño Editorial y de Origen
 * Interacciones limpias, accesibles y sutiles
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenu();
    initSmoothScroll();
    initFormHandler();
    initEditorialObserver();
});

/* ------------------ 1. NAVBAR ELEVATION ON SCROLL ------------------ */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = '0 4px 20px rgba(23, 61, 50, 0.08)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'rgba(250, 249, 245, 0.95)';
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/* ------------------ 2. MENÚ MÓVIL ACCESIBLE ------------------ */
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        const isActive = menu.classList.contains('active');
        toggle.setAttribute('aria-expanded', isActive);
    });

    // Cerrar al hacer clic en cualquier enlace
    const links = menu.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
}

/* ------------------ 3. SMOOTH SCROLL CON OFFSET ------------------ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = 84;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ------------------ 4. FORMULARIO DE CONTACTO HONESTO ------------------ */
function initFormHandler() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.btn-submit');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando mensaje...';
        }

        setTimeout(() => {
            form.style.display = 'none';
            feedback.classList.remove('hidden');
        }, 600);
    });
}

/* ------------------ 5. REVEAL EDITORIAL SUTIL ------------------ */
function initEditorialObserver() {
    const cards = document.querySelectorAll('.rostro-card, .enfoque-card, .b2b-card, .dual-card, .journey-step');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, idx * 60);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
