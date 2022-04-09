"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VIPImpuesto = new _impuesto["default"](36000000, 6000000);
var VIPCliente = new _cliente["default"]("Daniel Rebolledo", VIPImpuesto.impuestos);
console.log(VIPCliente.calcularImpuesto());