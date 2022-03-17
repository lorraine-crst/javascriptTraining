/*Você deve definir uma matriz com as três variáveis ​​a seguir:

Uma string que tem o valor de "Qual é o sentido da vida?"
Um número que tem um valor de42
Um booleano que tem um valor detrue */

var myArray = ['What is the meaning of life?"', 42, true];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);


/*Neste tutorial, você deve manipular o array chamado myArraye fazer o seguinte:

Empurre o número 42 para o final da matriz
Deslocar uma variável do início da matriz */

var myArray = [true, "What is the meaning of life?"];
myArray.push(42);
myArray.shift();

console.log(myArray[0]);
console.log(myArray[1]);