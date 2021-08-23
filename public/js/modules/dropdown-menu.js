import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll("[data-dropdown]");
    const listaEventos = ["touchstart", "click"];

    function handleClick(event) {
        event.preventDefault();
        const classActive = "active";

        this.classList.add(classActive);

        outsideClick(this, listaEventos, () => this.classList.remove(classActive));
    }

    dropdownMenus.forEach((menu) => {
        listaEventos.forEach((userEvent) => {
            menu.addEventListener(userEvent, handleClick);
        });
    });
}
