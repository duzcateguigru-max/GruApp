// --- LÓGICA DEL LOGIN (EN login.html) ---
const loginForm = document.getElementById('login-form');

if (loginForm) {
    // Función para mostrar mensajes de error
    const showErrorMessage = (message) => {
        // Busca si ya existe un mensaje de error para no duplicarlo
        let errorContainer = document.getElementById('error-message');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'error-message';
            errorContainer.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4';
            // Inserta el mensaje de error antes del primer botón del formulario
            const firstButton = loginForm.querySelector('button');
            loginForm.insertBefore(errorContainer, firstButton);
        }
        errorContainer.textContent = message;
    };

    // Función para quitar el mensaje de error
    const removeErrorMessage = () => {
        const errorContainer = document.getElementById('error-message');
        if (errorContainer) {
            errorContainer.remove();
        }
    };

    // Evento para el envío del formulario principal (Email y Contraseña)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que la página se recargue
        removeErrorMessage(); // Limpia errores anteriores

        // 1. Obtener los valores de los inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 2. Validación básica
        if (email.trim() === '' || password.trim() === '') {
            showErrorMessage('Por favor, completa todos los campos.');
            return; // Detiene la ejecución
        }

        // 3. Simulación de autenticación (aquí iría la llamada a tu backend)
        // Usamos los valores por defecto del HTML como si fueran los correctos
        if (email === 'demo@email.com' && password === '123456') {
            console.log('Login exitoso, redirigiendo a la home...');
            // Redirige al usuario a la página principal de la app
            window.location.href = 'home.html';
        } else {
            // Si las credenciales son incorrectas
            showErrorMessage('El email o la contraseña son incorrectos.');
        }
    });

    // --- Lógica para botones de redes sociales ---
    const googleLoginBtn = document.getElementById('google-login');
    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', () => {
            console.log('Iniciando sesión con Google...');
            // Aquí iría la lógica para el login con la API de Google
            alert('La funcionalidad de login con Google aún no está implementada.');
        });
    }

    const facebookLoginBtn = document.getElementById('facebook-login');
    if (facebookLoginBtn) {
        facebookLoginBtn.addEventListener('click', () => {
            console.log('Iniciando sesión con Facebook...');
            // Aquí iría la lógica para el login con la API de Facebook
            alert('La funcionalidad de login con Facebook aún no está implementada.');
        });
    }
    
    const appleLoginBtn = document.getElementById('apple-login');
    if (appleLoginBtn) {
        appleLoginBtn.addEventListener('click', () => {
            console.log('Iniciando sesión con Apple...');
            // Aquí iría la lógica para el login con la API de Apple
            alert('La funcionalidad de login con Apple aún no está implementada.');
        });
    }
}