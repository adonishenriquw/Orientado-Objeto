import { Cliente } from "./cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}

// #saldo =0; jeitos de privar atributo
// _saldo =0;

//metodo sacar
// parametro o valor dentro do metodo
