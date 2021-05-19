export function createStore() {
    const state = {}
    const subscribers = []
    return {
        dispatch() {
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}
