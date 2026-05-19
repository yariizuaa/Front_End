
function capturarValores(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    return {num1, num2};
}

function mostrarResultado(R){
    let resultado = document.getElementById("resultado");
    resultado.value = R;
}

function calcularSoma(){
    const {num1, num2} = capturarValores();
    let resposta = Number(num1) + Number(num2);
    mostrarResultado(resposta);
}

function calcularSubtracao(){
   const {num1, num2} = capturarValores();
   let resposta = Number(num1) - Number(num2);
   mostrarResultado(resposta);
}

function calcularDivisao(){
    const {num1, num2} = capturarValores();
    let resposta = Number(num1) / Number(num2);
    mostrarResultado(resposta);
}

function calcularMultiplicacao(){
    const {num1, num2} = capturarValores();
    let resposta = Number(num1) * Number(num2);
    mostrarResultado(resposta);
}
