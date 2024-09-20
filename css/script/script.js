// Function to display clock some where on the home page.
function updateClock() {
    const clockElement = document.getElementById('clock');
    const date = new Date();
    const formattedTime = date.toLocaleString();
    clockElement.textContent = formattedTime;
}

//This is an idea for future use.
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
//setInterval(updateClock, 1000);
