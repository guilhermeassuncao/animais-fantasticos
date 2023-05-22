export default class Modal {
    constructor(abrir, fechar, modal) {
        this.botaoAbrir = document.querySelector(abrir);
        this.botaoFechar = document.querySelector(fechar);
        this.modal = document.querySelector(modal);
        this.classActive = 'ativo';

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    toggleModal() {
        this.modal.classList.toggle(this.classActive);
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    cliqueForaModal(event) {
        if (event.target === this.modal) {
            this.toggleModal();
        }
    }

    addModalEventes() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.modal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.modal) {
            this.addModalEventes();
        }
        return this;
    }
}
