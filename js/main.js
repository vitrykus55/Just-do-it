function addTask() {
    const taskCollection = document.getElementById('collection');
    const taskInput = document.getElementById('task');

    if (!taskInput || !taskCollection) {
        console.warn('Data is missing.');
        return;
    }
    const dataTask = taskInput.value.trim();
    if (!dataTask) {
        console.warn('Data is missing.');
        return;
    }


    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `
    <div class="text-to-do">
        <span>${dataTask}</span>
    </div>
    <div class="main-buttom">
        <img src="svg/check.svg" alt="img" data-target="accept">
        <img src="svg/trash.svg" alt="img" data-target="delete">
    </div>
    `;


    taskCollection.appendChild(newTask);
    document.getElementById("task").value = "";

}

function wholeElement() {
    const taskCollection = document.getElementById('collection');

    taskCollection.addEventListener("click", (event) => {
        const target = event.target.dataset.target;

        if (target === 'accept') {
            console.log("Accepted Task");
            event.target.closest(".task").classList.add("completed");
        } else if (target === 'delete') {
            console.log("Deleted Task");
            event.target.closest(".task").remove();
        }
    });
}


function startTask() {
    document.getElementById('send-data').addEventListener('click', addTask);
    wholeElement();
}


startTask();