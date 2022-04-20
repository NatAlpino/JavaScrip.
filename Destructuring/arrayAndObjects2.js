const users = [
    ["Natalia", "Alpino"]
    ["Daniel", "Laporte"]
    ["Kalel", "Laporte"]
];
[
    {
        firstName: "Natalia",
        lastName: "Alpino",
    },

    {
        firstName: "Daniel",
        lastName: "Laporte",
    },

    {
        firstName: "Kalel",
        lastName: "Laporte",
    },
];

//trazendo o valor do firstName da posição 0 do array mais o valor de lastName da posição 1 do array:
const usersObj = users.map((user) => {
    return { firstName: user[0], lastName: user[1] }
});

console.log(usersObj);

//trazendo o array inteiro:
const usersObj = users.map(([firstName, lastName]) => {
return { firstName: firstName, lastName: lastName }
});

console.log(usersObj);

//outra forma de trazer o array inteiro:
const usersObj = users.map(([firstName, lastName]) => {
    return { firstName: firstName, lastName: lastName }
    });
    
    console.log(usersObj);