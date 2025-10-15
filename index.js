// --- LÓGICA DEL LOGIN ---
const loginScreen = document.getElementById('login-screen');
const appContainer = document.getElementById('app-container');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue
    
    // Simula un login exitoso
    console.log('Login exitoso');

    // Oculta la pantalla de login con una transición
    loginScreen.classList.add('opacity-0');
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        
        // Muestra el contenedor de la app
        appContainer.classList.remove('hidden');
    }, 500); // Coincide con la duración de la transición
});


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