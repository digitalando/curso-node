// Ejercicio 1

const inventario = [
  {tipo:   "maquina", valor: 5000},
  {tipo:   "maquina", valor:  650},
  {tipo:      "silla", valor:   10},
  {tipo: "sillon", valor: 1200},
  {tipo:   "maquina", valor:   77}
]

let valorTotalMaquina = inventario.filter(item => item.tipo == "maquina").reduce((total, item) => total + item.valor, 0);

console.log(valorTotalMaquina);

// Ejercicio 2

// function ArrayOrdenado(comparar) {
//   this.comparar = comparar;
//   this.contenido = [];
// }
// ArrayOrdenado.prototype.encontrarPos = function(elt) {
//   for (var i = 0; i < this.contenido.length; i++) {
//     if (this.comparar(elt, this.contenido[i]) < 0) break;
//   }
//   return i;
// }
// ArrayOrdenado.prototype.insertar = function(elt) {
//   this.contenido.splice(this.encontrarPos(elt), 0, elt);
// }


class ArrayOrdenado {
  constructor(comparar) {
    this.contenido = [];
    this.comparar = comparar;
  }
  // Encuentra la posición donde debería ir un determinado elemento según el orden.
  encontrarPos(elem) {
    

    for (var i = 0; i < this.contenido.length; i++) {
      if (this.comparar(elem, this.contenido[i]) < 0) break;
    }
    return i;
  }
  // inserta el elemento en la posición correspondiente según el orden.
  insertar(elem) {
    this.contenido.splice(this.encontrarPos(elem), 0, elem);
  }
}

var ordenado = new ArrayOrdenado((a, b) => a - b );
ordenado.insertar(5);
ordenado.insertar(1);
ordenado.insertar(2);
ordenado.insertar(4);
ordenado.insertar(3);
console.log("array:", ordenado.contenido);
