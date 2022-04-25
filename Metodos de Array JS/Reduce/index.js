/*
Reduce é usado quando é preciso encontrar um valor comulativo concatenado com base em 
elementos de todo o array.
*/

//aqui temos um array de objetos mostrando paises e a quantidade de lançamentos de foguete que cada um já fez.
const rockets = [
  { country: "Rússia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

/*
Vamos usar o reduce para somar todas as quantidades de lançamentos de foguetes de cada pais e assim 
chegarmos na quantidade de lançamentos de foguestes da história.
*/

/*
Reduce recebe dois parametros, o valor anterior, que está representando por valor1 e o valor atual 
que está representado por valor2.
Os nomes desses parametros pode ser o que eu quiser.
*/

/*
A função ainda pode receber um terceiro parametro que serve de base pro inicio da soma, que é o 0, ou seja,
a contagem vai partir de 0 e vai somando cada valor.
*/
const totalLaunches = rockets.reduce(
  (valor1, valor2) => valor1 + valor2.launches,
  0
);

console.log(totalLaunches);
