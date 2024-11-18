/*
Exercícios para Praticar
1. Criação e Acesso:
○ Crie um array de strings com os nomes de cinco cidades. Em
seguida, escreva um código que imprime o nome da terceira
cidade na lista.
2. Adicionando e Removendo Elementos:
○ Dado o array [10, 20, 30, 40, 50], adicione o número 35
entre 30 e 40, e depois remova o número 20 do array. Imprima o
array final.
3. Método .map():
○ Crie um array de números [1, 2, 3, 4, 5]. Use o método
.map() para criar um novo array onde cada número é
multiplicado por 3. Imprima o novo array.
4. Filtrando Valores:
○ Utilize o método .filter() para criar um novo array contendo
apenas os números ímpares do array original [1, 2, 3, 4, 5,
6, 7, 8, 9, 10].
5. Usando .reduce() para Soma:
○ Dado um array de números [5, 7, 10, 12, 15], utilize o
método .reduce() para calcular e imprimir a soma total dos
elementos do array*/
//atvd 1
// Array de strings
var cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Brasília"];
// Imprimindo a terceira cidade
console.log("Terceira cidade:", cidades[2]);
//atvd 2
// Array inicial
var numeros = [10, 20, 30, 40, 50];
// Adicionando o número 35 entre 30 e 40
numeros.splice(3, 0, 35); // Índice 3 corresponde após 30
console.log("Após adicionar 35:", numeros);
// Removendo o número 20
var indice20 = numeros.indexOf(20);
if (indice20 !== -1) {
    numeros.splice(indice20, 1);
}
console.log("Após remover 20:", numeros);
//atvd 3 
// Array inicial
var numerosOriginais = [1, 2, 3, 4, 5];
// Criando um novo array com os números multiplicados por 3
var numerosMultiplicados = numerosOriginais.map(function (num) { return num * 3; });
console.log("Números multiplicados por 3:", numerosMultiplicados);
