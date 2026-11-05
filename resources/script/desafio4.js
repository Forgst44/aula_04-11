
const formulario = document.getElementById("formIMC");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegar os valores dos campos
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Verificar se os valores são válidos
    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent =
            "Digite valores válidos!";
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Mostrar o resultado na tela
    document.getElementById("resultado").textContent =
        "Seu IMC é: " + imc.toFixed(1);

});
