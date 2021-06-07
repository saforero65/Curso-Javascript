// const numbers = [-12, 2, 3, 23, 43, 2, 3]
// console.log(...numbers)

// Enviear elementos en un array a una funcion
// const addNUmbers = (a, b, c) => {
//     console.log(a + b + c)
// }
// let numbersToAdd = [1, 2, 3]
// addNUmbers(...numbersToAdd)

// Añadir un array a otro array
// let users = ["javier", "david", "rosa", "juan", "mercides"]
// let newUsers = ["marta", "santiago", "juan"]

// users.push(...newUsers)
// console.log(users)

// Copiar Array
// let arr1 = [1, 2, 3, 4]
// let arr2 = [...arr1]
// console.log(arr2)

// COncatenar Array
// let arr1 = [1, 2, 3, 4]
// let arr2 = [6, 7, 8]
//     // let arrConcat = arr1.concat(arr2)
// let arrConcat = [...arr1, ...arr2]
// console.log(arrConcat)

// PARAMETROS REST
// const restParms = (...numbers) => {
//     console.log(numbers)
// }
// restParms(1, 2, 3, 4, 5, 6, 7, 8, 9)

// LIBRERIA Math
let arr1 = [1, 2, 3, 2, 3, 4]
console.log(Math.max(...arr1))
console.log(Math.min(...arr1))

// Eliminar elmentos duplicados
console.log([...new Set(arr1)])