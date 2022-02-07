//classe com atributos e funçoes:

export class ContaCorrente{
    agencia;
    cliente;

    _saldo = 0; //de acordo com uma convençao entre os dev sempre que um atributo estiver com _ na frente significa que este atributo é "privado".
    
    //funçao
    sacar(valor){ 
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; // neste caso o return ta servindo para retorna algo, que no caso é o valor sacado.
        }
    }
    //funçao
    depositar(valor){
        if(valor <= 0) return; //neste caso o return está servindo para parar a funçao por conta de algo que não está dentro que é ok pra ela.
        this._saldo += valor;
    }    

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}