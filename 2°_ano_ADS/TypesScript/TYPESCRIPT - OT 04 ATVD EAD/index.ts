/*
Exercícios para Praticar
1. Implementando Funções:
○ Escreva uma função concatenaNomes que recebe dois
parâmetros, nome e sobrenome, e retorna o nome completo.
2. Uso de Arrow Functions:
○ Converta a função soma para uma arrow function e implemente a
mesma lógica.
3. Explorando Parâmetros Opcionais:
○ Modifique a função saudacao para incluir um parâmetro opcional
titulo, que se usado, precederá o nome no cumprimento.
4. Trabalhando com Overloads:
○ Crie uma função ajustar que pode receber tanto um number
quanto uma string, retornando o valor ajustado conforme o tipo.
5. Função com Valor Padrão:
○ Implemente uma função incrementa que recebe um número e
um valor de incremento opcional, que, se não fornecido, será 1.*/


//atvd 1

// Função para concatenar nome e sobrenome
function concatenaNomes(nome: string, sobrenome: string): string {
  return `${nome} ${sobrenome}`;
}

// Exemplo de uso
console.log(concatenaNomes("João", "Silva")); // Saída: "João Silva"



//atvd 2

// Função soma convertida para uma arrow function
const soma = (a: number, b: number): number => a + b;

// Exemplo de uso
console.log(soma(5, 7)); // Saída: 12



//atvd 3 

// Função com parâmetro opcional
function saudacao(nome: string, titulo?: string): string {
  if (titulo) {
    return `Olá, ${titulo} ${nome}`;
  }
  return `Olá, ${nome}`;
}

// Exemplos de uso
console.log(saudacao("Ana")); // Saída: "Olá, Ana"
console.log(saudacao("Ana", "Dra.")); // Saída: "Olá, Dra. Ana"


//atvd 4

// Função ajustar com overloads
function ajustar(valor: number): number;
function ajustar(valor: string): string;
function ajustar(valor: number | string): number | string {
  if (typeof valor === "number") {
    return valor * 2; // Exemplo de ajuste para números
  } else {
    return valor.trim(); // Exemplo de ajuste para strings
  }
}

// Exemplos de uso
console.log(ajustar(10)); // Saída: 20
console.log(ajustar("  Olá  ")); // Saída: "Olá"

//atvd 5

// Função incrementa com valor padrão
function incrementa(numero: number, incremento: number = 1): number {
  return numero + incremento;
}

// Exemplos de uso
console.log(incrementa(5)); // Saída: 6 (incremento padrão de 1)
console.log(incrementa(5, 3)); // Saída: 8 (incremento fornecido)



