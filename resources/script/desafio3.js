
const form = document.getElementById("numberForm");

const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const valor = Number(numero.value);

    if (valor < 1 || valor > 100 || !Number.isInteger(valor)) {
        resultado.textContent = "Digite um número inteiro entre 1 e 100.";
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * 100) + 1;

    if (valor === numeroSorteado) {

        resultado.textContent =
            `Número Sorteado: ${numeroSorteado}. Parabéns, você acertou!`;

    } else {

        resultado.textContent =
            `Número Sorteado: ${numeroSorteado}. Infelizmente, você errou. Tente novamente!`;

    }

});
