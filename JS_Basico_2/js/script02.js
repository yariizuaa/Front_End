console.log("Js 2 script");

function calcularMedia(){
    let soma = 0;
    let media = 0;
    let valores = document.getElementById("valores").value;
    console.log(valores);
    let array_numeros = valores.split("/");
    console.log(array_numeros.length);
    let qtdeNum = array_numeros.length;

    for (let i = 0; i< array_numeros.length; i++){
        soma = soma + Number(array_numeros[i]);
    }

    console.log(soma);
    media = soma/qtdeNum;
    console.log(media);

    let p = document.getElementById("media");
    p.innerText = "A media é: " + media;
}

//exe03
function verificarMaior(){
    let num1 = document.getElementById("num1Exe03").value;
    let num2 = document.getElementById("num2Exe03").value;

    if(Number(num1) > Number(num2)){
        document.getElementById("RespostaExe03").innerText = "O maior número é: " + num1;
    } else {
        document.getElementById("RespostaExe03").innerText = "O maior número é: " + num2;
    }
}
