let dark_mode = localStorage.getItem("dark_mode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark_mode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark_mode", null);
}

if(dark_mode === "active") enableDarkMode();

themeSwitch.addEventListener('click', () => {
    dark_mode = localStorage.getItem("dark_mode");
    dark_mode !== 'active' ? enableDarkMode() : disableDarkmode()

})