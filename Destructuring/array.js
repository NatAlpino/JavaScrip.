const fruits = ["apple", "mango", "banana", "pineapple"];

//sem desestruturar: (seguindo a posição do array que começa em 0)
const juice = fruits[2] //o resultado vai ser banana
const juice2 = fruits[0] //o resultado vai ser apple

console.log(juice);

//desestruturando: (aqui não segue a posição do array começando em 0)
const [fruit1, fruit2] = fruits

console.log(fruit1); //o resultado vai ser apple
console.log(fruit2); //o resultado vai ser mango

//outro exemplo, pulando uma posição do array:
const [fruit1, ,fruit2] = fruits

console.log(fruit1); //aqui o resultado vai ser apple
console.log(fruit2); //mas aqui o resultado vai ser banana, pq pulamos uma posição

//desestruturando usando o spread operator:
const [fruit1, fruit2, ...rest] = fruits
console.log(fruit1) //aqui o resultado vai ser apple
console.log(fruit2) //aqui o resultado vai ser mango
console.log(rest); //aqui o resultado vai ser o resto do array, banana e pineapple