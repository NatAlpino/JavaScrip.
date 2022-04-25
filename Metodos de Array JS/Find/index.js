/*
O find é usado quando é preciso procurar ou verificar um valor dentro de um array ou objeto, 
sendo que o find vai trazer o primeiro valor que satisfazer a busca.
*/

const frutas = ["banana", "morango", "maça"];

//buscando frutas que comecem com a letra M
const foundFruta = frutas.find((f) => f.startsWith("m"));

console.log(foundFruta);
//a resposta vai ser morango, porque passando pelo array o primeiro que foi encontrado foi ele.

//outro exemplo:

const fruits = [
  { name: "jaca", quantity: 2 },
  { name: "melancia", quantity: 4 },
  { name: "cereja", quantity: 8 },
  { name: "laranja", quantity: 6 },
];

const foundFruit = fruits.find((fruit) => fruit.name === "cereja");

console.log(foundFruit);
