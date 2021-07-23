export default function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const modal = document.querySelector('[data-modal="container"]');
    const classActive = "ativo";

    if (botaoAbrir && botaoFechar && modal) {
        function toggleModal(event) {
            event.preventDefault();
            modal.classList.toggle(classActive);
        }

        function cliqueForaModal(event) {
            if (event.target === this) {
                toggleModal(event);
            }
        }

        botaoAbrir.addEventListener("click", toggleModal);
        botaoFechar.addEventListener("click", toggleModal);
        modal.addEventListener("click", cliqueForaModal);
    }
}
