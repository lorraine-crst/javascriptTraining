//Neste exercício, você deve escrever um loop for que itere na variável myArray e imprima todos os seus membros.


var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

//TODO: modify this code
for (var i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);
}

/* Você deve definir um objeto chamado personcom os seguintes membros:

O membro firstNameda pessoa é "Jack"
O membro lastNameda pessoa é "Smith"
O membro ageda pessoa é 19
O membro employedda pessoa é true*/

// TODO: change this code
var person = {
    firstName : "Jack",
    lastName : "Smith",
    age : 23,
    employed : true,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);

//Defina uma função chamada multiplyFiveque aceite um número e retorne esse número multiplicado por 5. 

var multiplyFive = function(number){
	return number * 5;
}
console.log(multiplyFive(3));
console.log(multiplyFive(4));
console.log(multiplyFive(5));
console.log(multiplyFive(6));

//Faça uma variável testdefini-la igual a uma caixa de prompt e digite "Oi!" nele (sem as aspas) quando ele aparecer. Nota: seu bloqueador de pop-up não deve estar habilitado.

// Make your prompt box below!
var test = prompt('Hi!');
console.log(test);

//Altere o segundo elemento da matriz groceryListpara 'avocados'.
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';