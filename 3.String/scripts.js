let cadena = "Hola mundo";
// //console.log(cadena.length);
// let cadenaMayus = (cadena.toUpperCase());
// console.log(cadenaMayus);
// console.log(cadena.toLowerCase());//minusculas
// console.log(cadena.indexOf('o'));//devulve posicion si no lo encuenta develve -1
// console.log(cadena.replace('mundo', 'google'));// remplaza el fragmento de la cadena que le digamos y pone le valor nuevo    
// console.log(cadena.substring(3, 7));//extrae los caracteres desde el inicio, hastafin(el final no se incluye)
// console.log(cadena.slice(0, -1));//Igual que suvstring pero admite valores negativos, si ponemos valores negativos empezara desde atras
//si no se incluye el final extrae hasta el final
//(2, 4) Epieza a contar en el tercer caracter y lod 4 ultimos no los considera

let cadena2 = '       Holamundoestamostrabaj@ando.com';
//console.log(cadena2.trim());//ELIMINA LOS ESPAIOS AL INICIO Y AL FINAL DE LA CADENA
// console.log(cadena.startsWith('m', 5)); //Sirve para saber si la cadena empieza con ese valor.Devuelve true o false
// console.log(cadena2.endsWith('strings')); //Sirve para saber si la cadena termina con ese valor Devuelve true o false
console.log(cadena2.includes('@ando.com')); //igual que indexOf pero edvuelve true o false
// let cadena3 = 'Hola';
// console.log(cadena3.repeat(5)); //repite un valor tantasveces como el valor lo indique
let nombre = "Juan";
let apellido = "Gómez"
let edad = 20;

console.log('Hola ' + nombre + " " + apellido + " Tienes:" + (edad + 1) + "años");
console.log(`Hola ${nombre} ${apellido}. Tienes: ${edad} años`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras: ${edad+1} años`);