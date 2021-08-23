export default function initAnimateScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    const windowMetade = window.innerHeight * 0.5;
    const activeClass = "ativo";

    function animateScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - windowMetade < 0;

            if (isSectionVisible) {
                section.classList.add(activeClass);
            } else if (section.classList.contains(activeClass)) {
                section.classList.remove(activeClass);
            }
        });
    }

    if (sections.length) {
        animateScroll();

        window.addEventListener("scroll", animateScroll);
    }
}
