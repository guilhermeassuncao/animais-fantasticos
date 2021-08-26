import debounce from './debounce.js'

export default class ScrollAnimacao {
    constructor(secoes) {
        this.sections = document.querySelectorAll(secoes);
        this.windowMetade = window.innerHeight * 0.5;
        this.activeClass = "ativo";

        this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    }

    getDistance() {
        this.distance = [...this.sections].map((section) => ({
            element: section,
            offSet: Math.floor(section.offsetTop - this.windowMetade),
        }));
    }

    checkDistance() {
        this.distance.forEach((section) => {
            if (window.pageYOffset > section.offSet) {
                section.element.classList.add(this.activeClass);
            } else if (section.element.classList.contains(this.activeClass)) {
                section.element.classList.remove(this.activeClass);
            }
        });
    }

    init() {
        if (this.sections.length) {
            this.getDistance();
            this.checkDistance();
            window.addEventListener("scroll", this.checkDistance);
        }

        return this;
    }

    stop() {
        window.removeEventListener("scroll", this.checkDistance);
    }
}
