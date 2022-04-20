//desestruturação de um array que está dentro de um objeto:

const company = {
    name: "Google",
    locations: ["Singapore", "India", "Germany"]
};

console.log(company.locations[0]);
//vai aparecer pra mim a posição 0 do array da propriedade locations.


const { locations: [loc], } = company;
console.log(loc);
//vai aparecer pra mim a posição 0 do array da propriedade locations.

const { locations: [, loc], } = company;
console.log(loc);
//vai aparecer pra mim a posição 1 do array da propriedade locations, pois usei a vergula pra pular uma posição.
