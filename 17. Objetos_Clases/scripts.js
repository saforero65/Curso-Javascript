class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = (`Me llamo ${nombre}${apellido} y tengo ${edad} años`)
    }
    saludar() {
        return (`Hola me llamo ${this.nombre} y tengo ${this.edad}`)
    }
}
const juan = new Persona('juan', 'garcia', 25)
const marta = new Persona('marha', 'gomez', 55)
console.log(juan)
console.log(marta)