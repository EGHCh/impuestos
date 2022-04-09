import Cliente from "./cliente.js";
import Impuesto from "./impuesto.js";

const VIPImpuesto = new Impuesto(36_000_000, 6_000_000);
const VIPCliente = new Cliente("Daniel Rebolledo", VIPImpuesto.impuestos);
console.log(VIPCliente.calcularImpuesto())