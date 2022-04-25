//o map é usado sempre que é necessário traduzir ou mapear todos os elementos de um array pra outro conjunto de valores.
//o map não altera o valor original do array, por isso ele precisa ser atribuido a uma outra variável.

const numbers = [1, 4, 5, 9, 14, 23];

//nessa função eu estou mapeando todos os valores do array numbers e multiplicando por 2 cada elemento.
const doubledNumbers = numbers.map(function (elem) {
  return elem * 2;
});

//outra forma de escrever a mesma função, porém de uma forma reduzida e mais limpa com arrow function:
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers);

//Outro de exemplo de utilização do map:

const fahrenheit = [0, 32, 45, 50, 75, 80, 120];

//aqui eu vou mapear as temperaturas que estão em fahrenheit e tranformar para celcius:
const celcius = fahrenheit.map(function (elem) {
  return Math.round(((elem - 32) * 5) / 9);
});

//com arrow function:
const celcius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));

console.log(celcius);
