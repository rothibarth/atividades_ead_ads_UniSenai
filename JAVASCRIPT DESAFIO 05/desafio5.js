// 1. Criar uma variável com um array de valores aleatórios
let valores = [10, "texto", true, null, {nome: "objeto"}];

// 2. Criar uma função que receba um array como parâmetro e retorne esse array
function retornarArray(array) {
    return array;
}

// 3. Imprimir o segundo índice do array retornado pela função
console.log(retornarArray(valores)[1]); // "texto"

// 4. Criar uma função que receba um array e um número, retornando o valor no índice indicado pelo número
function retornarIndice(array, indice) {
    return array[indice];
}

// 5. Declarar uma variável que recebe um array com 5 valores de tipos diferentes
let arrayTipos = [42, "Olá", false, {chave: "valor"}, [1, 2, 3]];

// 6. Invoque a função que retorna valores do array
console.log(retornarIndice(arrayTipos, 0)); 
console.log(retornarIndice(arrayTipos, 1)); 
console.log(retornarIndice(arrayTipos, 2)); 
console.log(retornarIndice(arrayTipos, 3)); 
console.log(retornarIndice(arrayTipos, 4)); 

// 7. Criar a função `book` que retorna objetos de livros
function book(nomeDoLivro) {
    const livros = {
        "Livro A": {
            quantidadePaginas: 200,
            autor: "Autor A",
            editora: "Editora A"
        },
        "Livro B": {
            quantidadePaginas: 300,
            autor: "Autor B",
            editora: "Editora B"
        },
        "Livro C": {
            quantidadePaginas: 150,
            autor: "Autor C",
            editora: "Editora C"
        }
    };
    
    if (nomeDoLivro) {
        return livros[nomeDoLivro];
    } else {
        return livros;
    }
}

// 8. Imprimir o objeto com todos os livros
console.log(book());

// 9. Imprimir a quantidade de páginas de um livro qualquer
let nomeDoLivro = "Livro A";
console.log(`O livro ${nomeDoLivro} tem ${book(nomeDoLivro).quantidadePaginas} páginas!`);

// 10. Imprimir o nome do autor de um livro qualquer
console.log(`O autor do livro ${nomeDoLivro} é ${book(nomeDoLivro).autor}.`);

// 11. Imprimir o nome da editora de um livro qualquer
console.log(`O livro ${nomeDoLivro} foi publicado pela editora ${book(nomeDoLivro).editora}.`);
