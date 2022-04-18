var promisse = Promise.resolve(3)
var promisse2 = Promise.resolve(4)
var promisse3 = Promise.resolve(5)

//Promise.all espera cada uma das promises serem resolvidas pra só ai chamar o .then
Promise.all([promisse, promisse2, promisse3]) 
    .then(function (values){

    })

//Promise.race espera que uma das promises responde e ai já chama o .then e ignora as outras promises.
Promise.all([promisse, promisse2, promisse3]) 
.then(function (values){

})

/*
Exemplo de utilização dos dois metôdos.

Se eu quero receber informações de fretes pra então escolher o menor valor, então eu uso a promise.all, 
pois com ela eu vou ver os 3 resultados e escolher um entre eles.

Se eu tenho 3 serviços que fazem consulta de endereço por cep eu posso usar a promise.race, pois assim 
que um me retornar o endereço desejado já posso parar o processamento e ignorar as outras promises.
*/