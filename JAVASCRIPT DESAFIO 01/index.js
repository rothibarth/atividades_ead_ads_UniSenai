//Desafio 01
// Declarar uma variável chamada `myvar`, sem valor.
//R= 
let myvar;
// Após declarada, atribua o valor 10 à variável `myvar`.
//R=
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução
//somando os valores 15 e 8.
//R=
let soma = 15 + 8;
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador
//de soma abreviado.
//R= 
soma += 1;
// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o
//operador de multiplicação abreviado.
//R=
soma *= 3;
// Qual é o valor da variável `soma` até aqui?
//R=
72
// Declare uma variável chamada `unisenai`, atribuindo à ela o valor booleano
//que representa `verdadeiro`.
//R=
let unisenai = true;
// Declare uma variável chamada `comida` que recebe um array com os valores
//'arroz', 'feijão' e 'ovo'.
//R=
let comida = ['arroz', 'feijão', 'ovo'];
// Digite a instrução que imprime o valor de 'feijao', que está na variável
//`comida`.
//R=
console.log(comida[1]);
// Digite o código que verifica se a variável `soma' é igual a variável `myvar`
//(testando também o tipo).
//R=
soma === myvar
// Digite o código que verifica se a variável `myvar` é menor ou igual à variável
//`soma`.
//R=
myvar <= soma
// Crie uma função chamada `divisao` que receba como parâmetro dois
//números, e retorne o resultado da divisão entre eles.
//R=
function divisao(a, b) {
    return a / b;
}
// Invoque a função criada acima, passando os parâmetros 10 e 2.
//R=
console.log(divisao(10, 2));