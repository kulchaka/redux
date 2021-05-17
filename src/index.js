import './styles.css'

const count = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const body = document.querySelector('body')

let state = 0

function render() {
    count.textContent = state.toString()
}

addBtn.addEventListener('click', () => {
    state++
    render()
})

subBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state += 100
        render()
    }, 2000)
})

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
})

render()
