import {ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disableBtn() {
    return {
        type: DISABLE_BTN
    }
}

export function enableBtn() {
    return {
        type: ENABLE_BTN
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableBtn())
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT})
            dispatch(enableBtn())
        }, 2000)

    }
}

