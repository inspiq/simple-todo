const inputField = document.querySelector("#input");
const btnAdd = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  if (input.value === "") return;
  createDeleteElements(input.value);

  input.value = "";
});

function createDeleteElements(value) {
  const li = document.createElement("li");
  const btnDelete = document.createElement("button");
  const icon = document.createElement("i");

  li.className = "content__item";
  li.textContent = value;
  btnDelete.className = "btn-delete";
  icon.className = "bx bx-minus";

  btnDelete.addEventListener("click", (e) => {
    result.removeChild(li);
  });

  result.appendChild(li);
  li.appendChild(btnDelete);
  btnDelete.appendChild(icon);
}