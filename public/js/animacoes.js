function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const activeClass = "ativo";

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(activeClass);
            });

            const direcaoAnimacao = tabContent[index].dataset.anime;

            tabContent[index].classList.add(activeClass, direcaoAnimacao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = "ativo";

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

function initScrollSmooth() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        const topoSection = section.offsetTop;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

function initAnimateScroll() {
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
            });
        }

        animateScroll();

        window.addEventListener("scroll", animateScroll);
    }
}

initTabNav();
initAccordion();
initScrollSmooth();
initAnimateScroll();
