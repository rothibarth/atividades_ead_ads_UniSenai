/*Exercícios para você ficar fera:
1. Criando um Convite: Use a concatenação de strings para criar um
convite. Inclua o nome do destinatário, o tipo de evento e a data, usando
variáveis.
2. Diário de Bordo: Escreva um pequeno diário de bordo usando template
literals, incluindo data, local e uma descrição do que aconteceu no dia.
3. Redator de Notícias: Crie uma string que represente uma notícia,
utilizando o método replace() para substituir um fato errado por um
correto.
4. Caixa de Comentários: Use o método trim() para limpar os
comentários dos usuários antes de publicá-los em um blog ou fórum.
5. Carta para um Amigo: Utilize \\n para formatar uma carta para um
amigo, com saudação, corpo da mensagem e despedida, cada um em
uma nova linha.
6. Citações Famosas: Crie uma string que inclua uma citação famosa de
uma pessoa, utilizando caracteres de escape para incluir aspas na
citação.*/

//EXERCICIO 1

let nome_destinatario = "Felipe Rothbarth";
let tipo_evento = "Halloween";
let data = "31/10/2024";

let convite = " Olá, " + nome_destinatario + " você está convidado para o " + 
tipo_evento + " na dia " + data + " contamos com sua presença ";
console.log(convite);

// EXERCICIO 2

let data2 = "2024-10-07";
let local = "São Francisco do Sul - Praia do Ervino";
let descricao = "Hoje o tempo estava ensolarado, perfeito para caminhar pela praia. Coletamos algumas conchas interessantes e vimos várias aves marinhas sobrevoando a região.";

let diarioDeBordo = `Data: ${data2}\nLocal: ${local}\nDescrição: ${descricao}`;
console.log(diarioDeBordo);

//EXERCICIO 3
let noticiaErrada = "Hoje, 1000 pessoas participaram da maratona anual na cidade.";
let noticiaCorreta = noticiaErrada.replace("1000", "1500");
console.log(noticiaCorreta);

// EXERCICIO 4
let comentarioUsuario = "    Este é o meu comentário sobre o post.   ";
let comentarioLimpo = comentarioUsuario.trim();
console.log(`Comentário publicado: "${comentarioLimpo}"`);

// EXERCICIO 5
let carta = "Olá, Felipe,\n\nComo você está? Faz tempo que não conversamos. Espero que esteja tudo bem com você e sua família.\n\nAbraços,\nEduarda";
console.log(carta);

// EXERCICIO 6
let citacao = "Albert Einstein disse uma vez: \"A imaginação é mais importante que o conhecimento.\"";
console.log(citacao);
