//El método console.log()
console.log("Hola Mundo");
console.log(2 + 2);
console.log("¡Hola a todos! Observen este número: ", 5 + 18);

//Mensajes de error por niveles

//Muestra información con todo nivel de detalle.
console.debug("Hola Mundo", [1, 2, 3]);
// 	Muestra mensajes de información.
console.info("nivel correcto");
//Muestra información de advertencia. Aparece destacado en amarillo.OK
console.warn("Precaución");
//Muestra información de error. Aparece destacado en rojo. OK
console.error("Elemento no definido");

//Mostrar una traza de error   OK
console.trace("¡He llegado aquí!");

//Mensaje con estilo CSS   OK
const styles = `
  background:linear-gradient(#884ced, #ec1cce);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%c¡Estudia y practica", styles);
console.log("%c otra prueba ", `background-color:red;color:white;padding:10px;border-radius:9px;font-size:18px`);


//Limpia la consola. Equivalente a escribir clear().  OK
//console.clear();

//Agrupar mensajes.
//En la consola nos aparecera un ► Información a mostrar   OK
console.group("Información a mostrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.groupEnd();

//El método console.table() OK
const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

console.table(users);

//El método console.assert() OK
console.assert(5 < 10, "5 es menor que 10");
// No ocurre nada
console.assert(5 < 0, "5 es menor que 0");
// Muestra el mensaje indicado con un aviso de error


//El método console.dir() OK
console.log(document.body);
console.dir(document.body);

//Crear benchmarks rápidos (NOTA:en firefox no funciona)
//Contadores
for (let i = 0; i < 5; i++) {
  console.count("test-loop");
}
console.countEnd("test-loop");


//Test de velocidad  (OK en consola navegador)
console.time("test1");
for (let i = 0; i < 10; i++) {
 
  console.timeLog("test1", i);
}
console.timeEnd("test1");


//Test de rendimiento   (no me funciona en firefox)
console.profile();
for (let i = 0; i < 10; i++) {
  console.log("test1", i);
}
console.profileEnd();


//Tipos de datos.................

// Un texto, letra o carácter
const text2 = "Hola, me llamo Manz";

// Un número (entero o decimal)
const number2 = 42;

// Un número muy grande (se añade n al final)
const bignumber = 12345678901234567890n;
console.log(tipeof(bignumber));

// Un valor de verdadero o falso
const boolean2 = true;
console.log(tipeof(boolean));

// Un valor único
const symbol = Symbol("unique");
console.log(tipeof(symbol));


//undefined.................

// Tiene el valor undefined
let notDefined2;

// Aunque no es lo habitual, también se puede asignar explícitamente
let sinDefinir = undefined;


//El valor especial null.....

// Caso A
let selectedUser;

// Caso B
let selectedUser2 = null;

//Tipos de datos no primitivos....

// Tipo de dato: Objeto
const user = { name: "ManzDev" };

// Tipo de dato: Array
const users2 = ["ManzDev", "CyberManzDev", "Manz9000"]


//El operador typeof........
const text = "Hola ManzDev!";
typeof (text);       // Devuelve "String"

const number = 42;
typeof (number);     // Devuelve "Number"

const boolean = true;
typeof (boolean);    // Devuelve "Boolean"

let notDefined;
typeof (notDefined); // Devuelve undefined

const numbers = [1, 2, 3, 4];
typeof numbers;    // Devuelve "object"

const user0 = { name: "ManzDev" };
typeof (user0);       // Devuelve "object"



//La propiedad constructor.name
const text3 = "Hola ManzDev!";
text3.constructor.name;       // String

const number3 = 42;
number3.constructor.name;     // Number

const boolean3 = true;
boolean3.constructor.name;    // Boolean

let notDefined3;
notDefined3.constructor.name; // ERROR
// constructor.name sólo funciona en variables definidas

const numbers4 = [1, 2, 3, 4];
numbers4.constructor.name;    // Array

const user4 = { name: "ManzDev" };
user4.constructor.name;       // Object


//Cadena de prototipos
getPrototypeChain("Hola");        // ['String', 'Object', null]
getPrototypeChain(42);            // ['Number', 'Object', null]
getPrototypeChain([1, 2, 3]);     // ['Array', 'Object', null]
getPrototypeChain(/.+/);          // ['RegExp', 'Object', null]



//El operador instanceof
const numbers2 = [1, 2, 3];
getPrototypeChain(numbers2);   // ['Array', 'Object', null]

numbers instanceof Array      // true
numbers instanceof Object     // true
numbers instanceof Number     // false
numbers instanceof String     // false

/*Falsy y Truthy
  Conversiones de tipo de dato
*/

const number5 = 42;             // 42
number5.constructor.name;       // "Number"

const text5 = Number(number);   // "42"
text5.constructor.name;         // "String"

Boolean(42);    // true (número positivo)
Boolean(0);     // false (cero)
Boolean(-42);   // true (número negativo)

// Se fuerza un texto a número (de forma explícita)
Number("42");       // 42

// Se fuerza un texto a número (de forma implícita)
+"42"               // 42

// Se concatenan (unen) dos strings ("22" + "22")
"22" + String(22);  // "2222"

// Se convierte el número a texto y se concatena (se une)
"22" + 22           // "2222"


// Realmente no es cero, es un string que no es vacío
Boolean("0");           // true

// Realmente no false, es un string que no es vacío
Boolean("false");       // true

// Aunque sea un array vacío, es un elemento que existe
Boolean([]);            // true
Boolean([0]);           // true

// El signo negativo realiza una conversión implícita, evaluando array como número
Boolean(-[]);           // false
Number(-[]);            // 0



//Symbols en Javascript.......
const id = Symbol("id");            // Identificador de "id"
const unique = Symbol("unique");    // Identificador de "unique"
Symbol("unique") === Symbol("unique");  // false


const u1 = Symbol("unique");
const u2 = Symbol("unique");

u1 === u2;                            // false (son símbolos diferentes)
u1.description === u2.description;    // true  (se crearon con el mismo texto)

//Crear identificadores únicos
const enemies = [
  { id: "SKELETON", name: "Esqueleto" },
  { id: "SPECTRE", name: "Espectro" },
  { id: "GHOST", name: "Fantasma" }
];

const addEnemy = (id, name) => {
  enemies.push({ id, name });
}

// Añadimos nuevo esqueleto a la lista de enemigos
addEnemy("SKELETON", "Esqueleto resplandeciente");

const findEnemyById = (id) => {
  return enemies.find(enemy => enemy.id === id);
}

findEnemyById("SKELETON");
// Devuelve { id: "SKELETON", name: "Esqueleto" }

const SKELETON = Symbol("SKELETON");
const SPECTRE = Symbol("SPECTRE");
const GHOST = Symbol("GHOST");

const enemies2 = [
  { id: SKELETON, name: "Esqueleto" },
  { id: SPECTRE, name: "Espectro" },
  { id: GHOST, name: "Fantasma" }
];

// Enemies methods
const addEnemy2 = (id, name) => enemies.push({ id, name });
const findEnemyById2 = (id) => enemies.find(enemy => enemy.id === id);

// Añadimos nuevo esqueleto a la lista de enemigos
const GLEAMING_SKELETON = Symbol("SKELETON");
addEnemy(GLEAMING_SKELETON, "Esqueleto resplandeciente");

findEnemyById(GLEAMING_SKELETON);
// Devuelve: { id: Symbol(SKELETON), name: "Esqueleto resplandeciente" }

findEnemyById(SKELETON);
// Devuelve: { id: Symbol(SKELETON), name: "Esqueleto" }


//Crear símbolos globales
const u1a = Symbol("unique");
const u2a = Symbol("unique");
console.log(u1a === u2a);// false

const u1b = Symbol.for("unique");    // Símbolo global compartido
const u2b = Symbol.for("unique");    // Símbolo global compartido
u1 === u2; // true

const local = Symbol("unique");
const global = Symbol.for("unique");

Symbol.keyFor(global);  // "unique"
Symbol.keyFor(local);   // undefined



//Símbolo Symbol.iterator.....
const counter = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end + 1;
    return {
      next() {
        return {
          value: current++,
          done: current > end,
        };
      },
    };
  },
};


// Muestra números del 1 al 10
for (const number3 of counter) {
  console.log(number3);
}

// Devuelve [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers3 = [...counter];


//Símbolo Symbol.toPrimitive......
const theAnswer = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return "El sentido de la vida, el universo y todo lo demás.";
    } else if (hint === "number") {
      return 42;
    } else {
      return null;
    }
  },
};


const audio = new Audio(
  "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3"
);
audio.play();
