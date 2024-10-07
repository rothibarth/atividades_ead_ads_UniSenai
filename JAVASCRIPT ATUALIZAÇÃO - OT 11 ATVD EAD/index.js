/*Exercícios
1. Criando uma Lista de Compras: Use o operador spread para combinar
dois arrays de itens de supermercado em uma lista de compras.
2. Atualizando um Perfil de Usuário: Crie um objeto usuario com
propriedades como nome e email. Use o operador spread para criar um
novo objeto com os dados do usuário e uma propriedade adicional
status.
3. Festa de Aniversário: Crie uma função que aceita um número variável
de nomes e os imprime como lista de convidados para uma festa de
aniversário, usando o operador spread para coletar os nomes.
4. Clonando um Array de Músicas: Dado um array de músicas, crie uma
cópia do array usando o operador spread. Altere um elemento no array
copiado e verifique se o array original permanece inalterado.
5. Mesclando Objetos com Informações Complementares: Crie dois
objetos, um com informações básicas de um filme (título e diretor) e
outro com informações complementares (ano e gênero). Use o operador
spread para mesclar esses objetos em um único objeto filme.
6. Criando um Menu de Restaurante Variável: Faça uma função criarMenu
que aceita vários itens (entradas, pratos principais, sobremesas) como
arrays e usa o operador spread para criar um único array de menu.*/

// 1. Criando uma Lista de Compras: Usando o operador spread
let frutas = ["banana", "maçã", "laranja"];
let laticinios = ["leite", "queijo", "iogurte"];
let listaDeCompras = [...frutas, ...laticinios];
console.log("Lista de Compras:", listaDeCompras);

// 2. Atualizando um Perfil de Usuário: Usando o operador spread
let usuario = { nome: "Felipe", email: "felipe.rothbarth@email.com" };
let usuarioAtualizado = { ...usuario, status: "ativo" };
console.log("Perfil de Usuário:", usuarioAtualizado);

// 3. Festa de Aniversário: Função que aceita um número variável de convidados
function listaDeConvidados(...nomes) {
  console.log("Lista de Convidados para a Festa:");
  nomes.forEach(nome => console.log(nome));
}

listaDeConvidados("Ana", "Pedro", "Maria", "João", "Lucia");

// 4. Clonando um Array de Músicas
let musicas = ["Song 1", "Song 2", "Song 3"];
let musicasClone = [...musicas];
musicasClone[1] = "Nova Song 2";

console.log("Array Original de Músicas:", musicas);
console.log("Array Clonado de Músicas:", musicasClone);

// 5. Mesclando Objetos com Informações Complementares
let infoBasica = { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola" };
let infoComplementar = { ano: 1972, genero: "Drama/Crime" };
let filme = { ...infoBasica, ...infoComplementar };

console.log("Informações do Filme:", filme);

// 6. Criando um Menu de Restaurante Variável
function criarMenu(entradas, pratosPrincipais, sobremesas) {
  let menuCompleto = [...entradas, ...pratosPrincipais, ...sobremesas];
  return menuCompleto;
}

let entradas = ["Salada", "Sopa"];
let pratosPrincipais = ["Bife", "Peixe"];
let sobremesas = ["Sorvete", "Torta"];
let menu = criarMenu(entradas, pratosPrincipais, sobremesas);

console.log("Menu do Restaurante:", menu);
