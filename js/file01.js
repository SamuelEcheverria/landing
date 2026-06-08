"use strict";

/**
 * Muestra el elemento de notificación interactiva (Toast) en la interfaz de usuario
 * agregando la clase de estilo necesaria si el elemento existe.
 * * @function showToast
 * @returns {void} No retorna ningún valor.
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Configura un escuchador de eventos (Event Listener) en el elemento de demostración.
 * Al hacer clic, abre un enlace de video de YouTube en una nueva pestaña.
 * * @function showVideo
 * @returns {void} No retorna ningún valor.
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();