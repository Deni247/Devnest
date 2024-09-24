const clockElement = document.createElement('span');
const clock = document.querySelector('.clock');

function updateClock() {
    const now = new Date();
    
    // Get the current time in HH:MM:SS format
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    // Display the time
    return `${hours}:${minutes}:${seconds}`;
}

function greetUser() { 
    const time = new Date().getHours();
    if (time < 12) {
        return 'Good morning,';
    }
    else if (time >= 12 && time <= 17) {
        return 'Good afternoon,';
    }
    else {
        return 'Good evening,';
    }
}

function initializeGreeting() {
    clockElement.innerHTML = `${greetUser()} how can we <a href="https://example.com">assist<img id="link" src="https://img.icons8.com/?size=100&id=60664&format=png&color=077bff"</img></a> you today? | ${updateClock()}`;
    
    clock.prepend(clockElement)
    
    link.style.backgroundColor = "unset";
    link.style.border = "unset";
}

setInterval(initializeGreeting, 1000);
