/*Exercícios
1. Calculadora Simples: Crie Arrow Functions para as operações básicas
de matemática: soma, subtração, multiplicação e divisão. Cada função
deve aceitar dois parâmetros e retornar o resultado da operação.
2. Função de Saudação Personalizada: Escreva uma Arrow Function que
recebe um nome como parâmetro e retorna uma saudação
personalizada.
3. Contador com Arrow Function: Use uma Arrow Function dentro de um
setInterval para criar um contador que imprime um número a cada
segundo.
4. Filtrar Números Pares: Dado um array de números, use uma Arrow
Function com o método filter para criar um novo array apenas com
números pares.
5. Conversor de Temperatura: Crie uma Arrow Function que converte a
temperatura de Celsius para Fahrenheit.
6. Função de Ordenação: Implemente uma Arrow Function que recebe um
array de strings e retorna um novo array com os itens ordenados
alfabeticamente*/

// 1. Calculadora Simples: Arrow Functions para operações matemáticas básicas
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b !== 0 ? a / b : "Divisão por zero não permitida!";

console.log("Soma:", soma(5, 3)); // 8
console.log("Subtração:", subtracao(10, 7)); // 3
console.log("Multiplicação:", multiplicacao(4, 5)); // 20
console.log("Divisão:", divisao(9, 3)); // 3

// 2. Função de Saudação Personalizada: Arrow Function com nome
const saudacao = (nome) => `Olá, ${nome}! Seja bem-vindo(a)!`;
console.log(saudacao("João")); // Olá, João! Seja bem-vindo(a)!

// 3. Contador com Arrow Function: Usando setInterval para criar um contador
let contador = 0;
const incrementarContador = () => {
  console.log(`Contador: ${contador}`);
  contador++;
};
const intervalo = setInterval(incrementarContador, 1000);

// Para parar o contador após 5 segundos, usamos setTimeout
setTimeout(() => {
  clearInterval(intervalo);
  console.log("Contador parado.");
}, 5000);

// 4. Filtrar Números Pares: Usando Arrow Function com filter
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", numerosPares); // [2, 4, 6, 8, 10]

// 5. Conversor de Temperatura: Converter Celsius para Fahrenheit
const converterParaFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("25°C em Fahrenheit:", converterParaFahrenheit(25)); // 77

// 6. Função de Ordenação: Ordenar um array de strings alfabeticamente
const frutas = ["banana", "maçã", "laranja", "uva", "abacaxi"];
const frutasOrdenadas = frutas.sort((a, b) => a.localeCompare(b));
console.log("Frutas ordenadas:", frutasOrdenadas); // [ 'abacaxi', 'banana', 'laranja', 'maçã', 'uva' ]
