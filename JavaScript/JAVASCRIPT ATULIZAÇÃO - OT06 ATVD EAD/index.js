/*
Exercícios para Praticar Objetos:
1. Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.
2. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.
3. Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.
4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.
5. Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.
6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores
*/

// ATVD 1
let carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: '2006'
}
console.log(carro)

// ATVD 2
carro.ano = '2070';
carro.cor = 'Cinza';
console.log(carro)

// ATVD 3
const calculadora = {
    soma: function(a, b) {
      return a + b;
    }
  };

  const resultado = calculadora.soma(6, 4);
  console.log("A soma é: " + resultado);

// ATVD 4
const pessoa = {
    nome: "Felipe",
    idade: 19,
    cidade: "Joinville"
  };
  
  for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
  }

// ATVD 5
let livro = {
    titulo: 'Contos do indio',
    autor: 'Felipe'
}
console.log(livro);

let novoLivro = livro;
novoLivro.titulo = 'Historias do indio';
console.log(livro);  

// ATVD 6
let palio = {
    motor: '1.0',
    consumo: '12,00 KM/L',
    velocidadeMax: '140 KM/H'
}

console.log(Object.keys(palio));
console.log(Object.values(palio));