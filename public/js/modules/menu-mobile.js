import outsideclick from "./outsideclick.js";

export default class MenuMobile {
    constructor(button, list, events) {
        this.menuButton = document.querySelector(button);
        this.menuList = document.querySelector(list);
        this.activeClass = "active";

        if (events === undefined) {
            this.listaEventos = ["touchstart", "click"];
        } else {
            this.listaEventos = events;
        }

        this.openMenu = this.openMenu.bind(this);
    }

    openMenu(event) {
        event.preventDefault();

        this.menuButton.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);

        outsideclick(this.menuList, this.listaEventos, () => {
            this.menuButton.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvents() {
        this.listaEventos.forEach((evento) => {
            this.menuButton.addEventListener(evento, this.openMenu);
        });
    }

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents();
        }

        return this;
    }
}
