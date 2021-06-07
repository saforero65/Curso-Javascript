/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc - 321
acb - 312
bac - 231
bca - 132
cab - 213
cba - 123
*/
const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduzca el primer número')
let b = prompt('Introduzca el segundo número')
let c = prompt('Introduzca el tercer número')

numbers.textContent = `Los numeros introducidos son ${a}, ${b} y ${c}`;

// Ejercicio
if (a >= b && a >= c) {
    if (b > c) {
        numbers.textContent = `El orden es: ${a}, ${b} y ${c}`;
    } else {
        numbers.textContent = `El orden es: ${a}, ${c} y ${b}`;
    }
} else if (b >= a && b >= c) {
    if (a > c) {
        numbers.textContent = `El orden es: ${b}, ${a} y ${c}`;
    } else {
        numbers.textContent = `El orden es: ${b}, ${c} y ${a}`;
    }
} else if (c >= a && c >= b) {
    if (a > b) {
        numbers.textContent = `El orden es: ${c}, ${a} y ${b}`;
    } else {
        numbers.textContent = `El orden es: ${c}, ${b} y ${a}`;
    }
}