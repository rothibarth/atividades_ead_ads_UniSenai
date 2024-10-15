/*Exercícios de Desestruturação
1. Extrair Dados de um Array: Crie um array com três elementos e utilize a
desestruturação para criar três variáveis, cada uma recebendo um
elemento do array.
2. Extrair Propriedades de um Objeto: Crie um objeto com propriedades
como nome e idade. Use a desestruturação para criar variáveis a partir
dessas propriedades.
3. Desestruturação em Funções: Escreva uma função que recebe um
objeto como parâmetro e use a desestruturação para trabalhar com as
propriedades do objeto dentro da função.
4. Desestruturação com Arrays Aninhados: Crie um array de arrays e use a
desestruturação para criar variáveis a partir dos elementos do array
aninhado.
5. Valores Padrão na Desestruturação: Crie um array com um elemento e
utilize a desestruturação para criar duas variáveis. A primeira deve
receber o valor do array e a segunda deve usar um valor padrão.
6. Trocar Valores de Variáveis com Desestruturação: Crie duas variáveis e
troque os valores entre elas utilizando desestruturação.*/

// 1. Extrair Dados de um Array
let cores = ["vermelho", "azul", "verde"];
let [cor1, cor2, cor3] = cores;
console.log("Cor 1:", cor1); // vermelho
console.log("Cor 2:", cor2); // azul
console.log("Cor 3:", cor3); // verde

// 2. Extrair Propriedades de um Objeto
let pessoa = { nome: "Felipe", idade: 19 };
let { nome, idade } = pessoa;
console.log("Nome:", nome);  
console.log("Idade:", idade); 

// 3. Desestruturação em Funções
function exibirUsuario({ nome, idade }) {
  console.log(`O usuário ${nome} tem ${idade} anos.`);
}
let usuario = { nome: "Lucas", idade: 25 };
exibirUsuario(usuario); 

// 4. Desestruturação com Arrays Aninhados
let matriz = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = matriz;
console.log("Elementos da matriz:", a, b, c, d, e, f); // 1 2 3 4 5 6

// 5. Valores Padrão na Desestruturação
let numeros = [10];
let [x, y = 5] = numeros;
console.log("Valor de x:", x); // 10
console.log("Valor de y (padrão):", y); // 5

// 6. Trocar Valores de Variáveis com Desestruturação
let var1 = "maçã";
let var2 = "banana";
console.log("Antes da troca:", var1, var2); 
[var1, var2] = [var2, var1];
console.log("Depois da troca:", var1, var2); 
