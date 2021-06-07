// class Persona {
//     constructor(nombre, apellido, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;

//         this.datos = (`Me llamo ${nombre}${apellido} y tengo ${edad} años`)
//     }
//     saludar() {
//         return (`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
//     }
// }
// const juan = new Persona('juan', 'garcia', 25)
// const marta = new Persona('marha', 'gomez', 55)
// console.log(juan.saludar())
// console.log(marta)

class Carro {
    constructor(marca, tipo, valor) {
        this.marca = marca
        this.tipo = tipo
        this.valor = valor

        this.datos = `El carro es de ${marca} es de tipo${tipo} y su valor es de: ${valor}`
    }
    mensaje() {
        return `El carro es de ${this.marca} es de tipo${this.tipo} y su valor es de: ${this.valor} ${this.datos} `
    }
}

const lambo = new Carro('Renoult', 'Carro', 1000)
console.log(lambo)
console.log(lambo.mensaje())