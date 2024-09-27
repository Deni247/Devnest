document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header')
    const light = document.getElementById('light')
    const dark = document.getElementById('dark')
    const body = document.body

    dark.style.display = 'none'

    window.addEventListener('scroll', function () {
        if (this.scrollY > 20) {
            header.style.backdropFilter = 'blur(20px)'
            /**if (body.classList.contains('dark')) {
                //header.style.backgroundColor = 'inherit'
                header.style.backdropFilter = 'blur(10px)'
            }
            else {
                //header.style.backgroundColor = 'inherit'
                header.style.backdropFilter = 'blur(10px)'
            }**/
        }
        else {
            header.style.backdropFilter = 'unset'
            //header.style.backgroundColor = 'unset'
        }
    })

    light.addEventListener('click', function () {
        light.style.display = 'none'
        dark.style.display = 'block'
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark')
    })

    dark.addEventListener('click', function () {
        dark.style.display = 'none'
        light.style.display = 'block'
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light')
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
