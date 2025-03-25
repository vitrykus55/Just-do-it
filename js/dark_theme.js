function dark_theme() {

    const mainButton = document.getElementById("dark-theme-button");
    const bodyElement = document.getElementById("body");


    mainButton.addEventListener("click", function () {
        body.classList.add("dark-theme");
    })
}
dark_theme();