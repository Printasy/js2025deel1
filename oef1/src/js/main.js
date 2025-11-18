// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

let list = [""];
let count = 0;
const voegOefToe = () => {
    const ex1_ex = document.getElementById("ex1_ex").value.trim();
    const ex1_min = parseInt(document.getElementById("ex1_min").value.trim());
    const ex1_total = document.getElementById("ex1_total");
    const ex1_list = document.getElementById("ex1_list");
    const ex1_feedbck = document.getElementById("ex1_feedback");

    if (!ex1_ex || !ex1_min || ex1_min < 1) {
        ex1_feedback.textContent = "Foute ingave ! Geef een geldige oefeningtekst & tijd in";
        ex1_feedback.className = "alert alert-warning"
    } else {
        list.push(ex1_ex, ex1_min);
        count = count + ex1_min;
        list.innerHTML = list.map((oef,tijd) => `<li class="list-group-item"><div class="d-flex justify-content-between me-3"><div>${oef}</div><div>${tijd}(</div></li>`).join("");
    }
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex1_btn")
        ?.addEventListener("click", voegOefToe);
});


// let taskList = [];
// function makeTaskList(todo_list) {
//     return todo_list.map(todo => `<li class="list-group-item"><div class="d-flex justify-content-between me-3"><div>${todo}</div><button type="button" class="btn btn-danger ">X</button></div></li>
// `).join("");
// }
//
// function makeBadge(waarde){
//     return `<span class="badge text-bg-secondary fs-6 "> Aantal taken : ${waarde}</span>`
// }
//
// function voegTaakToe() {
//
//     const todo_input = document.getElementById("todo_input");
//     const todo_count = document.getElementById("todo_count");
//     const todo_list = document.getElementById("todo_list");
//     let task = todo_input.value.trim();
//
//     let taskCounter = 0;
//     if (!task){
//         alert("Voer een taak in")
//         return;
//     } else {
//         taskList.push(task);
//         taskCounter = taskList.length;
//         todo_list.innerHTML = makeTaskList(taskList);
//         todo_count.innerHTML = makeBadge(taskCounter);
//     }
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("todo_btn")
//         ?.addEventListener("click", voegTaakToe);
// });