import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente("adonis", 11122233344);
const cliente2 = new Cliente("luiz", 12123412344);

const contaCorrenteAdonis = new ContaCorrente(1001, cliente1);
contaCorrenteAdonis.depositar(500);
const conta2 = new ContaCorrente(1001, cliente2);

let valor = 200;
contaCorrenteAdonis.transferir(valor, conta2);

console.log(cliente1);
