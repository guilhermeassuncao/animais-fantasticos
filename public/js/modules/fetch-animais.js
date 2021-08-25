import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
    const numerosGrid = document.querySelector(target);

    function createAnimal(animal) {
        const div = document.createElement("div");

        div.classList.add("numero-animal");
        div.innerHTML = ` <h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

        return div;
    }

    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);

        numerosGrid.appendChild(divAnimal);
    }

    function animaAnimaisNumeros() {
        const animanumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
        animanumeros.init();
    }

    async function criarAnimais() {
        try {
            const animaisResponse = await fetch(url);
            const animaisJson = await animaisResponse.json();

            animaisJson.forEach((animal) => {
                preencherAnimais(animal);
            });

            animaAnimaisNumeros()


        } catch (erro) {
            console.log(erro);
        }
    }

    return criarAnimais();
}
