export default function fetchBtc(url, target) {
    fetch(url)
        .then((response) => response.json())
        .then((btc) => {
            const btcPreco = document.querySelector(target);
            btcPreco.innerText = (1000 / btc.BRL.sell).toFixed(4);
        })
        .catch((erro) => {
            console.log(Error(erro));
        });
}
