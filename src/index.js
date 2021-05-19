import './styles.css'
import {createStore} from "./createStore";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const body = document.querySelector('body')

const store = createStore()

addBtn.addEventListener('click', () => {

})

subBtn.addEventListener('click', () => {

})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
})
