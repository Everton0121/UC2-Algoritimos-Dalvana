/*let soma = 0
const numeros = [65, 44, 12, 4]

numeros.forEach(function(valor){
    soma += valor;
});
console.log(soma)
*/

const veiculos = ['moto','carro','bicicleta']

veiculos.forEach((Element, index,array) => {
    console.log(`o elemento ${Element} tem indice ${index}`);
    console.log("o array e: ", array)
})
