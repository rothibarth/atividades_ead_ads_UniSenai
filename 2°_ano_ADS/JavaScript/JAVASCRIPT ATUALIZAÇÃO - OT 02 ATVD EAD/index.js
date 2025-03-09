let animais = [];

animais.push("leão");
animais.push("zebra");
animais.push("bode");

console.log("Estes são os animais que escolhi de começo : " , animais);

animais.shift();
console.log("Excluido o primeiro animal ficou assim : ", animais);

animais.unshift("camaleão australiano", "onça");
console.log("Adicionando 2 animais na frente ficou assim : ", animais);

animais[1] = "girafa";
console.log("Mudei o 2 nome do animal " , animais);


let frutas = ["abacaxi", "morango", "laranja", "maracuja", "mamao", "acerola"];
let totalFrutas = frutas.length;
console.log("Total de frutas" , totalFrutas);


for(let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}