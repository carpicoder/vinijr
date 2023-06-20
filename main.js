let btnAbrirModal1 = document.querySelector("#abrir-modal1");
let btnAbrirModal2 = document.querySelector("#abrir-modal2");
let btnCerrarModal = document.querySelector("#cerrar-modal");
let modal = document.querySelector("#modal");

btnAbrirModal1.addEventListener("click", () => {
    modal.classList.remove("hidden");
})
btnAbrirModal2.addEventListener("click", () => {
    modal.classList.remove("hidden");
})
btnCerrarModal.addEventListener("click", () => {
    modal.classList.add("hidden");
})