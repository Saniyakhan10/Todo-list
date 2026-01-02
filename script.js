function addtask() {
    let input = document.getElementById("input");
    let p = document.createElement("p");
    p.innerText = input.value;
    let taskbox = document.getElementById("taskbox");
    taskbox.appendChild(p);
    input.value = " ";

}

function removeTask() {
    let remove = document.getElementById("taskbox");
    taskbox.innerHTML = " ";
}