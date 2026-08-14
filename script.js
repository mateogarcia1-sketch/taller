// ========================================
// NAVEGACIÓN SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ========================================

const formulario = document.querySelector('.formulario');
if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validación
        if (nombre === '' || email === '' || mensaje === '') {
            alert('❌ Por favor, completa todos los campos');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('❌ Por favor, ingresa un email válido');
            return;
        }
        
        // Mensaje de éxito
        alert(`✅ ¡Gracias ${nombre}!\n\nHemos recibido tu mensaje.\nTe contactaremos pronto en: ${email}`);
        
        // Limpiar formulario
        formulario.reset();
        
        // Log en consola
        console.log('Formulario enviado:', { nombre, email, mensaje });
    });
}

// ========================================
// REGISTRO EN TALLERES
// ========================================

document.querySelectorAll('.taller-card .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function () {
        const tallerNombre = this.closest('.taller-card').querySelector('h3').textContent;
        const tallerPrecio = this.closest('.taller-card').querySelector('.precio').textContent;
        
        alert(`✅ Registro Exitoso\n\n${tallerNombre}\nPrecio: ${tallerPrecio}\n\nProximamente te enviaremos los detalles.`);
        
        console.log(`Usuario se registró a: ${tallerNombre}`);
    });
});

// ========================================
// BOTÓN PRINCIPAL HERO
// ========================================

const btnHero = document.querySelector('.hero .btn-primary');
if (btnHero) {
    btnHero.addEventListener('click', function () {
        document.querySelector('#productos').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ========================================
// EFECTOS HOVER EN PRODUCTOS
// ========================================

document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 20px rgba(255, 107, 157, 0.3)';
    });
    
    producto.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
    });
});

// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos de productos y talleres
document.querySelectorAll('.producto, .taller-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ========================================
// CONTADOR DE VISITAS
// ========================================

function actualizarContador() {
    let visitas = localStorage.getItem('visitas');
    visitas = visitas ? parseInt(visitas) + 1 : 1;
    localStorage.setItem('visitas', visitas);
    
    console.log(`👁️ Total de visitas: ${visitas}`);
}

actualizarContador();

// ========================================
// MENSAJES EN CONSOLA
// ========================================

console.log('%c🧵 Bienvenido al Taller de Muñecos', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%cPágina cargada correctamente', 'color: #FFC93C; font-size: 14px;');
console.log('%cDesarrollado con ❤️', 'color: #FF6B9D; font-size: 12px;');
