let estaAtivo: boolean = true; //boolean

let total: number = 0; // number
let pi: number = 3.14159;

let nome: string = "João"; //Stirng
let saudacao: string = `olá, ${nome}!`;

let numeros: number[] = [1,2,3]; //Array
let frutas: Array<string> = ["maçã", "banana", "cereja"];

let endereco: [string, number] = ["Av. Paulista", 1578]; //Tuple

enum Cor {Vermelho, Verde, Azul};
let c: Cor = Cor.Verde; //Enum

let variavelIndefinida: any = 4;
variavelIndefinida = "talvez um string"; //any

function alerta(): void{
    alert("esta é uma mensagem de alerta!");
}

//ATVD

// Exemplo de código TypeScript que será executado com npm start

// Declarando variáveis de tipos básicos
let numero: number = 10;
let texto: string = "Olá, TypeScript!";
let booleano: boolean = true;

// Função que soma números
function somarNumeros(numeros: number[]): number {
    return numeros.reduce((acc, numero) => acc + numero, 0);
}

// Teste da função
let arrayDeNumeros: number[] = [1, 2, 3, 4, 5];
console.log(somarNumeros(arrayDeNumeros)); // Saída: 15

// Enum para os dias da semana
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

// Função que imprime mensagem de acordo com o dia
function mensagemDia(dia: DiasDaSemana): void {
    switch (dia) {
        case DiasDaSemana.Domingo:
            console.log("Hoje é domingo, dia de descanso!");
            break;
        case DiasDaSemana.Segunda:
            console.log("Início da semana! Vamos trabalhar!");
            break;
        default:
            console.log("Dia normal de trabalho.");
    }
}

mensagemDia(DiasDaSemana.Domingo); // Saída: Hoje é domingo, dia de descanso!


