let nome;
        nome = window.prompt('Entre com seu nome:');
        document.write('olá ' + nome + ' seja bem vindo');


let a =  7;
let b = 8;
let c = a + b;
document.write(c);


let d = true;
let e = false;
let f = d + e;
document.write(f); 

/**
* Siga os passos comentados para escrever um pedaço de código
*/

 // 1. Declare uma variável z e atribua o número 7,25 a ela.


 // 2. Escreva uma instrução console.log na qual você registra o valor de z.


 // 3. Declare outra variável a que tenha o valor de z, mas arredondada para o inteiro mais próximo.


 // 4. Escreva uma instrução console.log na qual você registra o valor de a.


 // 5. Então agora temos z e a encontram uma maneira de comparar os dois valores e logar true se a for maior que z ou false se a for menor que z.

 let z = 7.25; //1
 console.log(z);//2
 a = Math.round(z);//3

 console.log(a);//4
 console.log(a > z);