// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

// const names = document.getElementById('name');
// const age = document.getElementById('age');

// let a = prompt('Introduzca su nombre')
// let b = parseInt(prompt('Introduzca sun edad'))


// names.textContent = `Su nombre es ${a}, su edad es ${b} y el año siguiente tendra ${b+1}`;

// console.log(names.textContent);

// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
//     triángulo = b * h/2
//     rectángulo = b * h
//     círculo = π * r2 (pi * radio al cuadrado)
// let h, b, r, answer;
// let op = prompt(`Porfavor elija que area desea saber\n1.Triangulo\n2.rectangulo\n3.Circulo`)
// op = parseInt(op);
// console.log(op);

// switch (op) {
//     case 1:
//         h = prompt(`Que altura tiene el triangulo`);
//         b = prompt(`Que base tiene el triangulo`);
//         answer = b * h / 2;
//         console.log(answer);
//         alert(`El area del triangulo es: ${answer}`);
//         break;
//     case 2:
//         h = prompt(`Que altura del rectangulo`);
//         b = prompt(`Que base del rectangulo`);
//         answer = b * h;
//         console.log(answer);
//         alert(`El area del rectangulo es: ${answer}`);
//         break;
//     case 3:
//         r = prompt(`Que radio tiene el ciculo`);
//         answer = Math.PI * Math.pow(r, 2);
//         console.log(answer);
//         alert(`El area del triangulo es: ${answer}`);
//         break;
//     default:
//         break;
// }
// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
//     si el número es 5 el resultado será:
//         1 - es impar
//         2 - es par
//         3 - es impar
//         4 - es par
//         5 - es impar
// let num = parseInt(prompt('Introduce un numero'));
// for (let i = 0; i <= num; i++) {
//     if (i % 0) console.log(`${i} es par`)
//     else console.log(`${i} es impar`)
// }
// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
//     Un número primo es aquel que solo es divisible por sí mismo y la unidad
// let num = parseInt(prompt('Introduce un numero'));
// let div = 0
// if (num == 1) {
//     console.log(`el numero no es valido`)
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             console.log(`${num} no es primo`)
//             div++
//             break
//         }
//     }
// }
// if (div == 0) console.log(`${num} es primo`)
// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
//     El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
// let num = parseInt(prompt('Introduce un numero'));
// let result = 1;
// for (let i = num; i > 0; i--) {
//     console.log(i)
//     result *= i;

// }
// console.log(`el factorial de ${num} es ${result}`)