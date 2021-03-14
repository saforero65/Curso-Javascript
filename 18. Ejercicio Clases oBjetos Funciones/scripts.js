/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/
class Libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.genero = genero
    }
    getAutor() {
        return this.autor
    }
    getGenero() {
        return this.genero
    }
    print() {
        return `Titulo: ${titulo}\nAutor: ${autor}\nAño: ${año}\nGenero: ${genero}\n`
    }
}
let libros = []
while (libros.length < 3) {
    let titulo = prompt(`introduce el titulo del librro`)
    let autor = prompt(`introduce el autor del librro`)
    let año = prompt(`introduce el año del librro`)
    let genero = prompt(`introduce el genero del librro`).toLowerCase()
    if (titulo != '' && autor != '' && !isNaN(año) && año.length == 4 && (genero == 'aventura' || genero == 'terror' || genero == 'fantasia')) {
        libros.push(new Libro(titulo, autor, año, genero))
    }
}
const showbooks = () => {

    console.log(libros)

}
const showActor = () => {
    let autores = []

    for (const libro of libros) {
        autores.push(libro.getAutor())
            // console.log(libro.autor)
            // console.log(libro.getAutor())
    }
    console.log(autores.sort())
        // console.log(object)
}
const showGenero = () => {
        const genero = prompt(`introudce el genero a buscar`)
        for (const libro of libros) {
            if (libro.getGenero() == genero) {
                console.log(libro.print())
            }
        }
    }
    // showbooks();
    // showActor()
showGenero();