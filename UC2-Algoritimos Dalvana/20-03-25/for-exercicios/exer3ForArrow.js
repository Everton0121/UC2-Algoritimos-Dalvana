let soma = 0;
const numeros = [65, 44, 12, 4];

//jeito maais dificil de se fazer precisando fazer function
/*
function myFunction(item){
    soma += item;
}

numeros.forEach(myFunction);
console.log(soma);
*/


//jeito mais facil de fazer sem presizar fazer funcao 
numeros.forEach(myFunction => {
    soma += myFunction;
})

console.log(soma)