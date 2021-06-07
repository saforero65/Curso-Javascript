const person = {
    name: "Juan",
    age: 26,
    sons: ["Laura", "Diego", "rosa", "tomas", "pepe"],
};
// console.log(person)
// console.log(person['name'])
// for (const key in person) {
//     console.log(person[key])
// }

// for (const son of person.sons) {
//     console.log(son);
// }
console.log(
    `Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(", ")}`
);