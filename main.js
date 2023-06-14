let btnAbrirModal = document.querySelector("#abrir-modal");
let btnCerrarModal = document.querySelector("#cerrar-modal");
let modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
})
btnCerrarModal.addEventListener("click", () => {
    modal.classList.add("hidden");
})