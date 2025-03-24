function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').innerHTML = `<span class="time-setup">${day}/${month}/${year}, ${hours}:${minutes}</span>`;
}

setInterval(updateClock, 10000);
updateClock();


