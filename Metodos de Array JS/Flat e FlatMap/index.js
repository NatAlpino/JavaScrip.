/*
O flat aceita um argumento que é o nível que você quer gerar um array.
Ex: todasRespostas.flat() - sem argumento ele fica no default que é 0
todasRespostas.flat(1) ou todasRespostas.flat(2) aqui ele vai mesclando conforme as camadas de array que eu tiver.
*/

const usuariosRespostas = [
    {
        nome: "Natalia",
        respostas: [
            { questao_id: "001", acertou: false },
            { questao_id: "002", acertou: true },
            { questao_id: "003", acertou: false },
            { questao_id: "004", acertou: true },
            { questao_id: "005", acertou: true },
        ]
    },
    {
        nome: "Daniel",
        respostas: [
            { questao_id: "001", acertou: true },
            { questao_id: "002", acertou: true },
            { questao_id: "003", acertou: false },
            { questao_id: "004", acertou: true },
            { questao_id: "005", acertou: true },
        ]
    },
    {
        nome: "Kalel",
        respostas: [
            { questao_id: "001", acertou: false },
            { questao_id: "002", acertou: true },
            { questao_id: "003", acertou: true },
            { questao_id: "004", acertou: true },
            { questao_id: "005", acertou: true },
        ]
    }
];

//mapiando somente as respostas de cada usuário:
const todasRespostas = usuariosRespostas.map(function(usuario) {
    return usuario.respostas;
})

//o console.grup não influencia em nada, só na forma de visualizar no console.
console.group('flat');
console.log('todasRespostas', todasRespostas); //criando um array com 3 arrays que em cada um existe um array com as respostas
console.log('todasRespostas', todasRespostas.flat());//criando um único array com todas as resposta agrupadas.
console.table(todasRespostas.flat());// a mesma coisa, mas mostrando tudo dentro de uma tabela.
console.groupEnd('flat');

/*usando o flatMap:
O flatMap faz o mesmo que o map e o flat, mas na mesma função.
*/
console.group('flatMap')
const todasRespostasComFlatMap = usuariosRespostas.flatMap(function(usuario) {
    return usuario.respostas;
})
console.log(todasRespostasComFlatMap);
