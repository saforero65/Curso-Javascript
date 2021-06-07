const button = document.getElementById("button");
const box = document.getElementById("box");
// button.addEventListener("click", () => {
//     console.log("click");
// });

// button.addEventListener("dblclick", () => {
//     console.log("Doble CLick");
// });

box.addEventListener("mouseenter", () => {
    box.classList.add("green");
});
box.addEventListener("mouseleave", () => {
    box.classList.add("red");
});