export default class Cliente {
 #nombre;
 constructor(nombre, impuesto) {
  this.#nombre = nombre;
  this.impuesto = impuesto;
 }
 calcularImpuesto() {
  return (this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21;
 }
}
