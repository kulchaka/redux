import './styles.css'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, decrement, increment} from "./redux/actions";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');
const body = document.querySelector('body')

const store = createStore(rootReducer, 0, applyMiddleware(thunk, logger))

window.store = store

addBtn.addEventListener('click', () => {
 store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
 store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
 store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: 'NULL'})
