// Function to display clock some where on the home page.
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    
    // Get the current time in HH:MM:SS format
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Display the time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}


//This is an idea for future use.
function changeBackgroundColor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
//setInterval(updateClock, 1000);
