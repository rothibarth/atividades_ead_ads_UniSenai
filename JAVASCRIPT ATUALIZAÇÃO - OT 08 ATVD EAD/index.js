/*1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.
2. Verificar Valores no Set: Use o método has para verificar se uma fruta
específica está no seu Set frutas.
3. Remover Valores do Set: Use o método delete para remover uma fruta
do seu Set frutas.
4. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.
5. Tamanho do Set: Crie um Set com vários valores e use a propriedade
size para imprimir o número de elementos no Set.
6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set
e imprimir cada valor.

7. Criar um Set a Partir de um Array: Crie um array com alguns valores
duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.*/

let frutaSet = new Set();

frutaSet.add("Morango");
frutaSet.add("Laranja");
frutaSet.add("Pessego");

frutaSet.add("Pessego");

console.log(frutaSet.has("Pessego"));

frutaSet.delete("Pessego");

frutaSet.clear();

let AnosNascimentoSet = new Set();

AnosNascimentoSet.add(2005);
AnosNascimentoSet.add(2003);
AnosNascimentoSet.add(2004);

console.log(AnosNascimentoSet.size);

for(let valores of AnosNascimentoSet){
    console.log(valores);
}

//ATVD 7

const array = [1, 2, 3, 2, 4, 5, 5, 6];
const setSemDuplicatas = new Set(array);

const arraySemDuplicatas = [...setSemDuplicatas];

console.log(arraySemDuplicatas);
