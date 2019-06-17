function consoleTitle(title) {
  console.log(
    '\n'
    + title + '\n'
    + '~'.repeat(title.length)
  );
};

// Ejercicio 1

consoleTitle('Ejercicio 1');

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

consoleTitle('Ejercicio 2');

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
    let index = this.contenido.findIndex(a => this.comparar(elem, a) < 0);
    return index >= 0 ? index : this.contenido.length;
  }

  // inserta el elemento en la posición correspondiente según el orden.
  insertar(elem) {
    console.log('insertar', elem, 'en pos',this.encontrarPos(elem) );
    this.contenido.splice(this.encontrarPos(elem), 0, elem);
  }
}

var ordenado = new ArrayOrdenado((a, b) => a - b );
ordenado.insertar(1);
ordenado.insertar(60);
ordenado.insertar(100);
ordenado.insertar(5);

ordenado.insertar(5);
ordenado.insertar(2);

ordenado.insertar(4);
ordenado.insertar(3);
ordenado.insertar(8);
console.log("array:", ordenado.contenido);

// Ejercicio 3

consoleTitle('Ejercicio 3');

// Los parámetros se declaran como "variables" en el orden en el que están en la
// función, eso quiere decir que si queremos interactuar con un parámetro en otro
// parámetro, éste tiene que estar declarado primero.

function ultimoIndiceDe(arr, elt, inicio = arr.length) {
  for (let i = inicio - 1; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

// ultimoIndiceDe = (arr, elt) => arr.lastIndexOf(elt);

console.log(ultimoIndiceDe([1, 2, 1, 2], 2))


// Ejercicio 4

consoleTitle('Ejercicio 4');

function detectarColision(objetos, punto) {
  return objetos.find(objeto => punto.x >= objeto.x && punto.x <= objeto.x + objeto.ancho &&
    punto.y >= objeto.y && punto.y <= objeto.y + objeto.alto);
}

const misObjetos = [
  {x:  10, y: 20, ancho: 30, alto: 30},
  {x: -40, y: 20, ancho: 30, alto: 30},
  {x:   0, y:  0, ancho: 10, alto:  5}
]

console.log(detectarColision(misObjetos, {x: 4, y: 2}))


// Ejercicio 5

consoleTitle('Ejercicio 5');

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice

function remplazar(array, desde, hasta, elementos) {
  array.splice(desde, hasta - desde, ...elementos);
}

let testArray = [1, 2, 100, 100, 6]
remplazar(testArray, 2, 4, [3, 4, 5])
console.log(testArray)

function copiarYRemplazar(array, desde, hasta, elementos) {
  return [...array.slice(0, desde), ...elementos, ...array.slice(hasta)];
}

console.log(copiarYRemplazar([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

let pajarosVistos = []
function grabarPajaros(tiempo, ...pajaros) {
  pajarosVistos.push({tiempo, pajaros: pajaros})
}

grabarPajaros(new Date, "sparrow", "robin", "pterodactyl")
console.log(pajarosVistos)

// Ejercicio 6

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

consoleTitle('Ejercicio 6');

const nombreEquipo = "tooling";
const gente = [
  {nombre: "Sofía", rol: "senior"},
  {nombre: "Ricky", rol: "junior"},
  {nombre: "Martin", rol: "senior"},
  {nombre: "Gonzalo", rol: "junior"}
];

let nombres = '';
let cantAltoNivel = 0;
for (var {nombre: n, rol: r} of gente) {
  nombres += `${n}, `;
  r == "senior" && cantAltoNivel++;
}

let mensaje = `Hay ${gente.length} miembros en el equipo de ${nombreEquipo}, sus nombres son ${nombres} ${cantAltoNivel} de ellos tienen un papel de alto nivel.`;

console.log(mensaje)
