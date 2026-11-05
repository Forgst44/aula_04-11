
const form = document.getElementById("numberForm");

const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const valor = Number(numero.value);

    const antecessor = valor - 1;
    const sucessor = valor + 1;

    resultado.innerHTML = `
        <p>Antecessor: ${antecessor}</p>
        <p>Número digitado: ${valor}</p>
        <p>Sucessor: ${sucessor}</p>
    `;

});
