"use strict";

let btn = document.querySelector(".todo__btn");
let input = document.querySelector("input");
let list = document.querySelector("ol");
let item = document.querySelector(".todo__item");
let error = document.querySelector(".error__message");

input.addEventListener("click", () => (error.style.cssText = "display: none"));

function addTask() {
  if (input.value === "") {
    error.style.cssText = "display: block";
    return;
  }

  let listItem = document.createElement("li");
  list.append(listItem);
  listItem.className = "todo__item";
  listItem.innerHTML = input.value;
  input.value = "";
}

btn.addEventListener("click", addTask);

list.addEventListener("click", function(ev) {
  if (ev.target.classList.contains("todo__item")) {
    ev.target.classList.toggle("todo__done");
  }
});
