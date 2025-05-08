const numeros = [14, 57, 86, 43, 29]

for(let listaNumeros of numeros){
    console.log(listaNumeros);
    console.log(numeros.indexOf(listaNumeros))
}


let frase =["palavras","sao","uma","inesgotavel","fonte","de","magia"];

for(let palavras of frase){
    console.log(frase.indexOf("magia"));
}



let maiorNum = 0;

for(let num of numeros){
    if(maiorNum<num){
        maiorNum = num;
    }
}
console.log(maiorNum);