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