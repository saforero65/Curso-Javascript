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
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }
    get_autor() {
        return this.autor
    };
    get_genero() {
        return this.genero
    };
    mostar() {
        return `${this.titulo}${this.autor}${this.año}${this.genero}`;
    }
}
libros = new Array();
for (var i = 1; i <= 3; i++) {
    titulo_libro = prompt("Ingrese el titulo");
    autor_libro = prompt("Ingrese el autor");
    año_libro = prompt("Ingrese el año");
    genero_libro = prompt("Ingrese el genero").toLowerCase();


    if (
        titulo_libro != "" &&
        autor_libro != "" &&
        !isNaN(año_libro) &&
        año_libro.length == 4 &&
        (genero_libro == "aventura" ||
            genero_libro == "error" ||
            genero_libro == "fantasía")
    ) {
        const libro = new Libro(titulo_libro, autor_libro, año_libro, genero_libro);
        libros.push(libro);
    } else {
        i--
        console.log("error")
        console.log(titulo_libro, autor_libro, año_libro, genero_libro)
    }
}
const mostrar_libros = () => {
    console.log(libros);
};
const mostar_autores = () => {
    let autores = []
    for (const book of libros) {
        autores.push(book.get_autor());
    }
    console.log(autores.sort())

};
const mostar_generos = () => {
    const genero = prompt('Introduce el género a buscar')


    for (const libro of libros) {
        if (libro.get_genero() == genero) {
            console.log(libro.mostar())
        }
    }
};



mostrar_libros()
mostar_autores()
mostar_generos()