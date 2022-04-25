//O includes busca uma propriedade dentro de um array, a resposta vai ser sempre boolean(true or false):

const people = [ "Daniel", "Natália", "Kalel" ]

console.log(people.includes("Kalel"));

const people2 = [
    { id: 1, name: "Daniel", age: 37, group: "dev"},
    { id: 2, name: "Natália", age: 35, group: "dev"},
    { id: 3, name: "Luanna", age: 25, group: "devops"},
]

//filtrando e verificando se dentre os nomes incluí a letra l
const filteredUsers = people2.filter(p => p.name.includes("l"))
console.log(filteredUsers);

/*
Ele vai aparecer que somente dois itens do array incluí a letra l, o nome :Luanna tbm incluí,
porém a letra l do nome dela está em maiúscula, por isso ela não entrou na resposta.
*/
