console.log("JS Externo on");

//EXE01
function mostrarMensagem(){
    alert("Olá! Essa é a mensagem do exercício 01!");
}

//EXE02
function saudacao(nome){
    return "Olá, " + nome + "!";
}

//EXE03
function calcularIdade(anoNascimento){
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

//EXE04
function validarIdade(idade){
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

//EXE05
function somarNumeros(a, b, c){
    return a + b + c;
}

//EXE06
function trocarImagem(){
    img = document.getElementById("img06");
    switch(tipo){
        case "gato":
            img.src = "./imgs/gato.webp";
            break;
        case "cachorro":
            img.src = "./imgs/cachorro.webp";
            break;
        case "corvo":
            img.src = "./imgs/corvo.webp";
            break;
        default:
            img.src = "./imgs/aranha.webp";
    } 
}























//EXE07
function verificarPar(numero){
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

//EXE08
function contarVogais(texto){
    let contador = 0;
    const vogais = "aeiouAEIOU";
    for(let i = 0; i < texto.length; i++){
        if(vogais.includes(texto[i])){
            contador++;
        }
    }
    return contador;
}

//EXE09
function inverterTexto(texto){
    return texto.split("").reverse().join("");
}
