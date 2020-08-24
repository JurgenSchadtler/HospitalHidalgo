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