//fazendo os imports para poder usar a classe que está em outro arquivo:
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"; 

//agora pra adc um novo cliente chamando minha classe eu preciso não só chamar, mas também colocar ele em uma variavel:
const cliente1 = new Cliente();

cliente1.nome = "Natalia";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();

cliente2.nome = "Daniel";
cliente2.cpf = 88822233309;


const contaCorrenteNatalia = new ContaCorrente();
contaCorrenteNatalia.agencia = 1001;
contaCorrenteNatalia.cliente = cliente1;
contaCorrenteNatalia.depositar(500); //reatribuindo um valor para o atributo saldo atraves de uma funçao

const contaCorrenteDaniel = new ContaCorrente();
contaCorrenteDaniel.cliente = cliente2;
contaCorrenteDaniel.agencia = 1002;

//fazendo operaçao de saque:
const valorSacado = contaCorrenteNatalia.sacar(50);

//fazendo operaçao de transferencia:
let valor = 200;
contaCorrenteNatalia.transferir(valor, contaCorrenteDaniel);

console.log(contaCorrenteNatalia);
console.log(contaCorrenteDaniel);