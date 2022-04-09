export default class Impuesto {
 #montoBrutoAnual;
 #deducciones;
 constructor(montoBrutoAnual, deducciones) {
  this.#montoBrutoAnual = montoBrutoAnual;
  this.#deducciones = deducciones;
 }
 get impuestos() {
  return {
   montoBrutoAnual: this.#montoBrutoAnual,
   deducciones: this.#deducciones,
  };
 }
}
