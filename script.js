const inputCheck = document.querySelector('#night-mode')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const mode = inputCheck.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", mode)
})