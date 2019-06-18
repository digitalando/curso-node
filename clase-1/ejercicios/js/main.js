// Salto de línea en consola
// https://stackoverflow.com/questions/16239474/when-tracing-out-variables-in-the-console-how-to-create-a-new-line
function consoleTitle(title) {
  console.log(
    '\n'
    + title + '\n'
    + '~'.repeat(title.length)
  );
};

// Ejercicio 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 1');

const inventario = [
  {tipo: "maquina", valor: 5000},
  {tipo: "maquina", valor:  650},
  {tipo: "silla",   valor:   10},
  {tipo: "sillon",  valor: 1200},
  {tipo: "maquina", valor:   77}
]

let valorTotalMaquina = inventario.filter(item => item.tipo == "maquina").reduce((total, item) => total + item.valor, 0);

console.log(valorTotalMaquina);

// Ejercicio 2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

// arr.findIndex(callback[, thisArg])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
// ---
// El método findIndex() devuelve el índice del primer elemento de un array que
// cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

// Discusión de diferentes métodos para lograr este objetivo.
// https://stackoverflow.com/questions/42946561/how-can-i-push-an-element-into-array-at-a-sorted-index-position

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

// Alternativa

// arr.sort([compareFunction])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
// ---
// El método sort() ordena los elementos de un array localmente y devuelve el array ordenado.


class orderedArray {
  constructor(compare) {
    this.compare = compare;
    this.content = [];
  }
  orderedPush(element) {
    this.content.push(element);
    this.content.sort(this.compare);

  }
}

var ordered = new orderedArray((a, b) => a - b );
ordered.orderedPush(1);
ordered.orderedPush(60);
ordered.orderedPush(100);
ordered.orderedPush(5);
ordered.orderedPush(5);
ordered.orderedPush(2);
ordered.orderedPush(4);
ordered.orderedPush(3);
ordered.orderedPush(8);
console.log("array:", ordered.content);

// Ejercicio 3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 3');

// Los parámetros se declaran como "variables" en el orden en el que están en la
// función, eso quiere decir que si queremos interactuar con un parámetro en otro
// parámetro, éste tiene que estar declarado primero.

function ultimoIndiceDe(arr, elt, inicio = arr.length) {
  for (let i = inicio - 1; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

console.log(ultimoIndiceDe([1, 2, 1, 2], 2))

// arr.lastIndexOf(searchElement[, fromIndex])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/lastIndexOf
// ---
// El método lastIndexOf() devuelve el último índice en el que un cierto
// elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara.
// El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
// ---
// arr.lastIndexOf(searchElement, fromIndex)


console.log([1, 2, 1, 2].lastIndexOf(2));

// Ejercicio 4
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 4');

// arr.find(callback[, thisArg])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find
// ---
// El método find() devuelve el valor del primer elemento del array que cumple
// la función de prueba proporcionada. En cualquier otro caso se devuelve undefined.

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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 5');

// array.splice
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
// ---
// Sirve para reemplazar o agregar valores en un array pudiendo definir punto de
// inicio y finalización para definir el segmento afectado.

// array.concat
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/concat
// ---
// Sirve para unir arrays, devolverá un nuevo array sin modificar los originales

// apply
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/apply
// El método apply() invoca una determinada función asignando explícitamente el
// objeto this y un array o similar (array like object) como parámetros (argumentos)
// para dicha función.

// call
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/call
// ---
// El método call() llama a una función con un valor this asignado y argumentos
// provistos de forma individual.

// En el código de más abajo se usar para tomar el argumento con índice 1 pasado a la función.

// let pajarosVistos = []
// function grabarPajaros(tiempo) {
//   pajarosVistos.push({tiempo, pajaros: Array.prototype.slice.call(arguments, 1)})
// }

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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Destructuración en objetos
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment#For_para_iteraciones_con_destructuring

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


// Ejercicio 7
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761
// https://wesbos.com/sanitize-html-es6-template-strings/

consoleTitle('Ejercicio 7');

// Claramente funciona, pero no me queda claro por qué.
function html(strings, ...values) {
  return strings.reduce((prev, next, i) => `${prev}${next}${escaparHTML(values[i] || '')}`, '');
}

const debeEscaparse = '<>&"'
console.log(html`Deberías de escapar los ${debeEscaparse.length} caracteres: “${debeEscaparse}” en HTML`)

function escaparHTML(string) {
  return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}


// Ejercicio 8
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 8');

function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
      if (req.status < 400)
        succeed(req.responseText)
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}

// Error CORS
//get('https://digitalhouse.com/');
