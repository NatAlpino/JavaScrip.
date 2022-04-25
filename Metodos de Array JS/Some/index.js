/*
Usa-se o some para testar se pelo menos um elemento do array passa por um teste especifico.
O resultado do some é sempre booleano.
*/

//aqui vamos verificar se dentro dos números de um array existe algum número primo.
function isPrime(value) {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
}

const oneMoreArray = [6, 8, 11, 14, 42];

console.log(oneMoreArray.some(isPrime));

//outro exemplo:

const team = [
  { id: 1, name: "João", pilot: true },
  { id: 2, name: "José", pilot: true },
  { id: 3, name: "Maria", pilot: true },
  { id: 4, name: "Joana", pilot: true },
];

//verificando se dentre as pessoas do time algum é piloto
console.log(team.some((person) => person.pilot));
