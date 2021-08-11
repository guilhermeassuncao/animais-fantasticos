export default function initAnimateScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.5;
        const activeClass = "ativo";

        function animateScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                const isSectionVisible = sectionTop - windowMetade < 0;

                if (isSectionVisible) {
                    section.classList.add(activeClass);
                }
                else if(section.classList.contains(activeClass)) {
                    section.classList.remove(activeClass);
                }
            });
        }

        animateScroll();

        window.addEventListener("scroll", animateScroll);
    }
}
