document.addEventListener("DOMContentLoaded", () => {

    const ADMIN_USER = "admin";
    const DEFAULT_PASS = "admin123@";
    const STORAGE_KEY = "admin_credenciales";

    function initAdmin() {
        if (!localStorage.getItem(STORAGE_KEY)) {
            const data = {
                username: ADMIN_USER,
                password: DEFAULT_PASS
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        }
    }

    function login(username, password) {
        const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (!data) return false;

        return data.username === username && data.password === password;
    }

    // Inicializar admin
    initAdmin();

    // Evento del login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value;

            if (login(username, password)) {
                alert("Bienvenido administrador!");
                sessionStorage.setItem("isLogged", "true");
                window.location.href = "admin.html";
            } else {
                alert("Usuario o contraseña incorrectos...");
            }
        });
    }

    // Evento en los botones del sidebar
    const botones = document.querySelectorAll(".btn-dev");
    botones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            e.preventDefault();
            alert(" Esta función está en desarrollo ");
        });
    });

});
document.getElementById('button-submit').onclick = function(){
    alert("¡You message has been sent,we will be contacting you immediately!")
}