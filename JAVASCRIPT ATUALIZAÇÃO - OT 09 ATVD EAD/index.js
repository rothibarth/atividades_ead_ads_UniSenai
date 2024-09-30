/*
1. Criar uma Classe Animal: Crie uma classe Animal com um construtor
que recebe o nome e o som que o animal faz. Adicione um método
falar que imprime o som do animal.
2. Classe Veículo com Método de Velocidade: Desenvolva uma classe
Veiculo com propriedades como marca, modelo e velocidadeMaxima.
Adicione um método descrever que imprime uma descrição do veículo.
3. Classe Estudante com Notas: Amplie a classe Estudante para incluir
um array de notas. Adicione um método calcularMedia que retorna a
média das notas.
4. Método Estático para Conversão de Temperatura: Na classe
Utilitario, adicione um método estático que converte temperatura de
Celsius para Fahrenheit.
5. Jogo Simples com Classe: Crie uma classe Jogo com um método
estático que gera um número aleatório e permite ao usuário adivinhar. O
método retorna se o usuário acertou ou não.
6. Classe ContaBancaria com Método de Saque: Na classe
ContaBancaria, adicione um método sacar que permite sacar um
valor do saldo, garantindo que o saldo não fique negativo.
*/

class Animal {
    let(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(`${this.nome} faz '${this.som}'`);
    }
}


