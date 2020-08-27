//Pequeño ejemplo con variables para identificar las funciones para Strings o Cadenas de Texto

let pelicula = 'The Batman',
    director = 'Matt Reeves';

let nombre;

nombre = director + ": " + pelicula;


//Uso de length como lo que usa twitter 
console.log(pelicula.length);

// todas mayusculas
nombre = nombre.toUpperCase();

//todas minusculas
nombre1 = nombre.toLowerCase();

//Divide una cadena de texto en un arreglo
nombre2 = nombre.split(' ');

//reemplazar un valor

let prueba = 'Esto es una prueba para principiante';

ejemplo = prueba.replace('principiante', 'experto');

// Revisar que algo exista, esto sirve para validar por ejemplo un correo 

incluir = prueba.includes('prueba');

//Duplicar una cadena 

let du = 'Du',
    hast = 'Hast';

//Imprime el texto en la consola
console.log(nombre);
console.log(nombre1);
console.log(nombre2);
console.log(ejemplo);
console.log(incluir);
// se repite la cadena Du
console.log(du.repeat(2));
console.log(hast);


const numero1 = 30,
    numero2 = 20;

let resultado, resultado2, resultado3;

// sumas , restas , multiplicaciones y operaciones basicas
resta = numero1 - numero2;
suma = numero1 + numero2;
mult = numero1 * numero2;
divi = numero1 / numero2;

// Clase Math

resultado = Math.round(2.5);
resultado2 = Math.floor(2.99);
resultado3 = Math.ceil(2.99);

//Math.sqrt (raiz)
//Math.abs (valor absoluto)
//Math.pow (potencia)
//Math.min (da el minimo)
//Math.max (da el maximo)

console.log(resta);
console.log(suma);
console.log(mult);
console.log(divi);

console.log(resultado);
console.log(resultado2);
console.log(resultado3);

// Convertir de un string a un numero 
// esto sirve para formularios principalmente 

let n1 = 50,
    n2 = "10",
    n3 = "tres",
    n4 = "10.20";

console.log(Number(n2) + n1);
console.log(parseFloat(n4) + n1);


// Ejemplo de algun tipo de dato financiero para mantener ciertos decimales 

let dato = "1043043.54658743",
    dato2 = 2313415353.435366;

console.log(Number(dato).toFixed(4));
console.log(dato2.toFixed(2));

// De numero a string 
// Ejemplo para un codigo postal o numero de tarjeta, principalmente para uso de formularios y validar que se ingrese correctamente

let tarjeta = 9844742748905489;

tarjeta = String(tarjeta);

console.log(tarjeta.length);

// Arreglos

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.table(arr);

const meses = new Array('enero', 'febrero', 'marzo');

//Agrega elementos al final de un arreglo
meses.push('abril');

//Agrega elementos al principio de un arreglo
meses.unshift('Mes 0');

//Elimina algo del final
//meses.pop();

//Elimina algo del principio
//meses.shift();

//Elimina de un rango
//meses.splice(0,1);

//Cambia el orden del ultimo al final
//meses.reverse();

//Ordena en orden alfabetico
//meses.sort();

console.log(meses);
console.log(meses[1]);

//Comprobar si es un arreglo
console.log(Array.isArray(meses));

// Objetos 
//Te permite definir una key y un valor

// Object Literal
const persona = {
    nombre: 'Jurgen',
    apellido: 'Schadtler',
    edad: 21,
    trabajo: true,
    hobby: ['Cine', 'Programar', ],
    hogar: {
        ciudad: 'Aguascalientes',
        pais: 'Mexico'
    }
}

console.log(persona);
console.log(persona.nombre);

// Template Strings

const minombre = 'Jurgen',
    trabajo = 'Programador';

//Este sirve para concatenar varias lineas de HTML
console.log(`Nombre: ${minombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#mensaje');

//Vieja practica
let html = '<ul>' +
    '<li> Nombre: ' + minombre + '</li>' +
    '<li> Trabajo: ' + trabajo + '</li>' +
    '</ul>';

//Nueva practica en el entorno profesional
let html2 = `<ul>
    <li>Nombre: ${minombre}</li>
    <li>Trabajo: ${trabajo}</li>
    </ul>`;

contenedorApp.innerHTML = html2;

//Funciones


//Creamos nuestra propia funcion

//Function declaration : se puede usar antes de declararla 
function saludar() {
    console.log('Hola Amigos de IA');
}

saludar();

// Function expression : primero debemos declararla y despues podremos usarla 
const op = function() {
    console.log(1 + 2);
}

op();

// Ejemplo

function adios(name) {
    console.log('Adios ' + name);
}

adios('Ingeniero');
adios('Inutil');
adios('Doctor');

//IIFE

(function(tecno) {
    console.log('No te vayas ' + tecno);
})('Esteban');

//Funciones dentro de objetos o métodos

const music = {
    reproducir: function(cancion) {
        console.log('Estas escuchando: ' + cancion);
    },
    pausar: function() {
        console.log('Paused...');
    }
}

music.reproducir('Sapito');
music.pausar();

// Funciones que retornan un valor

const rest = function(a = 0, b = 0) {
    return a + b;
}

let res = rest(10 - 3);
console.log(res);


//Arrow function 

const multiplicar = (a = 0, b = 0) => {
    return a * b;
}

let m = multiplicar(4, 6);
console.log(m);

// Object Constructor (vieja forma)

function Task(titulo, urgencia) {
    this.titulo = titulo;
    this.urgencia = urgencia;
}

const tarea1 = new Task('Pasear al perro', 'Urgente');
const tarea2 = new Task('Cocinar', 'Media');

//Clase
class task {
    constructor(tit, urg) {
        this.tit = tit;
        this.urg = urg;
    }
}
console.log(tarea1);
console.log(tarea2);


const person = {
    na: 'Pepe',
    age: 20,
    anioNacimiento: function() {
        return new Date().getFullYear() - this.age;
    }
}

console.log(person.anioNacimiento());

// Condicionales

const login = true;

if (login == true) {
    console.log('Si estas logeado');
} else {
    console.log('Inicia Sesión');
}

let score;

if (score) {
    console.log('Existe un score de ' + score);
} else {
    console.log('No hay score');
}

const metodoPago = 'cheque';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has pagado o método no válido');
        break;
}

//Ejemplo uso de for

const carrito = ['producto1', 'producto2', 'producto3'];

for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto en el carrito: ${carrito}`);
}

//Ejemplo uso de while

let i = 0;

while (i < 10) {
    console.log(`Numero: ${i}`);
    i++;
}


// Scope es la visibilidad de una variable
// Es ecomendable usar let o const, no recomendable usar var 
let musica = 'Rock';

if (musica) {
    let musica = 'Grunge';
    console.log('Dentro del if: ' + musica);
}

console.log('Furea del if:' + musica);


//Destructuring

const client = {
    nombr: 'Alejandra',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'Mexico',
            pais: 'Mexico'
        },
        cuenta: {
            desde: '10-12-2020',
            saldo: 4000
        }
    }
}

console.log(client);

//Destructuring en acción 

let { nombr, tipo } = client;
let { datos: { ubicacion: { ciudad } } } = client;

console.log(ciudad);

//Object Literral enhacement

const grupo = 'OV7',
    genero = 'Espanol',
    canciones = ['La calle de las sirenas', 'A tu lado', 'Marchate'];

const ov7 = { grupo, genero, canciones }

console.log(ov7);

// .filter .find .reduce

const alumni = [
    { al: 'Juan', edad: 20 },
    { al: 'Jose', edad: 50 },
    { al: 'Jorge', edad: 32 },
    { al: 'Alejandra', edad: 18 },
];

//Obtener Informacion filtrandola
const mayores = alumni.filter(persona => persona.edad > 20);
console.log(mayores);

//Extraer informacion o encontrarla 

const alejandra = alumni.find(persona => persona.al == 'Alejandra');
console.log(alejandra);

//reduce

let total = alumni.reduce((edadTotal, persona) => edadTotal + persona.edad, 0);
console.log(total);
//promedio de edad 
console.log(total / alumni.length);


// Fetch API 

descargarUsuarios(10);

function descargarUsuarios(cantidad) {
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

    //llamado a fetch


    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const { name: { first }, name: { last }, picture: { medium } } = usuario;

        li.innerHTML = `
                Nombre: ${first} ${last}
                imagen: <img src="${medium}">
        `;

        document.querySelector('#app').appendChild(li);
    });
}