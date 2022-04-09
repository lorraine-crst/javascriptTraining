//Defina uma função de seta divideByTwoque aceite um número e retorne esse número dividido por 2.

// TODO: define the function divideByTwo here
function divideByTwo(number){
    return number / 2;
}
console.log(divideByTwo(4));
console.log(divideByTwo(8));
console.log(divideByTwo(12));
console.log(divideByTwo(6));

/*Elementos individuais em arrays também podem ser armazenados em variáveis.

Crie uma variável nomeada listIteme defina-a igual ao primeiro item na famousSayingsmatriz usando a notação de colchetes ( []).

Em seguida, use console.log()para imprimir a listItemvariável no console.

Agora, console.log()o terceiro elemento na famousSayingsmatriz usando a notação de colchetes para acessar o elemento.

Não salve o elemento em uma nova variável antes de registrá-lo.

Impressionante, você pode acessar cada elemento em uma matriz usando o índice. Mas o que acontece se você tentar acessar um índice que está além do último elemento?

Tente registrar o item no índice [3]de famousSayingsno console. O que está registrado no console?*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);