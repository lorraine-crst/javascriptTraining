/*Neste exercício, você deve construir uma instrução ifdentro da checkNumberfunção que verifica se o número myNumberé igual a 42. Se for esse o caso, a função deve imprimir usando a palavra . Se myNumber não for igual a 42, a função deve imprimir usando a palavra . Você pode nomear o argumento passado para uma função fornecendo o nome entre parênteses. Por exemplo, .console.logcorrectconsole.logincorrectfunction myFunction(myArgument) */

function checkNumber(myNumber)
{
    if (myNumber === 42){
    	console.log("correct");
    }
    else{
		console.log("incorrect");
	}
}
checkNumber(3);
checkNumber(7);
checkNumber(42);

/*Abaixo das duas matrizes existentes, reatribua o elemento no índice 0de condimentsa 'Mayo'.

Registre a matriz atualizada, condiments, no console.

Abaixo do seu código da Etapa 1, reatribua condimentspara ser uma nova matriz que contém uma única string['Mayo']

Registre o resultado no console.

Observe que você pode reatribuir elementos em uma matriz e reatribuir uma nova matriz inteira a uma variável declarada usando a palavra- letchave.

Abaixo do código da Etapa 2, reatribua o último item da utensilsmatriz para 'Spoon'.

Registre a matriz atualizada no console.*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);