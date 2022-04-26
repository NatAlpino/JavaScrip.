//o entries devolve um objeto de array dos próprios pares:

const users = {
  Natália: 35,
  Daniel: 37,
  Kalel: 4,
};

/*
Aqui ele vai apresentar um array e dentro deste array cada propriedade 
junto com o seu valor em um array separado dos outros pares:
*/
console.log(Object.entries(users));

//aqui combinando o Object.entries com o forEach, ele vai apresentar um único array com os pares dentro:
Object.entries(users).forEach((item) => {
  console.log(item);
});

//aqui ficam todos fora do array:
Object.entries(users).forEach(([key, value]) => {
    console.log(key, value);
  });