// Condicion simple
let num = 10;


// if (num > 0) {
//     console.log(`${num} es mayor que 0`);
//     console.log(`${num} es mayor que 0`);
// } else {
//     console.log(`${num} es menor que 0`)
// }
// // Condicion multiple

// if (num > 0) {
//     console.log(`${num} es mayor que 0`);
// } else if (num == 0) {
//     console.log(`${num} es igual a 0`)
// } else {
//     console.log(`${num} es menor que 0`)
// }

/* Operadores lógicos */

/* && and */
/* || o */
let num1 = -10;
let num2 = -10;

if (num1 > 0) {
    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores a 0`);
    } else if (num2 < 0) {
        console.log(`${num1} es mayor que 0 y ${num2} es menor a 0`);
    } else {
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
    }
} else if (num1 < 0) {
    if (num2 < 0) {
        console.log(`${num1} y ${num2} son menores a 0`);
    } else if (num2 > 0) {
        console.log(`${num1} es mayor que 0 y ${num2} es mayor a 0`);
    } else {
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
    }
} else {
    if (num2 < 0) {
        console.log(`${num1} es igual a 0 y ${num2} es menor a 0`);
    } else if (num2 > 0) {
        console.log(`${num1} es igual que 0 y ${num2} es mayor a 0`);
    } else {
        console.log(`${num1} es igual que 0 y ${num2} es igual a 0`);
    }
}

let word = 'holas';
if (word.length > 4) {
    console.log(`word tiene mas de 4 letras`);
} else if (word.length < 4) {
    console.log(`word tiene menos de 4 letras`);
} else {
    console.log(`word tiene  4 letras`);
}

let respuesta = !false;
if (respuesta) {
    console.log(`Respuesta tiene el valor true`);
} else {
    console.log(`Respuesta tiene el valor false`);
}