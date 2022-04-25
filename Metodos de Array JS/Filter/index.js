/*
O filter é usado quando precisamos remover elementos indesejados com base em algumas condições.
Ou seja, filtrar.
*/

const numbers = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

//aqui estamos testando se o index do array original é o mesmo que o index do elemento.
//quando for o mesmo, ele será eliminado.
const numbers2 = numbers.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);             //esse arr, seguinifica o array original.

console.log(numbers2);