import outsideclick from "./outsideclick.js";

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuList = document.querySelector('[data-menu="list"]');
    const eventos = ["click", "touchstart"];

    if (menuButton) {
        function openMenu(event) {
            const activeClass = "active";

            menuButton.classList.add(activeClass);
            menuList.classList.add(activeClass);

            outsideclick(menuList, eventos, () => {
                menuButton.classList.remove(activeClass);
                menuList.classList.remove(activeClass);
            });
        }

        eventos.forEach((evento) => {
            menuButton.addEventListener(evento, openMenu);
        });
    }
}
