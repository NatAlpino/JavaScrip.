const person = {
    id: 1,
    name: "Natalia",
    age: 35,
    address: {
        city: "Franca",
        country: "Brazil"
    },
}
//normal
function displayPerson(person) {
    console.log(`The person name is ${person.name} and age is ${person.age} years`);
}

//desestruturando a função:
function displayPerson({name, age}) {
    console.log(`The person name is ${name} and age is ${age} years`);
}

displayPerson(person);