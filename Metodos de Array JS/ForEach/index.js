numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //lista de numeros
total = 0; //total iniciando em 0

const somar = (item, indice, array) => {
    total += item;  //o total vai se somar ao item do array
    array[indice] = total; //a cada looping o total passa a ser o numero do array que está passando.
}

numeros.forEach(somar); //chamar p forEach
console.log(numeros);


//Outro exemplo de forEach:
//lista de nomes e suas idades correspondentes:
listNames = ["natalia", "kalel", "daniel"]; //declarei os nomes
idade = [35, 3, 36] //declarei as idade

const adcIdade = (indice) => {
    console.log(`${listNames[indice]}: ${idade[indice]}`); //concatenei a lista de nomes com a lista de idades.
  
}

listNames.forEach(adcIdade); //chamei o forEach para colocar cada idade junto ao nome correspondente a ela.
