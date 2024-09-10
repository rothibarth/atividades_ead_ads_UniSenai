//Exercícios práticos:
// 1. Função que Calcula a Área de um Retângulo: Crie uma função que
// calcula a área de um retângulo dado largura e altura.
// 2. Função para Verificar Número Par: Faça uma função que recebe um
// número e retorna true se for par e false se for ímpar.
// 3. Converter Polegadas em Centímetros: Escreva uma função que
// converte polegadas em centímetros.
// 4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
// 5. Maiúsculas para Minúsculas: Crie uma função que recebe uma string e
// retorna a mesma string em letras minúsculas.
// 6. Crie uma arrow function chamada multiplicaPorDez que recebe um
// número como parâmetro e retorna o valor multiplicado por 10.

//ATVD 1
function calca_area_retangulo(largura, altura){
    return largura * altura;
}

let resultado = calca_area_retangulo(5,3);
console.log(" ATVD 1 - Area do retangulo é : ", resultado);

//ATVD 2

function verificar_par(numero){
    
    if(numero %2 == 0){
        return true;
    }else{
        return false;
    }

}
let par_ou_impar = verificar_par(2);
console.log("ATVD 2 -  ", par_ou_impar)

//ATVD 3

function calca_polegada_cm(polegada){
    return  2.54 * polegada;
}

let resultado_polegada_cm = calca_polegada_cm(5);
console.log(" ATVD 3 - Calculo polegada para cm : ", resultado_polegada_cm);

//ATVD 4

function calcula_imc(kilo, altura){

    return kilo / (altura * altura);
}

let resultado_imc = calcula_imc(70, 1.70);
console.log(" ATVD 4 - Calculo IMC: ", resultado_imc);

//ATVD 5

function Maiusculas_minuscula(string){

    return string.toUpperCase();
}

let resultado_min_mai = Maiusculas_minuscula("felipe");
console.log("ATVD 4 - transforma maiuscula em minuscula = " , resultado_min_mai);

//ATVD 6
let a = 5;
let multiplicaPorDez = (a) => a * 10;
console.log("ATVD 5 - Arrow Function = " , multiplicaPorDez(a));