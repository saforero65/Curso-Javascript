// // function saludar() {
// //     console.log("Hola")
// // }
// const saludar = () => console.log("Hola")
// const saludar_usuario = (user) => console.log(`Hola ${user}`)
// nombre_usuario = 'Santiago'
// saludar_usuario(nombre_usuario)
// saludar_usuario("nombre_usuario")
// saludar()
// saludar()
// saludar()

const suma = (num1, num2) => num1 + num2

const suma_2 = (num1, num2) => {
    if (num1 == 2) {
        return num1 + num2
    }
    return "num1 no es 2"
}
console.log(suma_2(2, 3))