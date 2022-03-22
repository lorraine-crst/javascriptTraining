

/*Seu desafio de hoje é criar os destinos possíveis de um jogo, em que a pessoa jogador consiga escolher:

No início de seus estudos, onde poderá escolher entre seguir para área de front-end ou seguir para a área de back-end

No meio, onde caso esteja na área de front-end, ela poderá seguir aprendendo React ou seguir aprendendo Vue e, caso esteja na área de back-end, poderá seguir aprendendo C# ou seguir aprendendo Java

No fim, onde, independente de suas escolhas anteriores, ela poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar fullstack

O importante é que a pessoa que jogar possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação */

let caminho = window.prompt('Escolha qual area da programação deseja seguir: \n(1)front-end ou (2)back-end.');

if(caminho == 1){
        let frontend = window.prompt('Escolha qual area do front-end deseja seguir: \n(1)React ou (2)Vue.js .');
}

if(caminho == 2){
        let backend = window.prompt('Escolha qual area do back-end deseja seguir: \n(1)C# ou (2)Java .');
}

let escolhaFinal = window.prompt('Escolha qual area do desenvolvimento deseja seguir: \n(1)Especilização ou (2)Fullstack.');

console.log(caminho, escolhaFinal);