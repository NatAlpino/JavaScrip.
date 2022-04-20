//desestruturando um objeto:

const person = {
    id: 1,
    name: "Natalia",
    age: 35,
    address: {
        city: "Franca",
        country: "Brazil"
    },
}

// const name = person.name;
// const age = person.age;

//destructuring:
//aqui eu peguei o objeto address inteiro
const { age, address } = person;

//agora desestruturando o objeto address, pegando somente oa propriedade city:
const { address: {city} } = person;


console.log(city);

