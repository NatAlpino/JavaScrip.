/*
O every é usado quando precisamos testar se todos os elementos de um array passam por um teste especifico.
Diferente do filter que entrega um novo array, o every vai entregar um resultado booleano.
*/

const numbers = [12, 5, 8, 130, 44];

//verificando se todos os numeros do array numbers são maiores que 10
const allAbove10 = numbers.every(elem => elem > 10);

console.log(allAbove10);

//outra forma é dar o console.log direto, semprecisar fazer uma nova função:
console.log(numbers.every(elem => elem > 10));

//outro exemplo:

const users = [
    {id: 1, name: "Natália", age: 35},
    {id: 2, name: "Daniel", age: 37},
    {id: 3, name: "Kalel", age: 4},
]

console.log(users.every(p => p.age < 40));