let myForm = document.getElementById("formId");
let myField = document.getElementById("myField");
let myTodoList = document.getElementById("myTodoList");

myForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    // console.log(myField.value);
    addTodoItem(myField.value);
});

function addTodoItem(todo) {
    let myHTML = `<li>${todo} <button onclick="removeTodo(this)">Delete</button></li>`;
    myTodoList.insertAdjacentHTML("beforeend", myHTML);
    myField.value = "";
    myField.focus();
}

function removeTodo(todo) {
    todo.parentElement.remove();
}