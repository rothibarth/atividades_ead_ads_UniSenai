class Animal {
    constructor(nome, som) {
      this.nome = nome;
      this.som = som;
    }
  
    falar() {
      console.log(`${this.nome} faz: ${this.som}`);
    }
  }
  
  // Teste
  const cachorro = new Animal('Cachorro', 'Au Au');
  cachorro.falar();
  

  class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidadeMaxima = velocidadeMaxima;
    }
  
    descrever() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidade Máxima: ${this.velocidadeMaxima} km/h`);
    }
  }
  
  // Teste
  const carro = new Veiculo('Fiat', 'Palio', 280);
  carro.descrever();
  


  class Estudante {
    constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas;
    }
  
    calcularMedia() {
      const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
      return soma / this.notas.length;
    }
  }
  
  // Teste
  const estudante = new Estudante('Felipe', [8, 8.5, 9, 6]);
  console.log(`Média de ${estudante.nome}: ${estudante.calcularMedia()}`);
 


  class Utilitario {
    static celsiusParaFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
  }
  
  // Teste
  console.log(`25°C em Fahrenheit: ${Utilitario.celsiusParaFahrenheit(25)}°F`);
  


  const readline = require('readline');
  
  class Jogo {
    static gerarNumeroAleatorio() {
      return Math.floor(Math.random() * 10) + 1;
    }
  
    static adivinhar() {
      const numeroAleatorio = Jogo.gerarNumeroAleatorio();
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      rl.question('Adivinhe um número entre 1 e 10: ', (palpite) => {
        if (parseInt(palpite) === numeroAleatorio) {
          console.log('Parabéns! Você acertou.');
        } else {
          console.log(`Você errou. O número era ${numeroAleatorio}.`);
        }
        rl.close();
      });
    }
  }
  
  // Teste
  Jogo.adivinhar();
  


  class ContaBancaria {
    constructor(saldo) {
      this.saldo = saldo;
    }
  
    sacar(valor) {
      if (valor > this.saldo) {
        console.log('Saldo insuficiente.');
      } else {
        this.saldo -= valor;
        console.log(`Saque realizado. Novo saldo: R$${this.saldo}`);
      }
    }
  }
  
  // Teste
  const conta = new ContaBancaria(500);
  conta.sacar(100); // Saque com sucesso
  conta.sacar(500); // Saldo insuficiente