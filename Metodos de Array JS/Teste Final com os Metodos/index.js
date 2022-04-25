async function getPeople() {
  const response = await fetch("http://randomuser.me/api/?results=10");
  return response.json();
}
//exibindo todos os dados da api:
getPeople().then((data) => console.log(data));

getPeople().then((data) => {
  const people = data.results; //exibindo os dados da propriedade results da api
  console.log(people.filter((p) => p.gender === "female"));
  //filtrando os valores female da propriedade gender(que esta dentro da propriedade results).
});

//criando um array com as informações nome, sexo e idade extraidos da api:
getPeople().then((data) => {
  const result = data.results; //exibindo os dados da propriedade results da api
  const people = [];
  for (let p of result) {
    people.push({
      Nome: `${p.name.first} ${p.name.last}`, //pegando o primeiro e o ultimo nome da propriedade name.
      Sexo: p.gender,
      Idade: p.dob.age, //pegando a idade que é o valor de age, que está dentro de dob.
    });
  }
});

//filtrando os usuarios para somente usuarios acima de 30 anos:
getPeople().then((data) => {
  const result = data.results.filter((p) => p.dob.age > 30); //informações somente de usuarios acima de 30 anos
  const people = [];
  for (let p of result) {
    people.push({
      Nome: `${p.name.first} ${p.name.last}`, //pegando o primeiro e o ultimo nome da propriedade name.
      Sexo: p.gender,
      Idade: p.dob.age, //pegando a idade que é o valor de age, que está dentro de dob.
    });
  }
  console.table(people); //apresentando o resultado em tablea pra ficar mais fácil de visualizar.
});
