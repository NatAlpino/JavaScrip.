//Utilizando Promises com .then()

function getUser(userId) {
  //userId é o paramentro da function getUser
  const userData = fetch(`https://api.com/api/user/${userId}`) //o metodo fetch recebe como parametro o endpoint e retorna uma promessa ou promise.
    .then((response) => response.json()) //promessa de retorno dos dados transformados em json.
    .then((data) => console.log(data.name))
    .catch((error) => console.log(error)); //no caso de erro na requisição da api teremos uma mensagem de erro
}

getUser(1); // "Nome Sobrenome"

/*Resolvendo várias promessas
No caso de várias promessas que podem ser feitas paralelamente (por exemplo, alguns dados em endpoints REST diferentes), 
pode-se utilizar Promise.all:
   */

const endpoints = [
  "https://api.com/api/user/1",
  "https://api.com/api/user/2",
  "https://api.com/api/user/3",
  "https://api.com/api/user/4",
];

const promises = endpoints.map((url) => fetch(url).then((res) => res.json()));

Promise.all(promises).then((body) => console.log(body.name));
