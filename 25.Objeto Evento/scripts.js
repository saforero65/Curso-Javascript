const form = document.getElementById("form");
const imput = document.getElementById("input");
const buttom = document.getElementById("buttom");
const link = document.getElementById("link");
// imput.addEventListener("keyup", (e) => {
//     console.log(e.target.accept);
// });

// addEventListener("click", (e) => {
//     console.log(e);
// });
// buttom.addEventListener("click", (e) => {
//     console.log(e);
// });

// const gallery = document.getElementById("gallery");
// gallery.addEventListener("click", (e) => {
//     console.log(e.target.classList.add("red"));
// });

link.addEventListener("click", (e) => {
    e.preventDefault();
    buttom.click();
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e, "el formulario se a enviado");
});
buttom.addEventListener("click", (e) => {
    imput.value = "Has hecho click";
});