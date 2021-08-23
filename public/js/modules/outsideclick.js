export default function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outSide = "data-outside";

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outSide);
            events.forEach((userEvent) => html.removeEventListener(userEvent, handleOutsideClick));

            callback();
        }
    }

    if (!element.hasAttribute(outSide)) {
        events.forEach((userEvent) => {
            setTimeout(() => {
                html.addEventListener(userEvent, handleOutsideClick);
            });
        });

        element.setAttribute(outSide, "");
    }
}
