document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header')
    const light = document.getElementById('light')
    const dark = document.getElementById('dark')
    const body = document.body

    window.addEventListener('scroll', function () {
        if (this.scrollY) {
            header.style.backdropFilter = 'blur(20px)'
        }
        else {
            header.style.backdropFilter = 'unset'
        }
    })
    dark.style.display = 'none'

    light.addEventListener('click', function () {
        light.style.display = 'none'
        dark.style.display = 'block'
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light')
        
    })

    dark.addEventListener('click', function (){
        dark.style.display = 'none'
        light.style.display = 'block'
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark')
    })

//This function helps to keep the theme consistent across all the pages. also it keeps user theme preference for future reference.
    function applySavedTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            dark.style.display = 'none'
            light.style.display = 'block'
            body.classList.add('dark')
        } else {
            
            light.style.display = 'none'
            dark.style.display = 'block'
            body.classList.remove('dark')
        }
    }
    applySavedTheme();
})
