export default class ToolTip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseMove({ pageY, pageX }) {
        this.tooltipBox.style.top = `${pageY + 20}px`;
        this.tooltipBox.style.left = `${pageX + 20}px`;
    }

    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();
        currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        currentTarget.removeEventListener('mousemove', this.onMouseMove);
    }

    criarTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        const classTooltip = 'tooltip';
        tooltipBox.classList.add(classTooltip);
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        this.tooltipBox = tooltipBox;
    }

    onMouseOver({ currentTarget }) {
        this.criarTooltipBox(currentTarget);

        currentTarget.addEventListener('mousemove', this.onMouseMove);
        currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    }

    addTooltipsEventes() {
        this.tooltips.forEach((item) => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init() {
        if (this.tooltips.length) {
            this.addTooltipsEventes();
        }
        return this;
    }
}
