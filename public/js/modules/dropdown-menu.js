import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
    constructor(menus, events) {
        this.dropdownMenus = document.querySelectorAll(menus);

        if (events === undefined) {
            this.listaEventos = ["touchstart", "click"];
        } else {
            this.listaEventos = events;
        }

        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    activeDropdownMenu({ preventDefault, currentTarget }) {
        preventDefault();
        const classActive = "active";

        currentTarget.classList.add(classActive);

        outsideClick(currentTarget, this.listaEventos, () => currentTarget.classList.remove(classActive));
    }

    addDropdownMenuEvent() {
        this.dropdownMenus.forEach((menu) => {
            this.listaEventos.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
        });
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenuEvent();
        }
        return this;
    }
}
