const buttons = document.querySelector('.window button')
const windows = document.querySelector('.windowBox')
const exit = document.querySelector('a')

buttons.addEventListener('click', () => {
    windows.style.display = 'flex'
})

exit.addEventListener('click', () => {
    windows.style.display = 'none'
})
