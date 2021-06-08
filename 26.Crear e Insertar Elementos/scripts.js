const days = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
    "Otro",
];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");

// const itemList = document.createElement("LI");
// itemList.textContent = "Lunes";

title.innerHTML = "DOM - <span>Crear e insertar elementos I</span>";

const fragment = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();

// daysList.appendChild(itemList);
// console.log(itemList);
for (const day of days) {
    // console.log(day);
    // // itemList.textContent = "Lunes";
    // daysList.innerHTML += `<li>${day}</li>`;
    const itemList = document.createElement("LI");
    const selectItem = document.createElement("option");
    selectItem.setAttribute("value", day.toLowerCase());
    selectItem.textContent = day;
    itemList.textContent = day;
    fragment.appendChild(itemList);
    fragment2.appendChild(selectItem);
}

selectDays.appendChild(fragment2);
daysList.appendChild(fragment);