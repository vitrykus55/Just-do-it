function addTask() {

    const sendData = document.getElementById("send-data");
    let taskCollection = document.getElementById('collection');

    if (!sendData || !taskCollection) {
        console.warn('Data is missing.');
        return;
    }

    sendData.addEventListener("click", () => {
        const dataTask = document.getElementById("task").value.trim();

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
                <img src="svg/check.svg" alt="img">
                <img src="svg/trash.svg" alt="img">
            </div>
        `;

        taskCollection.appendChild(newTask);

        document.getElementById("task").value = "";

    });

}

addTask()
