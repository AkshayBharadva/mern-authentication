export default {
    setErrors: (state, action) => {
        Object.assign(state, action.payload)
    }
}