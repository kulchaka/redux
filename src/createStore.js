export function createStore(rootReducer) {
    let state = {}
    const subscribers = []
    return {
        //action === {type: 'INCREMENT'}
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState() {
            return state
        }
    }
}
