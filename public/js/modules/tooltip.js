export default function initToolTip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");

    if (tooltips) {
        tooltips.forEach((item) => {
            item.addEventListener("mouseover", onMouseOver);
        });

        const onMouseLeave = {
            handleEvent() {
                this.tooltipBox.remove();
                this.element.removeEventListener("mouseleave", onMouseLeave);
                this.element.removeEventListener("mousemove", onMouseMove);
            },
        };

        const onMouseMove = {
            handleEvent(event) {
                this.tooltipBox.style.top = `${event.pageY}px`;
                this.tooltipBox.style.left = `${event.pageX}px`;
            },
        };

        function onMouseOver(event) {
            const tooltipBox = criarTooltipBox(this);
            tooltipBox.style.top = `${event.pageY}px`;
            tooltipBox.style.left = `${event.pageX}px`;

            onMouseLeave.tooltipBox = tooltipBox;
            onMouseLeave.element = this;
            this.addEventListener("mouseleave", onMouseLeave);

            onMouseMove.tooltipBox = tooltipBox;
            this.addEventListener("mousemove", onMouseMove);
        }

        function criarTooltipBox(element) {
            const tooltipBox = document.createElement("div");
            const text = element.getAttribute("aria-label");
            const classTooltip = "tooltip";
            tooltipBox.classList.add(classTooltip);
            tooltipBox.innerText = text;
            document.body.appendChild(tooltipBox);

            return tooltipBox;
        }
    }
}
