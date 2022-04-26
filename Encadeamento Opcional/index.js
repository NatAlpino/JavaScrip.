const user = {
    nome: "Natália",
    email: "natalia.alpino@luizalabs.com",
    endereco: {
        logradouro: "Avenida Jose Marcelo",
        complemento1: "2390",
        complemento2: "Casa",
        cidade: {
            nome: "Franca",
            estado: {
                nome: "Sao Paulo",
                siglas: "MG"
            }
        }
    }
}

/*
Se eu quiser pegar o nome do estado que está dentro do objeto estado, 
que está dentro do objeto cidade, que está dentro do objeto endereço, 
que está dentro do objeto principal que é user faço da seguinte forma:
*/
console.log(user.endereco.cidade.estado.nome);

//mas se faltar alguma informação teremos um erro na hr da requisição:
const user2 = {
    nome: "Natália",
    email: "natalia.alpino@luizalabs.com",
    endereco: {
        logradouro: "Avenida Jose Marcelo",
        complemento1: "2390",
        complemento2: "Casa",
        cidade: {
            // nome: "Franca",
            // estado: {
            //     nome: "Sao Paulo",
            //     siglas: "MG"
            // }
        }
    }
}
/*
Isso é o que faríamos antes das mudanças do ECMAScript6, basicamente 
seria uma validação e só após essa validação que seria aplicado o console.log.
*/
if(user2 && user2.endereco && user2.endereco.cidade) {
    console.log(user2.endereco.cidade.estado.nome);
}

//agora como ficou:
console.log(user2?.endereco?.cidade?.estado?.nome);

/*
Pode ser assim tbm:
Assim ao invés de aparecer undefined, vai aparecer a mensagem Não informado:
*/
console.log(user2?.endereco?.cidade?.estado?.nome || "Não informado!");

//outra opção: (porém o mais usado/correto é o exemplo acima)
console.log(user2?.endereco?.cidade?.estado?.nome ?? "Não informado!");