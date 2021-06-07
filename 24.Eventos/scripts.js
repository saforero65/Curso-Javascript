const button = document.getElementById("button");
const box = document.getElementById("box");
const input = document.getElementById("input");
// button.addEventListener("click", () => {
//     console.log("click");
// });

// button.addEventListener("dblclick", () => {
//     console.log("Doble CLick");
// });

// box.addEventListener("mouseenter", () => {
//     box.classList.replace("red", "green");
// });
// box.addEventListener("mouseleave", () => {
//     box.classList.replace("green", "red");
// });

// box.addEventListener("mousedown", () => {
//     console.log("Has pulsado la caja");
// });
// box.addEventListener("mouseup", () => {
//     console.log("Has soltado el boton  ");
// });

// box.addEventListener("mousemove", () => {
//     console.log("estas moviendo el raton en la caja");
// });
input.addEventListener("keydown", () => {
    console.log("Has pulsado una tecla");
});
input.addEventListener("keyup", () => {
    console.log("Has saltado una tecla");
});
input.addEventListener("keypress", () => {
    console.log("Estas pulsando una tecla");
});