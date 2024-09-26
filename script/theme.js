document.addEventListener('DOMContentLoaded', function () {
    const navigation = document.getElementById('navigation')
    
    //A query to select the dark and light theme elements
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
        applySavedTheme();
    })

    dark.addEventListener('click', function () {
        dark.style.display = 'none'
        light.style.display = 'block'
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        applySavedTheme();
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
    
    
})
