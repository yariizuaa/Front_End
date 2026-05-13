
function capturarValores(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
}

function mostrarResultado(R){
    let resultado = document.getElementById("resultado");
    resultado.value = R;
}

function calcularSoma(){
    capturarValores();
    let resposta = Number(num1.value) + Number(num2.value);
    mostrarResultado(resposta);
}

function calcularSubtracao(){
   capturarValores();
   let resposta = Number(num1.value) - Number(num2.value);
   mostrarResultado(resposta);
}

function calcularDivisao(){
    capturarValores();
    let resposta = Number(num1.value) / Number(num2.value);
    mostrarResultado(resposta);
}

function calcularMultiplicacao(){
    capturarValores();
    let resposta = Number(num1.value) * Number(num2.value);
    mostrarResultado(resposta);
}