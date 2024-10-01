// 1. Declarar a variável `championship` com o nome do campeonato
let championship = 'Campeonato do indio';
console.log(championship);

// 2. Declarar a variável `teams` com 5 times do campeonato
let teams = ['Flamengo', 'Corinthians depay', 'palmeiras porcada', 'Santos só os OLD', 'indigeneas'];
console.log('Times que estão participando do campeonato:', teams);

// 3. Criar a função `showTeamPosition`
function showTeamPosition(position) {
    if (position >= 1 && position <= 5) {
        return `O time que está em ${position}º lugar é o ${teams[position - 1]}.`;
    } else {
        return 'Não temos a informação do time que está nessa posição.';
    }
}

// 4. Mostrar a posição de 4 times (incluindo um que não está entre os 5 primeiros)
console.log(showTeamPosition(1)); 
console.log(showTeamPosition(2)); 
console.log(showTeamPosition(5)); 
console.log(showTeamPosition(6)); 

// 5. Mostrar os números de 20 a 30 no console usando "while"
let number = 20;
while (number <= 30) {
    console.log(number);
    number++;
}

// 6. Criar a função `convertToHex`
function convertToHex(cor) {
    let hexadecimal;

    switch (cor) {
        case 'red':
            hexadecimal = '#FF0000';
            break;
        case 'blue':
            hexadecimal = '#0000FF';
            break;
        case 'green':
            hexadecimal = '#00FF00';
            break;
        case 'yellow':
            hexadecimal = '#FFFF00';
            break;
        case 'purple':
            hexadecimal = '#800080';
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${cor}.`;
    }
    return `O hexadecimal para a cor ${cor} é ${hexadecimal}.`;
}

// 7. Mostrar o hexadecimal de 8 cores diferentes usando a função `convertToHex`
console.log(convertToHex('red'));
console.log(convertToHex('blue'));
console.log(convertToHex('green'));
console.log(convertToHex('yellow'));
console.log(convertToHex('purple'));
console.log(convertToHex('orange')); // Não temos o equivalente hexadecimal
console.log(convertToHex('black'));  // Não temos o equivalente hexadecimal
console.log(convertToHex('pink'));   // Não temos o equivalente hexadecimal