// Desafio 03

// Declarar uma variável qualquer, que receba um objeto vazio.
let objetoVazio = {};

// Declarar uma variável `pessoa`, que receba suas informações pessoais.
let pessoa = {
  nome: "Felipe",          // String
  sobrenome: "Rothbarth",     // String
  sexo: "Masculino",       // String
  idade: 19,              // Number
  altura: 1.69,           // Number
  peso: 70,               // Number
  andando: false,         // Boolean - recebe "falso" por padrão
  caminhouQuantosMetros: 0 // Number - recebe "zero" por padrão
};

// Adicionando o método `fazerAniversario`:
pessoa.fazerAniversario = function () {
  this.idade++;
};

// Adicionando o método `andar`:
pessoa.andar = function (metros) {
  this.caminhouQuantosMetros += metros;
  this.andando = true;
};

// Adicionando o método `parar`:
pessoa.parar = function () {
  this.andando = false;
};

// Criando o método `nomeCompleto`:
pessoa.nomeCompleto = function () {
  return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
};

// Criando o método `mostrarIdade`:
pessoa.mostrarIdade = function () {
  return `Olá, eu tenho ${this.idade} anos!`;
};

// Criando o método `mostrarPeso`:
pessoa.mostrarPeso = function () {
  return `Eu peso ${this.peso}Kg.`;
};

// Criando o método `mostrarAltura`:
pessoa.mostrarAltura = function () {
  return `Minha altura é ${this.altura}m.`;
};

// Exibindo o nome completo da pessoa
console.log(pessoa.nomeCompleto()); 

// Exibindo a idade da pessoa
console.log(pessoa.mostrarIdade()); 

// Exibindo o peso da pessoa
console.log(pessoa.mostrarPeso()); 

// Exibindo a altura da pessoa
console.log(pessoa.mostrarAltura()); 

// Fazendo a pessoa fazer 3 aniversários
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

// Exibindo a nova idade da pessoa
console.log(pessoa.mostrarIdade()); 

// Fazendo a pessoa andar 3 vezes com metragens diferentes
pessoa.andar(10);
pessoa.andar(5);
pessoa.andar(15);

// Verificando se a pessoa está andando
console.log(pessoa.andando); 

// Fazendo a pessoa parar de andar
pessoa.parar();

// Verificando se a pessoa ainda está andando
console.log(pessoa.andando); 

// Quantos metros a pessoa andou?
console.log(pessoa.caminhouQuantosMetros); 

// Criando o método `apresentacao`:
pessoa.apresentacao = function () {
  let artigo = this.sexo === "Masculino" ? "a" : "o";
  let anoPlural = this.idade === 1 ? "ano" : "anos";
  let metroPlural = this.caminhouQuantosMetros === 1 ? "metro" : "metros";

  return `Olá, eu sou ${artigo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anoPlural}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metroPlural}!`;
};

// Apresentando a pessoa
console.log(pessoa.apresentacao());
