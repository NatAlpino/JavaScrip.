//desestruturando arrays e objetos:

const groceryList = [
    { item: "Apples", price: 25, category: "fruits"},
    { item: "Mangoes", price: 35, category: "fruits"},
    { item: "Tomatoes", price: 15, category: "vege"},
    { item: "Milk", price: 20, category: "misc"},
    { item: "Bread", price: 12, category: "misc"},
    { item: "Eggs", price: 18, category: "misc"},
];

console.log(groceryList[0].item); //meu resultado aqui vai ser Apples, posição 0 do array e propriedade item do objeto.

const [ apple ] = groceryList; 
console.log(apple); //desta forma estou puxando o objeto inteiro.

const [{ item }] = groceryList; 
console.log(item); //aqui vai aparecer somente o valor da propriedade item do primeiro objeto.

const [, ,{ item }] = groceryList; 
console.log(item); //aqui vai aparecer somente o valor da propriedade item do terceiro objeto, pois as vírgulas estão indicando objetos.

const [, ,{ item }, ...rest] = groceryList;
console.log(item, rest); //aqui vai aparecer somente o valor da propriedade item do terceiro objeto e mais o restante do array com os objetos completos.