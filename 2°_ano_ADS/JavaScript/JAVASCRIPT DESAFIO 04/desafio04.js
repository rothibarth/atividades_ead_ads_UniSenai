// Declarando a variável `isTruthy` com a função
let isTruthy = function (value) {
    return !!value; // Retorna o equivalente booleano do valor passado
  };
  
  // Testando a função com valores `falsy`:
  console.log(isTruthy(false)); // false
  console.log(isTruthy(0)); // false
  console.log(isTruthy('')); // false
  console.log(isTruthy(null)); // false
  console.log(isTruthy(undefined)); // false
  console.log(isTruthy(NaN)); // false
  
  // Testando a função com valores `truthy`:
  console.log(isTruthy(true)); // true
  console.log(isTruthy(1)); // true
  console.log(isTruthy('string')); // true
  console.log(isTruthy([])); // true
  console.log(isTruthy({})); // true
  console.log(isTruthy(function(){})); // true
  console.log(isTruthy(42)); // true
  console.log(isTruthy(-42)); // true
  console.log(isTruthy('0')); // true
  console.log(isTruthy(Infinity)); // true
  
  // Declarando o objeto `carro`
  let carro = {
    marca: 'Fiat', // String
    modelo: 'Palio', // String
    placa: 'MCV8255', // String
    ano: 2006, // Number
    cor: 'Cinza', // String
    quantasPortas: 3, // Number
    assentos: 5, // Number (cinco por padrão)
    quantidadePessoas: 0, // Number (zero por padrão)
    
    // Método para mudar a cor do carro
    mudarCor: function(novaCor) {
      this.cor = novaCor;
    },
    
    // Método para obter a cor atual do carro
    obterCor: function() {
      return this.cor;
    },
    
    // Método para obter o modelo do carro
    obterModelo: function() {
      return this.modelo;
    },
    
    // Método para obter a marca do carro
    obterMarca: function() {
      return this.marca;
    },
    
    // Método para obter marca e modelo do carro
    obterMarcaModelo: function() {
      return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
    },
    
    // Método para adicionar pessoas no carro
    adicionarPessoas: function(numPessoas) {
      let espacoRestante = this.assentos - this.quantidadePessoas;
      
      if (this.quantidadePessoas === this.assentos) {
        return 'O carro já está lotado!';
      }
      
      if (numPessoas > espacoRestante) {
        let plural = espacoRestante === 1 ? 'pessoa' : 'pessoas';
        return `Só cabem mais ${espacoRestante} ${plural}!`;
      }
      
      this.quantidadePessoas += numPessoas;
      return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
    }
  };
  
  // Qual a cor atual do carro?
  console.log(carro.obterCor()); 
  
  // Mude a cor do carro para vermelho.
  carro.mudarCor('Vermelho');
  
  // E agora, qual a cor do carro?
  console.log(carro.obterCor()); 
  
  // Mude a cor do carro para verde musgo.
  carro.mudarCor('Verde Musgo');
  
  // E agora, qual a cor do carro?
  console.log(carro.obterCor()); 
  
  // Qual a marca e modelo do carro?
  console.log(carro.obterMarcaModelo()); 
  
  // Adicione 2 pessoas no carro.
  console.log(carro.adicionarPessoas(2)); 
  
  // Adicione mais 4 pessoas no carro.
  console.log(carro.adicionarPessoas(4)); 
  
  // Faça o carro encher.
  console.log(carro.adicionarPessoas(3)); 
  
  // Tire 4 pessoas do carro.
  carro.quantidadePessoas -= 4;
  console.log(`Agora temos ${carro.quantidadePessoas} pessoas no carro!`); 
  
  // Adicione 10 pessoas no carro.
  console.log(carro.adicionarPessoas(10)); // "Só cabem mais 4 pessoas!"
  
  // Quantas pessoas temos no carro?
  console.log(`Temos ${carro.quantidadePessoas} pessoas no carro!`); 
  