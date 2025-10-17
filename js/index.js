// // --- LÓGICA DEL LOGIN ---
// const loginScreen = document.getElementById('login-screen');
// const appContainer = document.getElementById('app-container');

// // --- LÓGICA DEL LOGIN (EN login.html) ---
// // Este código solo se ejecutará si encuentra el formulario de login.
// const loginForm = document.getElementById('login-form');

// if (loginForm) {
//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault(); // Evita que la página se recargue

//         // Aquí iría tu validación real de usuario y contraseña

//         console.log('Login exitoso, redirigiendo a la home...');
        
//         // Redirige al usuario a la página principal de la app
//         window.location.href = 'home.html';
//     });
// }


// --- LÓGICA DE NAVEGACIÓN ACTIVA (EN TODAS LAS PÁGINAS DE LA APP) ---
// Se ejecuta después del código del login.

// Primero, nos aseguramos de que lucide-icons se renderice
lucide.createIcons();

// Función para resaltar el ítem de navegación activo
function setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual (ej: "home.html")
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        const itemPage = item.getAttribute('href').split('/').pop();

        // Si el href del ítem coincide con la página actual, le añadimos la clase activa
        if (itemPage === currentPage) {
            item.classList.add('nav-item-active');
            item.classList.remove('text-gray-600'); // Opcional: quitar el color por defecto
        } else {
            item.classList.remove('nav-item-active');
        }
    });
}

// Llama a la función cuando el contenido de la página se haya cargado
document.addEventListener('DOMContentLoaded', setActiveNavItem);