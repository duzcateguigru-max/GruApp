// --- LÓGICA DEL LOGIN ---
const loginScreen = document.getElementById('login-screen');
const appContainer = document.getElementById('app-container');

// --- LÓGICA DEL LOGIN (EN login.html) ---
// Este código solo se ejecutará si encuentra el formulario de login.
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue

        // Aquí iría tu validación real de usuario y contraseña

        console.log('Login exitoso, redirigiendo a la home...');
        
        // Redirige al usuario a la página principal de la app
        window.location.href = 'home.html';
    });
}


// --- LÓGICA DE LA APP (existente) ---
lucide.createIcons();

const mainContent = document.getElementById('main-content');
const navItems = document.querySelectorAll('.nav-item');

// Lógica para el desplazamiento y el estado activo
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Previene el salto brusco del enlace
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            mainContent.scrollTo({
                top: targetElement.offsetTop - mainContent.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

mainContent.addEventListener('scroll', () => {
    let currentSectionId = '';
    navItems.forEach(item => {
        const section = document.querySelector(item.getAttribute('href'));
        if (section.offsetTop - mainContent.offsetTop <= mainContent.scrollTop + 100) {
           currentSectionId = item.getAttribute('href');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('nav-item-active');
        if (item.getAttribute('href') === currentSectionId) {
            item.classList.add('nav-item-active');
        }
    });
});