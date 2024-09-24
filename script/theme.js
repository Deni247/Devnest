document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.getElementById('navigation')
    const light = document.getElementById('light')
    const dark = document.getElementById('dark')
    const body = document.body

    dark.style.display = 'none'

    window.addEventListener('scroll', function () {
        if (this.scrollY > 40) {
            if (body.classList.contains('dark')) {
                header.style.backgroundColor = 'inherit'
            }
            else {
                header.style.backgroundColor = 'inherit'
            }
        }
        else {
            header.style.backgroundColor = 'unset'
        }
    })

    light.addEventListener('click', function () {
        light.style.display = 'none'
        dark.style.display = 'block'
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    })

    dark.addEventListener('click', function () {
        dark.style.display = 'none'
        light.style.display = 'block'
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    })

    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            dark.style.display = 'none'
            light.style.display = 'block'
            body.classList.add('dark');
        } else {
            light.style.display = 'none'
            dark.style.display = 'block'
            body.classList.remove('dark');
        }
    }
    //applySavedTheme();
    

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
})
