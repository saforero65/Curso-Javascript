const list = document.getElementById("list");
const newElement = document.createElement("li");
newElement.textContent = "I'm a new element";

// list.insertBefore(newElement, list.children[1]);

// list.children[0].insertAdjacentElement("beforebegin", newElement);
// list.insertAdjacentElement("afterbegin", newElement);
// list.insertAdjacentElement("beforeend", newElement);
// list.children[0].insertAdjacentElement("afterend", newElement);

// list.insertAdjacentHTML("afterbegin", "<li>Elemento con HTML</li>");
// list.children[1].insertAdjacentText("afterbegin", "<li>Elemento con HTML</li>");

// list.replaceChild(newElement, list.children[1]);
// list.children[0].before(newElement);
// list.prepend(newElement);
// list.append(newElement);
// list.children[1].after(newElement);
// list.children[1].replaceWith(newElement);
// document.getElementById("child-to-replace").replaceWith(newElement);

// list.after(list.cloneNode(true));

// list.remove();
list.removeChild(list.children[1]);
