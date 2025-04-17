const buttons = document.querySelector('.window button')
const windows = document.querySelector('.windowBox')
const exit = document.querySelector('a')

exit, buttons.addEventListener('click', () => {
    windows.style.display = 'flex'
})