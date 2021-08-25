export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerClass = observerClass;
        this.observerTarget = document.querySelector(observerTarget);

        this.handleMutation = this.handleMutation.bind(this);
    }

    static incrementarNumero(numero) {
        const num = +numero.innerText;
        const increment = Math.floor(num / 100);

        let start = 0;

        const timer = setInterval(() => {
            start += increment;

            numero.innerText = start;

            if (start > num) {
                numero.innerText = num;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    animaNumeros() {
        this.numeros.forEach((numero) => {
            this.constructor.incrementarNumero(numero);
        });
    }

    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }
}
