/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/
let numbers = [56, 86, 165, 46, 84165, 6146, 56]
for (let i = 0; i < numbers.length; i++) {
    console.log(`i vale ${i} y el valor del array en esa posicion es ${numbers[i]}`);
}