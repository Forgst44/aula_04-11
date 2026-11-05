const numero = document.getElementById("numero");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");

let valor = 0;

incrementar.addEventListener("click", function () {
    valor++;
    numero.innerHTML = valor;
});

decrementar.addEventListener("click", function () {
    valor--;
    numero.innerHTML = valor;
});